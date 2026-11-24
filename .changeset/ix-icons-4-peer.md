---
'@siemens/ix': major
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix-vue': major
---

Require `@siemens/ix-icons@^4.0.0` as peer dependency. Version 3.x uses the legacy color-token lookup and can render incorrect icon colors.

With `@siemens/ix-icons@4.0.0`, the default `size` of **ix-icon** changes from **24** to **20**. Icons without an explicit `size` now render a 20px glyph. Set `size="24"` where the previous size must remain. See `BREAKING_CHANGES/v6.md` (**Changed the default icon size to 20px**) for migration guidance.
