import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import React from 'react';

export const DropdownIcon: React.FC = () => {
  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxDropdown trigger="triggerId">
        <IxDropdownItem label="Item 1" icon="star"></IxDropdownItem>
        <IxDropdownItem label="Item 2" icon="document"></IxDropdownItem>
        <IxDropdownItem label="Item 3" icon="bulb"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
