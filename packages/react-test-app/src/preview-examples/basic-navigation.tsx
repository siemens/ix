/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
