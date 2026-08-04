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

/** Overflow case: same as Storybook Example/Tabs → Overflow (340px, 8 tabs). */
const OVERFLOW_TABS = [
  { tabKey: 'overview', label: 'Overview' },
  { tabKey: 'analytics', label: 'Analytics' },
  { tabKey: 'events', label: 'Events' },
  { tabKey: 'automation', label: 'Automation' },
  { tabKey: 'data-sources', label: 'Data Sources' },
  { tabKey: 'notifications', label: 'Notifications' },
  { tabKey: 'history', label: 'History' },
  { tabKey: 'settings', label: 'Settings' },
];

export default function TabsOverflow() {
  const [activeTabKey, setActiveTabKey] = useState('overview');

  return (
    <div className="tabs" style={{ maxWidth: 340 }}>
      <IxTabs
        activeTabKey={activeTabKey}
        layout="auto"
        onTabChange={({ detail }) => setActiveTabKey(detail ?? 'overview')}
      >
        {OVERFLOW_TABS.map(({ tabKey, label }) => (
          <IxTabItem key={tabKey} tabKey={tabKey}>
            {label}
          </IxTabItem>
        ))}
      </IxTabs>
      <section role="tabpanel" aria-label="Example content">
        Content{' '}
        {OVERFLOW_TABS.find((tab) => tab.tabKey === activeTabKey)?.label}
      </section>
    </div>
  );
}
