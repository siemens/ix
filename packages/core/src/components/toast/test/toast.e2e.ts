// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
