const { resolve } = require('path')

const env = process.env
const gtmId = env && env.GTM_ID ? env.GTM_ID : 'GTM-XXXXXXX'

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
    id: gtmId,
    scriptDefer: true,
    pageTracking: true,
    // layer: 'test',
    variables: {
      test: '1'
    }
  }
}