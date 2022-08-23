/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { IxGroup, IxGroupItem } from '@siemens/ix-react';
import React from 'react';

export const GroupHeaderSuppressed: React.FC = () => {
  return (
    <IxGroup
      header="Header text"
      subHeader="Subheader text"
      suppressHeaderSelection
    >
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
