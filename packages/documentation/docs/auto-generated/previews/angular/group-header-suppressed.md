<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/group-header-suppressed.ts -->
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-group-header-suppressed',
  template: `
    <ix-group
      header="Header text"
      sub-header="Subheader text"
      suppress-header-selection
    >
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export class GroupHeaderSuppressed {}
```
