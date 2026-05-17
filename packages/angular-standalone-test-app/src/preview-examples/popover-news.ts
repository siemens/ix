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
  IxMenu,
  IxMenuAbout,
  IxMenuAboutNews,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuAbout,
    IxTabs,
    IxTabItem,
    IxMenuAboutNews,
  ],
  templateUrl: './popover-news.html',
})
export default class PopoverNews {}
