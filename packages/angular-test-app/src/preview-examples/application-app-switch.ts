/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { AppSwitchConfiguration } from '@siemens/ix';

@Component({
  selector: 'app-example',
  templateUrl: './application-app-switch.html',
})
export default class ApplicationAppSwitchExample {
  appSwitchConfig: AppSwitchConfiguration = {
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
}
