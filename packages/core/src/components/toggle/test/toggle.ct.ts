/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-toggle></ix-toggle>`);
  const drawer = page.locator('ix-toggle');
  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).toBeVisible();
});

regressionTest('should toggle', async ({ mount, page }) => {
  await mount(`<ix-toggle></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await toggle.click();

  const input = toggle.locator('input');
  await expect(input).toBeChecked();
});

regressionTest('should not toggle if disabled', async ({ mount, page }) => {
  await mount(`<ix-toggle disabled></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await toggle.click({
    force: true,
  });

  const input = toggle.locator('input');
  await expect(input).not.toBeChecked();
});

regressionTest(
  'should be toggled ON after indeterminate',
  async ({ mount, page }) => {
    await mount(`<ix-toggle indeterminate></ix-toggle>`);
    const toggle = page.locator('ix-toggle');
    await expect(toggle).toHaveClass(/hydrated/);
    const input = toggle.locator('input');
    await expect(input).not.toBeChecked();

    await toggle.click();

    await expect(input).toBeChecked();
  }
);
