---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add support for showing `ix-dropdown` at an absolute viewport position, independent of an anchor or trigger element. This enables use cases such as context menus that open at the location of a right-click.

- New `anchorPosition` property (`{ x: number; y: number }`) positions the dropdown at absolute viewport coordinates (e.g. `clientX`/`clientY` of a `contextmenu` event).
- New `showAt(x, y)` method opens the dropdown at the given absolute viewport coordinates, or moves it if it is already open. The position applies until the dropdown is hidden and does not change `anchorPosition`.
- When opened at a position without a trigger, focus moves into the dropdown, the active item is exposed to assistive technologies, and focus returns to the previously focused element when the dropdown closes.
- `aria-modal` is no longer set on dropdowns with a non-dialog role (e.g. `role="menu"`), where it is not a valid ARIA attribute.

Fixes #2578
