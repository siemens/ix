---
'@siemens/ix-angular': major
---

**Breaking (v5):** `LoadingService.showModalLoading()` now returns a `Promise<ModalLoadingContext>`. Await the call before using `update()` or `finish()` on the returned loading context.
