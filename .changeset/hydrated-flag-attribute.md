---
'@siemens/ix': major
---

Switch `hydratedFlag` selector from `class` to `attribute` to prevent React's `className` prop from overwriting the Stencil hydration marker on custom elements.

**Breaking change:** components are now marked as hydrated with a `hydrated` attribute instead of a `hydrated` CSS class. See the migration guide for details of how and where to update your code with this change.bre

Fixes `#2668`
