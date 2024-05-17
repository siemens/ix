/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import { NavLink, Outlet } from 'react-router-dom';

export default () => {
  return (
    <IxBasicNavigation>
      <IxMenu>
        <NavLink to="./link1">
          {({ isActive }) => <IxMenuItem active={isActive}>Link 1</IxMenuItem>}
        </NavLink>
        <NavLink to="./link2">
          {({ isActive }) => <IxMenuItem active={isActive}>Link 2</IxMenuItem>}
        </NavLink>
      </IxMenu>
      <Outlet />
    </IxBasicNavigation>
  );
};
