---
"@siemens/ix": minor
---

Selected chips in `ix-select` with `mode="multiple"` are now laid out on a single row. When the selected chips no longer fit the available width, the chips that would overflow are collapsed into a non-removable "+N" overflow indicator chip. Clicking (or activating via keyboard) the indicator opens a dropdown listing the hidden items, each of which can be removed.

This replaces the previous multi-row wrapping/scrolling chip layout. A new `ariaLabelMoreItems` property (default `'{count} more'`) provides the accessible label for the overflow indicator, where `{count}` is replaced with the number of hidden items.
