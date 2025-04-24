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

regressionTest.describe('aggrid', () => {
  regressionTest.describe('version', () => {
    regressionTest('newest', async ({ page }) => {
      await page.goto('basic.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('32', async ({ page }) => {
      await page.goto('basic_v32.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('31', async ({ page }) => {
      await page.goto('basic_v31.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('30', async ({ page }) => {
      await page.goto('basic_v30.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('29', async ({ page }) => {
      await page.goto('basic_v29.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('28', async ({ page }) => {
      await page.goto('basic_v28.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });

  regressionTest('filter', async ({ page }) => {
    await page.goto('basic.html');

    await page.getByRole('columnheader', { name: 'Model' }).locator('.ag-icon-filter').click();

    const filterMenu = page.locator('.ag-menu.ag-filter-menu');
    await expect(filterMenu).toBeVisible();

    const inputHandle = filterMenu.getByPlaceholder('Filter...');
    await inputHandle.click();
    await inputHandle.fill('Test');

    expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('editor', async ({ page }) => {
    await page.goto('basic.html');

    const editorCellHandle = page.locator('.ag-cell-not-inline-editing[col-id="price"]').nth(0);
    await editorCellHandle.dblclick();

    expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('pagination', async ({ page }) => {
    await page.goto('pagination.html');
    expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest.describe('header checkbox', () => {
    regressionTest('should be unchecked', async ({ page }) => {
      await page.goto('basic.html');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('should be indeterminate', async ({ page }) => {
      await page.goto('basic.html');

      await (await page.waitForSelector('.ag-row-not-inline-editing[row-id="0"] input')).click();

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('should be checked', async ({ page }) => {
      await page.goto('basic.html');

      await (await page.waitForSelector('.ag-row-not-inline-editing[row-id="0"] input')).click();
      await (await page.waitForSelector('.ag-row-not-inline-editing[row-id="1"] input')).click();
      await (await page.waitForSelector('.ag-row-not-inline-editing[row-id="2"] input')).click();

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });
});
