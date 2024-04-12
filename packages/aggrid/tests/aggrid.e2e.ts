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

    await page.getByRole('columnheader').nth(0).hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('filter', async ({ page }) => {
    await page.goto('basic.html');

    const filterHandle = await page.waitForSelector('.ag-header-cell:nth-child(2) [ref="eMenu"]');
    await filterHandle.click();

    const inputHandle = await page.waitForSelector('.ag-input-field-input.ag-text-field-input');
    await inputHandle.fill('Test');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('editor', async ({ page }) => {
    await page.goto('basic.html');

    const editorCellHandle = await page.waitForSelector('.ag-cell-not-inline-editing[col-id="price"]');
    await editorCellHandle.dblclick();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('pagination', async ({ page }) => {
    await page.goto('pagination.html');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
