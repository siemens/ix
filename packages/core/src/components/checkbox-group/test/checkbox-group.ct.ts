/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `
      <ix-checkbox-group>
        <ix-checkbox label="Option 1" value="option1"></ix-checkbox>
        <ix-checkbox label="Option 2" value="option2"></ix-checkbox>
        <ix-checkbox label="Option 3" value="option3"></ix-checkbox>
      </ix-checkbox-group>
    `
  );
  const radioGroupElement = page.locator('ix-checkbox-group');
  const radioOption1 = page.locator('ix-checkbox').nth(0);
  const radioOption2 = page.locator('ix-checkbox').nth(1);
  const radioOption3 = page.locator('ix-checkbox').nth(2);
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioOption1).toHaveClass(/hydrated/);
  await expect(radioOption2).toHaveClass(/hydrated/);
  await expect(radioOption3).toHaveClass(/hydrated/);
});

regressionTest('required', async ({ mount, page }) => {
  await mount(
    `
      <ix-checkbox-group label="example">
        <ix-checkbox label="Option 1" value="option1"></ix-checkbox>
        <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
        <ix-checkbox label="Option 3" value="option3"></ix-checkbox>
      </ix-checkbox-group>
    `
  );
  const radioGroupElement = page.locator('ix-checkbox-group');
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioGroupElement).toHaveText(/example\*/);

  const radioOption2 = page.locator('ix-checkbox').nth(1);
  const radioOption3 = page.locator('ix-checkbox').nth(2);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  await expect(radioGroupElement).toHaveClass(/ix-invalid--required/);
  await expect(radioOption2).toHaveClass(/ix-invalid--required/);
  await expect(radioOption3).not.toHaveClass(/ix-invalid/);
});
