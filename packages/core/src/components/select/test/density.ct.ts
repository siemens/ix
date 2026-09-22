/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest(
  'forms reflow their shared density geometry without remounting',
  async ({ mount, page }) => {
    await mount(`
      <div style="display: grid; gap: 8px; width: 320px;">
        <ix-select id="select" mode="multiple">
          <ix-select-item value="1" label="First item"></ix-select-item>
          <ix-select-item value="2" label="Second item"></ix-select-item>
          <ix-select-item value="3" label="Third item"></ix-select-item>
        </ix-select>
        <ix-category-filter id="category-filter"></ix-category-filter>
        <ix-date-picker id="date-picker" from="2026/04/01"></ix-date-picker>
        <ix-time-picker id="time-picker" time="12:00:00"></ix-time-picker>
      </div>
    `);

    const select = page.locator('#select');
    const categoryFilter = page.locator('#category-filter');
    const datePicker = page.locator('#date-picker');
    const timePicker = page.locator('#time-picker');

    await select.evaluate((element: HTMLIxSelectElement) => {
      element.value = ['1', '2', '3'];
    });
    await categoryFilter.evaluate((element: HTMLIxCategoryFilterElement) => {
      element.categories = {
        vendor: { label: 'Vendor', options: ['Siemens', 'Acme'] },
      };
    });

    await expect(select).toHaveCSS('min-height', '32px');
    await expect(categoryFilter.locator('.text-input')).toHaveCSS(
      'height',
      '24px'
    );
    await expect(datePicker.locator('.grid')).toHaveCSS(
      'grid-template-columns',
      '40px 40px 40px 40px 40px 40px 40px'
    );
    await expect(timePicker.locator('.header-container > .header')).toHaveCSS(
      'height',
      '56px'
    );
    await expect(page).toHaveScreenshot('forms-density-default.png');

    await select.evaluate((element) => {
      element.setAttribute('data-density-test-marker', 'mounted-once');
    });
    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    await expect(select).toHaveCSS('min-height', '24px');
    await expect(categoryFilter.locator('.text-input')).toHaveCSS(
      'height',
      '20px'
    );
    await expect(datePicker.locator('.grid')).toHaveCSS(
      'grid-template-columns',
      '32px 32px 32px 32px 32px 32px 32px'
    );
    await expect(timePicker.locator('.header-container > .header')).toHaveCSS(
      'height',
      '40px'
    );
    await expect(select).toHaveAttribute(
      'data-density-test-marker',
      'mounted-once'
    );
    await expect(page).toHaveScreenshot('forms-density-compact.png');
  }
);
