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
      page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));

      // Listen specifically to errors
      page.on('pageerror', (error) => console.log('PAGE ERROR:', error));

      // Listen to failed requests
      page.on('requestfailed', (request) =>
        console.log('REQUEST FAILED:', request.url())
      );
      await page.goto('basic/basic.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });

  regressionTest('filter', async ({ page }) => {
    await page.goto('basic/basic.html');

    await page
      .getByRole('columnheader', { name: 'Model' })
      .locator('.ag-icon-filter')
      .click();

    const filterMenu = page.locator('.ag-menu.ag-filter-menu');
    await expect(filterMenu).toBeVisible();

    const inputHandle = filterMenu.getByPlaceholder('Filter...');
    await inputHandle.click();
    await inputHandle.fill('regressionTest');

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('editor', async ({ page }) => {
    await page.goto('basic/basic.html');

    const editorCellHandle = page
      .locator('.ag-cell-not-inline-editing[col-id="price"]')
      .nth(0);
    await editorCellHandle.dblclick();

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('pagination', async ({ page }) => {
    await page.goto('pagination/pagination.html');
    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest.describe('header checkbox', () => {
    regressionTest('should be unchecked', async ({ page }) => {
      await page.goto('basic/basic.html');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('should be indeterminate', async ({ page }) => {
      await page.goto('basic/basic.html');

      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="0"] input'
        )
      ).click();

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('should be checked', async ({ page }) => {
      await page.goto('basic/basic.html');

      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="0"] input'
        )
      ).click();
      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="1"] input'
        )
      ).click();
      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="2"] input'
        )
      ).click();

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });

  regressionTest('tooltip display', async ({ page }) => {
    await page.goto('basic/basic.html');
    const makeCell = page.locator('.ag-cell[col-id="make"]').first();
    await makeCell.hover();
    await page.waitForSelector('.ag-tooltip');

    expect(
      await page.screenshot({
        fullPage: true,
        animations: 'disabled',
      })
    ).toMatchSnapshot();
  });
});
