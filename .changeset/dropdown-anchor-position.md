---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add support for showing `ix-dropdown` at an absolute viewport position, independent of an anchor or trigger element. This enables use cases such as context menus that open at the location of a right-click.

- New `anchorPosition` property (`{ x: number; y: number }`) positions the dropdown at absolute viewport coordinates (e.g. `clientX`/`clientY` of a `contextmenu` event).
- New `showAt(x, y)` method opens the dropdown at the given absolute viewport coordinates, or moves it if it is already open.
- When opened at a position without a trigger, keyboard navigation works and focus returns to the previously focused element when the dropdown is closed via keyboard.
