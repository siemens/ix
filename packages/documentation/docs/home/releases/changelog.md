---
sidebar_title: Changelog
hide_table_of_contents: true
title: Changelog
---
## [@siemens/ix-angular@3.0.0-alpha.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.0.0-alpha.0) (2025-03-14T09:59:00Z)
### Major Changes

-   [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

    New Variants for Card Components:

    -   **ix-action-card**, **ix-card**, and **ix-push-card**:
        -   The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

    Property Updates:

    -   **ix-chip**:
        -   The `color` property has been **replaced by** `chipColor`.
    -   **ix-event-list**:
        -   The `color` attribute has been **replaced by** `itemColor`.
    -   **ix-icon-button**:
        -   The `color` attribute has been **replaced by** `iconColor`.
        -   Size `32` has been removed.
    -   **ix-pill**:
        -   The `color` attribute has been **replaced by** `pillColor`.
    -   **ix-typography**:
        -   The `color` attribute has been **replaced by** `textColor`.
    -   **ix-select**:
        -   The `selectedIndices` attribute has been **replaced by** `value`.
        -   The `itemSelectionChange` event has been **replaced by** `valueChange`.
    -   **ix-select-item**:
        -   The type of the `value` property type has been updated to `string`.

    Date and Time Picker Enhancements:

    -   **ix-date-picker**:
        -   Removed attributes: `individual` and `eventDelimiter`.
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
    -   **ix-datetime-picker**:
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
        -   Removed the `eventDelimiter` property.
    -   **ix-time-picker**:
        -   Removed attributes: `individual` and `showTimeReference`.

    Removed Features:

    -   **ix-menu**:
        -   Removed the `maxVisibleMenuItems` attribute.
    -   **ix-menu-item**:
        -   The `tabIcon` attribute has been removed and replaced with `icon`.

    Other Changes:

    -   **ix-modal**:
        -   The `keyboard` attribute has been **replaced by** `closeOnEscape`.

-   [#1325](https://github.com/siemens/ix/pull/1325) [`71411db86c37d5cd0f5f71c4059322ea5e9d6f2d`](https://github.com/siemens/ix/commit/71411db86c37d5cd0f5f71c4059322ea5e9d6f2d) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular): change angular compiler version to v17

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Minor Changes

-   [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

-   [#1325](https://github.com/siemens/ix/pull/1325) [`71411db86c37d5cd0f5f71c4059322ea5e9d6f2d`](https://github.com/siemens/ix/commit/71411db86c37d5cd0f5f71c4059322ea5e9d6f2d) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular/standalone): add angular standalone components

-   [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
    An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

-   [#1682](https://github.com/siemens/ix/pull/1682) [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `suppressClassMapping` to value-accessors to prevent that the accessors automatically map `ng-`-classes to `ix-`-classes.

    If `[suppressClassMapping]="true"` you need to control the `ix-`-classes on your own.

    ```html
    <ix-input
      label="Name:"
      formControlName="name"
      [suppressClassMapping]="true"
      [class.ix-invalid]="!form.get('name')!.valid && form.get('name')!.touched"
      required
    >
    </ix-input>
    ```

    `value-accessor` ignores NgControls which are untouched but have `required=true` errors

    Fixes #1638 #1680

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

-   [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

-   Updated dependencies \[[`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229)]:
    -   @siemens/ix@3.0.0-alpha.0

## [@siemens/ix@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.7.0) (2025-02-10T14:01:35Z)
### Minor Changes

-   [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

-   [#1609](https://github.com/siemens/ix/pull/1609) [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `meta`-tag feature to disable default load of `@siemens/ix-icons`

    ```html
    <meta name="ix:legacy-icons" content="false" />
    ```

    In addition the warning is removed if no icon component is provided.

-   [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

-   [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

-   [#1658](https://github.com/siemens/ix/pull/1658) [`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Adjust `ix-pill` spacing between text + icon and icon only

-   [#1659](https://github.com/siemens/ix/pull/1659) [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix `ix-select` in editable mode to correctly select a known item when confirmed with Enter.

-   [#1648](https://github.com/siemens/ix/pull/1648) [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Fix **ix-select** keyboard navigation and wrap behavior when new items are created

-   [#1652](https://github.com/siemens/ix/pull/1652) [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix the disable state of `ix-checkbox` if `disabled=undefined` is provided.

-   [#1617](https://github.com/siemens/ix/pull/1617) [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Automatically expand **ix-menu-category** if nested menu item becomes active.

-   [#1672](https://github.com/siemens/ix/pull/1672) [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix initial overlapping between value and end slots on `ix-input`, `ix-number-input` and `ix-date-input`

-   [#1666](https://github.com/siemens/ix/pull/1666) [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Fix padding for **ix-textarea**.

-   [#1665](https://github.com/siemens/ix/pull/1665) [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix behavior where internal validation logic removes validation classes from `ix-input`, `ix-input-number` etc.

-   [#1651](https://github.com/siemens/ix/pull/1651) [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - Fix the disable state of `ix-radio` if `disabled=undefined` is provided.

-   [#1621](https://github.com/siemens/ix/pull/1621) [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Set correct cursors and handle overflow for **ix-card** and **ix-push-card**.

## [@siemens/ix-vue@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.7.0) (2025-02-10T14:01:37Z)
### Minor Changes

-   [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

-   [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

-   [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0

## [@siemens/ix-react@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.7.0) (2025-02-10T14:01:40Z)
### Patch Changes

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0

## [@siemens/ix-angular@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.7.0) (2025-02-10T14:01:31Z)
### Minor Changes

-   [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

-   [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

-   [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

-   [#1665](https://github.com/siemens/ix/pull/1665) [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent `value-accessor` from removing validation classes if component is not controlled by NgControl

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0

## [@siemens/ix-aggrid@2.2.3](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.2.3) (2025-02-10T14:01:29Z)
### Patch Changes

-   [#1660](https://github.com/siemens/ix/pull/1660) [`906172a739`](https://github.com/siemens/ix/commit/906172a7391f5c81eaa21f86deffd38e807920c6) Thanks [@matthiashader](https://github.com/matthiashader)! - align checkmark in `ag-grid` with ix-checkbox

-   [#1624](https://github.com/siemens/ix/pull/1624) [`b016f93a16`](https://github.com/siemens/ix/commit/b016f93a16d2b4d04511225b75f043b167508682) Thanks [@jul-lam](https://github.com/jul-lam)! - Set typography globally for **ag-grid** theme.

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0

## [@siemens/ix@2.6.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.6.1) (2024-12-16T12:35:53Z)
### Patch Changes

-   [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Adjust the spacing of the toggle

-   [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Align label overflow behavior of **ix-toggle** to wrap

-   [#1574](https://github.com/siemens/ix/pull/1574) [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977) Thanks [@matthiashader](https://github.com/matthiashader)! - Hide clear button in **ix-select** for disabled and readonly states.

-   [#1595](https://github.com/siemens/ix/pull/1595) [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix undefined access of **ix-select** during rendering of label

-   [#1603](https://github.com/siemens/ix/pull/1603) [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove _hyperlist_ from the dependencies

-   [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Increase gap between switch and label of **ix-toggle**

-   [#1588](https://github.com/siemens/ix/pull/1588) [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Enable the possibility to use autofocus within **ix-modal**

-   [#1587](https://github.com/siemens/ix/pull/1587) [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1) Thanks [@danielleroux](https://github.com/danielleroux)! - Make **ix-toggle** not clickable if disabled property is present (Fixes #1585)

## [@siemens/ix-vue@2.6.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.6.1) (2024-12-16T12:36:02Z)
### Patch Changes

-   Updated dependencies \[[`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977), [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac), [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1)]:
    -   @siemens/ix@2.6.1

## [@siemens/ix-react@2.6.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.6.1) (2024-12-16T12:35:59Z)
### Patch Changes

-   Updated dependencies \[[`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977), [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac), [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1)]:
    -   @siemens/ix@2.6.1

## [@siemens/ix-echarts@2.3.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-echarts%402.3.1) (2024-12-16T12:36:05Z)
### Patch Changes

-   [#1604](https://github.com/siemens/ix/pull/1604) [`7ef10e3f6d`](https://github.com/siemens/ix/commit/7ef10e3f6d71f3067b068c5d1f3707f1b3e8cfcd) Thanks [@silviowolf](https://github.com/silviowolf)! - Update **ECharts** theme chart colors.

## [@siemens/ix-angular@2.6.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.6.1) (2024-12-16T12:35:50Z)
### Patch Changes

-   [#1589](https://github.com/siemens/ix/pull/1589) [`ce681e2baf`](https://github.com/siemens/ix/commit/ce681e2baf0954c8d3479453cff8b1c858272360) Thanks [@Johanneslueke](https://github.com/Johanneslueke)! - Use `ix-number-input` selector in text-value-accessor for **ix-number-input**

-   Updated dependencies \[[`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977), [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac), [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1)]:
    -   @siemens/ix@2.6.1

## [@siemens/ix-aggrid@2.2.2](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.2.2) (2024-12-16T12:35:56Z)
### Patch Changes

-   [#1615](https://github.com/siemens/ix/pull/1615) [`e6bbb44a43`](https://github.com/siemens/ix/commit/e6bbb44a43fd131a290719a27b423bceab91e3f6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Hide border sticky bottom in **ag-grid**.

-   Updated dependencies \[[`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977), [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac), [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1)]:
    -   @siemens/ix@2.6.1

## [@siemens/ix@2.6.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.6.0) (2024-11-25T11:29:54Z)
### Minor Changes

-   [#1533](https://github.com/siemens/ix/pull/1533) [`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/message): add options to set size and position

-   [#1549](https://github.com/siemens/ix/pull/1549) [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/date-dropdown|date-picker|datetime-picker): add missing properties to picker components

-   [#1497](https://github.com/siemens/ix/pull/1497) [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core): improve component a11y

-   [#1562](https://github.com/siemens/ix/pull/1562) [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add filter cleared event to ix-categroy-filter.

-   [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduce several new input components:

    -   `ix-input` for text based inputs
    -   `ix-number-input` for number based inputs with optional stepper buttons
    -   `ix-date-input` which shows a date picker within a dropdown
    -   `ix-textarea` for larger text inputs
    -   `ix-radio` and `ix-radio-group`
    -   `ix-checkbox`
    -   `ix-custom-field` to wrap custom components

    Introduce a new layout component `ix-layout-auto` to make it easier to create a typical input forms.

    Enhanced the compatibility with Forms for the following components:

    -   `ix-select`
    -   `ix-toggle`

    > _Deprecation:_
    >
    > Native css stylings for `input` and `textarea` (e.g `input[type="checkbox"]` and `input[type="radio"]`) are deprecated and will be removed in upcoming major release.

-   [#1563](https://github.com/siemens/ix/pull/1563) [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80) Thanks [@matthiashader](https://github.com/matthiashader)! - Update expandedChange event to trigger only on user interactions and add unnamed default slot for ix-pane-layout content.

### Patch Changes

-   [#1489](https://github.com/siemens/ix/pull/1489) [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/modal): duplicate event firing

-   [#1488](https://github.com/siemens/ix/pull/1488) [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): replace font styles with actual formats

-   [#1499](https://github.com/siemens/ix/pull/1499) [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/modal): figma - code mismatch

-   [#1514](https://github.com/siemens/ix/pull/1514) [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/content-header): adapt spacing

-   [#1560](https://github.com/siemens/ix/pull/1560) [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Enable discovery of trigger elements if in same shadow DOM for ix-tooltip and ix-dropdown.

-   [#1469](https://github.com/siemens/ix/pull/1469) [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/menu-about): set index if selected is set on tab-item

-   [#1527](https://github.com/siemens/ix/pull/1527) [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/checkbox): page jumps on checkbox click in scrollable ix-content

-   [#1571](https://github.com/siemens/ix/pull/1571) [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent null pointer exception in ix-menu component.

-   [#1557](https://github.com/siemens/ix/pull/1557) [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/select): check if value is defined, before updating selection

-   [#1468](https://github.com/siemens/ix/pull/1468) [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/slider): update tooltip on steps below 1

-   [#1519](https://github.com/siemens/ix/pull/1519) [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/button): fix keyboard navigation & accessibility

-   [#1541](https://github.com/siemens/ix/pull/1541) [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/spinner): move styling into shadow dom

-   [#1548](https://github.com/siemens/ix/pull/1548) [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/select): update input value on slot change

-   [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-drawer**: the full-height property is now working

-   [#1476](https://github.com/siemens/ix/pull/1476) [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/input): remove hover state from readonly and disabled variant

-   [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove `border-radius` from `<input />` if `readonly` or `disable` is set

-   [#1516](https://github.com/siemens/ix/pull/1516) [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7) Thanks [@h4de5](https://github.com/h4de5)! - fix(core/icon-toggle-button): remove console.log

-   [#1522](https://github.com/siemens/ix/pull/1522) [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core): prevent detached dom nodes

-   [#1498](https://github.com/siemens/ix/pull/1498) [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - fix(card): card-filled colors for hover/active states

-   [#1492](https://github.com/siemens/ix/pull/1492) [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/card-list): adapt title margin to figma

-   [#1483](https://github.com/siemens/ix/pull/1483) [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): clean up disconnected dropdowns

-   [#1558](https://github.com/siemens/ix/pull/1558) [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed) Thanks [@matthiashader](https://github.com/matthiashader)! - Improve responsive behaviour of `ix-datetime-picker` on small screens

-   [#1506](https://github.com/siemens/ix/pull/1506) [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/upload): disable file browser if control is disabled

## [@siemens/ix-vue@2.6.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.6.0) (2024-11-25T11:30:00Z)
### Minor Changes

-   [#1549](https://github.com/siemens/ix/pull/1549) [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/date-dropdown|date-picker|datetime-picker): add missing properties to picker components

-   [#1497](https://github.com/siemens/ix/pull/1497) [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core): improve component a11y

-   [#1562](https://github.com/siemens/ix/pull/1562) [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add filter cleared event to ix-categroy-filter.

-   [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduce several new input components:

    -   `ix-input` for text based inputs
    -   `ix-number-input` for number based inputs with optional stepper buttons
    -   `ix-date-input` which shows a date picker within a dropdown
    -   `ix-textarea` for larger text inputs
    -   `ix-radio` and `ix-radio-group`
    -   `ix-checkbox`
    -   `ix-custom-field` to wrap custom components

    Introduce a new layout component `ix-layout-auto` to make it easier to create a typical input forms.

    Enhanced the compatibility with Forms for the following components:

    -   `ix-select`
    -   `ix-toggle`

    > _Deprecation:_
    >
    > Native css stylings for `input` and `textarea` (e.g `input[type="checkbox"]` and `input[type="radio"]`) are deprecated and will be removed in upcoming major release.

-   [#1563](https://github.com/siemens/ix/pull/1563) [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80) Thanks [@matthiashader](https://github.com/matthiashader)! - Update expandedChange event to trigger only on user interactions and add unnamed default slot for ix-pane-layout content.

### Patch Changes

-   Updated dependencies \[[`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67), [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279), [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71), [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951), [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8), [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164), [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f), [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb), [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f), [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e), [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1), [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140), [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2), [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c), [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca), [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7), [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e), [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80), [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8), [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b), [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f), [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed), [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef)]:
    -   @siemens/ix@2.6.0

## [@siemens/ix-react@2.6.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.6.0) (2024-11-25T11:29:57Z)
### Minor Changes

-   [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduce several new input components:

    -   `ix-input` for text based inputs
    -   `ix-number-input` for number based inputs with optional stepper buttons
    -   `ix-date-input` which shows a date picker within a dropdown
    -   `ix-textarea` for larger text inputs
    -   `ix-radio` and `ix-radio-group`
    -   `ix-checkbox`
    -   `ix-custom-field` to wrap custom components

    Introduce a new layout component `ix-layout-auto` to make it easier to create a typical input forms.

    Enhanced the compatibility with Forms for the following components:

    -   `ix-select`
    -   `ix-toggle`

    > _Deprecation:_
    >
    > Native css stylings for `input` and `textarea` (e.g `input[type="checkbox"]` and `input[type="radio"]`) are deprecated and will be removed in upcoming major release.

### Patch Changes

-   Updated dependencies \[[`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67), [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279), [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71), [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951), [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8), [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164), [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f), [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb), [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f), [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e), [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1), [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140), [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2), [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c), [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca), [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7), [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e), [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80), [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8), [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b), [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f), [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed), [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef)]:
    -   @siemens/ix@2.6.0

## [@siemens/ix-angular@2.6.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.6.0) (2024-11-25T11:29:51Z)
### Minor Changes

-   [#1549](https://github.com/siemens/ix/pull/1549) [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/date-dropdown|date-picker|datetime-picker): add missing properties to picker components

-   [#1497](https://github.com/siemens/ix/pull/1497) [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core): improve component a11y

-   [#1562](https://github.com/siemens/ix/pull/1562) [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add filter cleared event to ix-categroy-filter.

-   [#1318](https://github.com/siemens/ix/pull/1318) [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduce several new input components:

    -   `ix-input` for text based inputs
    -   `ix-number-input` for number based inputs with optional stepper buttons
    -   `ix-date-input` which shows a date picker within a dropdown
    -   `ix-textarea` for larger text inputs
    -   `ix-radio` and `ix-radio-group`
    -   `ix-checkbox`
    -   `ix-custom-field` to wrap custom components

    Introduce a new layout component `ix-layout-auto` to make it easier to create a typical input forms.

    Enhanced the compatibility with Forms for the following components:

    -   `ix-select`
    -   `ix-toggle`

    > _Deprecation:_
    >
    > Native css stylings for `input` and `textarea` (e.g `input[type="checkbox"]` and `input[type="radio"]`) are deprecated and will be removed in upcoming major release.

-   [#1563](https://github.com/siemens/ix/pull/1563) [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80) Thanks [@matthiashader](https://github.com/matthiashader)! - Update expandedChange event to trigger only on user interactions and add unnamed default slot for ix-pane-layout content.

### Patch Changes

-   Updated dependencies \[[`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67), [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279), [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71), [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951), [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8), [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164), [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f), [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb), [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f), [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e), [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1), [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140), [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2), [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c), [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca), [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7), [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e), [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80), [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8), [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b), [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f), [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed), [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef)]:
    -   @siemens/ix@2.6.0

## [@siemens/ix-aggrid@2.2.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.2.1) (2024-11-25T11:29:49Z)
### Patch Changes

-   Updated dependencies \[[`3e2835ff8f`](https://github.com/siemens/ix/commit/3e2835ff8f4a66d6b36e1dcf4081ea6409f95e67), [`6041b3da11`](https://github.com/siemens/ix/commit/6041b3da1163463926ab204d7bad4064e9a2c279), [`d201c557e4`](https://github.com/siemens/ix/commit/d201c557e4f30a4e722d2d5d580133da6919cf71), [`7fe0136cad`](https://github.com/siemens/ix/commit/7fe0136cadbe3ea134c0f6f36c5e222fc49b2951), [`a5e217270f`](https://github.com/siemens/ix/commit/a5e217270f3181569f2eb21a3b25a0c075d8afc8), [`eb97f91e9d`](https://github.com/siemens/ix/commit/eb97f91e9d6c945b0a1b6e22581aa8223309d164), [`60760bcdb0`](https://github.com/siemens/ix/commit/60760bcdb0a2f91e2aed07bcb2f4848c8c96458f), [`d7e977759b`](https://github.com/siemens/ix/commit/d7e977759be79f73a4ab68f904e59941df493deb), [`cc6091fca5`](https://github.com/siemens/ix/commit/cc6091fca58700a8a09119d34a669ed5a654627f), [`ed676579f0`](https://github.com/siemens/ix/commit/ed676579f0cae3938e6c0d0d0f30249e0bee2d9e), [`720fb53c72`](https://github.com/siemens/ix/commit/720fb53c7250d0e5f91b5976d8b660a09bd678c1), [`70ea07da0c`](https://github.com/siemens/ix/commit/70ea07da0c582c7eff87e161e455434c54f23140), [`dc59d67a89`](https://github.com/siemens/ix/commit/dc59d67a89589ffc5442e2ded9004b6031a6bff2), [`d5affb02b3`](https://github.com/siemens/ix/commit/d5affb02b371e3541c546e272e2389b678630dd4), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ecf02d5bd5`](https://github.com/siemens/ix/commit/ecf02d5bd5d2e7131b3e24a490df7ee87527df6c), [`7347c40993`](https://github.com/siemens/ix/commit/7347c4099354ffd3c0c24c7826d63b012e7007ca), [`19b6842282`](https://github.com/siemens/ix/commit/19b68422829b72d2cfafdde18a7095b79918e660), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`7f371654a5`](https://github.com/siemens/ix/commit/7f371654a5510bc525d88d05f1d116f117c050d1), [`f5af78e208`](https://github.com/siemens/ix/commit/f5af78e20804ca0f737eb5ca2fbc5e54bfc8c1c3), [`ff99d8cdef`](https://github.com/siemens/ix/commit/ff99d8cdef1052a3c0b7c2d6619de0a8cc50efd7), [`1a13a46096`](https://github.com/siemens/ix/commit/1a13a46096f35574e64aa24e67aec85a785cb42e), [`d6da6adfd6`](https://github.com/siemens/ix/commit/d6da6adfd654f5a17180befbdae0e8f20a63fd80), [`0b41424d95`](https://github.com/siemens/ix/commit/0b41424d951bd07c49b66b33fb151da85dd803e8), [`20553f5e63`](https://github.com/siemens/ix/commit/20553f5e63b88f09c30f07194e1d33e68e93535b), [`a0316f5994`](https://github.com/siemens/ix/commit/a0316f59944dc93e8bc1e0009e8a45c9ad4f275f), [`8e72ec818c`](https://github.com/siemens/ix/commit/8e72ec818cce3895b9410e6fcfe743498351b1ed), [`393b51d03b`](https://github.com/siemens/ix/commit/393b51d03b830d8fd5cb8e8cfdea6bcd85b571ef)]:
    -   @siemens/ix@2.6.0

## [@siemens/ix@2.5.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.5.0) (2024-09-16T09:56:35Z)
### Minor Changes

-   [#1317](https://github.com/siemens/ix/pull/1317) [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38) Thanks [@matthiashader](https://github.com/matthiashader)! - feat(core/push-card): add alternative card types

-   [#1422](https://github.com/siemens/ix/pull/1422) [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core): add css safe areas

-   [#1454](https://github.com/siemens/ix/pull/1454) [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/group): handle preventDefault for events

-   [#1449](https://github.com/siemens/ix/pull/1449) [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/application-header): hide toggle menu if header used outside of application frame

### Patch Changes

-   [#1441](https://github.com/siemens/ix/pull/1441) [`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/category-filter): does not clear category preview

-   [#1462](https://github.com/siemens/ix/pull/1462) [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): cutoff near viewport edges

-   [#1343](https://github.com/siemens/ix/pull/1343) [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/dropdown): spacing and color

-   [#1401](https://github.com/siemens/ix/pull/1401) [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/select): set value before triggering event

-   [#1444](https://github.com/siemens/ix/pull/1444) [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): styles bleeding in

-   [#1428](https://github.com/siemens/ix/pull/1428) [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tree): handle text overflow gracefully

-   [#1354](https://github.com/siemens/ix/pull/1354) [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/card-list): card-list show all not getting truncated

-   [#1438](https://github.com/siemens/ix/pull/1438) [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): cancel tooltip positioning when reference is not visible

-   [#1409](https://github.com/siemens/ix/pull/1409) [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): export TypedEvent

-   [#1460](https://github.com/siemens/ix/pull/1460) [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tree): prevent hyperlist from disposing dropdowns linked to tree items

-   [#1370](https://github.com/siemens/ix/pull/1370) [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/menu-item): occasionally empty tooltips in menu-item

-   [#1454](https://github.com/siemens/ix/pull/1454) [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/group): remove max-width restriction

## [@siemens/ix-vue@2.5.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.5.0) (2024-09-16T09:56:47Z)
### Patch Changes

-   Updated dependencies \[[`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53), [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644), [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276), [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f), [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38), [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6), [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce), [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69), [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2), [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39), [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310), [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1), [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed)]:
    -   @siemens/ix@2.5.0

## [@siemens/ix-react@2.5.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.5.0) (2024-09-16T09:56:44Z)
### Patch Changes

-   Updated dependencies \[[`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53), [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644), [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276), [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f), [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38), [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6), [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce), [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69), [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2), [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39), [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310), [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1), [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed)]:
    -   @siemens/ix@2.5.0

## [@siemens/ix-echarts@2.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-echarts%402.3.0) (2024-09-16T09:56:41Z)
### Minor Changes

-   [#1421](https://github.com/siemens/ix/pull/1421) [`4804d54c4b`](https://github.com/siemens/ix/commit/4804d54c4b7cc70a8c155397d0c4ef9eefa13ec4) Thanks [@matthiashader](https://github.com/matthiashader)! - feat(echarts): add utility function to access color variables

## [@siemens/ix-angular@2.5.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.5.0) (2024-09-16T09:56:38Z)
### Patch Changes

-   Updated dependencies \[[`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53), [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644), [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276), [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f), [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38), [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6), [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce), [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69), [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2), [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39), [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310), [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1), [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed)]:
    -   @siemens/ix@2.5.0

## [@siemens/ix-aggrid@2.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.2.0) (2024-09-16T09:56:32Z)
### Minor Changes

-   [#1450](https://github.com/siemens/ix/pull/1450) [`7181098e9a`](https://github.com/siemens/ix/commit/7181098e9a044a29edf6507377e24a7c82fe7591) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(aggrid): update peerDependency to latest major version

### Patch Changes

-   Updated dependencies \[[`a69f108ba8`](https://github.com/siemens/ix/commit/a69f108ba8676b5f4c6f0d3dc4cfa9d483c89f53), [`501cce588b`](https://github.com/siemens/ix/commit/501cce588b44881c934c45cdfa5795ebafcbb644), [`b4a306ef90`](https://github.com/siemens/ix/commit/b4a306ef909704cb3f0a5826b34aa52f0cbcb276), [`1b4da95e21`](https://github.com/siemens/ix/commit/1b4da95e21aea5a28ede042289e38dd88c79512f), [`c8b2d3caf2`](https://github.com/siemens/ix/commit/c8b2d3caf263982133af881e72bafca7cdb7dc38), [`5acd52a874`](https://github.com/siemens/ix/commit/5acd52a8741889af40ebde253ee35c6b5c8a1be6), [`c19a537552`](https://github.com/siemens/ix/commit/c19a5375524a9c29bc4380119f40d3d829c104ce), [`938ca56ca5`](https://github.com/siemens/ix/commit/938ca56ca58def8c96267db8044d2f44110cbf69), [`00c68b5af2`](https://github.com/siemens/ix/commit/00c68b5af2dfb7c9baa99bc1645124c30e9788e2), [`5343eed4ea`](https://github.com/siemens/ix/commit/5343eed4eab708148139036aab3f3b0e5699df39), [`2401b2ee27`](https://github.com/siemens/ix/commit/2401b2ee27d4975cbe77bab2c6300abc791f4310), [`69658147c8`](https://github.com/siemens/ix/commit/69658147c8e462504e6ec30790d44f60dfec97e1), [`34ddfd0410`](https://github.com/siemens/ix/commit/34ddfd041025b251451d46668bc733d84b176c14), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`da1f10e8ca`](https://github.com/siemens/ix/commit/da1f10e8ca6c639ff7e549454f5de4a76505204c), [`f91b0a5bed`](https://github.com/siemens/ix/commit/f91b0a5bed9c41aa8a94c4142cc381592fa3b7ed)]:
    -   @siemens/ix@2.5.0

## [@siemens/ix@2.4.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.4.1) (2024-07-17T13:53:12Z)
### Patch Changes

-   [#1382](https://github.com/siemens/ix/pull/1382) [`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - fix(core/avatar): include scrollbar mixin to apply styling

-   [#1379](https://github.com/siemens/ix/pull/1379) [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): stop auto update when closing dropdown

-   [#1380](https://github.com/siemens/ix/pull/1380) [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/group-item): allow clicks on supress click event

-   [#1380](https://github.com/siemens/ix/pull/1380) [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/application-header): increase font

-   [#1386](https://github.com/siemens/ix/pull/1386) [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tabs): re-render each time parent container changes size

-   [#1390](https://github.com/siemens/ix/pull/1390) [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/tabs): minimize tab auto scroll distance

-   [#1375](https://github.com/siemens/ix/pull/1375) [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/slider): hide slider reference visual for extrema

-   [#1374](https://github.com/siemens/ix/pull/1374) [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): destroy auto update cycle before starting a new one

-   [#1391](https://github.com/siemens/ix/pull/1391) [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/pagination): disable buttons if count is unset

-   [#1373](https://github.com/siemens/ix/pull/1373) [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/application-header): prevent chrome crash after resize window

## [@siemens/ix-vue@2.4.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.4.1) (2024-07-17T13:53:15Z)
### Patch Changes

-   Updated dependencies \[[`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f), [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a), [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24), [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497), [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86), [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b), [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46)]:
    -   @siemens/ix@2.4.1

## [@siemens/ix-react@2.4.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.4.1) (2024-07-17T13:53:09Z)
### Patch Changes

-   Updated dependencies \[[`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f), [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a), [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24), [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497), [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86), [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b), [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46)]:
    -   @siemens/ix@2.4.1

## [@siemens/ix-angular@2.4.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.4.1) (2024-07-17T13:53:06Z)
### Patch Changes

-   Updated dependencies \[[`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f), [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a), [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24), [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497), [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86), [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b), [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46)]:
    -   @siemens/ix@2.4.1

## [@siemens/ix-aggrid@2.1.6](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.1.6) (2024-07-17T13:53:03Z)
### Patch Changes

-   [#1380](https://github.com/siemens/ix/pull/1380) [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/aggrid): align colors

-   Updated dependencies \[[`24a9514772`](https://github.com/siemens/ix/commit/24a951477268f25b68ac7acb97b9c7302692912f), [`97291dbd76`](https://github.com/siemens/ix/commit/97291dbd7694e1d5b4705e4b89a41c114acd1f20), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`55783f7a0d`](https://github.com/siemens/ix/commit/55783f7a0d812c69f3825d44244f2a96daca74e4), [`1cfadcd3b2`](https://github.com/siemens/ix/commit/1cfadcd3b249d8e16d14121cdb87c2a6ff28e28a), [`6c8e3b789b`](https://github.com/siemens/ix/commit/6c8e3b789b026f0728bbe6dbb453984c1f9a2e24), [`c8580e421b`](https://github.com/siemens/ix/commit/c8580e421b70b56a8cafb55cc4de07802adae497), [`f57e82fcf3`](https://github.com/siemens/ix/commit/f57e82fcf3d643cb966db7da54508e0d622a0b86), [`a650347f34`](https://github.com/siemens/ix/commit/a650347f346d7b711142af8e7249a5abf1188c8b), [`bb1f9c3d4c`](https://github.com/siemens/ix/commit/bb1f9c3d4c606643263942c53dd58d07890bfa46)]:
    -   @siemens/ix@2.4.1

## [@siemens/ix@2.4.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.4.0) (2024-07-02T10:50:51Z)
### Minor Changes

-   [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(core/select): allow prevention of events

### Patch Changes

-   [#1360](https://github.com/siemens/ix/pull/1360) [`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): prevent minor update of stencil/core

-   [#1355](https://github.com/siemens/ix/pull/1355) [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown button): prevent close on click if close behaviour is outside

-   [#1335](https://github.com/siemens/ix/pull/1335) [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201) Thanks [@danielleroux](https://github.com/danielleroux)! - build: remove internal polyfills

## [@siemens/ix-vue@2.4.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.4.0) (2024-07-02T10:50:48Z)
### Patch Changes

-   [#1335](https://github.com/siemens/ix/pull/1335) [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201) Thanks [@danielleroux](https://github.com/danielleroux)! - build: remove internal polyfills

-   Updated dependencies \[[`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8), [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961), [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7), [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201)]:
    -   @siemens/ix@2.4.0
