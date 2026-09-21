---
'@siemens/ix': major
---

Default icon glyphs are now **20** instead of **24** when `size` is omitted on **ix-icon-button**, **ix-icon-toggle-button**, and nested icons that follow that default. Size **20** is a new public option (32×32 control, 20px glyph). Set `size="24"` (or another explicit size) where the previous glyph must remain.

**ix-checkbox** / **ix-radio** controls also move to **20** (24×24 hit area). Legacy `.ix-form-control` checkboxes align to the same size.

See `BREAKING_CHANGES/v6.md` (**Default icon size is 20**) for migration guidance.
