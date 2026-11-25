---
'@siemens/ix': patch
---

Align component styling with the iX design library:

- `ix-dropdown`, `ix-popover`, `ix-toast` and `ix-tooltip` use the `shadow-30` elevation. `ix-toast` uses the `background-3` surface.
- The arrow shadow of `ix-popover` (`has-spike`) now follows the active colour scheme. Previously, dark themes used the light-theme shadow.
- Selected and active indicators use the accent active colour: `ix-tab-item`, `ix-tabs`, `ix-menu-item`, `ix-group`, `ix-group-item`, `ix-event-list-item`, `ix-spinner` (primary) and `ix-progress-indicator`.
- Text fields (`ix-input`, `ix-textarea`, `ix-number-input`, date/time inputs and other fields using the input styling) keep the hover background while focused.
- Pressed `ix-toggle-button` and `ix-icon-toggle-button` use the accent active colour, including a matching border for the secondary variant. `ix-toggle-button` icons are 20px.
- The `ix-badge` counter uses the semibold paragraph typography instead of bold.
- The `ix-tree-item` chevron is 20px.
- The `ix-toggle` thumb has the same inset on every side in both densities, and is centred when indeterminate.
- `ix-key-value`, `ix-tree-item`, `ix-workflow-step`, `ix-upload`, the loading modal and the `ix-empty-state` description use the paragraph body typography.
- `ix-upload` status icons are 20px.
