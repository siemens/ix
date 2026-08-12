---
'@siemens/ix': major
---

Make the default IX stylesheet self-contained-component focused by loading only the classic theme and foundation tokens. Global reset, base, scrollbar, and utility styles are now explicit opt-ins under `@siemens/ix/css/*`, with an aggregate globals bundle and a legacy compatibility bundle for applications that still depend on the previous native-element styling.

The public Sass API now uses explicit exports instead of exposing every internal partial. Migrate deep imports to the documented foundation, global, theme, token, mixin, or deprecated compatibility entry points.
