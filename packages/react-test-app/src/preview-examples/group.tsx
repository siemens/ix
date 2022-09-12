import { IxGroup, IxGroupItem } from '@siemens/ix-react';
import React from 'react';

export const Group: React.FC = () => {
  return (
    <IxGroup header="Header text" sub-header="Subheader text">
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
