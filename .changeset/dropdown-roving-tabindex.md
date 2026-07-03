---
'@siemens/ix': minor
---

Added a `navigationMode` property to `ix-dropdown` (and passed through by `ix-dropdown-button`) that selects the keyboard navigation strategy. The new `roving-tabindex` mode moves real DOM focus between items via a roving `tabindex` (`0` for the active item, `-1` for the rest), so items are actually focused and no `aria-activedescendant` is required. Besides the built-in item components, arbitrary focusable elements (e.g. a native `<button>`) can opt into this navigation by adding the `data-ix-roving-item` attribute; such native elements keep their own activation (<kbd>Enter</kbd> / <kbd>Space</kbd> fire a real click). In this mode pressing <kbd>Tab</kbd> / <kbd>Shift</kbd>+<kbd>Tab</kbd> closes the dropdown and moves focus to the next/previous element in the tab order. The default `active-descendant` mode keeps the existing behavior where DOM focus stays on the trigger and a visual focus indicator moves between items.
