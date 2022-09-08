/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
