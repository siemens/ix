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
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const button = page.locator('ix-expanding-search');
  await expect(button).toHaveClass(/hydrated/);
});

regressionTest('expands input', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const element = page.locator('ix-expanding-search');
  const button = page.locator('button');

  await button.click();
  await expect(element).toHaveClass(/expanded/);
});

regressionTest('collapse input', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const element = page.locator('ix-expanding-search');
  const button = page.locator('button');
  const input = page.locator('input');

  await button.click();
  await input.click();
  await input.blur();
  await expect(element).not.toHaveClass(/expanded/);
});

regressionTest('changes input', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const element = page.locator('ix-expanding-search');
  const button = page.locator('button');
  const input = page.locator('input');

  await button.click();
  await input.fill('new input');

  await input.blur();
  await expect(element).toHaveClass(/expanded/);
});

regressionTest(
  'erases the input when clear button is clicked',
  async ({ mount, page }) => {
    await mount(`<ix-expanding-search></ix-expanding-search>`);
    const element = page.locator('ix-expanding-search');
    const button = page.locator('button');
    const clearButton = page.locator('[data-testid="clear-button"]');
    const input = page.locator('input');

    await button.click();
    await input.fill('new input');

    await clearButton.click();
    await input.blur();

    await expect(input).toHaveValue('');
    await expect(element).not.toHaveClass(/expanded/);
  }
);
