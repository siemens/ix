<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/input-disabled.ts -->
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
  selector: 'app-input-disabled',
  template: `
    <form class="needs-validation m-2">
      <input
        class="form-control"
        defaultValue="Some example text"
        placeholder="Enter text here"
        type="text"
        disabled
      />
    </form>
  `,
})
export class InputDisabled {}
```
