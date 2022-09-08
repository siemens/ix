/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('toast', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`toast/test/basic`);
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.04,
    });
  });
});
