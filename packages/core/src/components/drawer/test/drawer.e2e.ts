// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('drawer', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`drawer/test/basic`);
    await page.locator('ix-button').click();
    await page.waitForTimeout(800);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
