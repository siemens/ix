/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuAbout activeTabKey="tab-1">
          <IxMenuAboutItem tabKey="tab-1" label="Example">
            {' '}
          </IxMenuAboutItem>
        </IxMenuAbout>
        <IxMenuAboutNews label="Test" show activeAboutTabKey="tab-1">
          Test
        </IxMenuAboutNews>
      </IxMenu>
    </IxApplication>
  );
};
