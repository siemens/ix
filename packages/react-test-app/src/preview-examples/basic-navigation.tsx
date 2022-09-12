// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';

export const BasicNavigation: React.FC = () => {
  return (
    <IxBasicNavigation>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>
    </IxBasicNavigation>
  );
};
