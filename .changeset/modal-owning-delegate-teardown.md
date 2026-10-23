---
'@siemens/ix': patch
---

Remove modals created by `showModal` with string or plain element content through the same delegate that attached them. Previously, when a framework delegate (Angular, React, Vue) was registered, such modals stayed in the DOM after closing or dismissing.
