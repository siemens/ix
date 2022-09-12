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
