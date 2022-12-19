---
sidebar_position: 1
sidebar_title: Migration from Core UI 6.5.0
title: Core UI 6.5.0 to Siemens iX
---

Find the current migration guide [here](https://github.com/siemens/ix/blob/main/packages/documentation/docs/installation/migration/core-ui.md)

## Changed dependencies

- Updated to `bootstrap@5.2.0`
- Updated peerDependency of `@anuglar/core` to latest version

## Removed dependencies

- `ng-bootstrap`
- `angular/cdk`

## ECharts

- ECharts default theme system works out of the box with `@siemens/ix` release

### Structure of `BasicNavigation` and `MapNavigation` need to be adapted

Check the following points:

- Rename `cui-vertical-tabs` to `ix-menu`
- Settings and About overlays are now **_optional_** and have to be placed by developer.
- Content of AboutAndLegal overlay is not part of the library anymore. The prevoius default content can be found inside the inner source brand theme.

### Component selectors changed

Change selectors. From `cui-` to `ix-`

### AG Grid

- Change the imports and dependencies from `@siemens/core-ui-aggrid` to `@siemens/ix-aggrid`.

### Styling

- SCSS variables are not exported anymore
- Chart colors are not part of the library
- theme.ts with hardcored hex color values are removed

### Changed theme naming

- `theme-dark` -> `theme-classic-dark`
- `theme-light` -> `theme-classic-light`

Default theme is `theme-classic-dark`.

### About and Legal

Default content is removed regarding of various developer feedback
