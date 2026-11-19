---
'@siemens/ix': major
---

Numeric `height` and `width` values of `ix-flip-tile` are now pixels instead of rem. The defaults change to `242` and `256`, which keeps the default size. Multiply existing numeric values by 16 to keep the previous size.

Numeric `itemHeight` values of `ix-event-list` are now applied as pixels instead of being converted to rem, so they no longer scale with the root font size.
