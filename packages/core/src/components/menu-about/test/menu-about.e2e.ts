// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-about', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`menu-about/test/basic`);

    await page.locator('#aboutAndLegal').click();
    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
