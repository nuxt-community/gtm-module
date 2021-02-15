const path = require('path')
const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')
const defaultSettings = require(path.join(__dirname, '../', 'lib', 'defaults.js'))

function expectPageTrackingEvent (eventsArray, expectedEvent) {
  return new Promise((resolve) => {
    // Need to wait at least 250ms as that's how long plugin delays before triggering event.
    setTimeout(() => {
      expect(eventsArray).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining(expectedEvent)
        ])
      )
      expect(eventsArray.filter(event => event.event === 'nuxtRoute').length).toBe(1)
      resolve()
    }, 300)
  })
}

const modes = ['universal', 'spa']

for (const mode of modes) {
  describe(`Module (${mode} mode)`, () => {
    let nuxt

    const nuxtConfig = loadConfig(__dirname, '../../example')
    nuxtConfig.mode = mode

    const gtmId = nuxtConfig.gtm.id
    const runtimeId = nuxtConfig.publicRuntimeConfig.gtm.id
    const scriptId = nuxtConfig.gtm.scriptId || defaultSettings.scriptId
    const noscriptId = nuxtConfig.gtm.noscriptId || defaultSettings.noscriptId

    beforeAll(async () => {
      ({ nuxt } = (await setup(nuxtConfig)))
    }, 60000)

    afterAll(async () => {
      await nuxt.close()
    })

    test('Render', async () => {
      const html = await get('/')
      const expected = { universal: 'Works!', spa: 'Loading...' }[mode]
      expect(html).toContain(expected)
    })

    test('Has GTM script', async () => {
      const html = await get('/')
      expect(html).toContain(`data-hid="${scriptId}"`)
    })

    test('Has GTM noscript', async () => {
      const html = await get('/')
      expect(html).toContain(`data-hid="${noscriptId}"`)
    })

    // test with real GTM id
    test('GTM should be defined ($nuxt.$gtm)', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))
      expect(window.$nuxt.$gtm).toBeDefined()
    })

    test('Should include runtimeConfig', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))

      const headGtmScriptsExternal = window.document.querySelectorAll(`head script[src^="https://www.googletagmanager.com/gtag/js?id=${runtimeId}"]`)

      expect(headGtmScriptsExternal.length).toBe(1)
    })

    test('Verifying duplicate GTM script', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))

      const headGtmScriptsExternal = window.document.querySelectorAll(`head script[src^="https://www.googletagmanager.com/gtag/js?id=${gtmId}"]`)
      const headGtmScriptsHid = window.document.querySelectorAll(`head script[data-hid="${scriptId}"]`)
      const totalAmoutOfGtmScriptsAtHead = headGtmScriptsExternal.length + headGtmScriptsHid.length

      expect(totalAmoutOfGtmScriptsAtHead).toBeLessThan(4)
    })

    test('Should include pushed event', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))
      expect(window.dataLayer).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ event: 'ssr' })
        ])
      )
      expect(window.dataLayer.filter(event => event.event === 'ssr').length).toBe(1)
    })

    test('Should include page tracking event', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))

      await expectPageTrackingEvent(window.dataLayer, {
        event: 'nuxtRoute',
        pageTitle: '@nuxtjs/gtm-module',
        pageType: 'PageView',
        pageUrl: '/',
        routeName: 'index'
      })
    })
  })
}

for (const mode of modes) {
  describe(`Page tracking with router base (${mode} mode)`, () => {
    let nuxt

    const override = {
      gtm: {
        layer: 'testDataLayer',
        pageTracking: true
      }
    }

    const nuxtConfig = loadConfig(__dirname, '../../example', override, { merge: true })
    if (!nuxtConfig.router) {
      nuxtConfig.router = {}
    }
    nuxtConfig.router.base = '/base/'

    beforeAll(async () => {
      ({ nuxt } = (await setup(nuxtConfig)))
    }, 60000)

    afterAll(async () => {
      await nuxt.close()
    })

    test('Event should contain page URL with base', async () => {
      const window = await nuxt.renderAndGetWindow(url('/base/'))

      await expectPageTrackingEvent(window.testDataLayer, {
        event: 'nuxtRoute',
        pageTitle: '@nuxtjs/gtm-module',
        pageType: 'PageView',
        pageUrl: '/base/',
        routeName: 'index'
      })
    })
  })
}
