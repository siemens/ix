/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  styles: [
    `
      ix-col {
        align-items: center;
        height: 2.5rem;
      }
    `,
  ],
})
export default class ThemeSwitcherExample {
  themes = ['theme-classic-light', 'theme-classic-dark'];
  selectedTheme = this.themes[1];

  constructor() {}

  onItemSelectionChange(event: Event) {
    const customEvent = event as CustomEvent<string | string[]>;
    const newTheme = customEvent.detail[0];
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
