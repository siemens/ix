---
'@siemens/ix': major
'@siemens/ix-echarts': major
---

Rename the built-in Classic theme to Community. Use `data-ix-theme="community"`, `@siemens/ix/css/theme/community-dark.css`, `@siemens/ix/css/theme/community-light.css`, and `@siemens/ix/scss/theme/community`. ECharts themes are now exported as `communityDark` and `communityLight` and registered as `theme-community-dark` and `theme-community-light`. The `classic` names are removed without aliases. See `BREAKING_CHANGES/v6.md` for migration steps.
