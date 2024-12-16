/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './basic-navigation-migration.scoped.css';

import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      {/*{KEEP} Compare hideHeader property */}
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>
    </IxApplication>
  );
};
