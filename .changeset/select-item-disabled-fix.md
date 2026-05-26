---
'@siemens/ix': patch
---

Fix `disabled` prop on `ix-select-item` having no effect. The `disabled` state is now reflected to the host, propagated to the underlying `ix-dropdown-item` and the item is excluded from mouse and keyboard selection in `ix-select`.
