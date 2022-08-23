<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/group-context-menu.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxGroup, IxGroupDropdownItem, IxGroupItem } from '@siemens/ix-react';
import React from 'react';

export const GroupContextMenu: React.FC = () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <div slot="dropdown">
        <IxGroupDropdownItem label="Item 1"></IxGroupDropdownItem>
        <IxGroupDropdownItem label="Item 2"></IxGroupDropdownItem>
      </div>
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
```
