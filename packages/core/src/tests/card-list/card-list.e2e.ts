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

regressionTest.describe('card-list: basic', () => {
  regressionTest('should not have visual regressions', async ({ page }) => {
    await page.goto('card-list/basic');
    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('should show  ellipsis label', async ({ page }) => {
    await page.goto('card-list/long-label');
    await page.waitForTimeout(1000);
    await page.setViewportSize(viewPorts.sm);
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('should hide show all button', async ({ page }) => {
    await page.goto('card-list/hide-show-all');
    await page.waitForTimeout(1000);
    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('layout scrolling', async ({ page }) => {
    await page.goto('card-list/layout-scroll');
    await page.locator('#end').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('layout scrolling end', async ({ page }) => {
    await page.goto('card-list/layout-scroll');

    const cards = await page.locator('ix-push-card:not(.display-none)');
    await cards.last().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});
