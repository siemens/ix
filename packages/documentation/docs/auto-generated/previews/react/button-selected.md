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
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/button-selected.tsx -->
```tsx
import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const ButtonSelected: React.FC = () => {
  return (
    <>
      <IxButton class="m-1" variant="Secondary" invisible>
        Not selected
      </IxButton>
      <IxButton class="m-1" variant="Secondary" invisible selected>
        Selected
      </IxButton>
    </>
  );
};
```
