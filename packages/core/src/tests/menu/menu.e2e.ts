/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest.describe('menu', () => {
  regressionTest('basic', async ({ page }) => {
    await page.setViewportSize(viewPorts.lg);
    await page.goto('menu/basic');

    const basicNavigationElement = page.locator('ix-basic-navigation');

    const link1 = page.getByText('Link 1');
    await expect(link1).toBeVisible();

    const link2 = page.getByText('Link 2');
    await expect(link2).toBeVisible();

    await link2.hover();

    await page.waitForTimeout(1000);

    expect(
      await basicNavigationElement.screenshot({
        animations: 'disabled',
      })
    ).toMatchSnapshot();
  });

  regressionTest('category initial opened', async ({ page }) => {
    await page.setViewportSize(viewPorts.lg);
    await page.goto('menu/basic');

    const basicNavigationElement = page.locator('ix-basic-navigation');

    const categoryElement = page.locator('ix-menu-item').filter({ hasText: 'Sub' });
    await categoryElement.click();

    const collapseButton = page.getByRole('button', { name: 'Double Chevron Right' });
    collapseButton.click();
    await page.waitForTimeout(1000);
    
    const expandButton = page.getByRole('button', { name: 'Double Chevron Right' })
    expandButton.click();
    await page.waitForTimeout(1000);

    expect(
      await basicNavigationElement.screenshot({
        animations: 'disabled',
      })
    ).toMatchSnapshot();
  });
});
