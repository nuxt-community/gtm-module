export default function (ctx, inject) {
  const layer = '<%= options.layer %>'
  let initalized = false
  ctx.$gtm = {
    init() {
      if (!initalized && window.$initGTM) {
        window.$initGTM()
      }
      initalized = true
    },
    push(obj) {
      if (!window[layer]) {
        window[layer] = [{ 'gtm.start': new Date().getTime(), event: 'gtm.js' }]
      }
      window[layer].push(obj)
    }
  }
  inject('gtm', ctx.$gtm)

<% if (options.pageTracking) { %>
  ctx.app.router.afterEach((to) => {
    setImmediate(() => {
      ctx.$gtm.push(to.gtm || {
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: to.fullPath,
        event: '<%= options.pageViewEventName %>'
      })
    })
  })
<% } %>
}
