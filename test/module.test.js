const path = require('path')
const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')
const { defaultSettings } = require(path.join(__dirname, '../', 'lib', 'module.js'))

describe('Module (universal mode)', () => {
  let nuxt

  const nuxtConfig = loadConfig(__dirname, '../../example')
  nuxtConfig.mode = 'universal'

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
    expect(html).toContain('Works!')
  })

  test('Has GTM script', async () => {
    const html = await get('/')
    expect(html).toContain(`data-hid="${scriptId}"`)
  })

  test('Hasn\'t GTM noscript', async () => {
    const html = await get('/')
    expect(html).not.toContain(`data-hid="${noscriptId}"`)
  })

  // test with real GTM id
  const gtmId = nuxtConfig.gtm.id
  if (gtmId !== 'GTM-XXXXXXX') {
    test('GTM should be defined ($nuxt.$gtm)', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))
      expect(window.$nuxt.$gtm).toBeDefined()
    })

    test('Verifying duplicate GTM script', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))

      const headGtmScriptsExternal = window.document.querySelectorAll(`head script[src="https://www.googletagmanager.com/gtm.js?id=${gtmId}"]`)
      const headGtmScriptsHid = window.document.querySelectorAll(`head script[data-hid="${scriptId}"]`)
      const totalAmoutOfGtmScriptsAtHead = headGtmScriptsExternal.length + headGtmScriptsHid.length

      expect(totalAmoutOfGtmScriptsAtHead).toBeLessThan(3)
    })
  }
})

describe('Module (spa mode)', () => {
  let nuxt

  const nuxtConfig = loadConfig(__dirname, '../../example')
  nuxtConfig.mode = 'spa'

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
    expect(html).toContain('Loading...')
  })

  test('Has GTM script', async () => {
    const html = await get('/')
    expect(html).toContain(`data-hid="${scriptId}"`)
  })

  test('Hasn\'t GTM noscript', async () => {
    const html = await get('/')
    expect(html).not.toContain(`data-hid="${noscriptId}"`)
  })

  // test with real GTM id
  const gtmId = nuxtConfig.gtm.id
  if (gtmId !== 'GTM-XXXXXXX') {
    test('GTM should be defined ($nuxt.$gtm)', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))
      expect(window.$nuxt.$gtm).toBeDefined()
    })

    test('Verifying duplicate GTM script', async () => {
      const window = await nuxt.renderAndGetWindow(url('/'))

      const headGtmScriptsExternal = window.document.querySelectorAll(`head script[src="https://www.googletagmanager.com/gtm.js?id=${gtmId}"]`)
      const headGtmScriptsHid = window.document.querySelectorAll(`head script[data-hid="${scriptId}"]`)
      const totalAmoutOfGtmScriptsAtHead = headGtmScriptsExternal.length + headGtmScriptsHid.length

      expect(totalAmoutOfGtmScriptsAtHead).toBeLessThan(3)
    })
  }
})
