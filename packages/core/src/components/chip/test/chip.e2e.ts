// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('chip', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`chip/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
