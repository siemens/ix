# @siemens/ix-react

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
