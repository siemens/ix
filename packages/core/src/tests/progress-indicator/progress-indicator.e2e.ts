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

regressionTest.describe('progress-indicator', () => {
  regressionTest.describe('linear', () => {
    regressionTest('no helper-text', async ({ page }) => {
      await page.goto('progress-indicator/basic');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('helper-text', async ({ page }) => {
      await page.goto('progress-indicator/basic');

      const progressIndicators = await page
        .locator('ix-progress-indicator')
        .all();

      await Promise.all(
        progressIndicators.map(
          async (locator) =>
            await locator.evaluate((el: HTMLIxProgressIndicatorElement) => {
              el.helperText = 'A helper text for the progress indicator';
            })
        )
      );
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });

  regressionTest.describe('circular', () => {
    regressionTest('no helper-text', async ({ page }) => {
      await page.goto('progress-indicator/basic');

      const progressIndicators = await page
        .locator('ix-progress-indicator')
        .all();

      await Promise.all(
        progressIndicators.map(
          async (locator) =>
            await locator.evaluate((el: HTMLIxProgressIndicatorElement) => {
              el.type = 'circular';
            })
        )
      );

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('helper-text', async ({ page }) => {
      await page.goto('progress-indicator/basic');

      const progressIndicators = await page
        .locator('ix-progress-indicator')
        .all();

      await Promise.all(
        progressIndicators.map(
          async (locator) =>
            await locator.evaluate((el: HTMLIxProgressIndicatorElement) => {
              el.type = 'circular';
              el.helperText = 'A helper text for the progress indicator';
            })
        )
      );

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });
});
