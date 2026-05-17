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
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-react';
import { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.toggleSettings(true);
    }
  }, []);

  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu ref={ref}>
        <IxMenuSettings suppressLegacyTabs>
          <IxTabs activeTabKey="tab-1">
            <IxTabItem tabKey="tab-1" label="Example Setting 1" />
            <IxTabItem tabKey="tab-2" label="Example Setting 2" />
          </IxTabs>
          <section role="tabpanel" data-tab-content="tab-1">
            Example Setting 1 content
          </section>
          <section role="tabpanel" data-tab-content="tab-2" hidden>
            Example Setting 2 content
          </section>
        </IxMenuSettings>
      </IxMenu>
    </IxApplication>
  );
};
