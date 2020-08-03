import { log } from './gtm.utils'

const _layer = '<%= options.layer %>'
const _id = '<%= options.id %>'

function gtmClient(ctx, initialized) {
  return {
    init(id = _id) {
      if (initialized[id] || !window._gtm_inject) {
        return
      }
      window._gtm_inject(id)
      initialized[id] = true
      log('init', id)
    },
    push(obj) {
      if (!window[_layer]) {
        window[_layer] = []
      }
      window[_layer].push(obj)
      log('push', obj)
    }
  }
}

function gtmServer(ctx, initialized) {
  const events = []
  const inits = []

  ctx.beforeNuxtRender(() => {
    if (!inits.length && !events.length) {
      return
    }

    const gtmScript = ctx.app.head.script.find(s => s.hid == '<%= options.scriptId %>')
    gtmScript.innerHTML = `window['${_layer}']=${JSON.stringify(events)};${gtmScript.innerHTML}`

    if (inits.length) {
      gtmScript.innerHTML += `;${JSON.stringify(inits)}.forEach(function(i){window._gtm_inject(i)})`
    }
<% if (options.noscript) { %>
    const gtmIframe = ctx.app.head.noscript.find(s => s.hid == '<%= options.noscriptId %>')
    const renderIframe = id => `<%= options.renderIframe('${id}') %>`
    if (inits.length) {
      gtmIframe.innerHTML += inits.map(renderIframe)
    }
<% } %>
  })

  return {
    init(id = _id) {
      if (initialized[id]) {
        return
      }
      inits.push(id)
      initialized[id] = true
      log('init', id)
    },
    push(obj) {
      events.push(obj)
      log('push', JSON.stringify(obj))
    }
  }
}

function startPageTracking(ctx) {
  ctx.app.router.afterEach((to) => {
    setTimeout(() => {
      ctx.$gtm.push(to.gtm || {
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: '<%= options.routerBase %>' + to.fullPath,
        pageTitle: (typeof document !== 'undefined' && document.title) || '',
        event: '<%= options.pageViewEventName %>'
      })
    }, 250)
  })
}

export default function (ctx, inject) {
  const runtimeConfig = (ctx.$config && ctx.$config.gtm) || {}
  const autoInit = <%= options.autoInit %>
  const id = '<%= options.id %>'
  const runtimeId = runtimeConfig.id
  const initialized = autoInit && id ? {[id]: true} : {}
  const $gtm = process.client ? gtmClient(ctx, initialized) : gtmServer(ctx, initialized)
  if (autoInit && runtimeId && runtimeId !== id) {
    $gtm.init(runtimeId)
  }
  ctx.$gtm = $gtm
  inject('gtm', ctx.$gtm)
  <% if (options.pageTracking) { %>if (process.client) { startPageTracking(ctx); }<% } %>
}
