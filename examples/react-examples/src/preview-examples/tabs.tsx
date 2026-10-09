/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './tabs.scoped.css';

import { IxTabItem, IxTabs } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [activeTabKey, setActiveTabKey] = useState('tab-1');

  return (
    <div className="tabs">
      <IxTabs
        activeTabKey={activeTabKey}
        onTabChange={({ detail }) => setActiveTabKey(detail ?? 'tab-1')}
      >
        <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
        <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
        <IxTabItem tabKey="tab-3">Tab 3</IxTabItem>
      </IxTabs>
      <section role="tabpanel" aria-label="Example content">
        {activeTabKey === 'tab-1' ? <>Content Tab 1</> : null}
        {activeTabKey === 'tab-2' ? <>Content Tab 2</> : null}
        {activeTabKey === 'tab-3' ? <>Content Tab 3</> : null}
      </section>
    </div>
  );
};
