## [2.1.2](https://github.com/siemens/ix/compare/v2.1.0-beta.0...v2.1.2) (2024-03-15)


### Bug Fixes

* **angular:** icon size property missing in wrapper generation ([#1124](https://github.com/siemens/ix/issues/1124)) ([9819736](https://github.com/siemens/ix/commit/981973699b65e4ca30efd775bcedc418971eddd3))
* **core/avatar:** adapt colors ([#1141](https://github.com/siemens/ix/issues/1141)) ([f8f36c6](https://github.com/siemens/ix/commit/f8f36c6f823d3600eab5ebf96a4661446e010b1a))
* **core/basic-navigation:** fixed behavior on missing breakpoints ([#874](https://github.com/siemens/ix/issues/874)) ([9370b32](https://github.com/siemens/ix/commit/9370b32b009d9e55024f9fccb136333f292c0366))
* **core/blind:** refactor header to not use z-index ([#1125](https://github.com/siemens/ix/issues/1125)) ([a2a95e7](https://github.com/siemens/ix/commit/a2a95e7758a0583f76b89942e4630541972500a1))
* **core/blind:** remove custom action from button tag ([#876](https://github.com/siemens/ix/issues/876)) ([f26ae57](https://github.com/siemens/ix/commit/f26ae579abbd218ea6d140afa04881ccdcffb5bd))
* **core/burger-menu:** a11y expand state ([#1112](https://github.com/siemens/ix/issues/1112)) ([cd3d033](https://github.com/siemens/ix/commit/cd3d0334bfafcb43fdb1c93f82a8719e1d66c5a8))
* **core/burger-menu:** cursor appearance for burger menu button ([#941](https://github.com/siemens/ix/issues/941)) ([37f7fe0](https://github.com/siemens/ix/commit/37f7fe0274a07bfb96b64f8b5b12a7c241a10048))
* **core/button:** documentation fix ([#885](https://github.com/siemens/ix/issues/885)) ([9ff270f](https://github.com/siemens/ix/commit/9ff270f7364e1c96bf55811f129fd06fb0608e3a))
* **core/date-dropdown:** hide range options column if only one option available ([#1162](https://github.com/siemens/ix/issues/1162)) ([05f702a](https://github.com/siemens/ix/commit/05f702abca6c17d69acc5d719e469783521fe72d))
* **core/dropdown-item:** prevent unwatned truncation ([#961](https://github.com/siemens/ix/issues/961)) ([4009a45](https://github.com/siemens/ix/commit/4009a4551a2b8e1f148b6c98b7d6a709bffd07c6))
* **core/dropdown:** add null check ([#1132](https://github.com/siemens/ix/issues/1132)) ([ee6fac7](https://github.com/siemens/ix/commit/ee6fac7f5e4f25e895d3e761ca1acade95ea3d41))
* **core/dropdown:** always close on escape ([#1093](https://github.com/siemens/ix/issues/1093)) ([716ffae](https://github.com/siemens/ix/commit/716ffae97fbc244361d98a2f3e1c5f72126e9b7e))
* **core/dropdown:** check against undefined access ([#1104](https://github.com/siemens/ix/issues/1104)) ([47deab1](https://github.com/siemens/ix/commit/47deab1ee7febafed439de003f967067ca6fe74e))
* **core/dropdown:** fix  submenu discovery ([#1060](https://github.com/siemens/ix/issues/1060)) ([4a95af8](https://github.com/siemens/ix/commit/4a95af8806da282225098fd8b2a9c539fe746057))
* **core/dropdown:** nested dropdown fix for shadow dom ([#849](https://github.com/siemens/ix/issues/849)) ([28e73f5](https://github.com/siemens/ix/commit/28e73f519dbc2530b8bf6e7bf88f42d5335dfc30))
* **core/dropdown:** use controller instance to handle dropdown instances ([#1051](https://github.com/siemens/ix/issues/1051)) ([aa4bdc3](https://github.com/siemens/ix/commit/aa4bdc3289b71dfc47090001678a5c897860039d))
* **core/empty-state:** center header texts for large layouts ([#985](https://github.com/siemens/ix/issues/985)) ([0a4647c](https://github.com/siemens/ix/commit/0a4647c68103a0bf6d99aedc3c0f368abe79899e))
* **core/event-list-item:** fix right padding ([#859](https://github.com/siemens/ix/issues/859)) ([f58cc97](https://github.com/siemens/ix/commit/f58cc979b7e25d57ea638514abe9f05437a50538))
* **core/event-list:** remove unwanted top margin ([#997](https://github.com/siemens/ix/issues/997)) ([8c14d91](https://github.com/siemens/ix/commit/8c14d91a99e7caa79c3543160b448d2665e2a560))
* **core/group:** handle text overflow gracefully ([#916](https://github.com/siemens/ix/issues/916)) ([f54ae23](https://github.com/siemens/ix/commit/f54ae23b527471426f54e50fb9fa09433c7e446e))
* **core/input-group:** add padding left for error image ([#838](https://github.com/siemens/ix/issues/838)) ([fa44ab5](https://github.com/siemens/ix/commit/fa44ab554b1ebbe842e99d11295890ccebc74911))
* **core/key-value-list:** input fills available horizontal space ([#905](https://github.com/siemens/ix/issues/905)) ([df8d2e1](https://github.com/siemens/ix/commit/df8d2e17cd5ac069c95cadc0d12e357f1d4a8926))
* **core/key-value-list:** label stretches and handles overflow gracefully ([#942](https://github.com/siemens/ix/issues/942)) ([e238321](https://github.com/siemens/ix/commit/e238321bed352428a9868b2f78f487b221e30fe7))
* **core/menu-about-news:** adapt styling ([#1152](https://github.com/siemens/ix/issues/1152)) ([e275f65](https://github.com/siemens/ix/commit/e275f65a3868a611d9238d91b088c406608a58b5))
* **core/menu-about/-settings:** unwanted behavior on fast tab change ([#933](https://github.com/siemens/ix/issues/933)) ([1558e92](https://github.com/siemens/ix/commit/1558e92a29cb08188e126fbd75fd3bdef4d8c0bd))
* **core/menu-avatar-item:** prevent color from being overwritten by global styles ([#1116](https://github.com/siemens/ix/issues/1116)) ([a15c619](https://github.com/siemens/ix/commit/a15c6196528567aec259de1a942a717a624a89f2))
* **core/menu-avatar-item:** use host for trigger target ([#1113](https://github.com/siemens/ix/issues/1113)) ([1fd1637](https://github.com/siemens/ix/commit/1fd16375fcdd427452527cf27ee574456787108c))
* **core/menu-category:** allow empty icon as menu-category-item ([#1110](https://github.com/siemens/ix/issues/1110)) ([03790e0](https://github.com/siemens/ix/commit/03790e0ef41d1b12e66a94ef7d453eefd0a3ebec))
* **core/menu-category:** fix unwanted behavior with active element ([#1102](https://github.com/siemens/ix/issues/1102)) ([99a9c5c](https://github.com/siemens/ix/commit/99a9c5c7fa48a9b3ca037ef1cb7cc5b0284f08c1))
* **core/menu-item:** suppress icon tooltip ([#887](https://github.com/siemens/ix/issues/887)) ([fc874a4](https://github.com/siemens/ix/commit/fc874a4e1a0c8ae2584f28168144b6c8be7819ab))
* **core/menu-settings:** update labels dynamically ([#937](https://github.com/siemens/ix/issues/937)) ([09dc395](https://github.com/siemens/ix/commit/09dc3955b1d6535554b48e155b354131b1c5537a))
* **core/menu:** adjust spacing of menu-button and app-switch ([#1040](https://github.com/siemens/ix/issues/1040)) ([7fa318f](https://github.com/siemens/ix/commit/7fa318fc1667021a0b6a7bd80fc4395182073707))
* **core/menu:** fix theme switching icon ([#1121](https://github.com/siemens/ix/issues/1121)) ([0def517](https://github.com/siemens/ix/commit/0def517ba142869dc47a56524ead891519212aaa))
* **core/message-bar:** fix styling ([#1064](https://github.com/siemens/ix/issues/1064)) ([62b7565](https://github.com/siemens/ix/commit/62b7565706ed150df9014d25037b653349491386))
* **core/modal-header:** prevent npe ([28da016](https://github.com/siemens/ix/commit/28da0163eaa8c1d5cdf592bb61c8c57965f3dc4e))
* **core/modal:** ensure that key down listener gets called ([#870](https://github.com/siemens/ix/issues/870)) ([ceacb71](https://github.com/siemens/ix/commit/ceacb716fd7431d03603962634f4987a652e1aaf))
* **core/modal:** fix padding ([#1126](https://github.com/siemens/ix/issues/1126)) ([37d90fb](https://github.com/siemens/ix/commit/37d90fb6d2f4364229c5fc8c891de8b2c50f1584))
* **core/modal:** fixed closing modal issue when press space or enter ([#1080](https://github.com/siemens/ix/issues/1080)) ([214012f](https://github.com/siemens/ix/commit/214012f4a63996ebe737e8198f52307366f048b0))
* **core/modal:** fixes runtime error ([#902](https://github.com/siemens/ix/issues/902)) ([f628f5f](https://github.com/siemens/ix/commit/f628f5f6985e91b61e1542d28f1a83d58febe2fb))
* **core/modal:** remove dialog on escape ([#1016](https://github.com/siemens/ix/issues/1016)) ([3b69aba](https://github.com/siemens/ix/commit/3b69aba23373f8425cf98d4e062356d4e15eb325))
* **core/panes:** expanded and slot error ([#1119](https://github.com/siemens/ix/issues/1119)) ([4d3f895](https://github.com/siemens/ix/commit/4d3f895fc61b332f403d1580794e70cbf921868c))
* **core/pill:** fix custom outline variant and add variant examples ([#968](https://github.com/siemens/ix/issues/968)) ([c364aab](https://github.com/siemens/ix/commit/c364aab12a3959e95b0b4be14a7ba5fc87041d86))
* **core/push-card:** option to collapse and expand push card ([#875](https://github.com/siemens/ix/issues/875)) ([74e43ad](https://github.com/siemens/ix/commit/74e43ad7d249f75491d0c9fe3a1398ef00bc2623))
* **core/radio-button:** fix alignment of checked indicator ([#1046](https://github.com/siemens/ix/issues/1046)) ([7698c64](https://github.com/siemens/ix/commit/7698c64e3eb75aa4182e592c1cd700aa76262180))
* **core/select-item:** prevent text color from being overwritten ([#1160](https://github.com/siemens/ix/issues/1160)) ([b9fb01d](https://github.com/siemens/ix/commit/b9fb01d0ee92e79cea5800794f59863e980a929d))
* **core/select|category-filter:** disable native autocomplete ([#987](https://github.com/siemens/ix/issues/987)) ([972506f](https://github.com/siemens/ix/commit/972506fe4f1843054d013ea95af805508d356be2))
* **core/select:** improve handling of filter dropdown ([#784](https://github.com/siemens/ix/issues/784)) ([3767fce](https://github.com/siemens/ix/commit/3767fce2cd95a125cebcee3076ac272ad2357d23))
* **core/slider:** use correct pointerup event ([#1054](https://github.com/siemens/ix/issues/1054)) ([e896454](https://github.com/siemens/ix/commit/e8964549cb24406a8e4ddf1d3166401703c95fad))
* **core/tabs:** prevent tab flickering ([#890](https://github.com/siemens/ix/issues/890)) ([bded378](https://github.com/siemens/ix/commit/bded3787d441a3a7de98ee04fdc311c436eaee6f))
* **core/tooltip:** a11y support ([#556](https://github.com/siemens/ix/issues/556)) ([65185ab](https://github.com/siemens/ix/commit/65185abaafc3455f45e79086ce480f8b017f6c4c))
* **core/tooltip:** positioning initial ([#1036](https://github.com/siemens/ix/issues/1036)) ([9ba9823](https://github.com/siemens/ix/commit/9ba9823d9bea7bf79d1803005fe39f573fa7b98a))
* **core/tooltip:** remove direct constructor access ([#1118](https://github.com/siemens/ix/issues/1118)) ([63dd48c](https://github.com/siemens/ix/commit/63dd48ce7cdd9d3eb326a248a8928ea13fc31f5a))
* **core/tree:** add undefined check to disconnected callback ([#867](https://github.com/siemens/ix/issues/867)) ([38e5ca6](https://github.com/siemens/ix/commit/38e5ca6b5bf71bac5e19557f4402ca8039cf72a6))
* **core/typography:** use ms--1 size in h6 ([#871](https://github.com/siemens/ix/issues/871)) ([44841dd](https://github.com/siemens/ix/commit/44841dde2a9986bcd835d04ccc9e8a36d78241a7))
* **core/typography:** use text color value and add vrts ([#1155](https://github.com/siemens/ix/issues/1155)) ([1672561](https://github.com/siemens/ix/commit/16725616834d7ac8292a8601cdbc97cab07fc14c))
* **core/upload:** replace class icons with ix-icon ([#1022](https://github.com/siemens/ix/issues/1022)) ([9198d31](https://github.com/siemens/ix/commit/9198d31be2c13a09c67e4094a10668e9c710304f))
* **core/utils:** prevent undefined access on OnListener decorator  ([#1000](https://github.com/siemens/ix/issues/1000)) ([1711c08](https://github.com/siemens/ix/commit/1711c081638d59b4d2803fa69ebd9850781b5df0))
* **core/validation-tooltip:** prevent assignment/reading on null element ([#1001](https://github.com/siemens/ix/issues/1001)) ([813b882](https://github.com/siemens/ix/commit/813b882949addb687f89276a9e8610cd5de0ff4f))
* **core/windows-doc-generation:** fix for component-doc generation ([#1070](https://github.com/siemens/ix/issues/1070)) ([39d88a6](https://github.com/siemens/ix/commit/39d88a6551c02545a20e37e4fc767f9cc08bee55))
* **core/workflow-step:** retain icon color on state change when disabled  ([#1031](https://github.com/siemens/ix/issues/1031)) ([c2fb15c](https://github.com/siemens/ix/commit/c2fb15c363b1f5b443ed6079dbdff7ed704840d3))
* **core:** remove type declaration from ts file ([#1052](https://github.com/siemens/ix/issues/1052)) ([c4028e4](https://github.com/siemens/ix/commit/c4028e4c67540d6e3244ef79c28417e97617968c))
* **react|vue:** define internal components ([#1099](https://github.com/siemens/ix/issues/1099)) ([984bb3c](https://github.com/siemens/ix/commit/984bb3c737202ffbb00fbbee150cceb61bfe07be))
* **toast:** fixed initial async undefined error ([#1039](https://github.com/siemens/ix/issues/1039)) ([6030480](https://github.com/siemens/ix/commit/603048045294200c178e8acc44c4d32225235d0b))


### Features

* **core/application:** app switch ([#1007](https://github.com/siemens/ix/issues/1007)) ([3298e87](https://github.com/siemens/ix/commit/3298e87f9a8e439e18265d7dbf5d7c4eaaa09432))
* **core/avatar:** add user-info to dropdown ([#1043](https://github.com/siemens/ix/issues/1043)) ([01a0093](https://github.com/siemens/ix/commit/01a009306b55a9747ee8fbcf6d99bacf9ee9a727))
* **core/card:** add selection and mouse states ([#1089](https://github.com/siemens/ix/issues/1089)) ([6eb71c2](https://github.com/siemens/ix/commit/6eb71c2d9ca50c7a261992d6bf9cdf5ec4c1391a))
* **core/date-dropdown:** new date-dropdown component ([#797](https://github.com/siemens/ix/issues/797)) ([710b356](https://github.com/siemens/ix/commit/710b356a2ebc0793e7f60d79ef85f913d19aed68))
* **core/date-picker/time-picker/date-time-picker:** refactor ([#737](https://github.com/siemens/ix/issues/737)) ([9879b2c](https://github.com/siemens/ix/commit/9879b2ce227205fa19daa0e935062abec7c60bdc))
* **core/dropdown:** allow trigger to toggle dropdown ([#872](https://github.com/siemens/ix/issues/872)) ([132c435](https://github.com/siemens/ix/commit/132c4356ade153833efff2269cfe415923e4d3b0))
* **core/icon-button:** implement a11y features for icon-button ([#502](https://github.com/siemens/ix/issues/502)) ([4f7275a](https://github.com/siemens/ix/commit/4f7275aeef3f82d715d5ee968ff0b712267bef89))
* **core/menu-about-news:** fullscreen pop up for sm screens ([#1005](https://github.com/siemens/ix/issues/1005)) ([42e3814](https://github.com/siemens/ix/commit/42e3814e95e2fb0633e9ab876f8f5c8117ff641f))
* **core/menu-avatar:** optional logout button, conditional dropdown  ([#851](https://github.com/siemens/ix/issues/851)) ([3a51843](https://github.com/siemens/ix/commit/3a518432733ec095f5ffc118219521c996e367db))
* **react:** add vitest ([#1017](https://github.com/siemens/ix/issues/1017)) ([92cfe01](https://github.com/siemens/ix/commit/92cfe013c7508394c597fa54c3b435ddd71fb797))



# [2.1.0-beta.0](https://github.com/siemens/ix/compare/v2.0.3...v2.1.0-beta.0) (2023-10-20)


### Bug Fixes

* **core/button:** prevent interaction of ix-icon ([#839](https://github.com/siemens/ix/issues/839)) ([a0bd2af](https://github.com/siemens/ix/commit/a0bd2afb0a147fddcc4e665c574279070087fce8))
* **core/modal:** use percentage to align modal centered ([#836](https://github.com/siemens/ix/issues/836)) ([87622f4](https://github.com/siemens/ix/commit/87622f48f247233c6bfba7328cdf8ccb605e1635))
* **core:** request animation depending on zonejs; reduce global events ([#855](https://github.com/siemens/ix/issues/855)) ([98a615c](https://github.com/siemens/ix/commit/98a615cfab02e270f006c1eeeb2b3cd40969cee0))



## [2.0.3](https://github.com/siemens/ix/compare/v2.0.2-beta.0...v2.0.3) (2023-10-10)



## [2.0.2-beta.0](https://github.com/siemens/ix/compare/v2.0.2...v2.0.2-beta.0) (2023-10-09)


### Bug Fixes

* **core/breadcrumb:** check if overflow button is existing in DOM ([#811](https://github.com/siemens/ix/issues/811)) ([bbe6f28](https://github.com/siemens/ix/commit/bbe6f280f9fe28d639683d43fdb0894d8577417c))
* **core/button:** prevent native events to be dispatched ([#804](https://github.com/siemens/ix/issues/804)) ([ac756a5](https://github.com/siemens/ix/commit/ac756a57559e65a5839c4e2fb2dcc789d999cb8f))
* **core/checkbox, core/radiobutton:** remove min-height ([#816](https://github.com/siemens/ix/issues/816)) ([976fc45](https://github.com/siemens/ix/commit/976fc4528cc9d0811301453d2e310e952cb0c300))
* **core/drawer:** add missing host class selector ([#815](https://github.com/siemens/ix/issues/815)) ([0409fc8](https://github.com/siemens/ix/commit/0409fc8da7a72ca79a50dfced46c2fb94892399c))
* **core/drodown:** nested dropdown closes parent dropdown ([#789](https://github.com/siemens/ix/issues/789)) ([12d2472](https://github.com/siemens/ix/commit/12d247240a4f6a3ff6814fed273bb9bc5671f340))
* **core/input-group:** detect inital value padding ([#803](https://github.com/siemens/ix/issues/803)) ([17efd6e](https://github.com/siemens/ix/commit/17efd6ee9e42226043f189b266b2aaccc3228ee3))
* **core/map-navigation:** suppress responsive behavior ([#810](https://github.com/siemens/ix/issues/810)) ([e7d702d](https://github.com/siemens/ix/commit/e7d702de8d20d6a5dc5283b78473d954f08837e7))
* **core/modal:** skip tick during vdom rendering ([#788](https://github.com/siemens/ix/issues/788)) ([d28c6ea](https://github.com/siemens/ix/commit/d28c6ea618f3fd06680f6043812fd5d9d8c5798b))
* **core/pagination:** dispatch complete page number ([#805](https://github.com/siemens/ix/issues/805)) ([51ae5b2](https://github.com/siemens/ix/commit/51ae5b2f24e1cd6987f8893723b533f7be3a3e94))
* **react/tree:** load ix-tree web component on initialize react lib ([#806](https://github.com/siemens/ix/issues/806)) ([27fdee3](https://github.com/siemens/ix/commit/27fdee3dd66118134ef8e49f6f34903c1bb1932b))



## [2.0.1](https://github.com/siemens/ix/compare/v2.0.0...v2.0.1) (2023-09-26)



# [2.0.0](https://github.com/siemens/ix/compare/v2.0.0-beta.1...v2.0.0) (2023-09-26)


### Bug Fixes

* **aggrid:** use default font fallbacks from core ([#719](https://github.com/siemens/ix/issues/719)) ([5eed3b3](https://github.com/siemens/ix/commit/5eed3b3ce97094e4ba1ddb3eafb1a08feeb35a07))
* **angular:** fix change detection on modal when using a TemplateRef ([#714](https://github.com/siemens/ix/issues/714)) ([fdfc9ef](https://github.com/siemens/ix/commit/fdfc9ef965f04c88d4949cac346d48b9074012a3))
* **core/blind:** remove blind content after collapse changed ([#690](https://github.com/siemens/ix/issues/690)) ([4f0c548](https://github.com/siemens/ix/commit/4f0c548b8dcaeade49258de86aa7c99b59266961))
* **core/breakcrumb:** remove hover style from last breadcrumb ([#726](https://github.com/siemens/ix/issues/726)) ([9d3ef3d](https://github.com/siemens/ix/commit/9d3ef3d7dfc0e20bf59e22da99dcc88055016f3c))
* **core/datepicker:** add width ([#783](https://github.com/siemens/ix/issues/783)) ([efded9d](https://github.com/siemens/ix/commit/efded9da1b80cc56339dbbca1d52edf977d26fe8))
* **core/dropdownbutton:** dropdown alignment ([#694](https://github.com/siemens/ix/issues/694)) ([5d95a1e](https://github.com/siemens/ix/commit/5d95a1edf2c4af15b19d7d76d99b7c4dc986cfb0))
* **core/dropdown:** remove shadow-dom workaround ([#777](https://github.com/siemens/ix/issues/777)) ([03a3099](https://github.com/siemens/ix/commit/03a3099dadaf43c3d5af9cf63e0419d4042bfaf9))
* **core/input:** show placeholder in readonly and disabled states ([#770](https://github.com/siemens/ix/issues/770)) ([8f6d501](https://github.com/siemens/ix/commit/8f6d5012914153fbd1ea1e867f3fed089ef1510a))
* **core/menu:** a-tag styling ([#689](https://github.com/siemens/ix/issues/689)) ([3e3e30b](https://github.com/siemens/ix/commit/3e3e30bdbafd8cd84f99f03fedfe43868fb080af))
* **core/modal:** allow dialog to overflow ([#692](https://github.com/siemens/ix/issues/692)) ([357e3b5](https://github.com/siemens/ix/commit/357e3b58a68a6c61d14d66f8bdd45cd6503faf8f))
* **core/pushcard:** use std-text as default color ([#696](https://github.com/siemens/ix/issues/696)) ([ca59395](https://github.com/siemens/ix/commit/ca5939552018fe1d41ce09a3121482d6c3113506))
* **core/select:** fix editable mode with shadow DOM ([#758](https://github.com/siemens/ix/issues/758)) ([55a514a](https://github.com/siemens/ix/commit/55a514a14bc97a21d1d758cfccc1375405385d6c))
* **core/slider:** tick color ([#764](https://github.com/siemens/ix/issues/764)) ([56e474c](https://github.com/siemens/ix/commit/56e474c67556d2b9bb82f17b8f2244e08b9a9a0a))
* **core/split-button-item:** deprecate component ([#760](https://github.com/siemens/ix/issues/760)) ([950c66a](https://github.com/siemens/ix/commit/950c66a92c2c9340ef36a1a213ef3c50c668f25b))
* **core/split-button:** prevent inner event to bubble up ([#710](https://github.com/siemens/ix/issues/710)) ([01d9f4f](https://github.com/siemens/ix/commit/01d9f4f17c09e91f0026fe3c611c7ce3edddcd80))
* **core/styles:** reduce css file size ([#739](https://github.com/siemens/ix/issues/739)) ([c7e601c](https://github.com/siemens/ix/commit/c7e601c7e7f345f6ed6c3db6d24380e5083924e1))
* **core/toast:** delay inital rendering of toast to next tick ([#782](https://github.com/siemens/ix/issues/782)) ([b38f3c0](https://github.com/siemens/ix/commit/b38f3c0889673dfbb1a857378e3b1203e233af2a))
* **core/workflow-steps:** onStepSelected event  ([#626](https://github.com/siemens/ix/issues/626)) ([4e8cac7](https://github.com/siemens/ix/commit/4e8cac79fa893b8faf97801b6783626a6d5753f7))
* **core:** overwrite custom icon coloring ([#753](https://github.com/siemens/ix/issues/753)) ([db6ec96](https://github.com/siemens/ix/commit/db6ec963d5846ab94c41bf9ca81740ea494ef262))
* **core:** update classic theme ([#725](https://github.com/siemens/ix/issues/725)) ([fb49e96](https://github.com/siemens/ix/commit/fb49e96cf3a202c525536d2a62599da48aa4af36))
* **navigation-menu:** bottom slot click event ([#781](https://github.com/siemens/ix/issues/781)) ([b632ad0](https://github.com/siemens/ix/commit/b632ad0bb97a548ebdaaf99bacab3e2b9286ba68))


### Features

* **core/blind:** add sublabel property ([#748](https://github.com/siemens/ix/issues/748)) ([6c8c665](https://github.com/siemens/ix/commit/6c8c6659d9aaeedf1c5660b4b4cecb89effb4635))
* **core/blind:** add variant property ([#767](https://github.com/siemens/ix/issues/767)) ([8e2e908](https://github.com/siemens/ix/commit/8e2e908b7e527e72d86dcd28b454f89a8248d248))
* **core/breadcrumb:** add keyboard navigation ([#688](https://github.com/siemens/ix/issues/688)) ([1550bf2](https://github.com/siemens/ix/commit/1550bf2d2fb1c86b8ad69a73e7c5791c73ce1ed5))
* **core/breadcrumb:** migrate to shadow dom ([#679](https://github.com/siemens/ix/issues/679)) ([f8dc56a](https://github.com/siemens/ix/commit/f8dc56a119f82fde731b88872f1171cf5ebd1540))
* **core/card:** add primary variant ([#780](https://github.com/siemens/ix/issues/780)) ([c47a9c2](https://github.com/siemens/ix/commit/c47a9c295bccb643ace812b390691d1ceb58aca1))
* **core/category-filter:** enable shadow dom ([#724](https://github.com/siemens/ix/issues/724)) ([01deb3f](https://github.com/siemens/ix/commit/01deb3fa43790e41657fd756e2ade3d7938eb36e))
* **core/dropdown-item:** mark dropdown-item as internal event ([#761](https://github.com/siemens/ix/issues/761)) ([b9d4804](https://github.com/siemens/ix/commit/b9d48047af41b53de51d06e5b4c6ae8d924cc6b1))
* **core/flip-tile:** migrate to shadow dom ([#680](https://github.com/siemens/ix/issues/680)) ([6744195](https://github.com/siemens/ix/commit/674419598d4fcc684dbac80e0412663f21b95563))
* **core/grid:** add grid component ([#721](https://github.com/siemens/ix/issues/721)) ([d82ef06](https://github.com/siemens/ix/commit/d82ef069181e12394ee25e220cad3eaea9825f26))
* **core/input-group:** migrate to shadow dom ([#673](https://github.com/siemens/ix/issues/673)) ([9c9cb0e](https://github.com/siemens/ix/commit/9c9cb0ed2dcf3c639203cfd762c1e18d03a54d09))
* **core/input:** add basic input styling ([#717](https://github.com/siemens/ix/issues/717)) ([429f39e](https://github.com/siemens/ix/commit/429f39e482706cc6b151f5ef3c4db60fd046eccb))
* **core/map-navigation-overlay:** migrate to shadow dom ([#707](https://github.com/siemens/ix/issues/707)) ([cadc503](https://github.com/siemens/ix/commit/cadc503594f12d90a4689827f7d1c7c2e33d46bd))
* **core/menu:** provide keyboard navigation ([#685](https://github.com/siemens/ix/issues/685)) ([4327a96](https://github.com/siemens/ix/commit/4327a96e7465168cfa8c332dca8f5c0bb9ee195c))
* **core/pagination:** migrate to shadow dom ([#678](https://github.com/siemens/ix/issues/678)) ([a8c2187](https://github.com/siemens/ix/commit/a8c2187139c3f526681bdde9136eee983c103df8))
* **core/select:** migrate to shadow dom ([#670](https://github.com/siemens/ix/issues/670)) ([0d00293](https://github.com/siemens/ix/commit/0d00293352dc7cd43271c4e3b9d31fbdafe34288))
* **core/select:** support for angular forms ([#738](https://github.com/siemens/ix/issues/738)) ([c0bb78f](https://github.com/siemens/ix/commit/c0bb78f5798291ba7af5e5fe958dd86c638aba2c))
* **core/slider:** add slider component ([#723](https://github.com/siemens/ix/issues/723)) ([6a7f3cb](https://github.com/siemens/ix/commit/6a7f3cb1176ff4c6413ed6435d78955e95b80526))
* **core/styles:** load input styles global ([a396383](https://github.com/siemens/ix/commit/a396383a3c38fb63fcee14fa5733b191b563db02))
* **core/tabs:** add additional navigation events ([#669](https://github.com/siemens/ix/issues/669)) ([d800f29](https://github.com/siemens/ix/commit/d800f297da1383d640ba1b7e74d1dd02c4c695f5))
* **core/toggle-button|icon-toggle-button:** add new components ([#623](https://github.com/siemens/ix/issues/623)) ([8870e65](https://github.com/siemens/ix/commit/8870e656435c0a31232397ef9bcda9f17a683059))
* **core/toggle-button|icon-toggle-button:** add toggle button components ([#675](https://github.com/siemens/ix/issues/675)) ([29e70e1](https://github.com/siemens/ix/commit/29e70e10a8230be8369cd3e6c634d9c8541658ab))
* **core/toggle:** support for angular forms ([#745](https://github.com/siemens/ix/issues/745)) ([bba4a45](https://github.com/siemens/ix/commit/bba4a45c9fe8e8ac451e8fff5e4b4ae9bb3e5b34))
* **core/tree:** migrate to shadow dom ([#672](https://github.com/siemens/ix/issues/672)) ([955180a](https://github.com/siemens/ix/commit/955180af823388e3e676480d43ed9cc6f8f756d6))
* **core/validation-tooltip:** migrate to shadow dom ([#671](https://github.com/siemens/ix/issues/671)) ([d228212](https://github.com/siemens/ix/commit/d228212be7f1d19a324dc1b09f8c003097acd974))
* **core:** application frame enhancement ([#735](https://github.com/siemens/ix/issues/735)) ([e4fe29d](https://github.com/siemens/ix/commit/e4fe29d2995e15bf5869c290081a5c3df8444213))
* **core:** font rework ([#713](https://github.com/siemens/ix/issues/713)) ([6cc51f6](https://github.com/siemens/ix/commit/6cc51f6fe587a1fcacebbed2eb7ba8b9dea2d410))
* **core:** optimize bundle size ([#611](https://github.com/siemens/ix/issues/611)) ([43abb1b](https://github.com/siemens/ix/commit/43abb1babe13a95299a23348262a9f35e53255b7))



# [2.0.0-beta.0](https://github.com/siemens/ix/compare/v1.6.3...v2.0.0-beta.0) (2023-08-02)


### Bug Fixes

* **aggrid:** remove box shadow from editor cells ([#600](https://github.com/siemens/ix/issues/600)) ([e3821b3](https://github.com/siemens/ix/commit/e3821b342d0edcf2a703f741f0397241f460381f))
* **core/basic-navigation:** increase content width to 100% ([#571](https://github.com/siemens/ix/issues/571)) ([adbb655](https://github.com/siemens/ix/commit/adbb655ef3d834d2a8472c9eb6ea2361e421b99a))
* **core/button:** pass through submit related events ([#578](https://github.com/siemens/ix/issues/578)) ([3301a0d](https://github.com/siemens/ix/commit/3301a0db25dcace9597e41ac9fbeaab269fe3310))
* **core/chip:** typo ([94dfed1](https://github.com/siemens/ix/commit/94dfed1a24b65587378d4260f3faec74c70081b8))
* **core/date-picker:** done button hidden ([#624](https://github.com/siemens/ix/issues/624)) ([b7e95f5](https://github.com/siemens/ix/commit/b7e95f50ba51c26acbaef49573e458fff62f9f50))
* **core/drawer:** start show true ([#652](https://github.com/siemens/ix/issues/652)) ([56c730b](https://github.com/siemens/ix/commit/56c730bbcc3d0b5a6aee16d11edd9d1a767bab19))
* **core/dropdown-button:** deprecate unused property active ([#599](https://github.com/siemens/ix/issues/599)) ([029fdf9](https://github.com/siemens/ix/commit/029fdf92e6ca2874542595dfed91b4c08f5e3779))
* **core/expanding-search:** remove typo in variant ([5ab05e0](https://github.com/siemens/ix/commit/5ab05e03e91d240f8934ca31d40ee94f32824ca8))
* **core/icon-button:** deprecated size 32  ([#620](https://github.com/siemens/ix/issues/620)) ([e989be5](https://github.com/siemens/ix/commit/e989be5b99dc60fd77793b3c9e4fc868506feeb4))
* **core/input:** slot heights ([#610](https://github.com/siemens/ix/issues/610)) ([6007776](https://github.com/siemens/ix/commit/600777684b787e22dff4f1e9ce1daef84fb07372))
* **core/spinner:** update secondary color ([#617](https://github.com/siemens/ix/issues/617)) ([242ac05](https://github.com/siemens/ix/commit/242ac05b6af45c13a226307cda2157354f74ce89))
* **core/upload:** drop while loading and input width ([#655](https://github.com/siemens/ix/issues/655)) ([2a12e33](https://github.com/siemens/ix/commit/2a12e3304193b4625febf6b62b6ba347522e3082))
* **core:** change variant values to lower case ([#641](https://github.com/siemens/ix/issues/641)) ([c737d47](https://github.com/siemens/ix/commit/c737d47251748e6a66a909607bbf42d2d3f1e572))


### Features

* **core/avatar:** add avatar component  ([#598](https://github.com/siemens/ix/issues/598)) ([6bcda4f](https://github.com/siemens/ix/commit/6bcda4ff537fe85fabda409d0765c5d2263f915b))
* **core/chip:** enable shadow dom ([#603](https://github.com/siemens/ix/issues/603)) ([53e9fe6](https://github.com/siemens/ix/commit/53e9fe6de8816f469d0be27effbcb5da301ffd35))
* **core/datetime-picker:** enable shadow dom ([#586](https://github.com/siemens/ix/issues/586)) ([4e875aa](https://github.com/siemens/ix/commit/4e875aabd5ee99606fa839d2740fe2b790e18c42))
* **core/dropdownbutton:** migrate to shadow dom ([#638](https://github.com/siemens/ix/issues/638)) ([5ac2ecb](https://github.com/siemens/ix/commit/5ac2ecb99a37fd04e704816e5bf6a93a480f617d))
* **core/dropdown:** enable shadow dom ([#552](https://github.com/siemens/ix/issues/552)) ([7480b3d](https://github.com/siemens/ix/commit/7480b3d238e5183da5561cf1fff7150b5e21a20b))
* **core/event-list:** enable shadow dom  ([#565](https://github.com/siemens/ix/issues/565)) ([898ae23](https://github.com/siemens/ix/commit/898ae234d12a0af2a3f5d124fa058f0d219f392a))
* **core/expanding-search:** migrate to shadow dom ([#636](https://github.com/siemens/ix/issues/636)) ([2b81bc2](https://github.com/siemens/ix/commit/2b81bc22f5d68856dfd04083ef0dc187fc547560))
* **core/filter-chip:** enable shadow dom ([#602](https://github.com/siemens/ix/issues/602)) ([e4b0355](https://github.com/siemens/ix/commit/e4b0355565c2001dc286722a045e3e990ed9f587))
* **core/group:** migrate to shadow dom ([#661](https://github.com/siemens/ix/issues/661)) ([8970a03](https://github.com/siemens/ix/commit/8970a034432e49a2dfe53e226816ed24a246d031))
* **core/link-button:** add link button component ([#580](https://github.com/siemens/ix/issues/580)) ([d98cabc](https://github.com/siemens/ix/commit/d98cabc6d8253ecf9328b40b7cf74f7d6129edb2))
* **core/menu:** implement a11y features for menu and burger-menu ([#582](https://github.com/siemens/ix/issues/582)) ([b640409](https://github.com/siemens/ix/commit/b6404093904e265a35459a7cf518911763c21939))
* **core/menu:** rework of menu ([#592](https://github.com/siemens/ix/issues/592)) ([932b051](https://github.com/siemens/ix/commit/932b051f19d4f35a1b1af42bab551eed393e3a16))
* **core/modal:** migrate to shadow dom ([#648](https://github.com/siemens/ix/issues/648)) ([0421bf5](https://github.com/siemens/ix/commit/0421bf56290a3ffd8d58a17e2f95a3d47256c334))
* **core/pill:** migrate to shadow dom ([#664](https://github.com/siemens/ix/issues/664)) ([37b5ec8](https://github.com/siemens/ix/commit/37b5ec891d98b3bad13b757dc800f42cc77b2e88))
* **core/select:** input event ([#608](https://github.com/siemens/ix/issues/608)) ([750eb8e](https://github.com/siemens/ix/commit/750eb8e18cd3679bcae0242fd808a686c5bee283))
* **core/split-button:** migrate to shadow DOM ([#607](https://github.com/siemens/ix/issues/607)) ([3b6dea9](https://github.com/siemens/ix/commit/3b6dea9a73b21880ad5a5b0e4e666516cd55b799))
* **core/tabs:** enable shadowDOM ([#594](https://github.com/siemens/ix/issues/594)) ([69e69c0](https://github.com/siemens/ix/commit/69e69c01a3533622e9f6acfdbb0aa3417d594471))
* **core/tile:** enable shadow dom ([#549](https://github.com/siemens/ix/issues/549)) ([2f4d843](https://github.com/siemens/ix/commit/2f4d843ddb7647023da1f2605cbdb88620f5b7e4))
* **core/toast:** enable shadow dom ([#581](https://github.com/siemens/ix/issues/581)) ([8ac2a47](https://github.com/siemens/ix/commit/8ac2a47da2121a67a225db91056b68fef1b2449c))
* **core/toggle:** component rework ([#568](https://github.com/siemens/ix/issues/568)) ([17daf4b](https://github.com/siemens/ix/commit/17daf4ba70c17ab3f404d5b87c1a5fb5c8dfdc2a))
* **core/toggle:** migrate to shadow dom ([#662](https://github.com/siemens/ix/issues/662)) ([8d5b979](https://github.com/siemens/ix/commit/8d5b97927635ddf9354ff2e745a74d5b9fe84d5b))
* **core/upload:** migrate to shadow dom ([#663](https://github.com/siemens/ix/issues/663)) ([bdced37](https://github.com/siemens/ix/commit/bdced37197c80e6e10a6b8090265cb41c2fc790f))
* **core/workflow:** enable shadow dom ([#551](https://github.com/siemens/ix/issues/551)) ([0a58428](https://github.com/siemens/ix/commit/0a5842831583857ec17c34408401bf253773d814))
* **core:** new classic theme ([#634](https://github.com/siemens/ix/issues/634)) ([23b554d](https://github.com/siemens/ix/commit/23b554d74a68dcd24bc70c339521a495ce31f3b4))
* **core:** replace spinner animation and add loading state to button ([#583](https://github.com/siemens/ix/issues/583)) ([2c5b183](https://github.com/siemens/ix/commit/2c5b18312b1668cc39fae0b5442f5083766e921f))



## [1.6.3](https://github.com/siemens/ix/compare/v1.6.2...v1.6.3) (2023-06-19)


### Bug Fixes

* **core/button:** dispatch form submit event ([4dc776a](https://github.com/siemens/ix/commit/4dc776ad7c2c6b97387e81d08c9f0e8c7e7274c1))
* **core/button:** dispatch submit event with shadow button ([7ca99a1](https://github.com/siemens/ix/commit/7ca99a14efb7a4ca78065d93dcc89a562b275721))
* **core/button:** pass through submit related events ([#578](https://github.com/siemens/ix/issues/578)) ([8a0b410](https://github.com/siemens/ix/commit/8a0b410b64bccb949c27f73f0a1d93cce480f42c))
* **core/icon-button:** dispatch form submit event ([3e91ecf](https://github.com/siemens/ix/commit/3e91ecf2ec5d50dac4dfa6c02655ee729199b3fc))
* **core/icon-button:** dispatch submit event with shadow button ([febb1b8](https://github.com/siemens/ix/commit/febb1b862d62510b707bd6fde16440d23b586f3e))



## [1.6.2](https://github.com/siemens/ix/compare/v1.6.2-beta.0...v1.6.2) (2023-06-07)



## [1.6.2-beta.0](https://github.com/siemens/ix/compare/v1.6.1...v1.6.2-beta.0) (2023-06-07)



## [1.6.1](https://github.com/siemens/ix/compare/v1.6.0...v1.6.1) (2023-06-06)


### Bug Fixes

* **core/basic-navigation:** increase content width to 100% ([#571](https://github.com/siemens/ix/issues/571)) ([0b4abd9](https://github.com/siemens/ix/commit/0b4abd923ea6a6ce6bae75a8e21f8c01eaa68576))



# [1.6.0](https://github.com/siemens/ix/compare/v1.5.0...v1.6.0) (2023-05-31)


### Bug Fixes

* **core/expanding-search:** add full-width support ([#491](https://github.com/siemens/ix/issues/491)) ([b0bb9e2](https://github.com/siemens/ix/commit/b0bb9e270dc6d66da5f99f865762bafbaaaefb77))
* **core/input:** prevent mouse states for read-only and disabled inputs ([#562](https://github.com/siemens/ix/issues/562)) ([b3fdbc1](https://github.com/siemens/ix/commit/b3fdbc104e3e305ec82fa8fb2148388fd7f7970d))
* **core/menu-item:** update title when slot changes ([#539](https://github.com/siemens/ix/issues/539)) ([a36e82a](https://github.com/siemens/ix/commit/a36e82a1ee21b1b6eee22d996a225faa63b1eb59))
* **core/menu:** adapt width ([#514](https://github.com/siemens/ix/issues/514)) ([a7163be](https://github.com/siemens/ix/commit/a7163bed8130ec7ab0ad6ee865f0b362dfcf1d45))
* **core/menu:** show disable menu item also in overflow dropdown disabled ([#527](https://github.com/siemens/ix/issues/527)) ([38feb8e](https://github.com/siemens/ix/commit/38feb8e78aada0e64268a947d9711c90f341ef03))
* **core/modal:** border-radius value ([#517](https://github.com/siemens/ix/issues/517)) ([3f3d305](https://github.com/siemens/ix/commit/3f3d305ebedffe7bec2d4c01517c8c9403da1c1b))
* **core/select:** updated style and multimode functionality ([#516](https://github.com/siemens/ix/issues/516)) ([8db6883](https://github.com/siemens/ix/commit/8db6883c9add4b99d80e59b612db6143b525ad32))
* **core/time-picker:** make inputs editable ([#512](https://github.com/siemens/ix/issues/512)) ([864eb14](https://github.com/siemens/ix/commit/864eb14502b63dc80a892dd1fdcca4e7e92401ff))
* **core/toast:** use steady speed ([#537](https://github.com/siemens/ix/issues/537)) ([df4f168](https://github.com/siemens/ix/commit/df4f168a3fb88d0f743b803c2e5b8f3bf9911a47))


### Features

* **core/bind:** enable shadowDOM ([#533](https://github.com/siemens/ix/issues/533)) ([2f94f3b](https://github.com/siemens/ix/commit/2f94f3b930b1b7d6d9646b22c419f242ea774a0e))
* **core/button:** enable shadowDOM ([#534](https://github.com/siemens/ix/issues/534)) ([7f47305](https://github.com/siemens/ix/commit/7f47305f56553c479df422320e9b1f090e01b479))
* **core/cards:** add card related components ([#542](https://github.com/siemens/ix/issues/542)) ([510b131](https://github.com/siemens/ix/commit/510b1313549738e7ca0ad8562ef75280fee15e80))
* **core/drawer:** enable shadow dom ([#544](https://github.com/siemens/ix/issues/544)) ([eda80e3](https://github.com/siemens/ix/commit/eda80e39fde769e420a879861499eb15571572f0))
* **core/empty-state:** enable shadow dom ([#543](https://github.com/siemens/ix/issues/543)) ([d5c2f0b](https://github.com/siemens/ix/commit/d5c2f0bac0730b169f95c219bae59df682d6e9f9))
* **core/empty-state:** implement empty state ([#523](https://github.com/siemens/ix/issues/523)) ([efc3f7c](https://github.com/siemens/ix/commit/efc3f7c54bc23de245d09ff639b90eff9bf44291))
* **core/key-value:** implement key value ([#545](https://github.com/siemens/ix/issues/545)) ([18a600a](https://github.com/siemens/ix/commit/18a600a69638e3f9922ad49e0e04b02dc3845ca1))
* **core/kpi:** enable shadow dom ([#546](https://github.com/siemens/ix/issues/546)) ([8f369d4](https://github.com/siemens/ix/commit/8f369d488b76a544add535d32b6a5ad6303b913c))
* **core/map-navigation:** expose method to change visibility of sidebar ([#550](https://github.com/siemens/ix/issues/550)) ([da52729](https://github.com/siemens/ix/commit/da527293b50c9cb34abef5a445458e8cc9ed533d))
* **core/message-bar:** enable shadow dom ([#547](https://github.com/siemens/ix/issues/547)) ([4552b2d](https://github.com/siemens/ix/commit/4552b2d9916f8742a251a87b63b61bf8a5df0c33))
* **core/page-header:** add page-header ([#526](https://github.com/siemens/ix/issues/526)) ([cc6164e](https://github.com/siemens/ix/commit/cc6164e80cd8674563f31479ec38894d89b97b70))
* **core/spinner:** enable shadow dom ([#548](https://github.com/siemens/ix/issues/548)) ([c088b8e](https://github.com/siemens/ix/commit/c088b8ef2b149e08d2e2a33ed5dcd4ea2a76627e))
* **core/typography:** add color property ([#530](https://github.com/siemens/ix/issues/530)) ([8eeec5a](https://github.com/siemens/ix/commit/8eeec5aa3b4b82449e59bd798b5d99bd31e12437))
* **core:** add default component mixin ([dbecd00](https://github.com/siemens/ix/commit/dbecd00b2a64a4aeddc487943fc67f4deec6d2ab))
* **core:** integrate @siemens/ix-icons web components ([#524](https://github.com/siemens/ix/issues/524)) ([7a545c2](https://github.com/siemens/ix/commit/7a545c227092e461325971a657941d2bd9324e38))



# [1.5.0](https://github.com/siemens/ix/compare/v1.5.0-beta.4...v1.5.0) (2023-05-02)



# [1.5.0-beta.4](https://github.com/siemens/ix/compare/v1.5.0-beta.3...v1.5.0-beta.4) (2023-05-02)



# [1.5.0-beta.3](https://github.com/siemens/ix/compare/v1.5.0-beta.2...v1.5.0-beta.3) (2023-04-26)


### Bug Fixes

* **core/breadcrumb:** align breadcrumb content centered ([5c400ef](https://github.com/siemens/ix/commit/5c400ef8463124ea0cae3b03bc399b2d2302dd31))



# [1.5.0-beta.2](https://github.com/siemens/ix/compare/v1.5.0-beta.1...v1.5.0-beta.2) (2023-04-25)


### Bug Fixes

* **core/blind:** adjust padding ([#475](https://github.com/siemens/ix/issues/475)) ([4eb1cc6](https://github.com/siemens/ix/commit/4eb1cc6ccff6c67c9be9a6354a861e6d2c5251c2))
* **core/blind:** improve keyboard accessibility ([#461](https://github.com/siemens/ix/issues/461)) ([db091cc](https://github.com/siemens/ix/commit/db091cc130b5dfd04c1fed0c8a07630af799997d))
* **core/blind:** use string value für aria ([cb8a6de](https://github.com/siemens/ix/commit/cb8a6de86b3dbed50c633b6ec5fb8aae5612c205))
* **core/category-filter:** options ([#479](https://github.com/siemens/ix/issues/479)) ([8ceaac6](https://github.com/siemens/ix/commit/8ceaac60d326773aedda10b1df2fbef1a7806085))
* **core/datetime-picker:** adjust done button placement ([#484](https://github.com/siemens/ix/issues/484)) ([a595268](https://github.com/siemens/ix/commit/a5952686079ff960aa0c36fa91f13a2371137097))
* **core/form-controls:** readonly states ([#485](https://github.com/siemens/ix/issues/485)) ([696366d](https://github.com/siemens/ix/commit/696366d49fb139969df13c716d939ddd6eb3225a))
* **core/group:** group selected style and actions & header correction ([#470](https://github.com/siemens/ix/issues/470)) ([21eead6](https://github.com/siemens/ix/commit/21eead68e4b977c1d2d5bc5844617533e5d03514))
* **core/group:** header and item hover/active style ([#453](https://github.com/siemens/ix/issues/453)) ([64cd604](https://github.com/siemens/ix/commit/64cd6044b61d055dea67d1d8043d7f913ea42497))
* **core/modal:** close only target modal ([#469](https://github.com/siemens/ix/issues/469)) ([b3295bb](https://github.com/siemens/ix/commit/b3295bb01431ace565af9b53a91501731c8ffa4c))
* **core/pagination:** select and overflow behavior ([#486](https://github.com/siemens/ix/issues/486)) ([5aec16b](https://github.com/siemens/ix/commit/5aec16bade90b7fab2cbb556e70a481b288dde3d))
* **core/select:** add vertical margin to filter chips ([#474](https://github.com/siemens/ix/issues/474)) ([75b7180](https://github.com/siemens/ix/commit/75b71803e33f5ce68ac4b0909bc386082e63a70e))
* **core/select:** show clear button ([#465](https://github.com/siemens/ix/issues/465)) ([f8e7d93](https://github.com/siemens/ix/commit/f8e7d937d0de6ac6c62e53ca1bbc52ab6963ca06))
* **core/toggle:** remove attribute selector for disable state ([#478](https://github.com/siemens/ix/issues/478)) ([31a2e94](https://github.com/siemens/ix/commit/31a2e9421c3bdeb3d5b10bf1c519ebc2075aa121))
* **core/workflow-steps:** single state ([#464](https://github.com/siemens/ix/issues/464)) ([f4cf8b0](https://github.com/siemens/ix/commit/f4cf8b0b0f039c9c9f21b528780783b6d49c2936))
* **core/workflow-steps:** update step position after first rendering ([#459](https://github.com/siemens/ix/issues/459)) ([715d50d](https://github.com/siemens/ix/commit/715d50d10b557f34ff2d4e9a469568f6cf071e84))
* **core:** Inputs and Textareas cursor ([#490](https://github.com/siemens/ix/issues/490)) ([fa56486](https://github.com/siemens/ix/commit/fa56486c05f933c35fee5087ea3d7fdebc4db617))


### Features

* **core/datepicker:** improve useability of the datepicker for range selection ([#473](https://github.com/siemens/ix/issues/473)) ([c509ec4](https://github.com/siemens/ix/commit/c509ec47849529158da9eb04e9eba2fddca5a995))
* **core/select:** hide header text ([#471](https://github.com/siemens/ix/issues/471)) ([795d326](https://github.com/siemens/ix/commit/795d326a959e6a9add0d3c760e75eb19fcc20a1a))
* **core/select:** show info if no matches found and fix selection bug ([#489](https://github.com/siemens/ix/issues/489)) ([6be3a47](https://github.com/siemens/ix/commit/6be3a47bd2b699ff77dce5a65d83e59c15f73988))
* **core/tooltip:** add position property ([#466](https://github.com/siemens/ix/issues/466)) ([0d18866](https://github.com/siemens/ix/commit/0d188667969a4aef56c1ef74f799a62e430d0d5b))


### Reverts

* Revert "chore: add basic license to private modules" ([bbafc1d](https://github.com/siemens/ix/commit/bbafc1d5a25d8c2d138dea2f6affd04f350a22b1))



# [1.5.0-beta.1](https://github.com/siemens/ix/compare/v1.5.0-beta.0...v1.5.0-beta.1) (2023-03-22)


### Bug Fixes

* **core/breadcrumb:**  handle overflow ([#452](https://github.com/siemens/ix/issues/452)) ([d931353](https://github.com/siemens/ix/commit/d931353a6ae1c89090df7c785c8582e2d524667b))
* **core/chip:** new custom event  ([#441](https://github.com/siemens/ix/issues/441)) ([f713fbd](https://github.com/siemens/ix/commit/f713fbd8622acab99d9f54c33a49d2fcc2c67d77))
* **core/dropdown:** fix editable dropdown width ([#435](https://github.com/siemens/ix/issues/435)) ([ca2312b](https://github.com/siemens/ix/commit/ca2312bf3fb6b0361687af4ac7c9d632776b18a1))
* **core/filter-chip:** align styling to latest styleguide changes ([#458](https://github.com/siemens/ix/issues/458)) ([03a78a8](https://github.com/siemens/ix/commit/03a78a8622f52b5d3abc2482c1b3727b34c4981c))
* **core/menu-item:** adjust bottom background color ([#420](https://github.com/siemens/ix/issues/420)) ([f1f243c](https://github.com/siemens/ix/commit/f1f243c36644ef71131d56b0442517a066e2933c))
* **core/select:** stop form trigger ([#446](https://github.com/siemens/ix/issues/446)) ([03b04a6](https://github.com/siemens/ix/commit/03b04a6434f9502cf05ee1d2c22fe4e1dbdd803d))
* **core/tooltip:** remove arrow if not visible ([#451](https://github.com/siemens/ix/issues/451)) ([6d02372](https://github.com/siemens/ix/commit/6d02372a917e2615e99e5e0568edc6807435d4e3))
* **core/upload:** export update state ([7057c46](https://github.com/siemens/ix/commit/7057c464535f3edc5bb7d4b75d11802265c55e35))
* **core:** add luxon types to dependencies ([b9217be](https://github.com/siemens/ix/commit/b9217be28fe13d39814e87eea7772d3529bbd2b7))


### Features

* **core/blind:** add icon and actions slot ([#448](https://github.com/siemens/ix/issues/448)) ([57d5ecc](https://github.com/siemens/ix/commit/57d5ecce10ddf86a85579a028a716ddfce05e886))
* **core/flip-tile:** add support for custom sizing ([#427](https://github.com/siemens/ix/issues/427)) ([d35f60a](https://github.com/siemens/ix/commit/d35f60a4b5dc6e1b70ffded60b01f7b2c60961e4))
* **core/pagination:** add pagination component ([#413](https://github.com/siemens/ix/issues/413)) ([97abbd3](https://github.com/siemens/ix/commit/97abbd3ae24fef9fcdc6d8c02dc724ac5ec0f83a))
* **core/toast:** add position top-right ([#432](https://github.com/siemens/ix/issues/432)) ([ed88175](https://github.com/siemens/ix/commit/ed88175f3a6951a8194c226fefdcf4a281d0a457))
* **core/tree:** add node clicked and toggled events ([#438](https://github.com/siemens/ix/issues/438)) ([da7d4a6](https://github.com/siemens/ix/commit/da7d4a62d3e53168dd6571380a9f8dd37c358d17))
* **input:** search input example ([#439](https://github.com/siemens/ix/issues/439)) ([e78dc2c](https://github.com/siemens/ix/commit/e78dc2c410fcc8907c56a65f318ecb6e8971ba9a))



# [1.5.0-beta.0](https://github.com/siemens/ix/compare/v1.4.0...v1.5.0-beta.0) (2023-03-08)


### Features

* **vue:** add vue support ([#291](https://github.com/siemens/ix/issues/291)) ([d7bb12c](https://github.com/siemens/ix/commit/d7bb12cb8251ea38fdee344ef12d46f05bc91327))



# [1.4.0](https://github.com/siemens/ix/compare/v1.3.0...v1.4.0) (2023-03-06)


### Bug Fixes

* **aggrid:** convert px to rem ([#378](https://github.com/siemens/ix/issues/378)) ([d3d3c36](https://github.com/siemens/ix/commit/d3d3c36f9afe77e944665900bf6e40f8598a4d1a))
* **core/box-shadow:** use correct style for insert shadow ([553f6a9](https://github.com/siemens/ix/commit/553f6a9dad9ee36b938c860740ad6e6c2367786b))
* **core/button:** remove wrapper level ([#357](https://github.com/siemens/ix/issues/357)) ([25107ff](https://github.com/siemens/ix/commit/25107ff11a2287967d1fef2d6c12230ff96790f2))
* **core/button:** sizing behavior ([#364](https://github.com/siemens/ix/issues/364)) ([da87f98](https://github.com/siemens/ix/commit/da87f984de95ddaca92816b4cffc7a62f36eee0f))
* **core/checkbox:** adjust checkmark size ([#352](https://github.com/siemens/ix/issues/352)) ([7098927](https://github.com/siemens/ix/commit/7098927637990f533600a9010411ff09ca678de5))
* **core/date-picker:** handle empty from date ([#334](https://github.com/siemens/ix/issues/334)) ([0890165](https://github.com/siemens/ix/commit/089016597e91b9786bd70f533e3b92c39288c4ae))
* **core/dropdown-item:** dropdown item disabled state events & icon color ([#390](https://github.com/siemens/ix/issues/390)) ([e906b50](https://github.com/siemens/ix/commit/e906b50c31b8b483787d75d29308069cc1052f35))
* **core/dropdown:** allow nested dropdown ([#425](https://github.com/siemens/ix/issues/425)) ([d2fcaaf](https://github.com/siemens/ix/commit/d2fcaafcb93ea37d7cdf08df97e2894e9dbb5b7b))
* **core/dropdown:** handle multiple dropdowns at once ([#393](https://github.com/siemens/ix/issues/393)) ([4ab0246](https://github.com/siemens/ix/commit/4ab02463890ad4cedbba4e5867a245793684cccc))
* **core/dropdown:** remove button overwrite ([#428](https://github.com/siemens/ix/issues/428)) ([e604e2f](https://github.com/siemens/ix/commit/e604e2f3ec4bf94c68cd856d8a7f90fbf3c2c6fb))
* **core/event-list:** selection and transition effect ([#335](https://github.com/siemens/ix/issues/335)) ([eb24a9e](https://github.com/siemens/ix/commit/eb24a9edf84d5ecf6aa2691667cd7dd12576c29a))
* **core/eventlist:** selected active/hover effect and visual regression test ([#410](https://github.com/siemens/ix/issues/410)) ([93641c5](https://github.com/siemens/ix/commit/93641c597c40eb5eb0f11303633567a5d6b9c3d2))
* **core/form-validation:** form-validation invalid correction ([#383](https://github.com/siemens/ix/issues/383)) ([e9e7fce](https://github.com/siemens/ix/commit/e9e7fcedbf31da40a170efd1080e845e9280ddc8))
* **core/group-context-menu:** prune unused code ([#392](https://github.com/siemens/ix/issues/392)) ([2a0591f](https://github.com/siemens/ix/commit/2a0591f553270c646f4201e172d248a6fbfbe7ce))
* **core/menu:** use scoped context in menu item ([#379](https://github.com/siemens/ix/issues/379)) ([bb1e6db](https://github.com/siemens/ix/commit/bb1e6db38ffe8bed5e3e114709651a0ffde22d78))
* **core/select:** adjust dropdown placement ([#398](https://github.com/siemens/ix/issues/398)) ([0a8e0a2](https://github.com/siemens/ix/commit/0a8e0a2670383bea69fd04c6d30e465364ed336e))
* **core/split-button:** dropdown behavior and middle space ([#339](https://github.com/siemens/ix/issues/339)) ([aa8778e](https://github.com/siemens/ix/commit/aa8778e742a1fb2240d47b824acd6e12ada259a2))
* **core/tabs:** layout stretched ([#345](https://github.com/siemens/ix/issues/345)) ([a8bbca8](https://github.com/siemens/ix/commit/a8bbca83ac7edf1c70ef56f3b75b21e16eb4694f))
* **core/toast:** delay animation into next frame ([#376](https://github.com/siemens/ix/issues/376)) ([2a6ce17](https://github.com/siemens/ix/commit/2a6ce17d5973f23e6550621b27b1d857086bd926))
* **core/toggle:** toggle disable style ([#356](https://github.com/siemens/ix/issues/356)) ([5c4faf8](https://github.com/siemens/ix/commit/5c4faf838af5cefbbdc9640e573889d2d67a2738))
* **core/tree:** allow child elements to receive pointer events ([#369](https://github.com/siemens/ix/issues/369)) ([ed43a53](https://github.com/siemens/ix/commit/ed43a53f2dbf68ab7602ffd9e77753c38fc9fc31))
* **core/tree:** set toggle listener when has children changes ([#430](https://github.com/siemens/ix/issues/430)) ([15e9b20](https://github.com/siemens/ix/commit/15e9b202a4767853938f5f157ec9cd27333d1c69))


### Features

* **core/avatar:** initals and image support ([#375](https://github.com/siemens/ix/issues/375)) ([b586eda](https://github.com/siemens/ix/commit/b586edab4daca22cd9d8753e1ca902314fbe4166))
* **core/basic-navigation:** add mobile support ([#380](https://github.com/siemens/ix/issues/380)) ([2b862c8](https://github.com/siemens/ix/commit/2b862c8e56b4c171b9deecaf93ade6717e0d96b6))
* **core/dropdown:** implement submenu and quick actions ([#325](https://github.com/siemens/ix/issues/325)) ([6694625](https://github.com/siemens/ix/commit/6694625f3a4fc4b901e6a5a4d1cf679fcafc16dc))
* **core/menu:** replace burger menu animation ([#411](https://github.com/siemens/ix/issues/411)) ([37b4789](https://github.com/siemens/ix/commit/37b478917163fd2f1971f6d358a2d8784f370495))
* **core/theme:** adjust theme colors ([#337](https://github.com/siemens/ix/issues/337)) ([a180cb8](https://github.com/siemens/ix/commit/a180cb8ef57b347e189120564e9db0e356770c26))
* **core/tooltip:** add ix-tooltip ([#309](https://github.com/siemens/ix/issues/309)) ([ca3e8a2](https://github.com/siemens/ix/commit/ca3e8a27c082e908877a530a5a0f88f11f89f882))



# [1.3.0](https://github.com/siemens/ix/compare/v1.3.0-beta.1...v1.3.0) (2023-01-27)



# [1.3.0-beta.1](https://github.com/siemens/ix/compare/v1.3.0-beta.0...v1.3.0-beta.1) (2023-01-26)


### Bug Fixes

* **core/menu:** remove text decoration ([#321](https://github.com/siemens/ix/issues/321)) ([f45ac44](https://github.com/siemens/ix/commit/f45ac44ffa62601d8b04f7024b99b5256fe84b4d))
* **core/theme-switcher:** correct typo for MutationObserver ([#320](https://github.com/siemens/ix/issues/320)) ([fce302c](https://github.com/siemens/ix/commit/fce302c45cbd1f3162c87d9364824cfeb08f86c6))
* **core/tree:** initializing tree ([#319](https://github.com/siemens/ix/issues/319)) ([7d9b373](https://github.com/siemens/ix/commit/7d9b3732cd5406bb8cc9073ea3794033b75952ae))



# [1.3.0-beta.0](https://github.com/siemens/ix/compare/v1.2.1...v1.3.0-beta.0) (2023-01-23)


### Bug Fixes

* **aggrid:** remove clip from ag-radiobutton ([#260](https://github.com/siemens/ix/issues/260)) ([7536529](https://github.com/siemens/ix/commit/7536529a4751221a15a7d12d38c85603ffe89e14))
* **core/button:** apply correct disable state ([#286](https://github.com/siemens/ix/issues/286)) ([11f97cc](https://github.com/siemens/ix/commit/11f97ccc815670de2af5eaab74c4b464c4ef2f20))
* **core/category-filter, core/expanding-search:** adjust clear button ([#303](https://github.com/siemens/ix/issues/303)) ([87574a6](https://github.com/siemens/ix/commit/87574a65a3a0ef00729fb8ae704da84be4c5ebec))
* **core/chip:** implement inactive state ([#302](https://github.com/siemens/ix/issues/302)) ([ea0381e](https://github.com/siemens/ix/commit/ea0381ea553dc5ec7057bea0f9750e7d9b398e9b))
* **core/icon-button:** prevent events during disable state ([#262](https://github.com/siemens/ix/issues/262)) ([56d0f3a](https://github.com/siemens/ix/commit/56d0f3af6424a290bb407fbf6b97a8f2e15160cf))
* **core/map-navigation:** overlay close functionality ([#269](https://github.com/siemens/ix/issues/269)) ([014b7ca](https://github.com/siemens/ix/commit/014b7cadd9fe6cab301fb8e70cfbf639a00979b8))
* **core/menu:** update overlay animation ([#282](https://github.com/siemens/ix/issues/282)) ([1feb147](https://github.com/siemens/ix/commit/1feb147152572a9d67c7ba8167cabd2b718194f2))
* **core/modal:** backdrop static only dismisses modal on actual backdrop ([#285](https://github.com/siemens/ix/issues/285)) ([6d55b93](https://github.com/siemens/ix/commit/6d55b93e7be2402caadf147784cffd6dedec2b18))
* **core/modal:** set max-height ([#283](https://github.com/siemens/ix/issues/283)) ([066b356](https://github.com/siemens/ix/commit/066b356ddc17939ffaf29cb75d0fd5998dac95fa))
* **core/select:** replace mutation observer with dom events ([#300](https://github.com/siemens/ix/issues/300)) ([c9ec1ff](https://github.com/siemens/ix/commit/c9ec1fffffc6fa4d413396135b66e711bec41e75))
* **core:** chip alignment  ([#259](https://github.com/siemens/ix/issues/259)) ([1b490dd](https://github.com/siemens/ix/commit/1b490dd2441ddf5e21273a50d1c158caa1b1f08a))
* **core:** pill alignment ([#255](https://github.com/siemens/ix/issues/255)) ([1e0fa2f](https://github.com/siemens/ix/commit/1e0fa2f07b522872d5ed95c1d0cad6617cf6eac2))
* **echarts:** update theme colors ([#281](https://github.com/siemens/ix/issues/281)) ([8a0cbff](https://github.com/siemens/ix/commit/8a0cbff918171f17ca98036cac71e1a3819881dd))


### Features

* **aggrid:** add pagination theme support ([#261](https://github.com/siemens/ix/issues/261)) ([8496a00](https://github.com/siemens/ix/commit/8496a00f91b9811d09aa306ad386cb8e9eb3de0e))
* **angular/modal:** support modal content by component class ([#256](https://github.com/siemens/ix/issues/256)) ([d7479d9](https://github.com/siemens/ix/commit/d7479d98f8fc78835d716b9a5c821cb4608016f3))
* **core/dropdown-button:** add dropdown-button ([#229](https://github.com/siemens/ix/issues/229)) ([8d6ae8b](https://github.com/siemens/ix/commit/8d6ae8b83d3fd2ed9e291a1414e1c4395142e93c))



## [1.2.1](https://github.com/siemens/ix/compare/v1.2.0...v1.2.1) (2022-12-14)


### Bug Fixes

* **aggrid:** set theme font colors ([#238](https://github.com/siemens/ix/issues/238)) ([2f0aeda](https://github.com/siemens/ix/commit/2f0aeda0a54b98f6190d2e7d21a06ce23e2b83c3))
* **html-test-app/modal:** create web component in example ([1ab58b5](https://github.com/siemens/ix/commit/1ab58b59129fad2c8e63950107a99b0e075be4cf))



# [1.2.0](https://github.com/siemens/ix/compare/v1.1.1...v1.2.0) (2022-12-12)


### Bug Fixes

* **angular/modal-service:** pass config object to modal function ([#200](https://github.com/siemens/ix/issues/200)) ([8b5f163](https://github.com/siemens/ix/commit/8b5f163a9f13ddf58069957f6c566f9f21aed903))
* **angular:** downgrade @angular/compiler to v13-lts ([#194](https://github.com/siemens/ix/issues/194)) ([cb3c15b](https://github.com/siemens/ix/commit/cb3c15bf36bb1f121a58c534c7f65beefed5644c))
* **core/checkbox, core/radiobutton:** hide native intput ([#235](https://github.com/siemens/ix/issues/235)) ([c481a6b](https://github.com/siemens/ix/commit/c481a6bd0c6582ffc924268bba386aead0196a64))
* **core/group:** show context-menu based on dropdown ([#222](https://github.com/siemens/ix/issues/222)) ([2bffcb7](https://github.com/siemens/ix/commit/2bffcb74d7e1a5cee45f1f166e1d9e62c710e10b))
* **core/icon-button:** adjust styling of smaller buttons ([#218](https://github.com/siemens/ix/issues/218)) ([e29271b](https://github.com/siemens/ix/commit/e29271bc6e5f8273c3b67f22061577e939445baf))
* **core/menu-avatar:** show avatar icon ([#201](https://github.com/siemens/ix/issues/201)) ([dee02b8](https://github.com/siemens/ix/commit/dee02b84e2684db08de8aa64b880305b94890aae))
* **core/modal:** update header alignment ([#217](https://github.com/siemens/ix/issues/217)) ([83391ba](https://github.com/siemens/ix/commit/83391ba5b3a73aee4f7915826926965c0b8fa19a))
* **core/select:** handle overflow of pills ([#224](https://github.com/siemens/ix/issues/224)) ([81aca1f](https://github.com/siemens/ix/commit/81aca1fc521561e33dc0f44340dbeda43e010712))
* **core:** radio button indeterminate ([#213](https://github.com/siemens/ix/issues/213)) ([dbc0124](https://github.com/siemens/ix/commit/dbc01241b4acb2753438b0bb6560dca18a274c33))
* **documentation:** fix buttons responsiveness ([#203](https://github.com/siemens/ix/issues/203)) ([ff1b946](https://github.com/siemens/ix/commit/ff1b9461b7632d3de27f1047cf8fb86a7f8e790e))


### Features

* **angular/dropdown:** add trigger directive ([#223](https://github.com/siemens/ix/issues/223)) ([e698bc9](https://github.com/siemens/ix/commit/e698bc9b6e5a13a711f066ffb5cf32f0c4c3476c))
* **angular/modal-service:** add property to pass data into context ([#206](https://github.com/siemens/ix/issues/206)) ([0408cd4](https://github.com/siemens/ix/commit/0408cd43eaad120f68bed91da83725df29aaf96b))
* **core/modal:** return modal instance when opening a new modal ([#215](https://github.com/siemens/ix/issues/215)) ([097acfc](https://github.com/siemens/ix/commit/097acfc04efce151904c5dea2999a19558d02adc))
* **core/radiobutton, core/checkbox:** align text if line break occurs ([#214](https://github.com/siemens/ix/issues/214)) ([354db6c](https://github.com/siemens/ix/commit/354db6c586ae3f37f5528eb7a09eb777c1313fb9))
* **core:** activate additional compiler features ([#219](https://github.com/siemens/ix/issues/219)) ([90363be](https://github.com/siemens/ix/commit/90363be066ffcfc5cba5eca7f573f9e5dcdafb6f))



## [1.1.1](https://github.com/siemens/ix/compare/v1.1.0...v1.1.1) (2022-11-30)


### Bug Fixes

* **core/button:** remove border from ghost button ([#184](https://github.com/siemens/ix/issues/184)) ([a11bf31](https://github.com/siemens/ix/commit/a11bf318702af96ab7e2fb1e3f3b7e5758775171))
* **core/event-list-item:** use correct custom properties ([#180](https://github.com/siemens/ix/issues/180)) ([a1fe4c9](https://github.com/siemens/ix/commit/a1fe4c9cc556d9bc050cd000ae0832dc92be5035))
* **core/event-list:** prevent event list from hiding chevron ([#185](https://github.com/siemens/ix/issues/185)) ([ca937a2](https://github.com/siemens/ix/commit/ca937a214d76b5d82bb35eeef0bbe403391c461f))
* **core/map-navigation:** use ix-application-header for header part ([#169](https://github.com/siemens/ix/issues/169)) ([de31afa](https://github.com/siemens/ix/commit/de31afad548b4ed3357583e4dcc34cb14ea2417d))
* **core/select:** observer child label change ([#181](https://github.com/siemens/ix/issues/181)) ([f968e34](https://github.com/siemens/ix/commit/f968e3408c4d24fea6da59225fc36fa9cc090cfa))
* **core/select:** prevent string to be spread by '...' operator ([#166](https://github.com/siemens/ix/issues/166)) ([ec6744a](https://github.com/siemens/ix/commit/ec6744a2e3f75ea3111aa59de47711db732be16d))
* **core:** button group borders ([#170](https://github.com/siemens/ix/issues/170)) ([07f34ae](https://github.com/siemens/ix/commit/07f34aeb9b562501d6d72347593f09cb9912bd08))
* **core:** checkbox changes to match design ([#187](https://github.com/siemens/ix/issues/187)) ([61deb8c](https://github.com/siemens/ix/commit/61deb8ccf4a9228c84edeb65bf67935320e756ff))
* **core:** radiobutton corrected design spec ([#186](https://github.com/siemens/ix/issues/186)) ([f79e099](https://github.com/siemens/ix/commit/f79e099e51744a106c4479db676687c692318596))


### Features

* **documentation:** add deprecated tag to api table ([#189](https://github.com/siemens/ix/issues/189)) ([eddc41b](https://github.com/siemens/ix/commit/eddc41b6b66f298fa48c1fb932183bd1b9c163f2))
* update @siemens/ix-icons to v1.0.2 ([#196](https://github.com/siemens/ix/issues/196)) ([1816654](https://github.com/siemens/ix/commit/1816654fa435660dbf75460b82463621f758c8f7))



# [1.1.0](https://github.com/siemens/ix/compare/v1.0.0...v1.1.0) (2022-11-22)


### Bug Fixes

* **core, documentation:** add missing autogenerated files ([4c861b4](https://github.com/siemens/ix/commit/4c861b4178a332974fbe1ae2b200fe06bebbbf4a))
* **core/button:** add space between leading icon and text ([#149](https://github.com/siemens/ix/issues/149)) ([8392ef6](https://github.com/siemens/ix/commit/8392ef6d979d330571bba6140bcec7f9f76aca90))
* **core/datepicker:** date picker months and years ([#145](https://github.com/siemens/ix/issues/145)) ([e42cae2](https://github.com/siemens/ix/commit/e42cae247a77f9c598a944eeb7122e6aa3ca3e5e))
* **core/datepicker:** remove luxon typing from component interface ([#135](https://github.com/siemens/ix/issues/135)) ([0cafe03](https://github.com/siemens/ix/commit/0cafe030828d0e221993fd2ffe5831ea78c9a87b))
* **core/datetime-picker:** remove box-shadow ([09c760f](https://github.com/siemens/ix/commit/09c760f60558def46ffc6babaf2e2a48eb9aeec3))
* **core/dropdown:** show scrollbar ([#129](https://github.com/siemens/ix/issues/129)) ([d801ddd](https://github.com/siemens/ix/commit/d801dddae7eae7eccc83041139c8005187739704))
* **core/event-list-item:** replace generic hover values with event-list hover values ([385f12f](https://github.com/siemens/ix/commit/385f12fd3e099d8c5dc93fcd690b8cb5a8501a71))
* **core/expanding-seach:** change to a inline style ([7e7bd94](https://github.com/siemens/ix/commit/7e7bd94f035015b23b101fff89f600cff5d774f8))
* **core/map-nav-overlay:** prevent overlay from blocking DOM when hidden ([#156](https://github.com/siemens/ix/issues/156)) ([4a7a5b4](https://github.com/siemens/ix/commit/4a7a5b495a8d75b59ab024393b36761ca74b9f75))
* **core/map-navigation:** adjust styling of sidepanel ([#150](https://github.com/siemens/ix/issues/150)) ([ae79b20](https://github.com/siemens/ix/commit/ae79b20bd29785ff94dd8b3032fbc5f0d7297cbc))
* **core/menu-item:** deprecate bottom property in favor of slot based implementation ([#147](https://github.com/siemens/ix/issues/147)) ([6873415](https://github.com/siemens/ix/commit/68734159d07487795dcd1feb87752f82e6b70a43))
* **core/menu:** close overlays if menu item is clicked ([59b5fe4](https://github.com/siemens/ix/commit/59b5fe412ab2cd45b0bb67692a0710100bd8a9d3))
* **core/menu:** use container to collapse overlay ([dc9e692](https://github.com/siemens/ix/commit/dc9e6927a181d14f43f5f513ac24cc6db7a22f8e))
* **core/styles:** lint ([aaa034c](https://github.com/siemens/ix/commit/aaa034c0b34592c71abcd580fabd08ca67fb5cc5))
* **core/toast:** set default icon to info ([de4a2a1](https://github.com/siemens/ix/commit/de4a2a1ce2c8525fff5d8be02766a3b5b3d1a296))
* **core/tree-item:** replace with tree-item custom properties ([cbda870](https://github.com/siemens/ix/commit/cbda8707c973e5f5406db544c4f0f4bd6dc89550))
* **core:** build fix ([2a98ae9](https://github.com/siemens/ix/commit/2a98ae9ce6e5bdd6026104bfb8062f4d6496eda8))
* **core:** bump stencil to current version ([#139](https://github.com/siemens/ix/issues/139)) ([0e0e669](https://github.com/siemens/ix/commit/0e0e6696111cb51e635068575c48efd78666dbec))
* **core:** changed focus to focus-visible ([f0bade4](https://github.com/siemens/ix/commit/f0bade4b9c76e555077a438f1ab9c2d4d45ab413))
* **core:** changed to MouseEvent ([e000263](https://github.com/siemens/ix/commit/e000263b1f4fce46bde467d41f55eecbc50a40f4))
* **core:** close overlays ([6e1ede3](https://github.com/siemens/ix/commit/6e1ede3fa50a84900bc84631ecaaeb4c62cb517c))
* **core:** datepicker timepicker shadows ([417a5a8](https://github.com/siemens/ix/commit/417a5a87876058b5eb7ac5618252d332412781f7))
* **core:** datetimepicker fix heigh & center ([313c26f](https://github.com/siemens/ix/commit/313c26fdf2a94baa37dc47e0ff0cdca740a534d7))
* **core:** eol uniformization ([#148](https://github.com/siemens/ix/issues/148)) ([8088522](https://github.com/siemens/ix/commit/808852242fbbeed42e2944039007a9e075c689ab))
* **core:** event name changed ([efa2019](https://github.com/siemens/ix/commit/efa2019872d12d30828762256f531710decba24f))
* **core:** expanding search sizing ([3f7728a](https://github.com/siemens/ix/commit/3f7728ae5c4cb5a76d74720584c854c1de1db482))
* **core:** fix build error ([1ec9c1f](https://github.com/siemens/ix/commit/1ec9c1f0bc27faf74aa4d92365aaa1878c99e6c6))
* **core:** fixed text color & added box shadows ([7f145cf](https://github.com/siemens/ix/commit/7f145cfb0f2619743e145bf6a4ed48d9f93a744f))
* **core:** update generated files ([4bc086e](https://github.com/siemens/ix/commit/4bc086ea76b20c488f00cf209bcf1baaf1888814))
* **core:** updated ([39ff691](https://github.com/siemens/ix/commit/39ff691d1bdae88bb12d4031c09b32a4877c998b))
* **docs:** minor typo of dont ([af26457](https://github.com/siemens/ix/commit/af264576305ef8586b7ed6e59c9963fc7721fe47))
* **documentation/css:** fix footer overflow ([244a17f](https://github.com/siemens/ix/commit/244a17fdc3b8dcb814034952d8e3c5fdbe1d42c7))
* **documentation/generate-api:** fix path to example code ([8f55499](https://github.com/siemens/ix/commit/8f5549978e1974956c5fb5a068edb87f0f6a4454))
* **documentation/preview:** fix iframe path ([639d40e](https://github.com/siemens/ix/commit/639d40e7dde0889931026a2f75104aa3736631a1))
* **documentation:** added missing files ([ef64fbc](https://github.com/siemens/ix/commit/ef64fbce0b94526beb386aafd9aa5e5d16a323ef))
* **documentation:** fix about and legal ([f393f6e](https://github.com/siemens/ix/commit/f393f6e7e876ea67192fbbac0cb8399d9c90ff9a))
* **documentation:** fix the alignment ([3e8bc2a](https://github.com/siemens/ix/commit/3e8bc2a3e2cab3cea870f133be699319c64f8af3))
* **documentation:** fix typos ([d499b41](https://github.com/siemens/ix/commit/d499b41d2afdf921b6b55b68cded96f43b4a1394))
* **documentation:** icon search to case insensitive ([b72d999](https://github.com/siemens/ix/commit/b72d999b762c5f2d7294ea3874803bef273462c5))
* **documentation:** map navigation ([f3dd4e5](https://github.com/siemens/ix/commit/f3dd4e5c35488c073ef83cfeaaf1e42eba3b1f65))
* **documentation:** map navigation fix changes ([3f8fb12](https://github.com/siemens/ix/commit/3f8fb12651f65ee1a14d526cb21a2b58f85dcc6b))
* **html-test-app:** add missing dependencies ([3fb6c18](https://github.com/siemens/ix/commit/3fb6c18ddd7c5398c3bb7c8f96d33875b385e126))
* **html-test-app:** place public dir inside src folder ([081c2ff](https://github.com/siemens/ix/commit/081c2ff97424dcac435c4fc6fb478b5eb8b618c3))
* **react/tree:** update tree items ([5ccf349](https://github.com/siemens/ix/commit/5ccf34952e073542b1f9fa24a2246be04a33f914))
* **readme:** changed the version to 1.0.0 ([963b96e](https://github.com/siemens/ix/commit/963b96e9a462987609dec4fb54bcf5c8a84fc147))
* **scripts/release:** remove not existing export ([16190e0](https://github.com/siemens/ix/commit/16190e05f334992f29c865c166b85872592e52da))


### Features

* **angular-test-app:** add rounded tabs example ([#123](https://github.com/siemens/ix/issues/123)) ([6a63afe](https://github.com/siemens/ix/commit/6a63afec405208d665134f29823cd4cfc2f66387))
* **core/date-time-picker:** add additional properties to configure pickers ([#69](https://github.com/siemens/ix/issues/69)) ([30a4d1e](https://github.com/siemens/ix/commit/30a4d1ee90632bb1709893122b4813084400a08e))
* **core/map-navigation:** overlay can be configured via slot attribute ([#133](https://github.com/siemens/ix/issues/133)) ([be58975](https://github.com/siemens/ix/commit/be589758a6e63b6e8069603754c1b06f9e012507))
* **core/map-navigation:** remove static about and legal tab ([3d84a1b](https://github.com/siemens/ix/commit/3d84a1b54a1c0d357ee6e6d8e950e18bc00e7058))
* **documentation/generate-api:** generate docs tags into api table ([19f8722](https://github.com/siemens/ix/commit/19f87222da7c31a67af7f9f5236d25c7fa60bac1))
* **documentation/generate-version:** replace local assets with cdn links ([111bfbb](https://github.com/siemens/ix/commit/111bfbbceded3609c24ef3717b7be89b6896081a))
* **documentation:** add baseUrl support ([261957e](https://github.com/siemens/ix/commit/261957e9292e7c8cacb38036b3afaf1af2216abf))
* **documentation:** mobile version ([d1bf167](https://github.com/siemens/ix/commit/d1bf16768fade9de51466f2b00f91160ccd378aa))
* **documentation:** refactor documentation examples to standalone version ([2dc75aa](https://github.com/siemens/ix/commit/2dc75aa7ebb8d1a5a3838665437e0e5b3553e857))
* **html-test-app:** add default index file ([a9a0608](https://github.com/siemens/ix/commit/a9a0608a30f7d9daca5710df2dfdb94da8cc2422))
* **html-test-app:** migrate examples to test app ([3a4a5f2](https://github.com/siemens/ix/commit/3a4a5f23e4a0e5a7747170cfa58f7571217b45fe))



# [1.0.0](https://github.com/siemens/ix/compare/v1.0.0-beta.5...v1.0.0) (2022-10-07)


### Bug Fixes

* **core:** drawer click button to close & open ([0315d74](https://github.com/siemens/ix/commit/0315d7468366a5335101decbcb13bf88a3d55eda))
* **documentation/theme-switcher:** use label as selection name ([6ef8983](https://github.com/siemens/ix/commit/6ef89830aacf057a7a9c2631d6d7074c21ae9c7e))


### Features

* **core/appliaction-header:** load optional application logo ([89ecb72](https://github.com/siemens/ix/commit/89ecb72e5a0357d6163507c2c3bfcc8ca34f3d1f))



# [1.0.0-beta.5](https://github.com/siemens/ix/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2022-10-06)


### Bug Fixes

* **core/menu-item:** prevent text selection ([548fe2d](https://github.com/siemens/ix/commit/548fe2da74277e92c9fcfca22a2bfa7d23aabe4f))


### Features

* **core/postinstall:** add post install script ([6eeb7bd](https://github.com/siemens/ix/commit/6eeb7bd06693e9ee65a8bcb66ed200f2e6a4270f))



# [1.0.0-beta.4](https://github.com/siemens/ix/compare/v1.0.0-beta.2...v1.0.0-beta.4) (2022-10-05)


### Bug Fixes

* **core/application-header:** align logo in center position ([74be7a1](https://github.com/siemens/ix/commit/74be7a11ff137a11e1cf9fb3c899b82cb5c9ee55))
* **docs:** fix resolutions changes ([d410ad7](https://github.com/siemens/ix/commit/d410ad74e61f871c6a719d89b5fd8d582d4d519a))
* **docs:** resolutions fix ([12327ce](https://github.com/siemens/ix/commit/12327cefd7dff135287173d54e84f3dfbc9ed394))
* **docs:** updated resolutions & text changes ([838fbab](https://github.com/siemens/ix/commit/838fbabc3bc0244b3e642edf77bd1dbcbd236f9a))



# [1.0.0-beta.2](https://github.com/siemens/ix/compare/8a52d175ab8fdc3418effe1bc9cb286accf8ab31...v1.0.0-beta.2) (2022-09-30)


### Bug Fixes

* **aggrid/style:** use theme variables in filter ([79a1e87](https://github.com/siemens/ix/commit/79a1e8748bc4b82f43cd8314a85ad9cb716d00bf))
* **angular-test-app:** remove path overwrite ([606f2e4](https://github.com/siemens/ix/commit/606f2e4516ebecca3a478e68a4d361b7490d2e3d))
* build & assets ([df0a03b](https://github.com/siemens/ix/commit/df0a03b8f8eb5dbc0e08fb402ded1bc8e1b6603c))
* **core/breadcrumb:** fix color and alignment of button ([1564fd8](https://github.com/siemens/ix/commit/1564fd803337813a7a76c385f86c231a7ecbd80d)), closes [#14](https://github.com/siemens/ix/issues/14)
* **core/button:** add default button height ([51218e6](https://github.com/siemens/ix/commit/51218e683cc4e65174a0a053eddbf0c51dd5a79c))
* **core/button:** update styling ([df71647](https://github.com/siemens/ix/commit/df716471afc8374efbf90bc31d3a301642ad8fc8))
* **core/drawer:** update vrt snapshots ([678a719](https://github.com/siemens/ix/commit/678a719718e1899e5e6e3e0e779bc93eec41bab5))
* **core/dropdown:** migrate to shadowdom ([8a52d17](https://github.com/siemens/ix/commit/8a52d175ab8fdc3418effe1bc9cb286accf8ab31))
* **core/group:** fix focus visual and behavior ([ecaa4ba](https://github.com/siemens/ix/commit/ecaa4bae21122c3012ffb0fad06ba1dfe03b74a5))
* **core/group:** prevent null pointer exception ([d22abe0](https://github.com/siemens/ix/commit/d22abe066dc21ff2b33cdffc71939bd659c8eb94))
* **core/input:** fix border radius ([13efded](https://github.com/siemens/ix/commit/13efdeda8a929d56c3b4155d70d797678816bb19))
* **core/modal:** add branch for missing 'beforeDismiss' callback' ([4904c9d](https://github.com/siemens/ix/commit/4904c9d0f9146759a72117aa796d4dfa47e26200))
* **core/modal:** update styling ([922fc01](https://github.com/siemens/ix/commit/922fc0160225347241be90942a1e223904aff41c))
* **core/scss:** fix import path of shadow ([dd25727](https://github.com/siemens/ix/commit/dd25727d1f7d812c196bf77f8580f83f1e481835))
* **core/style:** remove siemens logo from classic theme ([646a920](https://github.com/siemens/ix/commit/646a920d61217460ced4c5587c1d632c858276c6))
* **core/style:** update theme variables with latest zeplin export ([e1fb195](https://github.com/siemens/ix/commit/e1fb195e5e120a202311fbd2922106a5ce5b236b))
* **core/toast:** update styling ([080c511](https://github.com/siemens/ix/commit/080c511a75bbab72858ff03604fa97d2e3c77b71))
* **core:** fix url in bug property of root package.json ([9613f43](https://github.com/siemens/ix/commit/9613f43097b48c6d73e8e912e52f8ea6e52c6e3f))
* **core:** removed & ignored build file from git ([1b69172](https://github.com/siemens/ix/commit/1b69172682867e2275712d279b4a4c6d54edd474))
* **docs:** added missing dependency & unix paths fix ([abe7f0c](https://github.com/siemens/ix/commit/abe7f0cd1b66cc9443843e860a9b78d526ae24aa))
* **docs:** warning normalized ([036a100](https://github.com/siemens/ix/commit/036a10097bac04c5cbc746be8685863730eabecd))
* **documentation/generate-api:** fix licence header generation ([e430e14](https://github.com/siemens/ix/commit/e430e1468a17c8d79fc9873c1198e0b2f98b8c5a))
* **documentation:** change baseUrl to / ([3484e0d](https://github.com/siemens/ix/commit/3484e0d08c17cc58e96c0265d7cb8317ac2fd64c))
* **documentation:** copy brand-theme without node_modules ([c86c841](https://github.com/siemens/ix/commit/c86c841294842e2587cf28473a8f1e4a3dec1546))
* **react-test-app:** add modal preview route ([2567cd3](https://github.com/siemens/ix/commit/2567cd3cb11b599cff9ecdce902a3ad6c4c6c598))
* **theme/color:** put static colors in seperate object hast to prevent zombie theme file generation ([0eab266](https://github.com/siemens/ix/commit/0eab2662d40fcbbd1034d5ec2292c033577523ce))


### Features

* **aggrid:** add theming support for aggrid ([d397cb1](https://github.com/siemens/ix/commit/d397cb1fc80e82fc5e09cd4b1bba0f5cf399b539))
* **aggrid:** added missing dev dependency ([147b201](https://github.com/siemens/ix/commit/147b20169f30cb845b8bbdbfa90464cc9de92d36))
* **aggrid:** init aggrid theming ([3ed2698](https://github.com/siemens/ix/commit/3ed269826d30cd61ddb298cff0f71411339191f6))
* **angular/modal:** add angular framework integration for modal ([dfa4001](https://github.com/siemens/ix/commit/dfa40015c6c99cce2ee4719627b9813fad1e5f9c))
* **angular/toast:** add framework integration for custom toast message ([7f31f9b](https://github.com/siemens/ix/commit/7f31f9b6b2f23c2810f3090c0daadbd359f24e47))
* **angular/tree:** add framework integration for tree ([4b810ef](https://github.com/siemens/ix/commit/4b810efc7b4bac888209407410892793a91fe4ed))
* **angular:** update to angular 14.2.0 ([156cd9f](https://github.com/siemens/ix/commit/156cd9f7338188cf4c266da9bdcd9147199a22ad))
* **brand-theme:** remove brand theme from core ([a333448](https://github.com/siemens/ix/commit/a3334482b441bba6f366099b9280e9371fd80c82))
* **core/colors:** update colors and generate theme ([e195c81](https://github.com/siemens/ix/commit/e195c81f0ca5f265c61cf8fd3601b09e42db8533))
* **core/date-time-picker:** migrate date-time-picker from core-ui ([2c67cad](https://github.com/siemens/ix/commit/2c67cadc335e46ef0d86c7db046b12101d0a6b96))
* **core/expanding-search:** update styling for brand and classic themes ([13d74f2](https://github.com/siemens/ix/commit/13d74f2fa7980cefcbbb1d902bdf871f8c6f6f37))
* **core/kpi:** add kpi web component ([dfc8f2c](https://github.com/siemens/ix/commit/dfc8f2c0184a062d175bc69b9a64156e4cffa8e1))
* **core/menu:** toggle between light and dark variant of current theme ([acd08f9](https://github.com/siemens/ix/commit/acd08f9c82a258b94a1a3b72eff913f15668c7e5))
* **core/style:** add html table ([07d32ce](https://github.com/siemens/ix/commit/07d32ce7db418ee594a7d068f7058ff2e972d8d8))
* **core/tabs:** add oval tab headers ([0e32dca](https://github.com/siemens/ix/commit/0e32dca9a1c5208f4767b0dc3725d017664a80be))
* **core/toggle:** add v7 styling, keyboard access and indeterminate state ([7602def](https://github.com/siemens/ix/commit/7602def3e308ec3d649249ad8bd6c292a62760c8))
* **core/upload:** add i18n for disabled state ([69a940f](https://github.com/siemens/ix/commit/69a940f2c04e3674a9036a54687310d2ef59b64b))
* **core/upload:** add multiline support and v7 styling ([f2c13e2](https://github.com/siemens/ix/commit/f2c13e22e6118f02841af2ec26696a590f9315b4))
* **core/validation-tooltip:** add validation tooltip ([3f196ac](https://github.com/siemens/ix/commit/3f196ac7e5d7fb48a3ca404165cf58f1f0fcb4d1))
* **core/workflow-steps:** add web component implementation ([dcc2bc8](https://github.com/siemens/ix/commit/dcc2bc8bd0ce7fb465c14b26d50c31037e103cd2))
* **core:** merge latest changes from core-ui repo ([73d7e33](https://github.com/siemens/ix/commit/73d7e3386605f03327248777820f3a46e6b16f30))
* **core:** remove legacy core ui styles, configurations and component prefix ([26647ec](https://github.com/siemens/ix/commit/26647ecfd4f3e826167b86ee9430f26a56ac1fa0))
* **docs:** add new landing page ([60d25e1](https://github.com/siemens/ix/commit/60d25e1f4e65a2251e39f941e065db7ed2c38f67))
* **docs:** updated package.json ([ca90333](https://github.com/siemens/ix/commit/ca90333846f5de1b3074fd7e8d1e9adcd5cee5b1))
* **documentation:** code cleanup & improvements ([ad382d9](https://github.com/siemens/ix/commit/ad382d99ccc35567313a9d8c1636bc95c1b0d198))
* **documentation:** prepare documentation for github release ([74358ef](https://github.com/siemens/ix/commit/74358ef72ff695c058342d381ecdae2f5534ff84))
* **echarts:** add echarts theme as standalone package ([0a13952](https://github.com/siemens/ix/commit/0a139529120272ab303378d4b5cd23c5318cc421))
* fulfill open source checklist ([20ec7e4](https://github.com/siemens/ix/commit/20ec7e427e2d952220884b12f7c5c45b24a45fdd))
* **global:** added yarn & turbo ([d7ff5db](https://github.com/siemens/ix/commit/d7ff5dbd7978d1b263da53ae67a9eeb794af88bf))
* **react-test-app:** migrated webpack  to vite ([9cf50b5](https://github.com/siemens/ix/commit/9cf50b52c04c5346c2fbea58e3c0ed70644514b2))
* **react/tree:** add wrapper component for tree component ([7609876](https://github.com/siemens/ix/commit/7609876134460b59569ed0d086f473ff1fce15ff))
* **root:** improve ci cache ([80ff193](https://github.com/siemens/ix/commit/80ff19353bab7894a865956d719b83ccf1a0f9b3))
* **root:** update ci ([e85a34e](https://github.com/siemens/ix/commit/e85a34e18a2c414f2bb0f431c338699a49ad807f))
* **root:** updated CI for yarn ([cdd7879](https://github.com/siemens/ix/commit/cdd78799f3f31499457dd1145bd9451d30871cf8))
* **root:** updated lock file ([c3de9f9](https://github.com/siemens/ix/commit/c3de9f9b9f738b67ec8130ca3737f993ba926172))
* **root:** updated readme ([353efe5](https://github.com/siemens/ix/commit/353efe520f1c07639618fea1ec04701d8dd16b7c))
* **root:** updated readme & package.json ([310de98](https://github.com/siemens/ix/commit/310de9859a36cac1b3ba5195720f1fbd818796d0))
* use brand-theme optional in core and docs ([8978d3d](https://github.com/siemens/ix/commit/8978d3d61770b818405267b0cf6361b398e2c683))



