/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const snapshotOptions = {
  threshold: 0.05,
  maxDiffPixelRatio: 0.01,
};

regressionTest.describe('popover', () => {
  (
    [
      'basic',
      'with-image',
      'no-spike',
      'placement-top',
      'placement-bottom',
      'placement-left',
      'placement-right',
      'stepper-footer',
      'header-with-icon',
      'header-no-close',
      'minimal',
      'nesting',
    ] as const
  ).forEach((variant) => {
    regressionTest(variant, async ({ page }) => {
      await page.goto(`popover/${variant}`);
      await page.waitForTimeout(500);

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
        snapshotOptions
      );
    });
  });

  regressionTest('hover-trigger', async ({ page }) => {
    await page.goto('popover/hover-trigger');

    await page.locator('ix-button#trigger').hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      snapshotOptions
    );
  });
});
