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
    id: process.env.GTM_ID || 'GTM-KLQB72K',
    scriptDefer: true,
    pageTracking: true,
    // layer: 'test',
    variables: {
      test: '1'
    }
  }
}
