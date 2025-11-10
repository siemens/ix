# @siemens/ix-react

## 4.0.0

### Major Changes

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

- [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

- [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

  Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

  Fixes #2010

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

- [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

  New name:
  From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

  Components:

  - `ix-card-list`
  - `ix-category-filter`
  - `ix-datetime-picker`
  - `ix-menu`
  - `ix-menu-about-news`
  - `ix-menu-avatar`
  - `ix-pagination`
  - `ix-select`
  - `ix-update`

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
  **ix-time-picker** and **ix-datetime-picker**.
  These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

  `animation` -> `disableAnimation`
  `backdrop` -> `hideBackdrop`
  `closeOnEscape` -> `disableEscapeClose`

  All used to have a default value of `true`. They all default to `false` now.

- [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

  BREAKING-CHANGES:

  - Rename `state`to `variant`
  - Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

- [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

  `ghost` -> `subtle`
  `visible` -> `invisible`
  `showChevron` -> `hideChevron`

  All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

- [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

- [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

- [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

- [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

  - add `header` slot to additional content inside the header like ix-pills
  - `closeOnClickOutside` property to close pane if user clicked outside of an pane

- [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

- [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

  - `nameSuffix` text to show next to the application name
  - `companyLogo` an alternative to logo slot just for an image path
  - `companyAlt` alt property to company logo `img` tag
  - `appIcon` image path for the app icon
  - `appIconAlt` alt property of the app icon `img` tag
  - `hideBottomBorder` disable button border to create an extended header

  Added new `slot` to **ix-application-header**

  - `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

  Align basic styling of **ix-application-header** e.g. gaps and margins

- [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

- [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

- [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (<a>) tag when an href property is provided

  - New properties `target` and `rel` were added to support enhanced link behavior
  - Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

  Fixes #2011

- [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
  Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

- [#2148](https://github.com/siemens/ix/pull/2148) [`663cc8ce8ac64e6146cc6e1f457d7d10eb2ff38e`](https://github.com/siemens/ix/commit/663cc8ce8ac64e6146cc6e1f457d7d10eb2ff38e) Thanks [@philSixZero](https://github.com/philSixZero)! - fix `markItemsAsDirty` typo in type definition of **IxTreeProps** to omit native property

- [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

  - Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

  Fixes #2061

- [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
  Closes #2083

- [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
  - Added missing `hideHeader` property to time-input
  - Added missing return types for methods in date-picker and time-picker
- Updated dependencies [[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
  - @siemens/ix@4.0.0

## 3.2.0

### Minor Changes

- [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

  - ix-action-card
  - ix-avatar
  - ix-breadcrumb-item
  - ix-button
  - ix-card-accordion
  - ix-card-list
  - ix-category-filter
  - ix-chip
  - ix-date-input
  - ix-date-picker
  - ix-datetime-picker
  - ix-drawer
  - ix-dropdown-button
  - ix-dropdown-item
  - ix-empty-state
  - ix-event-list-item
  - ix-expanding-search
  - ix-filter-chip
  - ix-group-item
  - ix-icon-toggle-button
  - ix-key-value
  - ix-kpi
  - ix-link-button
  - ix-map-navigation-overlay
  - ix-modal-header
  - ix-pagination
  - ix-pane
  - ix-pill
  - ix-select
  - ix-split-button
  - ix-tabs
  - ix-toast
  - ix-toggle-button
  - ix-tree-item

- [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

- [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

  Fixes #1854

- [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

  The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
  There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
  Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
  The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

  Add new `ix-time-input` component

  The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

- [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

- [#1974](https://github.com/siemens/ix/pull/1974) [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383) Thanks [@danielleroux](https://github.com/danielleroux)! - Update react-ouput-target to 1.1.0

- [#2005](https://github.com/siemens/ix/pull/2005) [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-tree**: call render function if item data is updated

  Fixes #1948

- [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

  Fixes #2003

- Updated dependencies [[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
  - @siemens/ix@3.2.0

## 3.1.0

### Minor Changes

- [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

  Fixes #1653

- [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

- Updated dependencies [[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
  - @siemens/ix@3.1.0

## 3.0.0

### Major Changes

- [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

  New Variants for Card Components:

  - **ix-action-card**, **ix-card**, and **ix-push-card**:
    - The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

  Property Updates:

  - **ix-chip**:
    - The `color` property has been **replaced by** `chipColor`.
  - **ix-event-list**:
    - The `color` attribute has been **replaced by** `itemColor`.
  - **ix-icon-button**:
    - The `color` attribute has been **replaced by** `iconColor`.
    - Size `32` has been removed.
  - **ix-pill**:
    - The `color` attribute has been **replaced by** `pillColor`.
  - **ix-typography**:
    - The `color` attribute has been **replaced by** `textColor`.
  - **ix-select**:
    - The `selectedIndices` attribute has been **replaced by** `value`.
    - The `itemSelectionChange` event has been **replaced by** `valueChange`.
  - **ix-select-item**:
    - The type of the `value` property type has been updated to `string`.

  Date and Time Picker Enhancements:

  - **ix-date-picker**:
    - Removed attributes: `individual` and `eventDelimiter`.
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
  - **ix-datetime-picker**:
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
    - Removed the `eventDelimiter` property.
  - **ix-time-picker**:
    - Removed attributes: `individual` and `showTimeReference`.

  Removed Features:

  - **ix-menu**:
    - Removed the `maxVisibleMenuItems` attribute.
  - **ix-menu-item**:
    - The `tabIcon` attribute has been removed and replaced with `icon`.

  Other Changes:

  - **ix-modal**:
    - The `keyboard` attribute has been **replaced by** `closeOnEscape`.

- [#1644](https://github.com/siemens/ix/pull/1644) [`2660cc3877629aaf218bd427799013e87db572c7`](https://github.com/siemens/ix/commit/2660cc3877629aaf218bd427799013e87db572c7) Thanks [@danielleroux](https://github.com/danielleroux)! - - Add `nextjs@15` support (**experimental**).

  - Introduced support for `server-side` components.

- [#1326](https://github.com/siemens/ix/pull/1326) [`23307a0bed36c61da3ca3b77bad99d71f8b18f3c`](https://github.com/siemens/ix/commit/23307a0bed36c61da3ca3b77bad99d71f8b18f3c) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(react): remove commonjs support

- [#1644](https://github.com/siemens/ix/pull/1644) [`221e9e7d1490524dff5b7358557ee29c49119952`](https://github.com/siemens/ix/commit/221e9e7d1490524dff5b7358557ee29c49119952) Thanks [@danielleroux](https://github.com/danielleroux)! - Convert package to type="module"

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1644](https://github.com/siemens/ix/pull/1644) [`2660cc3877629aaf218bd427799013e87db572c7`](https://github.com/siemens/ix/commit/2660cc3877629aaf218bd427799013e87db572c7) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `react@19` support

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Patch Changes

- Updated dependencies [[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`c7456367e276c31a9eb6c7cea8270857b5810360`](https://github.com/siemens/ix/commit/c7456367e276c31a9eb6c7cea8270857b5810360), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`009519637b668f74f8abae7bd682c67045d2876f`](https://github.com/siemens/ix/commit/009519637b668f74f8abae7bd682c67045d2876f), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`74ddf7d9931d3e7d123d34f42718a47b98de42a9`](https://github.com/siemens/ix/commit/74ddf7d9931d3e7d123d34f42718a47b98de42a9), [`c7ce5be2cf5707b980d484e60dcc7dfa1814656b`](https://github.com/siemens/ix/commit/c7ce5be2cf5707b980d484e60dcc7dfa1814656b), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`e4a8d713614c2a5f4850d26a81655756ad48e76d`](https://github.com/siemens/ix/commit/e4a8d713614c2a5f4850d26a81655756ad48e76d), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`00b3988f7955d97080653544daf94fbd215ca0fb`](https://github.com/siemens/ix/commit/00b3988f7955d97080653544daf94fbd215ca0fb), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d`](https://github.com/siemens/ix/commit/6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
  - @siemens/ix@3.0.0

## 3.0.0-alpha.4

### Patch Changes

- Updated dependencies [[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a)]:
  - @siemens/ix@3.0.0-alpha.4

## 3.0.0-alpha.3

### Patch Changes

- Updated dependencies []:
  - @siemens/ix@3.0.0-alpha.3

## 3.0.0-alpha.2

### Major Changes

- [#1644](https://github.com/siemens/ix/pull/1644) [`2660cc3877629aaf218bd427799013e87db572c7`](https://github.com/siemens/ix/commit/2660cc3877629aaf218bd427799013e87db572c7) Thanks [@danielleroux](https://github.com/danielleroux)! - - Add `nextjs@15` support (**experimental**).

  - Introduced support for `server-side` components.

- [#1644](https://github.com/siemens/ix/pull/1644) [`221e9e7d1490524dff5b7358557ee29c49119952`](https://github.com/siemens/ix/commit/221e9e7d1490524dff5b7358557ee29c49119952) Thanks [@danielleroux](https://github.com/danielleroux)! - Convert package to type="module"

- [#1644](https://github.com/siemens/ix/pull/1644) [`2660cc3877629aaf218bd427799013e87db572c7`](https://github.com/siemens/ix/commit/2660cc3877629aaf218bd427799013e87db572c7) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `react@19` support

### Patch Changes

- Updated dependencies [[`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1), [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120)]:
  - @siemens/ix@3.0.0-alpha.2

## 3.0.0-alpha.1

### Patch Changes

- Updated dependencies [[`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
  - @siemens/ix@3.0.0-alpha.1

## 3.0.0-alpha.0

### Major Changes

- [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

  New Variants for Card Components:

  - **ix-action-card**, **ix-card**, and **ix-push-card**:
    - The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

  Property Updates:

  - **ix-chip**:
    - The `color` property has been **replaced by** `chipColor`.
  - **ix-event-list**:
    - The `color` attribute has been **replaced by** `itemColor`.
  - **ix-icon-button**:
    - The `color` attribute has been **replaced by** `iconColor`.
    - Size `32` has been removed.
  - **ix-pill**:
    - The `color` attribute has been **replaced by** `pillColor`.
  - **ix-typography**:
    - The `color` attribute has been **replaced by** `textColor`.
  - **ix-select**:
    - The `selectedIndices` attribute has been **replaced by** `value`.
    - The `itemSelectionChange` event has been **replaced by** `valueChange`.
  - **ix-select-item**:
    - The type of the `value` property type has been updated to `string`.

  Date and Time Picker Enhancements:

  - **ix-date-picker**:
    - Removed attributes: `individual` and `eventDelimiter`.
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
  - **ix-datetime-picker**:
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
    - Removed the `eventDelimiter` property.
  - **ix-time-picker**:
    - Removed attributes: `individual` and `showTimeReference`.

  Removed Features:

  - **ix-menu**:
    - Removed the `maxVisibleMenuItems` attribute.
  - **ix-menu-item**:
    - The `tabIcon` attribute has been removed and replaced with `icon`.

  Other Changes:

  - **ix-modal**:
    - The `keyboard` attribute has been **replaced by** `closeOnEscape`.

- [#1326](https://github.com/siemens/ix/pull/1326) [`23307a0bed36c61da3ca3b77bad99d71f8b18f3c`](https://github.com/siemens/ix/commit/23307a0bed36c61da3ca3b77bad99d71f8b18f3c) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(react): remove commonjs support

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Patch Changes

- Updated dependencies [[`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229)]:
  - @siemens/ix@3.0.0-alpha.0

## 2.7.0

### Patch Changes

- Updated dependencies [[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
  - @siemens/ix@2.7.0

## 2.6.1

### Patch Changes

- Updated dependencies [[`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977), [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac), [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1)]:
  - @siemens/ix@2.6.1

## 2.6.0

### Minor Changes

- [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduce several new input components:

  - `ix-input` for text based inputs
  - `ix-number-input` for number based inputs with optional stepper buttons
  - `ix-date-input` which shows a date picker within a dropdown
  - `ix-textarea` for larger text inputs
  - `ix-radio` and `ix-radio-group`
  - `ix-checkbox`
  - `ix-custom-field` to wrap custom components

  Introduce a new layout component `ix-layout-auto` to make it easier to create a typical input forms.

  Enhanced the compatibility with Forms for the following components:

  - `ix-select`
  - `ix-toggle`

  > _Deprecation:_
  >
  > Native css stylings for `input` and `textarea` (e.g `input[type="checkbox"]` and `input[type="radio"]`) are deprecated and will be removed in upcoming major release.

### Patch Changes

- Updated dependencies [[`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67), [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279), [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71), [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951), [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8), [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164), [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f), [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb), [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f), [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e), [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1), [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140), [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2), [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c), [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca), [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7), [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e), [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80), [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8), [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b), [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f), [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed), [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef)]:
  - @siemens/ix@2.6.0

## 2.5.0

### Patch Changes

- Updated dependencies [[`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53), [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644), [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276), [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f), [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38), [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6), [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce), [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69), [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2), [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39), [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310), [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1), [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed)]:
  - @siemens/ix@2.5.0

## 2.4.1

### Patch Changes

- Updated dependencies [[`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f), [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a), [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24), [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497), [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86), [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b), [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46)]:
  - @siemens/ix@2.4.1

## 2.4.0

### Patch Changes

- Updated dependencies [[`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8), [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961), [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7), [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201)]:
  - @siemens/ix@2.4.0

## 2.3.0

### Patch Changes

- Updated dependencies [[`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d), [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce), [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933), [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c), [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925), [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569), [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3), [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973), [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458), [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1), [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6), [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3), [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222), [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd), [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10), [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7), [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c), [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390), [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2), [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34), [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140), [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801), [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945), [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557), [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43), [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff)]:
  - @siemens/ix@2.3.0

## 2.2.1

### Patch Changes

- Updated dependencies [[`b38d2d3506`](https://github.com/siemens/ix/commit/b38d2d350656034ef1926fdcf5db2ca9d4251403), [`707252448c`](https://github.com/siemens/ix/commit/707252448c470b1cf8a78f696146fddd55050336)]:
  - @siemens/ix@2.2.1

## 2.2.0

### Minor Changes

- [#1197](https://github.com/siemens/ix/pull/1197) [`3cd3da9802`](https://github.com/siemens/ix/commit/3cd3da980276a1f5c324200a1194b5427c83007a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/card-list): make show all button optional

- [#1233](https://github.com/siemens/ix/pull/1233) [`830a65b7de`](https://github.com/siemens/ix/commit/830a65b7deb9013a6f1f1b4d288a4a49f625161e) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/category-filter): make logical operator optional

- [#1200](https://github.com/siemens/ix/pull/1200) [`179ca17515`](https://github.com/siemens/ix/commit/179ca1751559b208f8215e237c3da030db3b6829) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/menu-item): show tooltip on hover

### Patch Changes

- [#1201](https://github.com/siemens/ix/pull/1201) [`34b50efa59`](https://github.com/siemens/ix/commit/34b50efa59dfd4dbd10262ae8866f10efd1800c8) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/toast|react/toast|vue/toast): predefine custom elements before usage

- Updated dependencies [[`3cd3da9802`](https://github.com/siemens/ix/commit/3cd3da980276a1f5c324200a1194b5427c83007a), [`1d278044d3`](https://github.com/siemens/ix/commit/1d278044d30efdb12dc1f46187327e435d652a40), [`87f0e37224`](https://github.com/siemens/ix/commit/87f0e37224bbe9b41db9d81b24d95dfbe3f71187), [`5b4e96e295`](https://github.com/siemens/ix/commit/5b4e96e2954d9c690158b0acf1eb927ac79f24b9), [`b7a56fe19f`](https://github.com/siemens/ix/commit/b7a56fe19fdc0d0a233435561424ef96a5424c2c), [`d95d5e9d6a`](https://github.com/siemens/ix/commit/d95d5e9d6af4e2213ec258e04bd8eae01c40d9d2), [`34b50efa59`](https://github.com/siemens/ix/commit/34b50efa59dfd4dbd10262ae8866f10efd1800c8), [`f31adf04fd`](https://github.com/siemens/ix/commit/f31adf04fd9f400e5caa29a90e82e1fb32d00cc8), [`830a65b7de`](https://github.com/siemens/ix/commit/830a65b7deb9013a6f1f1b4d288a4a49f625161e), [`22b06f77d9`](https://github.com/siemens/ix/commit/22b06f77d9ff98ff96a90ca1d13b53523ac102d2), [`04b03d4d5d`](https://github.com/siemens/ix/commit/04b03d4d5dbef9256781b6d46e260847004e776a), [`5b51722f58`](https://github.com/siemens/ix/commit/5b51722f58a5de6a29696eb585c166d98ee9331b), [`99886e0a5f`](https://github.com/siemens/ix/commit/99886e0a5ff84391c9e99e07a30bd4999e894125), [`179ca17515`](https://github.com/siemens/ix/commit/179ca1751559b208f8215e237c3da030db3b6829), [`c87a28eede`](https://github.com/siemens/ix/commit/c87a28eede47152b5cb6b7529aa436966129e0b0), [`f5e4c832f9`](https://github.com/siemens/ix/commit/f5e4c832f900e28bf072ecc411560fad94174678), [`555a5a3bf1`](https://github.com/siemens/ix/commit/555a5a3bf18e8bfbbb7d14452974427f68e2cc67), [`3542def781`](https://github.com/siemens/ix/commit/3542def7819b68ad7c93155a078058d9dbfcc309), [`cb46c070a2`](https://github.com/siemens/ix/commit/cb46c070a299bde7e7d403b0d97fbb8bfd481591), [`4a8303f9f5`](https://github.com/siemens/ix/commit/4a8303f9f5a89fdbb017e1efddbf1bf15ea987f4), [`22a83d9196`](https://github.com/siemens/ix/commit/22a83d9196fc0537ee23db810e61f885689522c0), [`1876e96b6b`](https://github.com/siemens/ix/commit/1876e96b6b0acf8af8b001012dfb1a15550b3d8e), [`cba4a44cb0`](https://github.com/siemens/ix/commit/cba4a44cb00b701b2b03a012fd1bfff9891e4b3d)]:
  - @siemens/ix@2.2.0
