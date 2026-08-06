/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconGlobe, iconHome, iconStar } from '@siemens/ix-icons/icons';
import './vertical-tabs.scoped.css';

import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem icon={iconGlobe}>Normal tab</IxMenuItem>
      <IxMenuItem icon={iconStar} disabled>
        Disabled tab
      </IxMenuItem>
      <IxMenuItem icon={iconStar}>With other icon</IxMenuItem>
      <IxMenuItem icon={iconGlobe} style={{ display: 'none' }}>
        Should not be visible
      </IxMenuItem>
    </IxMenu>
  );
};
