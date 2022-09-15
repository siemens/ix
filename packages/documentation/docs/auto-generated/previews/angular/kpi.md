<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/kpi.ts -->
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
  selector: 'app-kpi',
  template: `
    <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
    <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>
    <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>
    <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>

    <ix-kpi label="Motor speed" value="Nominal" orientation="vertical"></ix-kpi>
    <ix-kpi
      label="Motor speed"
      value="{122.6}"
      unit="rpm"
      state="alarm"
      orientation="vertical"
    ></ix-kpi>
  `,
})
export class Kpi {}
```
