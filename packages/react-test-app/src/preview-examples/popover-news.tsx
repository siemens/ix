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
  IxMenuAboutNews,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuAbout suppressLegacyTabs>
          <IxTabs activeTabKey="tab-1">
            <IxTabItem tabKey="tab-1" label="Example" />
          </IxTabs>
          <section role="tabpanel" data-tab-content="tab-1"></section>
        </IxMenuAbout>
        <IxMenuAboutNews label="Test" show activeAboutTabKey="tab-1">
          Test
        </IxMenuAboutNews>
      </IxMenu>
    </IxApplication>
  );
};
