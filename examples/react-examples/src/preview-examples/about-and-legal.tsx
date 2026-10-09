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
  IxTabItem,
  IxTabs,
} from '@siemens/ix-react';
import { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);
  const [activeTabKey, setActiveTabKey] = useState('tab-1');

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      element.toggleAbout(true);
    }
  }, []);

  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu ref={ref}>
        <IxMenuAbout suppressLegacyTabs>
          <IxTabs
            activeTabKey={activeTabKey}
            onTabChange={({ detail }) => setActiveTabKey(detail ?? 'tab-1')}
          >
            <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
            <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
          </IxTabs>
          {activeTabKey === 'tab-1' ? (
            <section role="tabpanel" aria-label="About and legal content">
              Content 1
            </section>
          ) : null}
          {activeTabKey === 'tab-2' ? (
            <section role="tabpanel" aria-label="About and legal content">
              Content 2
            </section>
          ) : null}
        </IxMenuAbout>
      </IxMenu>
    </IxApplication>
  );
};
