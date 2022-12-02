/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxMapNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxMapNavigation
      applicationName="Test Application"
      navigationTitle="Some other content"
    >
      <IxIcon name="rocket" slot="logo" />
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
        <IxMenuItem>Item 3</IxMenuItem>
      </IxMenu>
      <div slot="sidebar-content">Sidebar content</div>
      <div>Content</div>
    </IxMapNavigation>
  );
};
