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
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/group-custom-entry.tsx -->
```tsx
import { IxButton, IxGroup, IxGroupItem } from '@siemens/ix-react';
import React from 'react';

export const GroupCustomEntry: React.FC = () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem>
        <IxButton>Test</IxButton>
      </IxGroupItem>
    </IxGroup>
  );
};
```
