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

regressionTest.describe('select', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('select/basic');
    const select = page.locator('ix-select');
    const input = select.locator('input');
    // Combobox keeps DOM focus on the input; ArrowDown moves virtual focus into the list.
    await input.focus();
    await page.keyboard.press('ArrowDown');
    await expect(select.locator('ix-dropdown')).toHaveClass(/show/);
    await expect(input).toHaveAttribute('aria-activedescendant', /.+/);
    await page.mouse.move(5, 5, { steps: 10 });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('editable', async ({ page }) => {
    await page.goto('select/editable');
    await page.locator('ix-select').locator('[data-select-dropdown]').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mode-multiple - normal', async ({ page }) => {
    await page.goto('select/mode-multiple');
    await page
      .getByLabel('normal-select')
      .getByLabel('Open select dropdown')
      .click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mode-multiple - all chip', async ({ page }) => {
    await page.goto('select/mode-multiple');
    await page
      .getByLabel('all-chip-select')
      .getByLabel('Open select dropdown')
      .click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mode-multiple-overflow', async ({ page }) => {
    await page.goto('select/mode-multiple-overflow');
    const select = page.locator('ix-select');
    const overflowChip = select.locator('ix-filter-chip.chip-overflow');
    await expect(overflowChip).toBeVisible();
    // Open via keyboard so focus moves into the overflow menu.
    await overflowChip.focus();
    await page.keyboard.press('ArrowDown');
    await expect(select.locator('ix-dropdown.overflow-dropdown')).toHaveClass(
      /show/
    );
    const removeButton = select
      .locator(
        'ix-dropdown.overflow-dropdown ix-filter-chip.chip-hidden-item ix-icon-button button'
      )
      .first();
    await expect(removeButton).toBeFocused();
    await expect(overflowChip).not.toBeFocused();
    await page.mouse.move(5, 5, { steps: 10 });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mode-multiple-long-item-label', async ({ page }) => {
    await page.goto('select/mode-multiple-long-item-label');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('select/overflow');
    await page.locator('ix-select').locator('[data-select-dropdown]').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('autoplacement', async ({ page }) => {
    await page.goto('select/autoplacement');
    await page.locator('ix-select').locator('[data-select-dropdown]').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('allow-clear', async ({ page }) => {
    await page.goto('select/allow-clear');
    await page.locator('ix-select').locator('[data-select-dropdown]').click();
    await page.waitForSelector('.dropdown-menu.show');
    await page.locator('text=Item 2').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('list-header-hide', async ({ page }) => {
    await page.goto('select/list-header-hide');
    await page.locator('ix-select').locator('[data-select-dropdown]').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('readonly', async ({ page }) => {
    await page.goto('select/readonly');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('readonly select Index', async ({ page }) => {
    await page.goto('select/readonly');

    const element = page.locator('ix-select');

    await element.evaluate((el: HTMLIxSelectElement) => (el.value = ['1']));

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('readonly select multiple index', async ({ page }) => {
    await page.goto('select/readonly');

    const element = page.locator('ix-select');

    await element.evaluate((el: HTMLIxSelectElement) => {
      el.mode = 'multiple';
      el.value = ['1', '2'];
    });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('centered overflow', async ({ page }) => {
    await page.goto('select/centered-overflow');
    await page.locator('ix-select').locator('[data-select-dropdown]').click();
    const lastItem = page.locator('ix-select').locator('ix-select-item').last();
    await lastItem.scrollIntoViewIfNeeded();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest.describe('disabled', () => {
    regressionTest('basic', async ({ page }) => {
      await page.goto('select/disabled');

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('select index', async ({ page }) => {
      await page.goto('select/disabled');

      const element = page.locator('ix-select');

      await element.evaluate((el: HTMLIxSelectElement) => (el.value = ['1']));

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });

    regressionTest('select multiple indices', async ({ page }) => {
      await page.goto('select/disabled');

      const element = page.locator('ix-select');

      await element.evaluate((el: HTMLIxSelectElement) => {
        el.mode = 'multiple';
        el.value = ['1', '2'];
      });

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });
});
