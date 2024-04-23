/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTabItem, IxTabs } from '@siemens/ix-react';
import React, { useState } from 'react';

export default () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (tabId: number) => setSelectedTab(tabId);

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
      }}
    >
      <IxTabs selected={selectedTab}>
        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>
        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>
        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>
      </IxTabs>
      {selectedTab === 0 ? <div>Content 1</div> : null}
      {selectedTab === 1 ? <div>Content 2</div> : null}
      {selectedTab === 2 ? <div>Content 3</div> : null}
    </div>
  );
};
