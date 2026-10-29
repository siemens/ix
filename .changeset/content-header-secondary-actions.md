---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add a `secondary-actions` slot to `ix-content-header` for buttons that collapse into an accessible vertical overflow menu on small screens or when the actions do not fit their container. Default-slot actions remain visible and wrap instead of extending outside the header. Use `ariaLabelMoreActions`, also exposed by the Angular, React, and Vue wrappers, to localize the overflow trigger.

Keep CSS-hidden secondary actions out of the menu, reserve space for the title when collapsing actions, and support the overflow trigger in custom-element builds used by React and standalone Angular.

Fixes #2125.
