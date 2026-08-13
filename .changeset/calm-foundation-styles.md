---
'@siemens/ix': major
---

Make the default IX stylesheet self-contained-component focused by loading the classic theme and foundation. Foundation retains the body typography, text color, background, and automatic document scrollbar styling. Native element normalization, body margin reset, utility classes, and native form styles are explicit opt-ins under `@siemens/ix/css/*`, with aggregate globals and legacy bundles.

The public Sass API now uses explicit exports instead of exposing every internal partial. Migrate deep imports to the documented foundation, global, theme, token, mixin, or deprecated compatibility entry points.
