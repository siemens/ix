/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './vertical-tabs-with-avatar.scoped.css';

import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuAvatar
        top="john.doe@company.com"
        bottom="Administrator"
        image="https://ui-avatars.com/api/?name=John+Doe"
      >
        <IxMenuAvatarItem
          icon="user-profile"
          label="User profile..."
        ></IxMenuAvatarItem>
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
