---
'@siemens/ix': major
---

Add a `divider` property to **ix-key-value** and **ix-key-value-list** to show or hide the divider lines (default `true`). Items in a list follow the list's `divider` unless they set their own.

**Breaking:** **ix-key-value** now shows its divider for every `label-position`, matching the design. Set `divider="false"` to keep standalone `label-position="left"` items without a divider. See `BREAKING_CHANGES/v6.md`.
