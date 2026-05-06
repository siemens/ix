/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLayoutEffect, useState } from 'react';
import { IxButton, IxTabItem, IxTabs } from '../..';
import { IxTabPanel, IxTabPanels } from './../../tabs';

type TabContentProps = {
  label: string;
  onMount: (label: string) => void;
  onUnmount: (label: string) => void;
};

function TabContent({ label, onMount, onUnmount }: TabContentProps) {
  useLayoutEffect(() => {
    onMount(label);

    return () => {
      onUnmount(label);
    };
  }, [label, onMount, onUnmount]);

  return <div>{label}</div>;
}

export function LazyTabPanelsExample({
  onMount,
  onUnmount,
}: Omit<TabContentProps, 'label'>) {
  const [activeTabKey, setActiveTabKey] = useState('tab-2');

  return (
    <>
      <IxButton onClick={() => setActiveTabKey('tab-1')}>Open Tab 1</IxButton>

      <IxTabPanels>
        <IxTabs activeTabKey={activeTabKey} layout="auto">
          <IxTabItem tabKey="tab-1" label="Tab 1"></IxTabItem>
          <IxTabItem tabKey="tab-2" label="Tab 2"></IxTabItem>
          <IxTabItem tabKey="tab-3" label="Tab 3"></IxTabItem>
        </IxTabs>

        <IxTabPanel tabKey="tab-1">
          <TabContent
            label="Content 1"
            onMount={onMount}
            onUnmount={onUnmount}
          />
        </IxTabPanel>
        <IxTabPanel tabKey="tab-2">
          <TabContent
            label="Content 2"
            onMount={onMount}
            onUnmount={onUnmount}
          />
        </IxTabPanel>
        <IxTabPanel tabKey="tab-3">
          <TabContent
            label="Content 3"
            onMount={onMount}
            onUnmount={onUnmount}
          />
        </IxTabPanel>
      </IxTabPanels>
    </>
  );
}
