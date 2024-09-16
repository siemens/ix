/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/menu-category.css';

import {
  IxApplication,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
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
    </IxApplication>
  );
};
