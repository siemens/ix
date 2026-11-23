---
'@siemens/ix': patch
---

Fix the `ix-pane` expand/collapse button so `aria-expanded` is on the button and it controls the pane region. The previous `aria-controls` id pointed into another shadow root, so assistive technology ignored it and axe reported `aria-valid-attr-value`.

Fixes #3002
