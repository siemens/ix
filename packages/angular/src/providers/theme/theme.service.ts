/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventEmitter, Injectable, Output } from '@angular/core';
import { themeSwitcher } from '@siemens/ix';

/**
 * @deprecated Will be removed in 4.0.0. Use themeSwitcher from core package `import { themeSwitcher } from '@siemens/ix';`
 *
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  @Output() themeChanged = new EventEmitter<string>();

  private readonly themeSwitcher: typeof themeSwitcher;

  constructor() {
    this.themeSwitcher = themeSwitcher;
    this.themeSwitcher.themeChanged.on((theme: string) =>
      this.themeChanged.emit(theme)
    );
  }

  toggleMode(): void {
    this.themeSwitcher.toggleMode();
  }

  setTheme(themeName: string): void {
    this.themeSwitcher.setTheme(themeName);
  }
}
