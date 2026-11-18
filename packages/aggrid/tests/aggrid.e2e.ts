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
  for (const fixture of [
    'basic/basic.html',
    'versions/v34/basic.html',
    'versions/v35/basic.html',
    'versions/v36/basic.html',
  ]) {
    regressionTest.describe(`checkbox and focus ${fixture}`, () => {
      regressionTest.beforeEach(async ({ page }) => {
        await page.goto(`${fixture}?cellFocus`);
      });

      regressionTest('rounds every checkbox state', async ({ page }) => {
        const checkbox = page.getByRole('checkbox').nth(1);
        const wrapper = checkbox.locator('..');
        await expect(wrapper).toHaveCSS('border-radius', '2px');
        await checkbox.focus();
        await page.keyboard.press('Space');
        await expect(checkbox).toBeChecked();
        await expect(wrapper).toHaveCSS('border-radius', '2px');
        await expect
          .poll(() =>
            wrapper.evaluate(
              (element) => getComputedStyle(element, '::before').borderRadius
            )
          )
          .toBe('2px');
        const header = page.getByRole('checkbox').first().locator('..');
        await expect(header).toHaveClass(/ag-indeterminate/);
        await expect(header).toHaveCSS('border-radius', '2px');
        await expect
          .poll(() =>
            header.evaluate(
              (element) => getComputedStyle(element, '::before').borderRadius
            )
          )
          .toBe('2px');
      });

      regressionTest(
        'shows one keyboard checkbox focus ring',
        async ({ page }) => {
          const checkbox = page.getByRole('checkbox').first();
          await page.keyboard.press('Tab');
          await checkbox.focus();
          await expect(checkbox).toBeFocused();
          await expect(checkbox.locator('..')).toHaveCSS(
            'outline-width',
            '2px'
          );
          await expect(checkbox.locator('..')).toHaveCSS(
            'outline-offset',
            '1px'
          );
          await expect(checkbox.locator('..')).toHaveCSS(
            'outline-style',
            'solid'
          );
          await expect(checkbox.locator('..')).toHaveCSS('box-shadow', 'none');
          await expect(checkbox).toHaveCSS('outline-style', 'none');
          await expect(checkbox).toHaveCSS('box-shadow', 'none');
          await checkbox.locator('..').evaluate((element) => {
            element.style.setProperty(
              '--si-sys-color-effects-focus',
              'rgb(12, 34, 56)'
            );
          });
          await expect(checkbox.locator('..')).toHaveCSS(
            'outline-color',
            'rgb(12, 34, 56)'
          );
        }
      );

      regressionTest(
        'shows inset cell and header focus rings',
        async ({ page }) => {
          const cell = page.getByRole('gridcell', {
            name: 'Toyota',
            exact: true,
          });
          await cell.click();
          await expect(cell).toHaveCSS('outline-width', '2px');
          await expect(cell).toHaveCSS('outline-offset', '-2px');
          await expect(cell).toHaveCSS('outline-style', 'solid');
          await expect(cell).toHaveCSS('box-shadow', 'none');
          const header = page.getByRole('columnheader', {
            name: 'Make',
            exact: true,
          });
          await page.keyboard.press('ArrowUp');
          await expect(header).toBeFocused();
          await expect(header).toHaveCSS('outline-width', '2px');
          await expect(header).toHaveCSS('outline-offset', '-2px');
          await expect(header).toHaveCSS('outline-style', 'solid');
          await expect(header).toHaveCSS('box-shadow', 'none');
          await header.evaluate((element) => {
            element.style.setProperty(
              '--si-sys-color-effects-focus',
              'rgb(12, 34, 56)'
            );
          });
          await expect(header).toHaveCSS('outline-color', 'rgb(12, 34, 56)');
          await cell.click();
          await cell.evaluate((element) => {
            element.style.setProperty(
              '--si-sys-color-effects-focus',
              'rgb(12, 34, 56)'
            );
          });
          await expect(cell).toHaveCSS('outline-color', 'rgb(12, 34, 56)');
        }
      );
    });
  }

  regressionTest('keyboard focus appearance', async ({ page }) => {
    await page.goto('basic/basic.html?cellFocus');
    const checkbox = page.getByRole('checkbox').nth(1);
    await checkbox.focus();
    await page.keyboard.press('Space');
    const cell = page.getByRole('gridcell', { name: 'Toyota', exact: true });
    await cell.click();
    await expect(cell).toHaveCSS('outline-style', 'solid');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'cell-focus.png'
    );

    await page.keyboard.press('Tab');
    const headerCheckbox = page.getByRole('checkbox').first();
    await headerCheckbox.focus();
    await expect(headerCheckbox.locator('..')).toHaveCSS(
      'outline-style',
      'solid'
    );
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'checkbox-focus.png'
    );
  });

  regressionTest.describe('version', () => {
    regressionTest('v33', async ({ page }) => {
      await page.goto('basic/basic.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('v34', async ({ page }) => {
      await page.goto('versions/v34/basic.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('v35', async ({ page }) => {
      await page.goto('versions/v35/basic.html');

      await page.getByRole('columnheader').nth(0).hover();
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('v36', async ({ page }) => {
      await page.goto('versions/v36/basic.html');

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

  regressionTest('striped rows', async ({ page }) => {
    await page.goto('striped/striped.html');
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

  regressionTest('uses the system elevation shadow', async ({ page }) => {
    await page.goto('basic/basic.html');
    await page.locator('.ag-cell[col-id="make"]').first().hover();
    const tooltip = page.locator('.ag-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).not.toHaveCSS('box-shadow', 'none');

    await tooltip.evaluate((element) => {
      element.style.setProperty(
        '--si-sys-color-effects-shadow-40',
        '1px 2px 3px rgb(12, 34, 56)'
      );
    });

    await expect(tooltip).toHaveCSS(
      'box-shadow',
      'rgb(12, 34, 56) 1px 2px 3px 0px'
    );
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
