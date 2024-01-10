/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

import React from 'react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          header-title="My Content Page"
        ></IxContentHeader>
      </IxContent>
    </IxApplication>
  );
};
