// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
