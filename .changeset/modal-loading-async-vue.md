---
'@siemens/ix-vue': major
---

**Breaking (v5):** `showModalLoading()` now returns a `Promise<ModalLoadingContext>`. Await the call before using `update()` or `finish()` on the returned loading context.
