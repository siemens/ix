/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuSettings,
    IxTabs,
    IxTabItem,
  ],
  templateUrl: './settings.html',
})
export default class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  activeTabKey = 'tab-1';

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleSettings(true);
  }
}
