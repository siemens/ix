// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('blind', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`blind/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('collapsed', async ({ page }) => {
    await page.goto(`blind/test/basic`);
    await page.locator('.blind-header').click();
    await page.waitForSelector('.blind-header.closed');
    await page.waitForTimeout(800);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
