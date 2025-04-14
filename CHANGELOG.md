# Changelog

## 0.1.1-alpha (2025-04-14)

Full Changelog: [v0.1.0-alpha...v0.1.1-alpha](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha...v0.1.1-alpha)

### Chores

* **client:** minor internal fixes ([21166b1](https://github.com/m3ter-com/m3ter-sdk-node/commit/21166b19fcf1b1fe1a9498d2d4ae28d92b0cbfff))

## 0.1.0-alpha (2025-04-10)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.9...v0.1.0-alpha)

### Features

* **api:** add measurement request model ([11a80d9](https://github.com/m3ter-com/m3ter-sdk-node/commit/11a80d93fd086d929d39978506acdf10d6f8951d))
* **api:** rename DataFieldResponse to DataField and add DerivedField as a model ([b73514f](https://github.com/m3ter-com/m3ter-sdk-node/commit/b73514fb6f40abc09922b0c7203d598703bfa0a4))
* BR-2837: Fix baseURL issue for ingest submissions ([#68](https://github.com/m3ter-com/m3ter-sdk-node/issues/68)) ([66488e4](https://github.com/m3ter-com/m3ter-sdk-node/commit/66488e4ca1e2398a751f7675e104fbfb43201313))


### Chores

* **internal:** reduce CI branch coverage ([51bd674](https://github.com/m3ter-com/m3ter-sdk-node/commit/51bd674d259eb23ebc01526254a1f1922f03dae5))
* **internal:** upload builds and expand CI branch coverage ([#65](https://github.com/m3ter-com/m3ter-sdk-node/issues/65)) ([832d905](https://github.com/m3ter-com/m3ter-sdk-node/commit/832d90577713dc555ba387f0ac2967bdb389a583))

## 0.1.0-alpha.9 (2025-04-09)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* feat: update README for org ID env variable ([#63](https://github.com/m3ter-com/m3ter-sdk-node/issues/63)) ([cac7bae](https://github.com/m3ter-com/m3ter-sdk-node/commit/cac7bae640036753cc58a87638cd90e10a561982))

## 0.1.0-alpha.8 (2025-04-08)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#49](https://github.com/m3ter-com/m3ter-sdk-node/issues/49)) ([55fd57b](https://github.com/m3ter-com/m3ter-sdk-node/commit/55fd57b7c4705d7d5d922886477a9ee1151e0403))
* **api:** make response model names explicit ([#48](https://github.com/m3ter-com/m3ter-sdk-node/issues/48)) ([7e1fe70](https://github.com/m3ter-com/m3ter-sdk-node/commit/7e1fe7035f448a6d60c55ded0339779681742719))
* **api:** update contact email and package name ([#61](https://github.com/m3ter-com/m3ter-sdk-node/issues/61)) ([30e00fb](https://github.com/m3ter-com/m3ter-sdk-node/commit/30e00fb2c07ea3110dd68e2ed4198af21fcd421a))
* **client:** accept RFC6838 JSON content types ([#50](https://github.com/m3ter-com/m3ter-sdk-node/issues/50)) ([0f94da2](https://github.com/m3ter-com/m3ter-sdk-node/commit/0f94da2f28689a224e46ddfd7ced82737fb00cca))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#59](https://github.com/m3ter-com/m3ter-sdk-node/issues/59)) ([c967aec](https://github.com/m3ter-com/m3ter-sdk-node/commit/c967aec928fe07d1e6dacd5a9a4abedbed0d71d8))
* avoid type error in certain environments ([#55](https://github.com/m3ter-com/m3ter-sdk-node/issues/55)) ([597f2f5](https://github.com/m3ter-com/m3ter-sdk-node/commit/597f2f502099ab93d52285d2e972e5fc2138691b))
* **client:** send `X-Stainless-Timeout` in seconds ([#57](https://github.com/m3ter-com/m3ter-sdk-node/issues/57)) ([f4e4bd7](https://github.com/m3ter-com/m3ter-sdk-node/commit/f4e4bd7e3c1e6db8173fc15ee3dd9165f066d5ca))
* **exports:** ensure resource imports don't require /index ([#52](https://github.com/m3ter-com/m3ter-sdk-node/issues/52)) ([fb480bc](https://github.com/m3ter-com/m3ter-sdk-node/commit/fb480bc85024f6c2019ae9adf13d457182bf01df))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#56](https://github.com/m3ter-com/m3ter-sdk-node/issues/56)) ([d7ec43b](https://github.com/m3ter-com/m3ter-sdk-node/commit/d7ec43bd72db551dcb598dc7b5a5c452a99de9c1))
* **mcp:** remove unused tools.ts ([#60](https://github.com/m3ter-com/m3ter-sdk-node/issues/60)) ([81ced42](https://github.com/m3ter-com/m3ter-sdk-node/commit/81ced42284782942b0430385413a0b981ba11384))


### Chores

* **exports:** cleaner resource index imports ([#53](https://github.com/m3ter-com/m3ter-sdk-node/issues/53)) ([ad226f2](https://github.com/m3ter-com/m3ter-sdk-node/commit/ad226f251358a7526ff005a57aa948dcb75a8dd2))
* **exports:** stop using path fallbacks ([#54](https://github.com/m3ter-com/m3ter-sdk-node/issues/54)) ([5df4910](https://github.com/m3ter-com/m3ter-sdk-node/commit/5df4910384b335277541c6ddefa8aef425745043))
* **internal:** add aliases for Record and Array ([#58](https://github.com/m3ter-com/m3ter-sdk-node/issues/58)) ([2cf0430](https://github.com/m3ter-com/m3ter-sdk-node/commit/2cf0430549a3ef4eceddcc62e932bcafeea48522))
* **internal:** remove extra empty newlines ([#51](https://github.com/m3ter-com/m3ter-sdk-node/issues/51)) ([f0161c0](https://github.com/m3ter-com/m3ter-sdk-node/commit/f0161c0c35b660ff018b53b7b02f9801c4ee6a7c))
* update SDK settings ([#46](https://github.com/m3ter-com/m3ter-sdk-node/issues/46)) ([c2d64a0](https://github.com/m3ter-com/m3ter-sdk-node/commit/c2d64a04b1e49c8b7fe5ac09214790d7f11ba2a6))

## 0.1.0-alpha.7 (2025-03-06)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** fixing warnings ([#41](https://github.com/m3ter-com/m3ter-sdk-node/issues/41)) ([66854f9](https://github.com/m3ter-com/m3ter-sdk-node/commit/66854f9864bf3357915e9a468d501ff521e21cde))
* **api:** manual updates ([#42](https://github.com/m3ter-com/m3ter-sdk-node/issues/42)) ([c2c3fa0](https://github.com/m3ter-com/m3ter-sdk-node/commit/c2c3fa0089f6ff10c082f680a6f6a0b368a020f7))


### Chores

* org ID at the client level is required ([#40](https://github.com/m3ter-com/m3ter-sdk-node/issues/40)) ([bb4ed02](https://github.com/m3ter-com/m3ter-sdk-node/commit/bb4ed027150e04b56bfc15cb4d8cd358c3761404))
* org ID client arg is optional ([#38](https://github.com/m3ter-com/m3ter-sdk-node/issues/38)) ([8f0c612](https://github.com/m3ter-com/m3ter-sdk-node/commit/8f0c61278d6326e7399da85568efb915bb9a28e3))

## 0.1.0-alpha.6 (2025-03-03)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** Spec Update + Various Fixes ([#36](https://github.com/m3ter-com/m3ter-sdk-node/issues/36)) ([0d0c5a1](https://github.com/m3ter-com/m3ter-sdk-node/commit/0d0c5a17c7d34e3b4abb5732bcca8edc2f1a9a76))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#34](https://github.com/m3ter-com/m3ter-sdk-node/issues/34)) ([7f4f8dd](https://github.com/m3ter-com/m3ter-sdk-node/commit/7f4f8ddadaea288f59b30e09f8ae1958a794362b))

## 0.1.0-alpha.5 (2025-02-26)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** add missing endpoints ([#30](https://github.com/m3ter-com/m3ter-sdk-node/issues/30)) ([da5a440](https://github.com/m3ter-com/m3ter-sdk-node/commit/da5a4401a8b205f48b20f39f3df2786c272cecd3))
* **api:** snake case method names ([#31](https://github.com/m3ter-com/m3ter-sdk-node/issues/31)) ([edbbbd8](https://github.com/m3ter-com/m3ter-sdk-node/commit/edbbbd81e5f4dd2d46853ce195a45307eb37ab46))
* **api:** update open api spec ([#29](https://github.com/m3ter-com/m3ter-sdk-node/issues/29)) ([cbbb0fe](https://github.com/m3ter-com/m3ter-sdk-node/commit/cbbb0fe5ee2ac2960256933e3a648403593b6c44))

## 0.1.0-alpha.4 (2025-02-24)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Chores

* **internal:** fix devcontainers setup ([#25](https://github.com/m3ter-com/m3ter-sdk-node/issues/25)) ([3860f65](https://github.com/m3ter-com/m3ter-sdk-node/commit/3860f65cd2a08a2bcac7bfeed76a2e3983281b6c))


### Documentation

* remove redundant params from readme ([#27](https://github.com/m3ter-com/m3ter-sdk-node/issues/27)) ([507f7bd](https://github.com/m3ter-com/m3ter-sdk-node/commit/507f7bd4d5741df6072e12f942fccdf630e02e72))

## 0.1.0-alpha.3 (2025-02-21)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* feat: add OAuth token refreshing ([#22](https://github.com/m3ter-com/m3ter-sdk-node/issues/22)) ([39b8427](https://github.com/m3ter-com/m3ter-sdk-node/commit/39b8427ac11f4162d6b79dccc64122bf737a1702))

## 0.1.0-alpha.2 (2025-02-20)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** add more endpoints ([#13](https://github.com/m3ter-com/m3ter-sdk-node/issues/13)) ([1dca748](https://github.com/m3ter-com/m3ter-sdk-node/commit/1dca7489bb894cee0fbd15d45e94deff83bbc313))
* **api:** add OAuth token fetching ([#8](https://github.com/m3ter-com/m3ter-sdk-node/issues/8)) ([2fc5a64](https://github.com/m3ter-com/m3ter-sdk-node/commit/2fc5a644cc28eae3780c82de80f59f3071300384))
* **api:** add orgId path param to client settings ([#19](https://github.com/m3ter-com/m3ter-sdk-node/issues/19)) ([3c32216](https://github.com/m3ter-com/m3ter-sdk-node/commit/3c32216155d9f5388cd10d9c0e66cad7eb1c32a7))
* **api:** create ad hoc data export endpoint ([#17](https://github.com/m3ter-com/m3ter-sdk-node/issues/17)) ([ac27fe4](https://github.com/m3ter-com/m3ter-sdk-node/commit/ac27fe418a4733f7133cd5e5df51901d40909625))
* **api:** Update custom field type information ([#12](https://github.com/m3ter-com/m3ter-sdk-node/issues/12)) ([af5480e](https://github.com/m3ter-com/m3ter-sdk-node/commit/af5480e261a3f99c2d5ba50e55e8b14546d525f3))
* **client:** send `X-Stainless-Timeout` header ([#10](https://github.com/m3ter-com/m3ter-sdk-node/issues/10)) ([265cef5](https://github.com/m3ter-com/m3ter-sdk-node/commit/265cef56fe1b32414231ddd79cf54bea4d3f690a))


### Bug Fixes

* **client:** fix export map for index exports ([#18](https://github.com/m3ter-com/m3ter-sdk-node/issues/18)) ([846a67b](https://github.com/m3ter-com/m3ter-sdk-node/commit/846a67b6ad2f114cfa3d48032284e90e6ede4e62))


### Chores

* **internal:** codegen related update ([#15](https://github.com/m3ter-com/m3ter-sdk-node/issues/15)) ([9f38454](https://github.com/m3ter-com/m3ter-sdk-node/commit/9f384540694de3c7670d4c7066a9e85e5f91e1b8))
* **internal:** codegen related update ([#16](https://github.com/m3ter-com/m3ter-sdk-node/issues/16)) ([ed08169](https://github.com/m3ter-com/m3ter-sdk-node/commit/ed08169f6a2c47c0f80294aab67f8b510cb7c6b3))
* minor change to tests ([#14](https://github.com/m3ter-com/m3ter-sdk-node/issues/14)) ([e0caf89](https://github.com/m3ter-com/m3ter-sdk-node/commit/e0caf894c1d9f8c77d1f93238634b2f44a3431d0))

## 0.1.0-alpha.1 (2025-02-03)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** Config update ([#7](https://github.com/m3ter-com/m3ter-sdk-node/issues/7)) ([ad522cd](https://github.com/m3ter-com/m3ter-sdk-node/commit/ad522cdfc5c9d2fa533270f81c98f14ae03ab753))
* **api:** updated OpenAPI spec ([#6](https://github.com/m3ter-com/m3ter-sdk-node/issues/6)) ([f85cc6e](https://github.com/m3ter-com/m3ter-sdk-node/commit/f85cc6e4b253a2c26d5900ea86a121fbbc9340f3))


### Bug Fixes

* deduplicate unknown entries in union ([#5](https://github.com/m3ter-com/m3ter-sdk-node/issues/5)) ([830f3f8](https://github.com/m3ter-com/m3ter-sdk-node/commit/830f3f8e50c6a74bdc0a62f7e9f8aaa0380f12c5))


### Chores

* go live ([2e2b355](https://github.com/m3ter-com/m3ter-sdk-node/commit/2e2b35550f28c7cff942371f747f209446cf62ed))
* **internal:** add test ([#2](https://github.com/m3ter-com/m3ter-sdk-node/issues/2)) ([4744a4f](https://github.com/m3ter-com/m3ter-sdk-node/commit/4744a4fa23550f810cf21c658eda0168fbae42fb))
* **internal:** codegen related update ([#3](https://github.com/m3ter-com/m3ter-sdk-node/issues/3)) ([da18825](https://github.com/m3ter-com/m3ter-sdk-node/commit/da188259cf7fa7eff4cef56d5340096579e72d07))
* **tests:** skip problematic tests ([#4](https://github.com/m3ter-com/m3ter-sdk-node/issues/4)) ([9f207a2](https://github.com/m3ter-com/m3ter-sdk-node/commit/9f207a2f63cc71cdd7c7f2f9614581e794cd4860))
