<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/vertical-tabs-with-avatar.tsx -->
```tsx
/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {
    IxMenu,
    IxMenuAvatar,
    IxMenuAvatarItem,
    IxMenuItem
} from '@siemens/ix-react';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <IxMenu>
      <IxMenuAvatar>
        <IxMenuAvatarItem label="Option 1"></IxMenuAvatarItem>
      </IxMenuAvatar>
      <IxMenuItem home-tab tab-icon="home">
        {' '}
        Home{' '}
      </IxMenuItem>
      <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
      <IxMenuItem tab-icon="star" disabled>
        {' '}
        Disabled Tab{' '}
      </IxMenuItem>
      <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
    </IxMenu>
  );
};
```
