---
'@siemens/ix': patch
---

**ix-toggle:** Exposes correct **switch** semantics (`role`, `aria-checked`, `aria-disabled`), keyboard interaction (**Space** / **Enter**), and a **stable accessible name** (set **`aria-label`** or **`aria-labelledby`** on the host; name does not change with state; state is conveyed via `aria-checked`). Visible on/off copy is **not** used as the accessible name.
