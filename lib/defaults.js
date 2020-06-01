const defaults = {
  enabled: undefined,

  id: undefined,
  layer: 'dataLayer',
  variables: {},

  pageTracking: false,
  pageViewEventName: 'nuxtRoute',

  autoInit: true,
  respectDoNotTrack: true,

  scriptId: 'gtm-script',
  scriptDefer: false,
  scriptURL: 'https://www.googletagmanager.com/gtm.js',

  noscript: true,
  noscriptId: 'gtm-noscript',
  noscriptURL: 'https://www.googletagmanager.com/ns.html'
}

module.exports = defaults
