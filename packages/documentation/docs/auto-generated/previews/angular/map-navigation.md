<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/angular-test-app/src/preview-examples/map-navigation.ts -->

```typescript
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-map-navigation',
  template: `
    <ix-map-navigation
      application-name="Test Application"
      navigation-title="Some other content"
    >
      <ix-icon name="rocket" slot="logo"></ix-icon>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
        <ix-menu-item>Item 3</ix-menu-item>
      </ix-menu>
      <div slot="sidebar-content">Sidebar content</div>
      <div>Content</div>
    </ix-map-navigation>
  `,
})
export class MapNavigation {}
```
