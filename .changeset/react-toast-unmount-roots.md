---
'@siemens/ix-react': patch
---

`showToast` now unmounts both the React message and action content when the toast closes, preventing the message tree from leaking when an action is provided.
