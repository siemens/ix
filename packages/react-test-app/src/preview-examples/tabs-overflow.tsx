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
const OVERFLOW_TAB_LABELS = [
  'Overview',
  'Analytics',
  'Events',
  'Automation',
  'Data Sources',
  'Notifications',
  'History',
  'Settings',
];

export default function TabsOverflow() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabs" style={{ maxWidth: 340 }}>
      <IxTabs selected={selectedTab} layout="auto">
        {OVERFLOW_TAB_LABELS.map((label, index) => (
          <IxTabItem key={label} onClick={() => setSelectedTab(index)}>
            {label}
          </IxTabItem>
        ))}
      </IxTabs>
      <section role="tabpanel" aria-label="Example content">
        Content {OVERFLOW_TAB_LABELS[selectedTab]}
      </section>
    </div>
  );
}
