/\*

## 5.0.0

### Major Changes

- [#2859](https://github.com/siemens/ix/pull/2859) [`25097d9`](https://github.com/siemens/ix/commit/25097d958e662245c0bec130a2d915a9b38628cb) Thanks [@danielleroux](https://github.com/danielleroux)! - ## Migrate to SI Theme 6 tokens

  Adopt SI Theme 6 semantic tokens: `--theme-si-sys-*` becomes `--si-sys-color-*`; `--theme-si-classic-ref-*` and `--theme-si-ref-*` become `--si-ref-*`; Sass variables become `$si-sys-color-*`. Choose a purpose-specific system or reference token for each legacy `--theme-*` use rather than blindly renaming its prefix. The common legacy layer removes sizing, spacing, text-decoration, effects, typography metric/shorthand, and remaining legacy color, chart, border, font-family, and branding exports; only five timing compatibility variables remain. Migrate application-owned references using `BREAKING_CHANGES/v6.md`.

  Generated `--theme-<component>-*` aliases are no longer included and no longer customize migrated components. Replace them with corresponding scoped `--ix-*` properties; `BREAKING_CHANGES/v6_components_tokens.md` maps downstream alias references. Color-valued component props such as `iconColor` and event-list `itemColor` now require full CSS custom-property names including `--`; exported `NotificationColor` values include it too.

  ## Customize components and density

  Component-scoped `--ix-*` properties expose dimensions, spacing, icons, and density-aware geometry. `ix-action-card`, `ix-chat-input`, `ix-chat-ai-message`, and `ix-chat-user-message` also expose scoped appearance and state overrides without internal selectors. Density-aware sizing and spacing respond to live density changes across core components and legacy-backed styles while preserving default-density geometry. Remaining chat, checkbox, and event-list consumers use system tokens; default spacing and chat font sizes remain preserved, while compact density also applies to migrated spacing and typography. Standalone `ix-icon` retains the icon package's 20px default in both densities and honors explicit `size` values; applicable component-owned icons use 20px by default and 16px in compact density.

  ## Styling changes and compatibility

  SI Theme 6 semantic colors now drive date-picker day, range, and today states; badge status backgrounds and on-status colors; completed and selected workflow-step hover/press accents; legacy form controls; and global style utilities. The expanding-search active-button, event-list-item empty-indicator, and date-dropdown divider borders use system border colors and the default system border width. Existing component-scoped border overrides still take complete border values. Warning, critical, and neutral colors and shadows may visibly differ under SI Theme 6.

  Remove the legacy shadow aliases `--theme-box-shadow-lvl-*`, `--theme-box-shadow-level-*`, and `--theme-box-shadow-insert`. Use the complete `--si-sys-color-effects-shadow-1` through `--si-sys-color-effects-shadow-4` values directly as shadows. The inset effect has no system-token replacement; remove it or define an application-owned inset shadow. Input-like controls, shared input mixins, and legacy native inputs no longer render decorative inset shadows in normal, hover, or focus states. Obsolete input, select, chat-input, and expanding-search shadow custom properties are removed; keyboard-focus indicators and browser autofill background correction are unchanged.

  Native `<pre>`, `<code>`, `<kbd>`, and `<samp>` styling in the reset, globals, and legacy styles now uses `--si-ref-typography-font-family-mono`. The classic theme's monospace default changes from JetBrains Mono to `'Courier New', monospace`.

  ## Integration changes

  AG Grid consumes grouped `--si-sys-color-*` tokens for design-tokens 0.12 compatibility. Border and focus-border defaults use `--si-sys-sizing-border-width-default`, without changing their width or disabled column borders. Overrides of `--theme-border-width-default` and `--theme-focus-border-thickness` no longer affect these defaults; migrate to the system token or the matching AG Grid theme parameter.

  ECharts `getComputedCSSProperty` no longer prepends `--theme-`. Pass complete CSS custom-property names, including `--`, and migrate legacy theme references to their SI Theme 6 equivalents.

### Patch Changes

- Updated dependencies [[`e7c2fd0`](https://github.com/siemens/ix/commit/e7c2fd0da802c604a798f47f5078a026612f0f48), [`9c7ddbc`](https://github.com/siemens/ix/commit/9c7ddbc1367a033ad9aff676f97196fac7f4b9b1), [`efb652d`](https://github.com/siemens/ix/commit/efb652de09862f3e402ad5762204faa0d0ef4635), [`0c95210`](https://github.com/siemens/ix/commit/0c952102075ef40aa5768488efe0198af143719a), [`c69a0da`](https://github.com/siemens/ix/commit/c69a0da722a5eb29f8f1a4e68e59144a074803e2), [`962cdb7`](https://github.com/siemens/ix/commit/962cdb71eae348ee5a03aae4b15da25f1e231703), [`a0eedb2`](https://github.com/siemens/ix/commit/a0eedb23edfab98bd9137364ba759239a5811db1), [`e77e890`](https://github.com/siemens/ix/commit/e77e890634212507a5bd94cc600937b525896e00), [`bd56270`](https://github.com/siemens/ix/commit/bd5627058a9fbb07c736711f06c5e45ea012ff2d), [`47dea5b`](https://github.com/siemens/ix/commit/47dea5b1fd9ca216959dbf5c9fe0d66c90fe5006), [`97af7a2`](https://github.com/siemens/ix/commit/97af7a2eb4b0e41401a9abd4f288248e671171fc), [`51962f5`](https://github.com/siemens/ix/commit/51962f5d1bfc882caf0b33e8ad0e75e56ee6da69), [`950d343`](https://github.com/siemens/ix/commit/950d3436eca7720c79187a40ec298641ace1b546), [`b1328b2`](https://github.com/siemens/ix/commit/b1328b2955992c42f2dcb588ce74c2109255315d), [`3ea6e6b`](https://github.com/siemens/ix/commit/3ea6e6b30879063f792fd54a99e3256b2278443b), [`322fbff`](https://github.com/siemens/ix/commit/322fbffcc453c89bb5fbc51662122ee5288ce89e), [`9f7b9c3`](https://github.com/siemens/ix/commit/9f7b9c3300ebe7acb5ac301ee4a91110c0d8171b), [`9f7b9c3`](https://github.com/siemens/ix/commit/9f7b9c3300ebe7acb5ac301ee4a91110c0d8171b), [`7349a55`](https://github.com/siemens/ix/commit/7349a55a54bc8d21a6c2bdfb9d17c0ff7e2b02ce), [`08d9f79`](https://github.com/siemens/ix/commit/08d9f790435242a2a33f564f8afdc5bb11952bed), [`3fcaced`](https://github.com/siemens/ix/commit/3fcaced4ecc8063aa9e239a0238f7d3b8ad3d75a), [`51962f5`](https://github.com/siemens/ix/commit/51962f5d1bfc882caf0b33e8ad0e75e56ee6da69), [`5b30214`](https://github.com/siemens/ix/commit/5b30214fcc2ea9f8374d3aa5f0a9e58b5dafacaf), [`3b713f4`](https://github.com/siemens/ix/commit/3b713f4bf179a765fe4b0a097add3c9baaab2a8c), [`8434d9f`](https://github.com/siemens/ix/commit/8434d9f4fc83fe1d01cc4d8aaa9666e0f8802425), [`4aee443`](https://github.com/siemens/ix/commit/4aee443a11a8e9ea68ad8ed7e5b0cac747d8fec6), [`94b305c`](https://github.com/siemens/ix/commit/94b305cc433bb369731b77a5a8c0146ede150f22), [`5e45a40`](https://github.com/siemens/ix/commit/5e45a40fcc3abf82d58ae552fecb0b9a7ba39aae), [`bcd17fc`](https://github.com/siemens/ix/commit/bcd17fcba1499663610c08d1dff08c6423e8e1f4), [`7707d6b`](https://github.com/siemens/ix/commit/7707d6b3606ad0187a4381375e787aca12127d58), [`d2bee1f`](https://github.com/siemens/ix/commit/d2bee1fb2fdf0a39c4fe843f09ab973da1748faf), [`25097d9`](https://github.com/siemens/ix/commit/25097d958e662245c0bec130a2d915a9b38628cb), [`7f7b6cc`](https://github.com/siemens/ix/commit/7f7b6ccd97f282b90345e99628d1321356efa644), [`64018f4`](https://github.com/siemens/ix/commit/64018f49843e4eb8e8744a4b7f392c52a90e6708), [`e5fe894`](https://github.com/siemens/ix/commit/e5fe894b98284be1227fba8fa47fab2652ed095d)]:
  - @siemens/ix@6.0.0

## 4.1.1

### Patch Changes

- [#2698](https://github.com/siemens/ix/pull/2698) [`38b9440`](https://github.com/siemens/ix/commit/38b9440c04d0995d2446fd6d843156d4f1c8c68b) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Update ix-icons peer dependency to V3.5.0.

## 4.1.0

### Minor Changes

- [#2580](https://github.com/siemens/ix/pull/2580) [`64ea4f6`](https://github.com/siemens/ix/commit/64ea4f631d839ceb3e655c8c69546d5a53804ec3) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Expanded the supported Echarts peer dependency range to include "Echarts 6" while maintaining compatibility with Echarts 5

## 4.0.0

### Patch Changes

- Updated dependencies [[`8378937`](https://github.com/siemens/ix/commit/8378937cd0bfe0dab0e98e7460a277fe275c5d51), [`8765757`](https://github.com/siemens/ix/commit/8765757dd53c958ea0e1a481acb499cfee2e3eae), [`73a2ed3`](https://github.com/siemens/ix/commit/73a2ed3ef3f29a31391ff4ac858a66e77f9fac28), [`ce6cd94`](https://github.com/siemens/ix/commit/ce6cd949652759897f15dea38be7cf3a28aa0841), [`d10b03c`](https://github.com/siemens/ix/commit/d10b03c34b2ac1c100bdff9523ae53ff4db3cecc), [`f2c8b83`](https://github.com/siemens/ix/commit/f2c8b83475c078575b2d47f465e10307b68b108f), [`c97d897`](https://github.com/siemens/ix/commit/c97d8973556588498aa4e56e1f75a8e57a4efd5c), [`c81324b`](https://github.com/siemens/ix/commit/c81324b9b27320bd355c880a1ccffc82732f26a3), [`40cfbe0`](https://github.com/siemens/ix/commit/40cfbe0b2ca2b6a0cc6059ce4d2b58fb20a5c72a), [`1333ad8`](https://github.com/siemens/ix/commit/1333ad838050601fd87de4c2c81c291e42c9ceea), [`91f811a`](https://github.com/siemens/ix/commit/91f811af47662c550a2f23e29b5280db49869039), [`60a9728`](https://github.com/siemens/ix/commit/60a97283b68c3505950fe7760d53f6380d0f64c4), [`fdb15b2`](https://github.com/siemens/ix/commit/fdb15b26af22ab06a5a2166e60c88dc5a726fe5b), [`3e90786`](https://github.com/siemens/ix/commit/3e90786b75a84cfb554221049cc99674ef43fc70), [`3964a2a`](https://github.com/siemens/ix/commit/3964a2af37422056acfcd40bfde31ebe5f0235ad), [`f9e3802`](https://github.com/siemens/ix/commit/f9e3802332deeff4a4f89872440e690fefdf1f77), [`cbb0716`](https://github.com/siemens/ix/commit/cbb07167624b78e7c471825ad334a9c019b0d351), [`c81324b`](https://github.com/siemens/ix/commit/c81324b9b27320bd355c880a1ccffc82732f26a3), [`7406be7`](https://github.com/siemens/ix/commit/7406be793067b6e8b4365d2c365d6d2785a99b46), [`2ec2c70`](https://github.com/siemens/ix/commit/2ec2c7081e9757b79f21a3ece47074149c5af6de), [`4d35515`](https://github.com/siemens/ix/commit/4d3551582390ca15a0e523a9258c6766de678896), [`36ce453`](https://github.com/siemens/ix/commit/36ce453749a78c9df2078cefc840d4dc1dfb8a5b), [`cdae15b`](https://github.com/siemens/ix/commit/cdae15b5baef1824d68e57f96370e6b31c767417), [`ba15b50`](https://github.com/siemens/ix/commit/ba15b505cf4dcb1086794d15e235690fdd7ca51a), [`64e6cfe`](https://github.com/siemens/ix/commit/64e6cfe19ce0c1b4350492cbdd15c2e96ea64795), [`7042a10`](https://github.com/siemens/ix/commit/7042a1021a4499c38f4a66aac9e5f32e9431062c), [`b00da1c`](https://github.com/siemens/ix/commit/b00da1c87f93c86a6c60f40d2ae7952d345ab8d0), [`653f136`](https://github.com/siemens/ix/commit/653f13653a332aad0107e29de1b26d0cc2bc8784), [`4643a65`](https://github.com/siemens/ix/commit/4643a65f65a463e535daf799f65f7a6cc423e11d), [`5f141c1`](https://github.com/siemens/ix/commit/5f141c1a8774a0a190f8a51fc23dd8e1a0eabd08), [`a6a5309`](https://github.com/siemens/ix/commit/a6a530950acd733b2a07a602ecdbabf120719449), [`c81324b`](https://github.com/siemens/ix/commit/c81324b9b27320bd355c880a1ccffc82732f26a3), [`8c7fb12`](https://github.com/siemens/ix/commit/8c7fb12c2e5abfde5474146004cef16de0fa0e08), [`4161ab9`](https://github.com/siemens/ix/commit/4161ab9e7188ce96991b0922999867d0f550005a), [`130df33`](https://github.com/siemens/ix/commit/130df33a9215ddf6cd8e1f6807ef58cff6a02351), [`130df33`](https://github.com/siemens/ix/commit/130df33a9215ddf6cd8e1f6807ef58cff6a02351), [`e324caa`](https://github.com/siemens/ix/commit/e324caa330a2e99d34f309402ccd68d39156dc93), [`4231d51`](https://github.com/siemens/ix/commit/4231d51264e66629a704b93b46e58e5bac4b7810), [`7406be7`](https://github.com/siemens/ix/commit/7406be793067b6e8b4365d2c365d6d2785a99b46), [`834bbbf`](https://github.com/siemens/ix/commit/834bbbf8cc30d75c5d3fdf3cf91e93a7498150a0), [`f4f8921`](https://github.com/siemens/ix/commit/f4f89214d5e0065248d1610a3bb7837c74417610), [`8c7fb12`](https://github.com/siemens/ix/commit/8c7fb12c2e5abfde5474146004cef16de0fa0e08), [`3ece658`](https://github.com/siemens/ix/commit/3ece658f4328b91f649a4dc06857358d9fd07144), [`909bb6a`](https://github.com/siemens/ix/commit/909bb6a13107e8d438ed879bf7735941ce44f99d), [`7406be7`](https://github.com/siemens/ix/commit/7406be793067b6e8b4365d2c365d6d2785a99b46), [`f9e3802`](https://github.com/siemens/ix/commit/f9e3802332deeff4a4f89872440e690fefdf1f77), [`b5e7384`](https://github.com/siemens/ix/commit/b5e7384ddb2a085f3730d657d5ff867e5603fb46), [`c81324b`](https://github.com/siemens/ix/commit/c81324b9b27320bd355c880a1ccffc82732f26a3), [`130df33`](https://github.com/siemens/ix/commit/130df33a9215ddf6cd8e1f6807ef58cff6a02351), [`22699fa`](https://github.com/siemens/ix/commit/22699fa8d411239fe14f067d21ff6b1c08dd0355)]:
  - @siemens/ix@5.0.0

## 3.0.2

### Patch Changes

- [#2403](https://github.com/siemens/ix/pull/2403) [`5e95ce7`](https://github.com/siemens/ix/commit/5e95ce73fe20d817bbdc75c8c190568c4747b708) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Use Siemens Sans font.

* SPDX-FileCopyrightText: 2026 Siemens AG
*
* SPDX-License-Identifier: MIT
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
  \*/

# @siemens/ix-echarts

## 3.0.1

### Patch Changes

- [#2313](https://github.com/siemens/ix/pull/2313) [`e18d391`](https://github.com/siemens/ix/commit/e18d391dc52dd29a7723c0c0dc092c11bd097ac0) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Update **eCharts** theme to match latest design spec.

- [#2317](https://github.com/siemens/ix/pull/2317) [`0a3b5c9`](https://github.com/siemens/ix/commit/0a3b5c9f482c0bcecb8e58f131ebad1baa2aedce) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Style **axisLabel** for **eCharts** gauge charts.

## 3.0.0

### Major Changes

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1630](https://github.com/siemens/ix/pull/1630) [`72021acc858698116e5a02d98b486c9d88269616`](https://github.com/siemens/ix/commit/72021acc858698116e5a02d98b486c9d88269616) Thanks [@jul-lam](https://github.com/jul-lam)! - - The **echarts** theme names have been adapted to the default theme names.
  - `convertThemeName` function is removed because not needed anymore after aligning echarts theme names

### Patch Changes

- [#1642](https://github.com/siemens/ix/pull/1642) [`241a5ea96cbcf07c3f9684f630ac308902449e1b`](https://github.com/siemens/ix/commit/241a5ea96cbcf07c3f9684f630ac308902449e1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Added missing dist folder to deployment

## 3.0.0-alpha.1

### Patch Changes

- [#1642](https://github.com/siemens/ix/pull/1642) [`241a5ea96cbcf07c3f9684f630ac308902449e1b`](https://github.com/siemens/ix/commit/241a5ea96cbcf07c3f9684f630ac308902449e1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Added missing dist folder to deployment

## 3.0.0-alpha.0

### Major Changes

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

### Patch Changes

- [#1630](https://github.com/siemens/ix/pull/1630) [`72021acc858698116e5a02d98b486c9d88269616`](https://github.com/siemens/ix/commit/72021acc858698116e5a02d98b486c9d88269616) Thanks [@jul-lam](https://github.com/jul-lam)! - The **echarts** theme names have been adapted to the default theme names

## 2.3.1

### Patch Changes

- [#1604](https://github.com/siemens/ix/pull/1604) [`7ef10e3f6d`](https://github.com/siemens/ix/commit/7ef10e3f6d71f3067b068c5d1f3707f1b3e8cfcd) Thanks [@silviowolf](https://github.com/silviowolf)! - Update **ECharts** theme chart colors.

## 2.3.0

### Minor Changes

- [#1421](https://github.com/siemens/ix/pull/1421) [`4804d54c4b`](https://github.com/siemens/ix/commit/4804d54c4b7cc70a8c155397d0c4ef9eefa13ec4) Thanks [@matthiashader](https://github.com/matthiashader)! - feat(echarts): add utility function to access color variables

## 2.2.0

### Minor Changes

- [#1190](https://github.com/siemens/ix/pull/1190) [`7c13c7f9a1`](https://github.com/siemens/ix/commit/7c13c7f9a159fb13502cb8a88f2e40b285a9b77e) Thanks [@jul-lam](https://github.com/jul-lam)! - feat(echarts): provide utility function to convert theme names and align charting colors
