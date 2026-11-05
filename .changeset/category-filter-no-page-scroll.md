---
'@siemens/ix': patch
---

Fix `ix-category-filter` scrolling the page to the filter when a token is added or `filterState` is set. Only the filter's own token list scrolls now, keeping the text input visible when tokens overflow.

Fixes #2658
