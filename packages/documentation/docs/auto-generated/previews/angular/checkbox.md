<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/angular-test-app/src/preview-examples/checkbox.ts -->
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
  selector: 'app-checkbox',
  template: `
    <div style="margin-bottom: 1rem">
      <input type="checkbox" id="checkbox_01" />
      <label for="checkbox_01">Simple checkbox</label>
    </div>

    <div>
      <input type="checkbox" id="checkbox_02" disabled />
      <label for="checkbox_02">Disabled checkbox</label>
    </div>
  `,
})
export class Checkbox {}
```
