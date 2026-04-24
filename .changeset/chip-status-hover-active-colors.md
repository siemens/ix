---
'@siemens/ix': patch
---

Fix hover and active background colors of filled status chips (alarm, critical, warning, info, neutral, success) to use the correct design tokens (`--theme-color-*--hover` / `--theme-color-*--active`) instead of a semi-transparent black overlay, aligning the rendered result with the Figma specification. Custom color chips retain the overlay approach. Chip padding is also corrected to be uniform across icon and non-icon variants.
