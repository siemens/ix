---
'@siemens/ix': patch
---

Fix `autofocus` inside `ix-modal` not focusing custom elements that lack focus delegation. The modal now pierces the shadow DOM when applying initial autofocus, so form controls like `ix-input`, `ix-number-input`, and `ix-textarea` receive focus as soon as the modal opens.
