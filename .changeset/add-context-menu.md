---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add the `ix-context-menu` component, which replaces the native browser context menu with an IX menu that opens at the pointer when right-clicking a target element, including Angular, React, and Vue framework wrappers.

- Opens via right-click on the `target` element (defaults to the parent element), or via <kbd>ContextMenu</kbd> / <kbd>Shift</kbd>+<kbd>F10</kbd> at the focused element.
- Closes on item click, outside click, right-click outside the target, scrolling, window resize or blur, and <kbd>Escape</kbd>; only one context menu is open at a time.
- The cancelable `contextMenuOpen` event exposes the original `contextmenu` event and the target, e.g. to adjust the menu items per right-clicked element or to show the native context menu instead.
- Supports submenus, keyboard navigation (roving tabindex by default), `enableTopLayer`, and the `showAt(x, y)` and `hide()` methods.
- Focus returns to the previously focused element when the context menu closes.

Fixes #2578
