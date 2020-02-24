# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.1](https://github.com/nuxt-community/gtm-module/compare/v2.2.0...v2.2.1) (2020-02-24)

## [2.2.0](https://github.com/nuxt-community/gtm-module/compare/v2.1.1...v2.2.0) (2020-02-23)


### Features

* enable noscript by default ([f511404](https://github.com/nuxt-community/gtm-module/commit/f511404d2a46d082e4f730daeb618543692d748d))
* push page title to dataLayer ([#8](https://github.com/nuxt-community/gtm-module/issues/8)) ([9434562](https://github.com/nuxt-community/gtm-module/commit/943456256c5eba9ec0104ca5a9b2f8aee31f66ea))
* ssr iframe injection ([d678f16](https://github.com/nuxt-community/gtm-module/commit/d678f16d46343e54ba788d0e13399d3b3c2234f7))
* ssr support ([d896618](https://github.com/nuxt-community/gtm-module/commit/d896618ef23b4a6fbc723133d3b6b7266f67aad5))


### Bug Fixes

* add id to noscript iframe ([b345db7](https://github.com/nuxt-community/gtm-module/commit/b345db7deddf2fe2e11e5ee2925deda51c739b95))
* call startPageTracking on client only ([774fccf](https://github.com/nuxt-community/gtm-module/commit/774fccffd8c9712229c9c4d90512f88546fe5ce4))
* pageTitle is not available on SSR ([228d796](https://github.com/nuxt-community/gtm-module/commit/228d796c8b3c982520c26c296e9a2af937f90e28))

### [2.1.1](https://github.com/nuxt-community/gtm-module/compare/v2.1.0...v2.1.1) (2020-02-11)


### Bug Fixes

* prevent calling init with initial id when autoInit enabled ([24744a5](https://github.com/nuxt-community/gtm-module/commit/24744a50e95b48ec1f16f02f8ba652e5415123f1))

## [2.1.0](https://github.com/nuxt-community/gtm-module/compare/v2.0.1...v2.1.0) (2020-02-11)


### Features

* allow manually init with multiple ids (closes [#1](https://github.com/nuxt-community/gtm-module/issues/1), [#4](https://github.com/nuxt-community/gtm-module/issues/4), [#5](https://github.com/nuxt-community/gtm-module/issues/5)) ([accfa77](https://github.com/nuxt-community/gtm-module/commit/accfa77f92fa918412b19742ca13dbeedddef732))

### [2.0.1](https://github.com/nuxt-community/gtm-module/compare/v2.0.0...v2.0.1) (2020-02-10)


### Bug Fixes

* guard against double script executation ([#3](https://github.com/nuxt-community/gtm-module/issues/3)) ([970e0e6](https://github.com/nuxt-community/gtm-module/commit/970e0e6965d1f1d3fce1d5c6bc47576d3a9079a9))

## 2.0.0 (2020-02-09)


### Features

* initial commit for v2 ([aeba6da](///commit/aeba6dadb82ad5035a32a3fca414046600baad3d))

## [2.3.1](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.3.0...@nuxtjs/google-tag-manager@2.3.1) (2019-11-01)


### Bug Fixes

* **google-tag-manager:** fixed noscript content sanitization ([#322](https://github.com/nuxt-community/modules/issues/322)) ([7531faf](https://github.com/nuxt-community/modules/commit/7531faf))





# [2.3.0](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.2.1...@nuxtjs/google-tag-manager@2.3.0) (2019-10-07)


### Features

* **google-tag-manager:** add `<noscript>` fallback ([#263](https://github.com/nuxt-community/modules/issues/263)) ([#300](https://github.com/nuxt-community/modules/issues/300)) ([f0dd65f](https://github.com/nuxt-community/modules/commit/f0dd65f))
* **google-tag-manager:** add pageViewEventName option ([#314](https://github.com/nuxt-community/modules/issues/314)) ([f718a6a](https://github.com/nuxt-community/modules/commit/f718a6a))





## [2.2.1](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.2.0...@nuxtjs/google-tag-manager@2.2.1) (2019-07-13)


### Bug Fixes

* **google-tag-manager:** fix respectDoNotTrack ([#295](https://github.com/nuxt-community/modules/issues/295)) ([56cb078](https://github.com/nuxt-community/modules/commit/56cb078))





# [2.2.0](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.1.4...@nuxtjs/google-tag-manager@2.2.0) (2019-04-15)


### Features

* **google-tag-manager:** refactor, `dev` option and `$gtm.pushEvent` ([#274](https://github.com/nuxt-community/modules/issues/274)) ([d0ba40f](https://github.com/nuxt-community/modules/commit/d0ba40f))





## [2.1.4](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.1.3...@nuxtjs/google-tag-manager@2.1.4) (2019-02-12)


### Bug Fixes

* **google-tag-manager:** fix broken syntax ([#262](https://github.com/nuxt-community/modules/issues/262)) ([0e9e552](https://github.com/nuxt-community/modules/commit/0e9e552))





## [2.1.3](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.1.2...@nuxtjs/google-tag-manager@2.1.3) (2019-02-12)

**Note:** Version bump only for package @nuxtjs/google-tag-manager





## [2.1.2](https://github.com/nuxt-community/modules/compare/@nuxtjs/google-tag-manager@2.1.1...@nuxtjs/google-tag-manager@2.1.2) (2019-01-11)

**Note:** Version bump only for package @nuxtjs/google-tag-manager





<a name="2.1.1"></a>
## [2.1.1](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@2.1.0...@nuxtjs/google-tag-manager@2.1.1) (2018-12-19)


### Bug Fixes

* **google-tag-manager:** delay for route changing before send ([#221](https://github.com/nuxt/modules/issues/221)) ([a7e1634](https://github.com/nuxt/modules/commit/a7e1634))





<a name="2.1.0"></a>
# [2.1.0](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@2.0.0...@nuxtjs/google-tag-manager@2.1.0) (2018-10-01)


### Features

* **google-tag-manager:** Allow GTM ID to be function ([#219](https://github.com/nuxt/modules/issues/219)) ([e4bf538](https://github.com/nuxt/modules/commit/e4bf538))





<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@1.2.0...@nuxtjs/google-tag-manager@2.0.0) (2018-05-15)


### Features

* **google-tag-manager:** rework on options and customization ([50c1f27](https://github.com/nuxt/modules/commit/50c1f27))


### BREAKING CHANGES

* **google-tag-manager:** pageTracking is disabled by default




<a name="1.2.0"></a>
# [1.2.0](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@1.1.0...@nuxtjs/google-tag-manager@1.2.0) (2018-04-27)


### Features

* **gtm:** add dataLayer Event property ([#202](https://github.com/nuxt/modules/issues/202)) ([d22ae60](https://github.com/nuxt/modules/commit/d22ae60))




<a name="1.1.0"></a>
# [1.1.0](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@1.0.1...@nuxtjs/google-tag-manager@1.1.0) (2017-11-20)


### Features

* **google-tag-manager:** removed lodash dependency ([#160](https://github.com/nuxt/modules/issues/160)) ([3c5f674](https://github.com/nuxt/modules/commit/3c5f674))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@1.0.0...@nuxtjs/google-tag-manager@1.0.1) (2017-07-24)


### Bug Fixes

* **google-tag-manager:** default 'layer' should be set to 'dataLayer' (#82) ([1ed8b76](https://github.com/nuxt/modules/commit/1ed8b76))




<a name="0.0.5"></a>
## [0.0.5](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@0.0.4...@nuxtjs/google-tag-manager@0.0.5) (2017-06-06)




<a name="0.0.4"></a>
## [0.0.4](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@0.0.3...@nuxtjs/google-tag-manager@0.0.4) (2017-06-02)




<a name="0.0.3"></a>
## [0.0.3](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@0.0.2...@nuxtjs/google-tag-manager@0.0.3) (2017-05-31)




<a name="0.0.2"></a>
## [0.0.2](https://github.com/nuxt/modules/compare/@nuxtjs/google-tag-manager@0.0.1...@nuxtjs/google-tag-manager@0.0.2) (2017-05-30)




<a name="0.0.1"></a>
## 0.0.1 (2017-05-29)
