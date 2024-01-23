const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  head: {
    title: '@nuxtjs/gtm-module'
  },
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') }
  ],
  plugins: [
    '~/plugins/gtm'
  ],
  gtm: {
    id: process.env.GTM_ID || 'GTM-KLQB72K',
    scriptDefer: true,
    scriptFetchpriority: 'auto',
    pageTracking: true,
    // layer: 'test',
    variables: {
      test: '1'
    }
  },
  publicRuntimeConfig: {
    gtm: {
      id: 'GTM-KLQB72K&runtime'
    }
  }
}
