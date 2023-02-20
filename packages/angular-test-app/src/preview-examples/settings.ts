/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-basic-navigation>
      <div class="placeholder-logo" slot="logo"></div>
      <ix-menu #menu>
        <ix-menu-settings>
          <ix-menu-settings-item
            label="Example Setting 1"
          ></ix-menu-settings-item>
          <ix-menu-settings-item
            label="Example Setting 2"
          ></ix-menu-settings-item>
        </ix-menu-settings>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export default class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleSettings(true);
  }
}
