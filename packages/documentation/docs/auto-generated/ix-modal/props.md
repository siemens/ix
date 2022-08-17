| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|animation| Should the modal be animtated | `animation` | `boolean` | `true` |
|ariaDescribedBy|  | `aria-described-by` | `string` | `undefined` |
|ariaLabelledBy|  | `aria-labelled-by` | `string` | `'modal-title'` |
|backdrop| Adds a dimming layer to the modal. This should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks). | `backdrop` | `"static" ｜ boolean` | `true` |
|backdropClass| Backdrop class | `backdrop-class` | `string` | `undefined` |
|beforeDismiss| BeforeDismiss callbacl | `undefined` | `() => boolean ｜ Promise<boolean>` | `undefined` |
|centered| Centered modal | `centered` | `boolean` | `false` |
|content| Content of modal | `content` | `HTMLElement ｜ string` | `undefined` |
|headerTitle| Header title | `header-title` | `string` | `undefined` |
|icon| Optional icon displayed next to the title | `icon` | `string` | `undefined` |
|iconColor| Color of the header {@link icon} | `icon-color` | `"color-alarm" ｜ "color-info" ｜ "color-std-text" ｜ "color-success" ｜ "color-warning"` | `'color-std-text'` |
|keyboard| ESC close modal dialog | `keyboard` | `boolean` | `true` |
|modalDialogClass| Modal dialog class | `modal-dialog-class` | `string` | `undefined` |
|scrollable| Modal scollable | `scrollable` | `boolean` | `true` |
|size| Modal size | `size` | `"lg" ｜ "sm" ｜ "xl"` | `'sm'` |
|windowClass| Window class | `window-class` | `string` | `undefined` |
