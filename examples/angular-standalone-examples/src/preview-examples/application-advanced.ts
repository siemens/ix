/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuCategory,
  IxMenuItem,
  IxMenuSettings,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxAvatar,
    IxContent,
    IxContentHeader,
    IxMenu,
    IxMenuAbout,
    IxMenuCategory,
    IxMenuItem,
    IxMenuSettings,
  ],
  templateUrl: './application-advanced.html',
})
export default class ApplicationAdvancedExample {
  activeContent: string = 'home';

  updateContent(contentKey: string) {
    this.activeContent = contentKey;
  }
}
