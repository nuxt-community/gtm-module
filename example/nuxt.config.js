const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') }
  ],
  gtm: {
    id: 'GTM-56H68LH',
    autoInit: true,
    scriptDefer: true,
    pageTracking: true,
    noscript: true,
    // layer: 'test',
    variables: {
      test: '1'
    }
  }
}
