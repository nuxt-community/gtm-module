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
    },
    push(obj) {
      if (!window[_layer]) {
        window[_layer] = [{ 'gtm.start': new Date().getTime(), event: 'gtm.js' }]
      }
      window[_layer].push(obj)
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

    const gtmScript = ctx.app.head.script.find(s => s.hid = '<%= options.scriptId %>')
    if (inits.length) {
      gtmScript.innerHTML += `;${JSON.stringify(inits)}.forEach(function(i){window._gtm_inject(i)})`
    }
<% if (options.noscript) { %>
    const gtmIframe = ctx.app.head.noscript.find(s => s.hid = '<%= options.noscriptId %>')
    const renderIframe = id => `<%= options.renderIframe('${id}') %>`
    if (inits.length) {
      gtmIframe.innerHTML += inits.map(renderIframe)
    }
<% } %>
    if (events.length) {
      gtmScript.innerHTML += `;${JSON.stringify(events)}.forEach(function(e){window['${_layer}'].push(e)})`
    }
  })

  return {
    init(id = _id) {
      if (initialized[id]) {
        return
      }
      inits.push(id)
      initialized[id] = true
    },
    push(obj) {
      events.push(obj)
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
  const initialized = {<%= (options.autoInit && options.id) ? ` '${options.id}': true ` : '' %>}
  ctx.$gtm = process.client ? gtmClient(ctx, initialized) : gtmServer(ctx, initialized)
  inject('gtm', ctx.$gtm)
  <% if (options.pageTracking) { %>if (process.client) { startPageTracking(ctx); }<% } %>
}
