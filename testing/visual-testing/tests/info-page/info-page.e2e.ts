/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('info page', async ({ page }) => {
  await page.goto('info-page');
  const infoPage = page.locator('ix-info-page');
  await expect(infoPage).toHaveClass(/\bhydrated\b/);
  await expect(infoPage.getByRole('button')).toBeVisible();

  expect(await infoPage.screenshot()).toMatchSnapshot();
});
