---
'@siemens/ix': minor
---

Add density-aware sizing and spacing across IX core controls, navigation,
overlays, feedback components, chat, upload, tree, typography, and related
components. Existing default-density layouts remain visually compatible, while
compact density reduces component geometry and responds to live density
changes. Standalone `ix-icon` elements retain the icon package's 20px default
in both densities, and explicit `size` property values remain honored.
Component-owned internal icons continue to use density-aware tokens (20px by
default, 16px in compact density) where applicable.
