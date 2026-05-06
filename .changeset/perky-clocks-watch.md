---
'@siemens/ix': major
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix-vue': major
---

**`ix-card-list` breaking change:** selecting the show-all button or show-more card now reveals all hidden cards by default and toggles back to the hidden-overflow state from the show-less button. To keep the previous event-only behavior, call `preventDefault()` on the cancelable `showAllClick` or `showMoreCardClick` event.

Fixes #1367 and Fixes #2353
