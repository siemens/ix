/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxMenu>
      <IxMenuAvatar image="https://ui-avatars.com/api/?name=John+Doe">
        <IxMenuAvatarItem label="Option 1"></IxMenuAvatarItem>
      </IxMenuAvatar>
      <IxMenuItem home tab-icon="home">
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
