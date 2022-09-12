// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxTabItem, IxTabs } from '@siemens/ix-react';
import React from 'react';

export const Tabs: React.FC = () => {
  return (
    <IxTabs selected={1}>
      <IxTabItem>Tab 1</IxTabItem>
      <IxTabItem>Tab 2</IxTabItem>
      <IxTabItem>Tab 3</IxTabItem>
    </IxTabs>
  );
};
