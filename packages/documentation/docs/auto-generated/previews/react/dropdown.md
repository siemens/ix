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
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/dropdown.tsx -->
```tsx
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import React from 'react';

export const Dropdown: React.FC = () => {
  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxDropdown trigger="triggerId">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
        <IxDropdownItem label="Item 3"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```
