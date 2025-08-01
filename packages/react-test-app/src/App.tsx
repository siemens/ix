/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTabs, IxTabItem, IxTabPanel, IxButton } from '@siemens/ix-react';
import { IxTabsContext } from './TabsContext';
import { useEffect, useState } from 'react';

function ExampleContentPage(props: React.PropsWithChildren<{ value: string }>) {
  useEffect(() => {
    console.log(`Content for ${props.value} mounted`);
    return () => {
      console.log(`Content for ${props.value} unmounted`);
    };
  }, [props.value]);

  return <>Hello from {props.value}</>;
}

function App() {
  const [tabs, setTabs] = useState(['tab-1', 'tab-2', 'tab-3']);
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <div>
      <IxTabsContext value={selectedTab}>
        <IxTabs>
          {tabs.map((tab) => (
            <IxTabItem key={tab} value={tab}>
              {tab.replace('tab-', 'Tab ')}
            </IxTabItem>
          ))}
        </IxTabs>

        {tabs.map((tab) => (
          <IxTabPanel key={tab} value={tab}>
            <ExampleContentPage value={tab.replace('tab-', 'Tab ')} />
          </IxTabPanel>
        ))}
      </IxTabsContext>
      <IxButton
        onClick={() => {
          const newTab = `tab-${tabs.length + 1}`;
          setTabs([...tabs, newTab]);
          setSelectedTab(newTab);
        }}
      >
        Add Tabs
      </IxButton>
    </div>
  );
}

export default App;
