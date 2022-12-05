/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('radiobutton', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`radiobutton/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('basic hover checked', async ({ page }) => {
    await page.goto(`radiobutton/test/basic`);

    const noCheckedCheckbox = await page.waitForSelector(
      'label[for="checkbox_1_1"]'
    );

    await noCheckedCheckbox.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('basic hover unchecked', async ({ page }) => {
    await page.goto(`radiobutton/test/basic`);

    const noCheckedCheckbox = await page.waitForSelector(
      'label[for="checkbox_1_2"]'
    );

    await noCheckedCheckbox.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('no checked', async ({ page }) => {
    await page.goto(`radiobutton/test/no-checked`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('long text', async ({ page }) => {
    await page.goto(`radiobutton/test/long-text`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
