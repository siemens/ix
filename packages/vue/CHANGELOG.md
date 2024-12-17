# @siemens/ix-vue

## 2.6.1

### Patch Changes

- Updated dependencies [[`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`57586a7fd1`](https://github.com/siemens/ix/commit/57586a7fd1766d0b8bef04d7c0e32f348775b977), [`77f76febbc`](https://github.com/siemens/ix/commit/77f76febbc00df91a3d27f43845f2cfadd9234ac), [`0fe4d521ed`](https://github.com/siemens/ix/commit/0fe4d521ed0c269e63136d31d17a21022866988c), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1), [`1c65a17d69`](https://github.com/siemens/ix/commit/1c65a17d6911e5be72e7612e87d0b7fbeeeacc73), [`0e173504ea`](https://github.com/siemens/ix/commit/0e173504ea5a73f2822c7a322d7a23a9ddfd1fa1)]:
  - @siemens/ix@2.6.1

## 2.6.0

### Minor Changes

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

- [#1335](https://github.com/siemens/ix/pull/1335) [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201) Thanks [@danielleroux](https://github.com/danielleroux)! - build: remove internal polyfills

- Updated dependencies [[`af16f8f7bf`](https://github.com/siemens/ix/commit/af16f8f7bfb98fe693bd09a71223e6e3450fb3f8), [`dff51d292c`](https://github.com/siemens/ix/commit/dff51d292ce64f2c4fc5c7461dd5fae0d6c2d961), [`6ab338a65d`](https://github.com/siemens/ix/commit/6ab338a65d6ce79672e0233cbfad41a3b3bb44d7), [`47d2fe98a3`](https://github.com/siemens/ix/commit/47d2fe98a318ed79f657bdc2e1803a044978b201)]:
  - @siemens/ix@2.4.0

## 2.3.0

### Patch Changes

- [#1261](https://github.com/siemens/ix/pull/1261) [`c025a49c02`](https://github.com/siemens/ix/commit/c025a49c0216800274581ee67884e488c1bfdfce) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core/date-dropdown): show year and month dropdown

- [#1292](https://github.com/siemens/ix/pull/1292) [`c1d4f7d6b9`](https://github.com/siemens/ix/commit/c1d4f7d6b977945ded8e2f718d7b6df1f71f0557) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - feat(core/split-button): add close behavior

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
