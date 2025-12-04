---
"@siemens/ix": patch
---

Reflect `disabled` attribute in DOM for **ix-dropdown-button** and **ix-dropdown-item**.
Also prevent event emission for disabled components and set `aria-disabled` and `tabIndex` accrodingly.

Fixes #2114.
