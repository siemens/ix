---
'@siemens/ix': patch
---

**ix-chip:** Apply the `primary` style when no `variant` is set or the provided value is not one of the supported variants, so chips no longer render unstyled when consumers omit `variant` or pass an empty/unknown value. The same fallback applies in combination with `outline`, which now renders as outline `primary` by default.
