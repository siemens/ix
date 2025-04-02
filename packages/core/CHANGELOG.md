# @siemens/ix

## 3.0.0-alpha.3

## 3.0.0-alpha.2

### Major Changes

- [#1644](https://github.com/siemens/ix/pull/1644) [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove legacy `classic` theme

### Patch Changes

- [#1644](https://github.com/siemens/ix/pull/1644) [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1) Thanks [@danielleroux](https://github.com/danielleroux)! - Relpace throw error of **ix-select-item** with a warning if no value is provided

## 3.0.0-alpha.1

### Minor Changes

- [#1767](https://github.com/siemens/ix/pull/1767) [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af) Thanks [@raunak-matai](https://github.com/raunak-matai)! - Handle `preventDefault()` on native `click` event for `ix-tab-item`.

  Fixes #1655.

### Patch Changes

- [#1724](https://github.com/siemens/ix/pull/1724) [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent **ix-application-header** from waiting until the corporate logo is defined.

- [#1724](https://github.com/siemens/ix/pull/1724) [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-drawer**: Remove `transition` attribute from the styling to prevent conflicts between `animejs`

- [#1724](https://github.com/siemens/ix/pull/1724) [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8) Thanks [@danielleroux](https://github.com/danielleroux)! - Cleanup validation references for all validation components (e.g. `ix-date-input`, `ix-input`).

- [#1724](https://github.com/siemens/ix/pull/1724) [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa) Thanks [@danielleroux](https://github.com/danielleroux)! - Update @stencil/core dependency to 4.27.1

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

- [#1700](https://github.com/siemens/ix/pull/1700) [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467) Thanks [@jul-lam](https://github.com/jul-lam)! - The **ix-tooltip** is working as expected when utilized for an **ix-dropdown-item** inside an **ix-dropdown**. The tooltip is now displayed outside the dropdown without breaking its layout.

  Fixes #1618

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1742](https://github.com/siemens/ix/pull/1742) [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3) Thanks [@matthiashader](https://github.com/matthiashader)! - Adapt the event signature of the `dateSelect` event of the `ix-date-picker` to reflect undefined values.

- [#1578](https://github.com/siemens/ix/pull/1578) [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove `devDependency` and `peerDependency` to bootstrap. For more information checkout BREAKING_CHANGES.md

- [#1758](https://github.com/siemens/ix/pull/1758) [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent global styling for `input` and `textarea`. If you still want to use the legacy styling provide a `class="ix-form-control"` to `input` or `textarea`.
  Prevent global styling for `label`. If you still want to use the legacy styling provide a `class="ix-form-label"` to `label`.

  Fixes #1398

- [#1457](https://github.com/siemens/ix/pull/1457) [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/pane-layout): remove absolute positioning

- [#1330](https://github.com/siemens/ix/pull/1330) [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437) Thanks [@github-actions](https://github.com/apps/github-actions)! - The **VariantMapping** that mapped legacy font classes to current ones was removed.

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

- [#1758](https://github.com/siemens/ix/pull/1758) [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760) Thanks [@danielleroux](https://github.com/danielleroux)! - Change default width from `input.ix-from-control` from `width: 100%` to `width: auto`

- [#1743](https://github.com/siemens/ix/pull/1743) [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-date-picker**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
  **ix-datetime-picker**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
  **ix-date-dropdown**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
  **ix-date-input**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.

- [#1742](https://github.com/siemens/ix/pull/1742) [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-date-dropdown`: Adapt the types `DateDropdownOption` and `DateRangeChangeEvent` to reflect the changed signature of the `ix-date-picker`'s `dateSelect` event.

- [#1742](https://github.com/siemens/ix/pull/1742) [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-date-input`: Adapt the `value` property and the `valueChange` event to reflect the changed signature of the `date-picker`'s `dateSelect` event.

- [#1613](https://github.com/siemens/ix/pull/1613) [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099) Thanks [@jul-lam](https://github.com/jul-lam)! - **ix-application** now utilizes full viewport height and full viewport width

- [#1273](https://github.com/siemens/ix/pull/1273) [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/checkbox): allow multiline labels and align checkbox at the top

### Minor Changes

- [#1737](https://github.com/siemens/ix/pull/1737) [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Add new types `critical`, `success`, `primary`, and `neutral`, and deprecate type `danger`.
  Additionally, add new `NotificationColor` colors `color-critical`, `color-alarm`, `color-neutral`, and `color-primary`.

- [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

- [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
  An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

- [#1758](https://github.com/siemens/ix/pull/1758) [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd) Thanks [@danielleroux](https://github.com/danielleroux)! - Add new global class `.ix-table` and `.ix-table-striped` to display a simple html table

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ìx-drawer`: Events `open` and `drawerClose` can now be prevented via`event.preventDefault()`.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

- [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

- [#1706](https://github.com/siemens/ix/pull/1706) [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-menu-category**: Dynamically added items are now instantly visible. This is achieved by adjusting the max-height everytime an item gets added.

  Fixes #1606

- [#1683](https://github.com/siemens/ix/pull/1683) [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - `active=false` of the `ix-chip` will now show the chip as not interactable.

  Fixed #1656

- [#1681](https://github.com/siemens/ix/pull/1681) [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f) Thanks [@jul-lam](https://github.com/jul-lam)! - Update `@floating-ui/dom` dependency to fix a wrong placement of the `ix-dropdown` if the dropdown is placed inside a `dialog`-element with animations in certain environments.

- [#1708](https://github.com/siemens/ix/pull/1708) [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-radio**: Now doesn't change height/layout anymore when clicked. This is achieved by changing the way one of the component's divs is rendered.
  **ix-checkbox**: Now doesn't change height/layout anymore when clicked. This is achieved by changing the way one of the component's SVGs is rendered.

  Fixes #1702

- [#1699](https://github.com/siemens/ix/pull/1699) [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a) Thanks [@danielleroux](https://github.com/danielleroux)! - Update classic theme colors to match latest figma specs

- [#1561](https://github.com/siemens/ix/pull/1561) [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - Update slot references for **ix-input-group**.

- [#1687](https://github.com/siemens/ix/pull/1687) [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix issue of `ix-button` which prevent a form get submitted twice in row.

- [#1330](https://github.com/siemens/ix/pull/1330) [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb) Thanks [@github-actions](https://github.com/apps/github-actions)! - fix(core): semver from stencil/core to minor

- [#1691](https://github.com/siemens/ix/pull/1691) [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-workflow-step`: change icon for 'done' state to be different from the one shown for 'success' state to pervent confusion.

- [#1682](https://github.com/siemens/ix/pull/1682) [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent input elements like (`ix-input`, `ix-number-input`, `ix-date-input`, `ix-select`, `ix-textarea`) to show `required` validation error without any user interaction.

  If the class `ix-invalid` is applied programmatically an error message is still shown even without a user interaction.

  Fixes #1638, #1680

- [#1561](https://github.com/siemens/ix/pull/1561) [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - **ix-drawer**: Allow nested content to calculate it's layout properly by setting drawer width explicitly.

- [#1769](https://github.com/siemens/ix/pull/1769) [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Refactor return type of `focusInput` method of `IxInputFieldComponent` interface to `Promise<void>`.

## 2.7.0

### Minor Changes

- [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

- [#1609](https://github.com/siemens/ix/pull/1609) [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `meta`-tag feature to disable default load of `@siemens/ix-icons`

  ```html
  <meta name="ix:legacy-icons" content="false" />
  ```

  In addition the warning is removed if no icon component is provided.

- [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

- [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

- [#1658](https://github.com/siemens/ix/pull/1658) [`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Adjust `ix-pill` spacing between text + icon and icon only

- [#1659](https://github.com/siemens/ix/pull/1659) [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix `ix-select` in editable mode to correctly select a known item when confirmed with Enter.

- [#1648](https://github.com/siemens/ix/pull/1648) [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Fix **ix-select** keyboard navigation and wrap behavior when new items are created

- [#1652](https://github.com/siemens/ix/pull/1652) [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix the disable state of `ix-checkbox` if `disabled=undefined` is provided.

- [#1617](https://github.com/siemens/ix/pull/1617) [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Automatically expand **ix-menu-category** if nested menu item becomes active.

- [#1672](https://github.com/siemens/ix/pull/1672) [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix initial overlapping between value and end slots on `ix-input`, `ix-number-input` and `ix-date-input`

- [#1666](https://github.com/siemens/ix/pull/1666) [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Fix padding for **ix-textarea**.

- [#1665](https://github.com/siemens/ix/pull/1665) [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix behavior where internal validation logic removes validation classes from `ix-input`, `ix-input-number` etc.

- [#1651](https://github.com/siemens/ix/pull/1651) [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - Fix the disable state of `ix-radio` if `disabled=undefined` is provided.

- [#1621](https://github.com/siemens/ix/pull/1621) [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Set correct cursors and handle overflow for **ix-card** and **ix-push-card**.

## 2.6.1

### Patch Changes

- [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Adjust the spacing of the toggle

- [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Align label overflow behavior of **ix-toggle** to wrap

- [#1574](https://github.com/siemens/ix/pull/1574) [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977) Thanks [@matthiashader](https://github.com/matthiashader)! - Hide clear button in **ix-select** for disabled and readonly states.

- [#1595](https://github.com/siemens/ix/pull/1595) [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix undefined access of **ix-select** during rendering of label

- [#1603](https://github.com/siemens/ix/pull/1603) [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove _hyperlist_ from the dependencies

- [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Increase gap between switch and label of **ix-toggle**

- [#1588](https://github.com/siemens/ix/pull/1588) [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Enable the possibility to use autofocus within **ix-modal**

- [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Make **ix-toggle** not clickable if disabled property is present (Fixes #1585)

## 2.6.0

### Minor Changes

- [#1533](https://github.com/siemens/ix/pull/1533) [`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/message): add options to set size and position

- [#1549](https://github.com/siemens/ix/pull/1549) [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/date-dropdown|date-picker|datetime-picker): add missing properties to picker components

- [#1497](https://github.com/siemens/ix/pull/1497) [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core): improve component a11y

- [#1562](https://github.com/siemens/ix/pull/1562) [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add filter cleared event to ix-categroy-filter.

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

- [#1563](https://github.com/siemens/ix/pull/1563) [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80) Thanks [@matthiashader](https://github.com/matthiashader)! - Update expandedChange event to trigger only on user interactions and add unnamed default slot for ix-pane-layout content.

### Patch Changes

- [#1489](https://github.com/siemens/ix/pull/1489) [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/modal): duplicate event firing

- [#1488](https://github.com/siemens/ix/pull/1488) [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): replace font styles with actual formats

- [#1499](https://github.com/siemens/ix/pull/1499) [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/modal): figma - code mismatch

- [#1514](https://github.com/siemens/ix/pull/1514) [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/content-header): adapt spacing

- [#1560](https://github.com/siemens/ix/pull/1560) [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Enable discovery of trigger elements if in same shadow DOM for ix-tooltip and ix-dropdown.

- [#1469](https://github.com/siemens/ix/pull/1469) [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/menu-about): set index if selected is set on tab-item

- [#1527](https://github.com/siemens/ix/pull/1527) [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/checkbox): page jumps on checkbox click in scrollable ix-content

- [#1571](https://github.com/siemens/ix/pull/1571) [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent null pointer exception in ix-menu component.

- [#1557](https://github.com/siemens/ix/pull/1557) [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/select): check if value is defined, before updating selection

- [#1468](https://github.com/siemens/ix/pull/1468) [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/slider): update tooltip on steps below 1

- [#1519](https://github.com/siemens/ix/pull/1519) [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/button): fix keyboard navigation & accessibility

- [#1541](https://github.com/siemens/ix/pull/1541) [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/spinner): move styling into shadow dom

- [#1548](https://github.com/siemens/ix/pull/1548) [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/select): update input value on slot change

- [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-drawer**: the full-height property is now working

- [#1476](https://github.com/siemens/ix/pull/1476) [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/input): remove hover state from readonly and disabled variant

- [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove `border-radius` from `<input />` if `readonly` or `disable` is set

- [#1516](https://github.com/siemens/ix/pull/1516) [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7) Thanks [@h4de5](https://github.com/h4de5)! - fix(core/icon-toggle-button): remove console.log

- [#1522](https://github.com/siemens/ix/pull/1522) [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core): prevent detached dom nodes

- [#1498](https://github.com/siemens/ix/pull/1498) [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - fix(card): card-filled colors for hover/active states

- [#1492](https://github.com/siemens/ix/pull/1492) [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/card-list): adapt title margin to figma

- [#1483](https://github.com/siemens/ix/pull/1483) [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): clean up disconnected dropdowns

- [#1558](https://github.com/siemens/ix/pull/1558) [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed) Thanks [@matthiashader](https://github.com/matthiashader)! - Improve responsive behaviour of `ix-datetime-picker` on small screens

- [#1506](https://github.com/siemens/ix/pull/1506) [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/upload): disable file browser if control is disabled

## 2.5.0

### Minor Changes

- [#1317](https://github.com/siemens/ix/pull/1317) [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38) Thanks [@matthiashader](https://github.com/matthiashader)! - feat(core/push-card): add alternative card types

- [#1422](https://github.com/siemens/ix/pull/1422) [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core): add css safe areas

- [#1454](https://github.com/siemens/ix/pull/1454) [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/group): handle preventDefault for events

- [#1449](https://github.com/siemens/ix/pull/1449) [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/application-header): hide toggle menu if header used outside of application frame

### Patch Changes

- [#1441](https://github.com/siemens/ix/pull/1441) [`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/category-filter): does not clear category preview

- [#1462](https://github.com/siemens/ix/pull/1462) [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): cutoff near viewport edges

- [#1343](https://github.com/siemens/ix/pull/1343) [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/dropdown): spacing and color

- [#1401](https://github.com/siemens/ix/pull/1401) [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/select): set value before triggering event

- [#1444](https://github.com/siemens/ix/pull/1444) [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): styles bleeding in

- [#1428](https://github.com/siemens/ix/pull/1428) [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tree): handle text overflow gracefully

- [#1354](https://github.com/siemens/ix/pull/1354) [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/card-list): card-list show all not getting truncated

- [#1438](https://github.com/siemens/ix/pull/1438) [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): cancel tooltip positioning when reference is not visible

- [#1409](https://github.com/siemens/ix/pull/1409) [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): export TypedEvent

- [#1460](https://github.com/siemens/ix/pull/1460) [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tree): prevent hyperlist from disposing dropdowns linked to tree items

- [#1370](https://github.com/siemens/ix/pull/1370) [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/menu-item): occasionally empty tooltips in menu-item

- [#1454](https://github.com/siemens/ix/pull/1454) [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/group): remove max-width restriction

## 2.4.1

### Patch Changes

- [#1382](https://github.com/siemens/ix/pull/1382) [`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - fix(core/avatar): include scrollbar mixin to apply styling

- [#1379](https://github.com/siemens/ix/pull/1379) [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): stop auto update when closing dropdown

- [#1380](https://github.com/siemens/ix/pull/1380) [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/group-item): allow clicks on supress click event

- [#1380](https://github.com/siemens/ix/pull/1380) [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/application-header): increase font

- [#1386](https://github.com/siemens/ix/pull/1386) [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tabs): re-render each time parent container changes size

- [#1390](https://github.com/siemens/ix/pull/1390) [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tabs): minimize tab auto scroll distance

- [#1375](https://github.com/siemens/ix/pull/1375) [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/slider): hide slider reference visual for extrema

- [#1374](https://github.com/siemens/ix/pull/1374) [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): destroy auto update cycle before starting a new one

- [#1391](https://github.com/siemens/ix/pull/1391) [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/pagination): disable buttons if count is unset

- [#1373](https://github.com/siemens/ix/pull/1373) [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/application-header): prevent chrome crash after resize window

## 2.4.0

### Minor Changes

- [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/select): allow prevention of events

### Patch Changes

- [#1360](https://github.com/siemens/ix/pull/1360) [`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): prevent minor update of stencil/core

- [#1355](https://github.com/siemens/ix/pull/1355) [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown button): prevent close on click if close behaviour is outside

- [#1335](https://github.com/siemens/ix/pull/1335) [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201) Thanks [@danielleroux](https://github.com/danielleroux)! - build: remove internal polyfills

## 2.3.0

### Minor Changes

- [#1264](https://github.com/siemens/ix/pull/1264) [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/date-dropdown): add disabled property

- [#1320](https://github.com/siemens/ix/pull/1320) [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd) Thanks [@PhentomPT](https://github.com/PhentomPT)! - feat(core): add hydrate output target

- [#1277](https://github.com/siemens/ix/pull/1277) [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/button|icon-button): add danger variant

- [#1306](https://github.com/siemens/ix/pull/1306) [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/theme): sync css variables

- [#1292](https://github.com/siemens/ix/pull/1292) [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/split-button): add close behavior

### Patch Changes

- [#1336](https://github.com/siemens/ix/pull/1336) [`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/panes): rotate icon at left and right pane

- [#1261](https://github.com/siemens/ix/pull/1261) [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/date-dropdown): show year and month dropdown

- [#1312](https://github.com/siemens/ix/pull/1312) [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/chip): adjust width on outline variant

- [#1243](https://github.com/siemens/ix/pull/1243) [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/event-list-item): add aria-disabled attribute to list element

- [#1246](https://github.com/siemens/ix/pull/1246) [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569) Thanks [@jul-lam](https://github.com/jul-lam)! - fix(core/category-filter): open dropdown on text input and keep it open

- [#1285](https://github.com/siemens/ix/pull/1285) [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/blind): avoid unnecessary wrapping

- [#1274](https://github.com/siemens/ix/pull/1274) [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/base-button): set aria disabled

- [#1260](https://github.com/siemens/ix/pull/1260) [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/group): show expand-collapse icon

- [#1313](https://github.com/siemens/ix/pull/1313) [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/scrollbar): fix firefox appearance (scrollbar & input & tabs)

- [#1262](https://github.com/siemens/ix/pull/1262) [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/group-context-menu): set default cursor

- [#1297](https://github.com/siemens/ix/pull/1297) [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/workflow-step): load icon names before component is initialized

- [#1230](https://github.com/siemens/ix/pull/1230) [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/event-list): event-list-items not selectabe in chrome

- [#1251](https://github.com/siemens/ix/pull/1251) [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/tooltip): null check before event listener gets registered on trigger

- [#1311](https://github.com/siemens/ix/pull/1311) [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): adjust arrow height

- [#1334](https://github.com/siemens/ix/pull/1334) [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): prevent closing

- [#1244](https://github.com/siemens/ix/pull/1244) [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - docs(core/menu-about): update jsdocs for label property

- [#1225](https://github.com/siemens/ix/pull/1225) [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/group): use correct cursors

- [#1287](https://github.com/siemens/ix/pull/1287) [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/select): rollback and fix object iteration

- [#1293](https://github.com/siemens/ix/pull/1293) [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/menu): use label property to render internal menu items

- [#1339](https://github.com/siemens/ix/pull/1339) [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/menu): fix firefox overflow behavior and input styling

- [#1219](https://github.com/siemens/ix/pull/1219) [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/workflow): add flexible layout

## 2.2.1

### Patch Changes

- [#1241](https://github.com/siemens/ix/pull/1241) [`b38d2d3506`](https://github.com/siemens/ix/commit/b38d2d350656034ef1926fdcf5db2ca9d4251403) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): add null check for trigger element

- [#1237](https://github.com/siemens/ix/pull/1237) [`707252448c`](https://github.com/siemens/ix/commit/707252448c470b1cf8a78f696146fddd55050336) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/input): update autofill styling

## 2.2.0

### Minor Changes

- [#1197](https://github.com/siemens/ix/pull/1197) [`3cd3da9802`](https://github.com/siemens/ix/commit/3cd3da980276a1f5c324200a1194b5427c83007a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/card-list): make show all button optional

- [#1156](https://github.com/siemens/ix/pull/1156) [`1d278044d3`](https://github.com/siemens/ix/commit/1d278044d30efdb12dc1f46187327e435d652a40) Thanks [@jul-lam](https://github.com/jul-lam)! - feat(core/menu): make behavior at breakpoint 'lg' configurable and change 'md' breakpoint menu icons

- [#1233](https://github.com/siemens/ix/pull/1233) [`830a65b7de`](https://github.com/siemens/ix/commit/830a65b7deb9013a6f1f1b4d288a4a49f625161e) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/category-filter): make logical operator optional

- [#1200](https://github.com/siemens/ix/pull/1200) [`179ca17515`](https://github.com/siemens/ix/commit/179ca1751559b208f8215e237c3da030db3b6829) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/menu-item): show tooltip on hover

### Patch Changes

- [#1198](https://github.com/siemens/ix/pull/1198) [`87f0e37224`](https://github.com/siemens/ix/commit/87f0e37224bbe9b41db9d81b24d95dfbe3f71187) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/workflow-steps): fix initial layout shift

- [#1212](https://github.com/siemens/ix/pull/1212) [`5b4e96e295`](https://github.com/siemens/ix/commit/5b4e96e2954d9c690158b0acf1eb927ac79f24b9) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - refactor(core): use custom properties for css transition times

- [#1186](https://github.com/siemens/ix/pull/1186) [`b7a56fe19f`](https://github.com/siemens/ix/commit/b7a56fe19fdc0d0a233435561424ef96a5424c2c) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/blind): show ellipsis if text overflows

- [#1218](https://github.com/siemens/ix/pull/1218) [`d95d5e9d6a`](https://github.com/siemens/ix/commit/d95d5e9d6af4e2213ec258e04bd8eae01c40d9d2) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/input-group): update margin

- [#1201](https://github.com/siemens/ix/pull/1201) [`34b50efa59`](https://github.com/siemens/ix/commit/34b50efa59dfd4dbd10262ae8866f10efd1800c8) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/toast|react/toast|vue/toast): predefine custom elements before usage

- [#1175](https://github.com/siemens/ix/pull/1175) [`f31adf04fd`](https://github.com/siemens/ix/commit/f31adf04fd9f400e5caa29a90e82e1fb32d00cc8) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/slider): adjust tick color

- [#1184](https://github.com/siemens/ix/pull/1184) [`22b06f77d9`](https://github.com/siemens/ix/commit/22b06f77d9ff98ff96a90ca1d13b53523ac102d2) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): update classic theme values

- [#1196](https://github.com/siemens/ix/pull/1196) [`04b03d4d5d`](https://github.com/siemens/ix/commit/04b03d4d5dbef9256781b6d46e260847004e776a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/select): arrow key navigation

- [#1178](https://github.com/siemens/ix/pull/1178) [`5b51722f58`](https://github.com/siemens/ix/commit/5b51722f58a5de6a29696eb585c166d98ee9331b) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/action-card): change subheading color

- [#1139](https://github.com/siemens/ix/pull/1139) [`99886e0a5f`](https://github.com/siemens/ix/commit/99886e0a5ff84391c9e99e07a30bd4999e894125) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/date-dropdown): update the date when the props are changed

- [#1151](https://github.com/siemens/ix/pull/1151) [`c87a28eede`](https://github.com/siemens/ix/commit/c87a28eede47152b5cb6b7529aa436966129e0b0) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(category-filter|input-group): align styling

- [#1159](https://github.com/siemens/ix/pull/1159) [`f5e4c832f9`](https://github.com/siemens/ix/commit/f5e4c832f900e28bf072ecc411560fad94174678) Thanks [@jul-lam](https://github.com/jul-lam)! - fix(core/select): non string values for the "value" prop of select-items are not working

- [#1221](https://github.com/siemens/ix/pull/1221) [`555a5a3bf1`](https://github.com/siemens/ix/commit/555a5a3bf18e8bfbbb7d14452974427f68e2cc67) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/tooltip): prevent focusin event call showTooltip

- [#1195](https://github.com/siemens/ix/pull/1195) [`3542def781`](https://github.com/siemens/ix/commit/3542def7819b68ad7c93155a078058d9dbfcc309) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/select): reset input text on blur

- [#1185](https://github.com/siemens/ix/pull/1185) [`cb46c070a2`](https://github.com/siemens/ix/commit/cb46c070a299bde7e7d403b0d97fbb8bfd481591) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/toggle): convert circle width and height to rem

- [#1171](https://github.com/siemens/ix/pull/1171) [`4a8303f9f5`](https://github.com/siemens/ix/commit/4a8303f9f5a89fdbb017e1efddbf1bf15ea987f4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/card): adjust selected background color

- [#1214](https://github.com/siemens/ix/pull/1214) [`22a83d9196`](https://github.com/siemens/ix/commit/22a83d9196fc0537ee23db810e61f885689522c0) Thanks [@jul-lam](https://github.com/jul-lam)! - fix(core/select-item): check by undefined not by value

- [#1192](https://github.com/siemens/ix/pull/1192) [`1876e96b6b`](https://github.com/siemens/ix/commit/1876e96b6b0acf8af8b001012dfb1a15550b3d8e) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/dropdown): resolve trigger during element connect phase

- [#1158](https://github.com/siemens/ix/pull/1158) [`cba4a44cb0`](https://github.com/siemens/ix/commit/cba4a44cb00b701b2b03a012fd1bfff9891e4b3d) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/application-switch-modal): add border-radius to app icon
