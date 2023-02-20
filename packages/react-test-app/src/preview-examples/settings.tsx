/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxBasicNavigation,
  IxMenu,
  IxMenuSettings,
  IxMenuSettingsItem,
} from '@siemens/ix-react';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.toggleSettings(true);
    }
  }, []);

  return (
    <IxBasicNavigation>
      <div className="placeholder-logo" slot="logo"></div>
      <IxMenu ref={ref}>
        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
        </IxMenuSettings>
      </IxMenu>
    </IxBasicNavigation>
  );
};
