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
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic.html');

    await page.getByRole('columnheader').nth(1).hover();
    expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('filter', async ({ page }) => {
    await page.goto('basic.html');

    const filterHandle = page.locator('.ag-header-cell:nth-child(2) .ag-icon-filter');
    await filterHandle.click();

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
});
