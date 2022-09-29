<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/button-group.tsx -->
```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const ButtonGroup: React.FC = () => (
  <>
    <div className="btn-group">
      <IxButton variant="Primary" outline>
        Left
      </IxButton>
      <IxButton variant="Primary">Middle</IxButton>
      <IxButton variant="Primary" outline>
        Right
      </IxButton>
    </div>
  </>
);
```
