/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
import { ThemeSwitcher } from '../theme-switcher';

regressionTest.fixme('theme-switcher', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('toggle/test/basic');
    await page.evaluate(async () => {
      const themeLight = 'theme-test-light';
      const themeDark = 'theme-test-dark';
      document.body.classList.add(themeLight);
      const themeSwitcher = new ThemeSwitcher();
      themeSwitcher.setTheme(themeDark);
      expect(!document.body.classList.contains(themeLight));
      expect(document.body.classList.contains(themeDark));
    });
  });
});
