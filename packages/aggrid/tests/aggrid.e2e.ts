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

// Setup console logging for all tests
regressionTest.beforeEach(async ({ page }) => {
  // Log all console messages from the page
  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    console.log(`[BROWSER ${type.toUpperCase()}] ${text}`);
  });

  // Log page errors
  page.on('pageerror', (error) => {
    console.error('[PAGE ERROR]', error.message);
    console.error('[PAGE ERROR STACK]', error.stack);
  });

  // Log failed requests
  page.on('requestfailed', (request) => {
    console.error(
      '[REQUEST FAILED]',
      request.url(),
      request.failure()?.errorText
    );
  });

  // Log when page crashes
  page.on('crash', () => {
    console.error('[PAGE CRASHED]');
  });
});

regressionTest.describe('aggrid', () => {
  regressionTest.describe('version', () => {
    regressionTest('newest', async ({ page }) => {
      console.log('=== TEST: version/newest - START ===');
      await page.goto('basic/basic.html');
      console.log('Page loaded');

      // Wait for grid to be ready
      await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
      console.log('Grid root found');

      await page.getByRole('columnheader').nth(0).hover();
      console.log('Hovered over first column header');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
      console.log('=== TEST: version/newest - END ===');
    });
  });

  regressionTest('filter', async ({ page }) => {
    console.log('=== TEST: filter - START ===');
    await page.goto('basic/basic.html');
    console.log('Page loaded');

    await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
    console.log('Grid root found');

    await page
      .getByRole('columnheader', { name: 'Model' })
      .locator('.ag-icon-filter')
      .click();
    console.log('Filter icon clicked');

    const filterMenu = page.locator('.ag-menu.ag-filter-menu');
    await expect(filterMenu).toBeVisible();
    console.log('Filter menu visible');

    const inputHandle = filterMenu.getByPlaceholder('Filter...');
    await inputHandle.click();
    await inputHandle.fill('regressionTest');
    console.log('Filter text entered');

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
    console.log('=== TEST: filter - END ===');
  });

  regressionTest('editor', async ({ page }) => {
    console.log('=== TEST: editor - START ===');
    await page.goto('basic/basic.html');
    console.log('Page loaded');

    await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
    console.log('Grid root found');

    const editorCellHandle = page
      .locator('.ag-cell-not-inline-editing[col-id="price"]')
      .nth(0);
    await editorCellHandle.dblclick();
    console.log('Cell double-clicked for editing');

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
    console.log('=== TEST: editor - END ===');
  });

  regressionTest.describe('header checkbox', () => {
    regressionTest('should be unchecked', async ({ page }) => {
      console.log('=== TEST: header checkbox/unchecked - START ===');
      await page.goto('basic/basic.html');
      console.log('Page loaded');

      await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
      console.log('Grid root found');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
      console.log('=== TEST: header checkbox/unchecked - END ===');
    });

    regressionTest('should be indeterminate', async ({ page }) => {
      console.log('=== TEST: header checkbox/indeterminate - START ===');
      await page.goto('basic/basic.html');
      console.log('Page loaded');

      await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
      console.log('Grid root found');

      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="0"] input'
        )
      ).click();
      console.log('First row checkbox clicked');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
      console.log('=== TEST: header checkbox/indeterminate - END ===');
    });

    regressionTest('should be checked', async ({ page }) => {
      console.log('=== TEST: header checkbox/checked - START ===');
      await page.goto('basic/basic.html');
      console.log('Page loaded');

      await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
      console.log('Grid root found');

      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="0"] input'
        )
      ).click();
      console.log('Row 0 checkbox clicked');

      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="1"] input'
        )
      ).click();
      console.log('Row 1 checkbox clicked');

      await (
        await page.waitForSelector(
          '.ag-row-not-inline-editing[row-id="2"] input'
        )
      ).click();
      console.log('Row 2 checkbox clicked');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
      console.log('=== TEST: header checkbox/checked - END ===');
    });
  });

  regressionTest('tooltip display', async ({ page }) => {
    console.log('=== TEST: tooltip display - START ===');
    await page.goto('basic/basic.html');
    console.log('Page loaded');

    await page.waitForSelector('.ag-root-wrapper', { timeout: 10000 });
    console.log('Grid root found');

    const makeCell = page.locator('.ag-cell[col-id="make"]').first();
    await makeCell.hover();
    console.log('Cell hovered');

    await page.waitForSelector('.ag-tooltip');
    console.log('Tooltip visible');

    expect(
      await page.screenshot({
        fullPage: true,
        animations: 'disabled',
      })
    ).toMatchSnapshot();
    console.log('=== TEST: tooltip display - END ===');
  });
});
