---
'@siemens/ix': major
---

- The `toast` function now appends directly to the `ix-toast-container` host element instead of using a separate container element.

## Removed properties

- `containerClass` - Set `class` on the `ix-toast-container` element itself if needed.
- `containerId` - Just use `id` on the `ix-toast-container` element if needed.
