// This is a mock version because gtm module is disabled
// You can explicitly enable module using `gtm.enabled: true` in nuxt.config

const _layer = '<%= options.layer %>'
const _id = '<%= options.id %>'

function startPageTracking (ctx) {
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
  // eslint-disable-next-line no-console
  const logSyle = 'background: #2E495E;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;'
  const log = (...args) => console.log('%cGTM', logSyle, ...args)

  const gtm = {
    init: (id) => {
      log('init', id)
    },
    push: (event) => {
      log('push', process.client ? event : JSON.stringify(event))
    }
  }

  ctx.$gtm = gtm
  inject('gtm', gtm)
  <% if (options.pageTracking) { %>if (process.client) { startPageTracking(ctx); }<% } %>
}
