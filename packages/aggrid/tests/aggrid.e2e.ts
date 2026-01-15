/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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
    regressionTest('v33', async ({ page }) => {
      await page.goto('basic/basic.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('v34', async ({ page }) => {
      await page.goto('basic-v34/basic-v34.html');

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

  regressionTest.describe('dropdown top layer (enableTopLayer=true)', () => {
    regressionTest(
      'dropdown-button in cell should appear above other rows',
      async ({ page }) => {
        await page.goto('dropdown-top-layer/dropdown-top-layer.html');

        const dropdownButton = page
          .locator('.ag-row[row-index="5"]')
          .locator('ix-dropdown-button');
        await dropdownButton.click();

        await page.waitForSelector('ix-dropdown dialog[popover="manual"]', {
          state: 'attached',
        });

        expect(
          await page.screenshot({ fullPage: true, animations: 'disabled' })
        ).toMatchSnapshot();
      }
    );

    regressionTest(
      'select in cell should appear above other rows',
      async ({ page }) => {
        await page.goto('dropdown-top-layer/dropdown-top-layer.html');

        const select = page
          .locator('.ag-row[row-index="8"]')
          .locator('ix-select');
        await select.click();

        await page.waitForSelector('ix-dropdown dialog[popover="manual"]', {
          state: 'attached',
        });

        expect(
          await page.screenshot({ fullPage: true, animations: 'disabled' })
        ).toMatchSnapshot();
      }
    );
  });
});
