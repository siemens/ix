/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { themeSwitcher } from '@siemens/ix';

@Component({
  selector: 'app-example',
  templateUrl: './theme-switcher.html',
  styleUrls: ['./theme-switcher.css'],
})
export default class ThemeSwitcher {
  themes = ['theme-classic-light', 'theme-classic-dark'];
  selectedTheme = this.themes[1];

  constructor() {}

  onValueChange(event: Event) {
    const customEvent = event as CustomEvent<string>;
    const newTheme = customEvent.detail;
    themeSwitcher.setTheme(newTheme);
    this.selectedTheme = newTheme;
  }

  toggleMode() {
    themeSwitcher.toggleMode();
  }

  onSystemMode({ target }: Event) {
    if ((target as HTMLInputElement).checked) {
      themeSwitcher.setVariant();
      return;
    }

    themeSwitcher.setTheme(this.selectedTheme);
  }
}
