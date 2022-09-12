// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import React from 'react';

export const Select: React.FC = () => {
  return (
    <IxSelect selected-indices="1">
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
