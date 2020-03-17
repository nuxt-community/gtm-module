const path = require('path')
const defaults = require('./defaults')

// doNotTrack polyfill
// https://gist.github.com/pi0/a76fd97c4ea259c89f728a4a8ebca741
const dnt = "(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e].p&&e[e][p]()))?1:0})(window,'navigator','doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled')"

module.exports = async function gtmModule (_options) {
  const options = {
    ...defaults,
    ..._options,
    ...this.options.gtm
  }

  // Don't include when run in dev mode unless dev: true is configured
  if (this.options.dev && !options.dev) {
    return
  }

  // Async id evaluation
  if (typeof (options.id) === 'function') {
    options.id = await options.id()
  }

  // Build query
  const query = {
    // Default is dataLayer for google
    l: options.layer !== 'dataLayer' ? options.layer : null,
    ...options.variables
  }
  const queryString = Object.keys(query)
    .filter(key => query[key] !== null && query[key] !== undefined)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
    .join('&')

  // Compile scripts
  const initLayer = "w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'})" // deps: w,l

  const injectScript = `var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.${options.scriptDefer ? 'defer' : 'async'}=true;j.src='${options.scriptURL + '?id=\'+i' + (queryString ? (`+'&${queryString}` + '\'') : '')};f.parentNode.insertBefore(j,f)` // deps: d,s,i

  let script = `${initLayer};w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;${injectScript};}`

  if (options.autoInit && options.id) {
    script += `;w[y]('${options.id}')`
  }

  // Add doNotTrack polyfill and wrap to IIFE
  script = `${dnt};(function(w,d,s,l,x,y){${script}})(window,document,'script','${options.layer}','_gtm_ids','_gtm_inject')`

  // Guard against double IIFE executation in SPA mode (#3)
  script = `if(!window._gtm_init){window._gtm_init=1;${script}}`

  // Add google tag manager <script> to head
  if (typeof this.options.head === 'function') {
    // eslint-disable-next-line no-console
    console.warn('[@nuxtjs/gtm] head is provided as a function which is not supported by this module at the moment. Removing user-provided head.')
    this.options.head = {}
  }
  this.options.head.script = this.options.head.script || []
  this.options.head.script.push({
    hid: options.scriptId,
    innerHTML: script
  })

  // Prepend google tag manager <noscript> fallback to <body>
  const renderIframe = id => `<iframe src="${options.noscriptURL + '?id=' + id + '&' + queryString}" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>`
  if (options.noscript) {
    this.options.head.noscript = this.options.head.noscript || []
    this.options.head.noscript.push({
      hid: options.noscriptId,
      pbody: true,
      innerHTML: options.id ? renderIframe(options.id) : '' /* placeholder for SSR calls */
    })
  }

  // Disable sanitazions
  this.options.head.__dangerouslyDisableSanitizersByTagID = this.options.head.__dangerouslyDisableSanitizersByTagID || {}
  this.options.head.__dangerouslyDisableSanitizersByTagID[options.scriptId] = ['innerHTML']
  this.options.head.__dangerouslyDisableSanitizersByTagID[options.noscriptId] = ['innerHTML']

  // Remove trailing slash to avoid duplicate slashes when appending route path
  const routerBase = this.options.router.base.replace(/\/+$/, '')

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'gtm.js',
    options: {
      ...options,
      renderIframe,
      routerBase
    }
  })
}

module.exports.meta = require('../package.json')
