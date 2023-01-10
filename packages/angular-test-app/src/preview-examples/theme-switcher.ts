/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { ThemeService } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  template: `
    <ix-button class="mb-2" (click)="themeService.toggleMode()">
      Toggle mode
    </ix-button>
    <ix-select (itemSelectionChange)="onItemSelectionChange($event)">
      <ix-select-item
        label="Classic light"
        value="theme-classic-light"
      ></ix-select-item>
      <ix-select-item
        label="Classic dark"
        value="theme-classic-dark"
      ></ix-select-item>
    </ix-select>
  `,
})
export default class ThemeSwitcher {
  constructor(readonly themeService: ThemeService) {}

  onItemSelectionChange(event: Event) {
    const customEvent = event as CustomEvent<string | string[]>;
    this.themeService.setTheme(customEvent.detail[0]);
  }
}
