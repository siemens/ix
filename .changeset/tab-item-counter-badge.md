---
'@siemens/ix': patch
---

Show the `ix-tab-item` counter as an outlined `ix-badge`, aligning tabs with the badge component that replaces the pill:

- Rounded tab items attach the badge to the bottom corner of the circle (previously a custom counter centred below it). The count is also exposed as the tab's accessible description.
- Other tab items show a standalone badge next to the label (previously an `ix-pill`).
- Counters above 99 are now displayed as `99+` (previously the full value).
- Bugfix: A counter of `0` in non-rounded tabs is now displayed in a badge, instead of rendering a stray `0`.
