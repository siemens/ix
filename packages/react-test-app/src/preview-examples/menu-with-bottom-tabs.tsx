/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconGlobe, iconHome } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem icon={iconGlobe} slot="bottom">
        Bottom Tab
      </IxMenuItem>
    </IxMenu>
  );
};
