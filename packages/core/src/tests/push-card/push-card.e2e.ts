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

regressionTest.describe('push-card: basic', () => {
  regressionTest('should not have visual regressions', async ({ page }) => {
    await page.goto('push-card/basic');
    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('should click accordion', async ({ page }) => {
    await page.goto('push-card/basic');

    for (const element of await page.locator('ix-card-accordion').all()) {
      const button = element.locator('button');
      await button.click();
    }

    // Animation time
    await page.waitForTimeout(500);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest(
    'should have visual regressions on collapse parameter',
    async ({ page }) => {
      await page.goto('push-card/collapse');
      expect(
        await page.screenshot({ fullPage: true, animations: 'disabled' })
      ).toMatchSnapshot();
    }
  );
});
