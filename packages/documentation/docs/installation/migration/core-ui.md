<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 1
sidebar_title: Migration from Core UI
title: Migration from Core UI
---

## Removed dependencies

- `ng-bootstrap`
- `angular/cdk`

### Structure of `Application Frame`

Check the following points:

- Rename `cui-vertical-tabs` to `ix-menu`
- Settings and About overlays are now **_optional_** and have to be placed by developer.

### Component selectors

Change selectors. From `cui-` to `ix-`

### AG Grid

Change the imports and dependency management from `@siemens/core-ui-aggrid` to `@siemens/ix-aggrid`.

## If you are already using Core UI for React or Web Components

🎉 No changes required
