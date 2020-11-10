# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.4.0](https://github.com/nuxt-community/gtm-module/compare/v2.3.2...v2.4.0) (2020-11-10)


### Features

* support `crossOrigin` option ([#78](https://github.com/nuxt-community/gtm-module/issues/78)) ([e843176](https://github.com/nuxt-community/gtm-module/commit/e8431767b72e63d67968d811fe5919011b441f57))
* **module:** add support for runtimeConfig ([#53](https://github.com/nuxt-community/gtm-module/issues/53)) ([2bc1735](https://github.com/nuxt-community/gtm-module/commit/2bc173538ea255deea13ad575fefc82b7a28e3f0))
* **plugin:** add `debug` option and disable by default ([#61](https://github.com/nuxt-community/gtm-module/issues/61)) ([37f13e5](https://github.com/nuxt-community/gtm-module/commit/37f13e551518efa5aa88c095a544a73c8ac5fc9b))


### Bug Fixes

* **plugin.mock:** handle `event.eventCallback` ([#76](https://github.com/nuxt-community/gtm-module/issues/76)) ([cdb0c5c](https://github.com/nuxt-community/gtm-module/commit/cdb0c5c3a5ce07ca3cadcafa673b0397f31dfc75))
* fix doNotTrack polyfill ([#87](https://github.com/nuxt-community/gtm-module/issues/87)) ([c69d1cf](https://github.com/nuxt-community/gtm-module/commit/c69d1cf87179ad77a245fb7a745731ce666630bf))
* **module:** allow client side push before init ([#60](https://github.com/nuxt-community/gtm-module/issues/60)) ([c9b073a](https://github.com/nuxt-community/gtm-module/commit/c9b073a9c9f84ccb5271fb70fc602b1fe6f187c4))

### [2.3.2](https://github.com/nuxt-community/gtm-module/compare/v2.3.1...v2.3.2) (2020-07-23)


### Bug Fixes

* **plugin:** load SSR events before container loaded ([#51](https://github.com/nuxt-community/gtm-module/issues/51)) ([498f9bd](https://github.com/nuxt-community/gtm-module/commit/498f9bd317469e143b81e34c36b48abc8d1ca5be))

### [2.3.1](https://github.com/nuxt-community/gtm-module/compare/v2.3.0...v2.3.1) (2020-07-23)


### Bug Fixes

* **plugin:** find head script ([#59](https://github.com/nuxt-community/gtm-module/issues/59)) ([d9deea9](https://github.com/nuxt-community/gtm-module/commit/d9deea9fcf0f15b38668a9a6ab9f36cbb149efe2))

## [2.3.0](https://github.com/nuxt-community/gtm-module/compare/v2.2.3...v2.3.0) (2020-06-01)


### Features

* require nuxt > 2.12 to avoid ssr memory leak ([43f41c8](https://github.com/nuxt-community/gtm-module/commit/43f41c8e7ce58ca40476cc9624be8464908b2d91))
* use mock version for nuxt dev ([ec85699](https://github.com/nuxt-community/gtm-module/commit/ec856996a7caa6f6ef0c21c7c03457ec1a27552c)), closes [#32](https://github.com/nuxt-community/gtm-module/issues/32)


### Bug Fixes

* check respectDoNotTrack option value ([#37](https://github.com/nuxt-community/gtm-module/issues/37)) ([b1a938c](https://github.com/nuxt-community/gtm-module/commit/b1a938c44f953bd35f9a00e42189ee0291015d41))

### [2.2.3](https://github.com/nuxt-community/gtm-module/compare/v2.2.2...v2.2.3) (2020-03-17)


### Bug Fixes

* prepend `router.base` when sending page track events ([#20](https://github.com/nuxt-community/gtm-module/issues/20)) ([2940d85](https://github.com/nuxt-community/gtm-module/commit/2940d8540b813677ffbea81874913cd8c82db50b))
* **module:** warn about head as a function in nuxt config is not supported ([#14](https://github.com/nuxt-community/gtm-module/issues/14)) ([8b37f8d](https://github.com/nuxt-community/gtm-module/commit/8b37f8d7075b0015beb8abbd6ba4a76884e56447))

### [2.2.2](https://github.com/nuxt-community/gtm-module/compare/v2.2.1...v2.2.2) (2020-02-25)


### Bug Fixes

* always render noscript block ([a921b42](https://github.com/nuxt-community/gtm-module/commit/a921b4235a77562e52f0aaf4b62fe2c4023d91e0))

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
