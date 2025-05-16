/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconGlobe,
  iconHome,
  iconStar,
  iconUserProfile,
} from '@siemens/ix-icons/icons';
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
          icon={iconUserProfile}
          label="User profile..."
        ></IxMenuAvatarItem>
      </IxMenuAvatar>
      <IxMenuItem home icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem icon={iconGlobe}>Normal tab</IxMenuItem>
      <IxMenuItem icon={iconStar} disabled>
        Disabled Tab
      </IxMenuItem>
      <IxMenuItem icon={iconStar}>With other icon</IxMenuItem>
      <IxMenuItem icon={iconStar} style={{ display: 'none' }}>
        Should not be visible
      </IxMenuItem>
    </IxMenu>
  );
};
