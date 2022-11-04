| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|<div className="Api__Table"> <div>animation</div> <div className="Api__Table Docs__Tags"></div></div>| Should the modal be animtated | `animation` | `boolean` | `true` |
|<div className="Api__Table"> <div>ariaDescribedBy</div> <div className="Api__Table Docs__Tags"></div></div>|  | `aria-described-by` | `string` | `undefined` |
|<div className="Api__Table"> <div>ariaLabelledBy</div> <div className="Api__Table Docs__Tags"></div></div>|  | `aria-labelled-by` | `string` | `'modal-title'` |
|<div className="Api__Table"> <div>backdrop</div> <div className="Api__Table Docs__Tags"></div></div>| Adds a dimming layer to the modal. This should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks). | `backdrop` | `"static" ｜ boolean` | `true` |
|<div className="Api__Table"> <div>backdropClass</div> <div className="Api__Table Docs__Tags"></div></div>| Backdrop class | `backdrop-class` | `string` | `undefined` |
|<div className="Api__Table"> <div>beforeDismiss</div> <div className="Api__Table Docs__Tags"></div></div>| BeforeDismiss callback | `undefined` | `(reason?: any) => boolean ｜ Promise<boolean>` | `undefined` |
|<div className="Api__Table"> <div>centered</div> <div className="Api__Table Docs__Tags"></div></div>| Centered modal | `centered` | `boolean` | `false` |
|<div className="Api__Table"> <div>content</div> <div className="Api__Table Docs__Tags"></div></div>| Content of modal | `content` | `HTMLElement ｜ string` | `undefined` |
|<div className="Api__Table"> <div>headerTitle</div> <div className="Api__Table Docs__Tags"></div></div>| Header title | `header-title` | `string` | `undefined` |
|<div className="Api__Table"> <div>icon</div> <div className="Api__Table Docs__Tags"></div></div>| Optional icon displayed next to the title | `icon` | `string` | `undefined` |
|<div className="Api__Table"> <div>iconColor</div> <div className="Api__Table Docs__Tags"></div></div>| Color of the header {@link icon} | `icon-color` | `"color-alarm" ｜ "color-info" ｜ "color-std-text" ｜ "color-success" ｜ "color-warning"` | `'color-std-text'` |
|<div className="Api__Table"> <div>keyboard</div> <div className="Api__Table Docs__Tags"></div></div>| ESC close modal dialog | `keyboard` | `boolean` | `true` |
|<div className="Api__Table"> <div>modalDialogClass</div> <div className="Api__Table Docs__Tags"></div></div>| Modal dialog class | `modal-dialog-class` | `string` | `undefined` |
|<div className="Api__Table"> <div>scrollable</div> <div className="Api__Table Docs__Tags"></div></div>| Modal scollable | `scrollable` | `boolean` | `true` |
|<div className="Api__Table"> <div>size</div> <div className="Api__Table Docs__Tags"></div></div>| Modal size | `size` | `"lg" ｜ "sm" ｜ "xl"` | `'sm'` |
|<div className="Api__Table"> <div>windowClass</div> <div className="Api__Table Docs__Tags"></div></div>| Window class | `window-class` | `string` | `undefined` |
