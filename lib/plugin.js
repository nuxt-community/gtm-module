export default function (ctx, inject) {
  const layer = '<%= options.layer %>'
  const initialized = {}
  ctx.$gtm = {
    init(id<%= options.id ? ` = '${options.id}'` : '' %>) {
      if (initialized[id] || !window._gtm_inject) {
        return
      }
      window._gtm_inject(id)
      initialized[id] = true
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
