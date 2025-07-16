/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest('should not have regression', async ({ page }) => {
  await page.setViewportSize(viewPorts.lg);
  await page.goto('layout-grid/basic');
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

regressionTest('should not have regression large', async ({ page }) => {
  await page.setViewportSize(viewPorts.lg);
  await page.goto('layout-grid/simple');
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

regressionTest('should not have regression medium', async ({ page }) => {
  await page.setViewportSize(viewPorts.md);
  await page.goto('layout-grid/simple');
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

regressionTest('should not have regression small', async ({ page }) => {
  await page.setViewportSize(viewPorts.sm);
  await page.goto('layout-grid/simple');
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
