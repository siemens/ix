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

regressionTest.describe('input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('input/basic');
    await expect(page).toHaveScreenshot();
  });

  regressionTest('hover', async ({ page }) => {
    await page.goto('input/basic');
    const input = await page.waitForSelector('input');
    await input.hover();

    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot();
  });

  regressionTest('focus', async ({ page }) => {
    await page.goto('input/basic');
    const input = await page.waitForSelector('input');
    await input.focus();

    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot();
  });

  regressionTest('with value', async ({ page }) => {
    await page.goto('input/basic');
    const input = await page.waitForSelector('input');
    await input.fill('Example content');

    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot();
  });

  regressionTest('readonly', async ({ page }) => {
    await page.goto('input/readonly');
    await expect(page).toHaveScreenshot();
  });

  regressionTest('readonly and hover', async ({ page }) => {
    await page.goto('input/readonly');
    const input = await page.waitForSelector('input');
    await input.hover();
    await expect(page).toHaveScreenshot();
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('input/disabled');
    await expect(page).toHaveScreenshot();
  });

  regressionTest('disabled and hover', async ({ page }) => {
    await page.goto('input/disabled');
    const input = await page.waitForSelector('input');
    await input.hover();
    await expect(page).toHaveScreenshot();
  });

  regressionTest('with slots', async ({ page }) => {
    await page.goto('input/with-slots');
    await expect(page).toHaveScreenshot();
  });

  regressionTest('tooltip below input', async ({ page }) => {
    await page.goto('input/tooltip');

    const inputElementBoundingBox = await page
      .getByTestId('inputelement')
      .boundingBox();
    await page.mouse.move(inputElementBoundingBox.x, inputElementBoundingBox.y);

    await expect(page.locator('ix-tooltip')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
