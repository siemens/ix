/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';
// Example styling for documentation
import './styles/placeholder-logo.css';

export default () => {
  return (
    <IxBasicNavigation applicationName='Application name'>
      <div className="placeholder-logo" slot="logo"></div>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>
    </IxBasicNavigation>
  );
};
