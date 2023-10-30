/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxBasicNavigation,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
} from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxBasicNavigation>
      <IxMenu>
        <IxMenuItem home icon="home">
          Home
        </IxMenuItem>
        <IxMenuItem icon="globe">Normal Tab</IxMenuItem>
        <IxMenuCategory label="Top level Category" icon="rocket">
          <IxMenuItem icon="globe">Nested Tab</IxMenuItem>
          <IxMenuItem icon="globe">Nested Tab</IxMenuItem>
        </IxMenuCategory>
      </IxMenu>
    </IxBasicNavigation>
  );
};
