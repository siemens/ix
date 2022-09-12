// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('expanding-search', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`expanding-search/test/basic`);

    await page.locator('button').click();
    await page.locator('.input-container.expanded').waitFor();
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });
});
