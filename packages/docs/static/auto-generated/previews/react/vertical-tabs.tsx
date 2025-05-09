/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './vertical-tabs.scoped.css';

import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home tab-icon="home">
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
      <IxMenuItem tab-icon="star" disabled>
        Disabled Tab
      </IxMenuItem>
      <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
      <IxMenuItem tab-icon="globe" style={{ display: 'none' }}>
        Should not be visible
      </IxMenuItem>
    </IxMenu>
  );
};
