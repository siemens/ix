---
sidebar_title: Changelog
hide_table_of_contents: true
title: Changelog
---
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

## [@siemens/ix-react@2.4.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.4.0) (2024-07-02T10:50:54Z)
### Patch Changes

-   Updated dependencies \[[`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8), [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961), [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7), [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201)]:
    -   @siemens/ix@2.4.0

## [@siemens/ix-angular@2.4.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.4.0) (2024-07-02T10:50:45Z)
### Patch Changes

-   [#1335](https://github.com/siemens/ix/pull/1335) [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201) Thanks [@danielleroux](https://github.com/danielleroux)! - build: remove internal polyfills

-   Updated dependencies \[[`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8), [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961), [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7), [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201)]:
    -   @siemens/ix@2.4.0

## [@siemens/ix-aggrid@2.1.5](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.1.5) (2024-07-02T10:50:42Z)
### Patch Changes

-   Updated dependencies \[[`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8), [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961), [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7), [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201)]:
    -   @siemens/ix@2.4.0

## [@siemens/ix@2.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.3.0) (2024-06-21T05:31:17Z)
### Minor Changes

-   [#1264](https://github.com/siemens/ix/pull/1264) [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/date-dropdown): add disabled property

-   [#1320](https://github.com/siemens/ix/pull/1320) [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd) Thanks [@PhentomPT](https://github.com/PhentomPT)! - feat(core): add hydrate output target

-   [#1277](https://github.com/siemens/ix/pull/1277) [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/button|icon-button): add danger variant

-   [#1306](https://github.com/siemens/ix/pull/1306) [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/theme): sync css variables

-   [#1292](https://github.com/siemens/ix/pull/1292) [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/split-button): add close behavior

### Patch Changes

-   [#1336](https://github.com/siemens/ix/pull/1336) [`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/panes): rotate icon at left and right pane

-   [#1261](https://github.com/siemens/ix/pull/1261) [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/date-dropdown): show year and month dropdown

-   [#1312](https://github.com/siemens/ix/pull/1312) [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/chip): adjust width on outline variant

-   [#1243](https://github.com/siemens/ix/pull/1243) [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/event-list-item): add aria-disabled attribute to list element

-   [#1246](https://github.com/siemens/ix/pull/1246) [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569) Thanks [@jul-lam](https://github.com/jul-lam)! - fix(core/category-filter): open dropdown on text input and keep it open

-   [#1285](https://github.com/siemens/ix/pull/1285) [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/blind): avoid unnecessary wrapping

-   [#1274](https://github.com/siemens/ix/pull/1274) [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/base-button): set aria disabled

-   [#1260](https://github.com/siemens/ix/pull/1260) [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/group): show expand-collapse icon

-   [#1313](https://github.com/siemens/ix/pull/1313) [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/scrollbar): fix firefox appearance (scrollbar & input & tabs)

-   [#1262](https://github.com/siemens/ix/pull/1262) [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/group-context-menu): set default cursor

-   [#1297](https://github.com/siemens/ix/pull/1297) [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/workflow-step): load icon names before component is initialized

-   [#1230](https://github.com/siemens/ix/pull/1230) [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/event-list): event-list-items not selectabe in chrome

-   [#1251](https://github.com/siemens/ix/pull/1251) [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/tooltip): null check before event listener gets registered on trigger

-   [#1311](https://github.com/siemens/ix/pull/1311) [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/tooltip): adjust arrow height

-   [#1334](https://github.com/siemens/ix/pull/1334) [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/dropdown): prevent closing

-   [#1244](https://github.com/siemens/ix/pull/1244) [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - docs(core/menu-about): update jsdocs for label property

-   [#1225](https://github.com/siemens/ix/pull/1225) [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - fix(core/group): use correct cursors

-   [#1287](https://github.com/siemens/ix/pull/1287) [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/select): rollback and fix object iteration

-   [#1293](https://github.com/siemens/ix/pull/1293) [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/menu): use label property to render internal menu items

-   [#1339](https://github.com/siemens/ix/pull/1339) [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/menu): fix firefox overflow behavior and input styling

-   [#1219](https://github.com/siemens/ix/pull/1219) [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/workflow): add flexible layout

## [@siemens/ix-vue@2.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.3.0) (2024-06-21T05:31:26Z)
### Patch Changes

-   [#1261](https://github.com/siemens/ix/pull/1261) [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/date-dropdown): show year and month dropdown

-   [#1292](https://github.com/siemens/ix/pull/1292) [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/split-button): add close behavior

-   Updated dependencies \[[`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d), [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce), [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933), [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c), [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925), [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569), [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3), [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973), [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458), [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1), [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6), [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3), [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222), [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd), [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10), [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7), [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c), [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390), [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2), [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34), [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140), [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801), [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945), [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557), [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43), [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff)]:
    -   @siemens/ix@2.3.0

## [@siemens/ix-react@2.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.3.0) (2024-06-21T05:31:20Z)
### Patch Changes

-   Updated dependencies \[[`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d), [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce), [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933), [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c), [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925), [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569), [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3), [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973), [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458), [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1), [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6), [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3), [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222), [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd), [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10), [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7), [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c), [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390), [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2), [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34), [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140), [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801), [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945), [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557), [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43), [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff)]:
    -   @siemens/ix@2.3.0

## [@siemens/ix-angular@2.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.3.0) (2024-06-21T05:31:23Z)
### Patch Changes

-   [#1281](https://github.com/siemens/ix/pull/1281) [`a8a2d55801`](https://github.com/siemens/ix/commit/a8a2d55801adc428b15f10ee81886bad8e3a9faa) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(angular/modal): avoid overflow of modal content

-   [#1292](https://github.com/siemens/ix/pull/1292) [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/split-button): add close behavior

-   Updated dependencies \[[`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d), [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce), [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933), [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c), [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925), [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569), [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3), [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973), [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458), [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1), [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6), [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3), [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222), [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd), [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10), [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7), [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c), [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390), [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2), [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34), [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140), [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801), [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945), [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557), [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43), [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff)]:
    -   @siemens/ix@2.3.0

## [@siemens/ix-aggrid@2.1.4](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%402.1.4) (2024-06-21T05:31:14Z)
### Patch Changes

-   Updated dependencies \[[`1db5a061f5`](https://github.com/siemens/ix/commit/1db5a061f56af548aedf5e86049a4e26ccd4f44d), [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce), [`f4eeebfd5e`](https://github.com/siemens/ix/commit/f4eeebfd5e5ad3a582b98816270ac9cf400d2933), [`b4b06a6b40`](https://github.com/siemens/ix/commit/b4b06a6b40a76e2749aad7134efeb53904b4dc8c), [`57fa02891e`](https://github.com/siemens/ix/commit/57fa02891e0d81a44a470a4e3c17fe116af36925), [`756bc424a8`](https://github.com/siemens/ix/commit/756bc424a8e0a1d26cb7058dfce5e5418e9ab569), [`9ee4aab8fa`](https://github.com/siemens/ix/commit/9ee4aab8faa483cd3e066c353bfc34527ad88aa3), [`4418b8cebd`](https://github.com/siemens/ix/commit/4418b8cebda2f7dd475cfaba72e2240137fa5973), [`90a7b71940`](https://github.com/siemens/ix/commit/90a7b719405df0885823836964a0db99966fe458), [`e74e830308`](https://github.com/siemens/ix/commit/e74e830308bca2dc532d6321e17acfa518d178d1), [`5eea8d18bf`](https://github.com/siemens/ix/commit/5eea8d18bfe80eaad111cb38b880f6a0a9cd0bd6), [`7f31b94599`](https://github.com/siemens/ix/commit/7f31b945994c6ca24550a2b7fac07d9a8db8fcb3), [`5b2df0c4d4`](https://github.com/siemens/ix/commit/5b2df0c4d4e35a7224ac70cef22a1b89fef4a222), [`bace31f8d5`](https://github.com/siemens/ix/commit/bace31f8d596ea00c75626110dbdf029c211fdbd), [`346fb9a2de`](https://github.com/siemens/ix/commit/346fb9a2dedf1f37d8c952b84567545b174eed10), [`70ec75b65d`](https://github.com/siemens/ix/commit/70ec75b65d3540dc6c9bd9369222a43ede81eac7), [`5149f1a535`](https://github.com/siemens/ix/commit/5149f1a535b041d469e23bd2221d12e4b639d73c), [`1a0175f11e`](https://github.com/siemens/ix/commit/1a0175f11e20afcd3e6d357a856c9c8764cfa390), [`a35859addc`](https://github.com/siemens/ix/commit/a35859addcccffd56bc5844f0455decbdbcc11d2), [`55d9fca5b4`](https://github.com/siemens/ix/commit/55d9fca5b41c1ae6fa257a4a1da69e4a0efaad34), [`bee3696005`](https://github.com/siemens/ix/commit/bee3696005a284707118d7e6e3155ede54886140), [`6118ff3e83`](https://github.com/siemens/ix/commit/6118ff3e834e4c148bb5616e7fa6c4d48b8b8801), [`fb48f05e57`](https://github.com/siemens/ix/commit/fb48f05e570e61a42ddd7cf3dae1eafafe236945), [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557), [`9e75d7bd2d`](https://github.com/siemens/ix/commit/9e75d7bd2df4222913a093d7f4e899e4dc5fcb43), [`544ceed834`](https://github.com/siemens/ix/commit/544ceed8349d94fe060dfcbd8d5f45526ec75dff)]:
    -   @siemens/ix@2.3.0

## [v2.2.1](https://github.com/siemens/ix/releases/tag/v2.2.1) (2024-04-26T05:46:20Z)
## What's Changed
* fix(core/input): update autofill styling by @nuke-ellington in https://github.com/siemens/ix/pull/1237
* fix(core/dropdown): add null check for trigger element by @nuke-ellington in https://github.com/siemens/ix/pull/1241


**Full Changelog**: https://github.com/siemens/ix/compare/v2.2.0...v2.2.1
## [v2.2.0](https://github.com/siemens/ix/releases/tag/v2.2.0) (2024-04-23T09:10:19Z)
## What's Changed

### Bug Fixes
* fix(core/slider): fix tick color by @matthiashader in https://github.com/siemens/ix/pull/1175
* fix(toggle): fixed toggle circle with and height by @ridvandmrc in https://github.com/siemens/ix/pull/1185
* fix(core/action-card): change subheading color by @nuke-ellington in https://github.com/siemens/ix/pull/1178
* fix(core/input-group|category-filter): align styling of input components by @nuke-ellington in https://github.com/siemens/ix/pull/1151
* fix(core/select): non string values for the "value" prop of select-items are not working by @jul-lam in https://github.com/siemens/ix/pull/1159
* fix(core/application-switch-modal): add border-radius to app icon by @matthiashader in https://github.com/siemens/ix/pull/1158
* fix(core/card): adjust selected background color by @matthiashader in https://github.com/siemens/ix/pull/1171
* fix(blind): provided ellipsis for blind header by @ridvandmrc in https://github.com/siemens/ix/pull/1186
* fix(date-dropdown): updated the current date when the props are changed by @ridvandmrc in https://github.com/siemens/ix/pull/1139
* fix(core/dropdown): fix runtime & detach issues by @matthiashader in https://github.com/siemens/ix/pull/1192
* fix(core/toast|react/toast|vue/toast): predefine custom elements before usage by @danielleroux in https://github.com/siemens/ix/pull/1201
* fix(core/select-item): check by undefined not by value by @jul-lam in https://github.com/siemens/ix/pull/1214
* fix(core/input-group): update margin by @nuke-ellington in https://github.com/siemens/ix/pull/1218
* fix(echarts): align charting colors by @jul-lam in https://github.com/siemens/ix/pull/1190
* fix(core/workflow-steps): fix initial layout shift by @matthiashader in https://github.com/siemens/ix/pull/1198
* fix(core/tooltip): prevent focusin event call showTooltip by @danielleroux in https://github.com/siemens/ix/pull/1221
* fix(core/select): arrow key navigation by @nuke-ellington in https://github.com/siemens/ix/pull/1196
* fix(core/select): reset input text on blur by @ridvandmrc in https://github.com/siemens/ix/pull/1195

### Features

* feat(core): adjust classic theme variables by @danielleroux in https://github.com/siemens/ix/pull/1184
* feat(core/menu): make behavior at breakpoint 'lg' configurable and change 'md' breakpoint menu icons by @jul-lam in https://github.com/siemens/ix/pull/1156
* feat(core/card-list): make show all button optional by @nuke-ellington in https://github.com/siemens/ix/pull/1197
* feat(core/menu-item): show tooltip on hover by @danielleroux in https://github.com/siemens/ix/pull/1200
* feat(core/category-filter): make logical operator optional by @nuke-ellington in https://github.com/siemens/ix/pull/1233


## New Contributors
* @kathrinschalber made their first contribution in https://github.com/siemens/ix/pull/1210
* @katjaKoppensteiner made their first contribution in https://github.com/siemens/ix/pull/1216

**Full Changelog**: https://github.com/siemens/ix/compare/v2.1.2...v2.2.0
## [2.1.2](https://github.com/siemens/ix/releases/tag/v2.1.2) (2024-03-15T10:30:28Z)
## What's Changed
* fix(core/modal): fix paddings of custom variant by @matthiashader in https://github.com/siemens/ix/pull/1126
* fix(core/dropdown): add null check by @nuke-ellington in https://github.com/siemens/ix/pull/1132
* fix(core/avatar): adapt colors by @jul-lam in https://github.com/siemens/ix/pull/1141
* fix(core/menu) fix overflow behavior by @matthiashader in https://github.com/siemens/ix/pull/1127
* fix(core/select-item): Fixes inherit color by @matthiashader in https://github.com/siemens/ix/pull/1160
* fix(core/typography): use text color value and add vrts by @nuke-ellington in https://github.com/siemens/ix/pull/1155
* fix(core/menu-avatar): align documentation with figma by @matthiashader in https://github.com/siemens/ix/pull/1153
* fix(core/date-dropdown): hide range options column if only one option available by @nuke-ellington in https://github.com/siemens/ix/pull/1162
* fix(core/menu-about-news): adapt styling by @nuke-ellington in https://github.com/siemens/ix/pull/1152


**Full Changelog**: https://github.com/siemens/ix/compare/v2.1.1...v2.1.2

## [2.1.1](https://github.com/siemens/ix/releases/tag/v2.1.1) (2024-03-14T12:22:53Z)
## What's Changed

* fix(core/modal): fixed closing modal issue when press space or enter by @ridvandmrc in https://github.com/siemens/ix/pull/1080
* fix(react|vue): define internal components by @danielleroux in https://github.com/siemens/ix/pull/1099
* fix(core/dropdown): check against undefined access by @danielleroux in https://github.com/siemens/ix/pull/1104
* fix(core/message-bar): remove unwanted margin by @matthiashader in https://github.com/siemens/ix/pull/1064
* fix(core/burger-menu): a11y expand state by @nuke-ellington in https://github.com/siemens/ix/pull/1112
* fix(core/tooltip): remove direct constructor access by @danielleroux in https://github.com/siemens/ix/pull/1118
* fix(core/panes): expanded and slot error by @jul-lam in https://github.com/siemens/ix/pull/1119
* fix(core/menu-category): allow empty icon as menu-category-item by @jul-lam in https://github.com/siemens/ix/pull/1110
* fix(core/menu-category): fix unwanted behavior with active element by @matthiashader in https://github.com/siemens/ix/pull/1102
* fix(core/menu-avatar-item): use host for trigger target by @danielleroux in https://github.com/siemens/ix/pull/1113
* fix(core/menu): fix theme switching icon by @matthiashader in https://github.com/siemens/ix/pull/1121
* fix(core/menu-avatar-item): use correct theme color by @KaiSoellch in https://github.com/siemens/ix/pull/1116
* fix(angular): icon size property missing in wrapper generation by @danielleroux in https://github.com/siemens/ix/pull/1124
* fix(core/blind): refactor header to not use z-index by @nuke-ellington in https://github.com/siemens/ix/pull/1125

## New Contributors
* @KaiSoellch made their first contribution in https://github.com/siemens/ix/pull/1116

**Full Changelog**: https://github.com/siemens/ix/compare/v2.1.0...v2.1.1
