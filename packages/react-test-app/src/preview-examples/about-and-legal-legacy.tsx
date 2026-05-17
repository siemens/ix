/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
import { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);

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
          <IxTabs activeTabKey="tab-1">
            <IxTabItem tabKey="tab-1" label="Tab 1" />
            <IxTabItem tabKey="tab-2" label="Tab 2" />
          </IxTabs>
          <section role="tabpanel" data-tab-content="tab-1">
            Content 1
          </section>
          <section role="tabpanel" data-tab-content="tab-2" hidden>
            Content 2
          </section>
        </IxMenuAbout>
      </IxMenu>
    </IxApplication>
  );
};
