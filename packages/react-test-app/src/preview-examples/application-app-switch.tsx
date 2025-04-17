/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppSwitchConfiguration } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

const appSwitchConfig: AppSwitchConfiguration = {
  i18nAppSwitch: 'Switch to Application',
  currentAppId: 'demo-app-2',
  apps: [
    {
      id: 'demo-app-1',
      name: 'Floor App',
      iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
      url: 'https://ix.siemens.io/',
      description: 'Example description for Floor app',
      target: '_self',
    },
    {
      id: 'demo-app-2',
      name: 'Calculator App',
      iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
      url: 'https://ix.siemens.io/',
      description: 'Example description for Calculator app',
      target: '_self',
    },
  ],
};

export default () => {
  return (
    <IxApplication appSwitchConfig={appSwitchConfig}>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>

        <IxDropdownButton variant="secondary" label="Select config" ghost>
          <IxDropdownItem label="Config 1"></IxDropdownItem>
          <IxDropdownItem label="Config 2"></IxDropdownItem>
          <IxDropdownItem label="Config 3"></IxDropdownItem>
        </IxDropdownButton>

        <IxAvatar>
          <IxDropdownItem label="Action 1"></IxDropdownItem>
          <IxDropdownItem label="Action 2"></IxDropdownItem>
          <IxDropdownItem label="Action 3"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          headerTitle="My Content Page"
        ></IxContentHeader>
      </IxContent>
    </IxApplication>
  );
};
