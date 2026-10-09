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

regressionTest.describe('link-button', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('link-button/basic');

    await expect(page.locator('ix-link-button ix-icon')).toHaveCount(0);
    const selectItem = await page.waitForSelector("[link-button-id='1']");
    await selectItem.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('truncate', async ({ page }) => {
    await page.goto('link-button/truncate');

    await expect(page.locator('ix-link-button ix-icon')).toHaveCount(0);
    const selectItem = await page.waitForSelector("[link-button-id='1']");
    await selectItem.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('variants', async ({ page }) => {
    await page.goto('link-button/variants');

    const variants = ['internal', 'external', 'file', 'action', 'none'];
    await expect(page.locator('ix-link-button')).toHaveCount(variants.length);
    for (const icon of variants) {
      const linkButton = page.locator(
        `ix-link-button[icon="${icon}"][icon-position="start"]`
      );
      await expect(linkButton).toHaveCount(1);
      await expect(
        linkButton.getByRole('link', { name: 'Link text' })
      ).toBeVisible();
      await expect(linkButton.locator('ix-icon')).toHaveCount(
        icon === 'none' ? 0 : 1
      );
    }

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
