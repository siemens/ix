/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
        <ix-select>
          <ix-select-item value="11" label="Item 1">Test</ix-select-item>
          <ix-select-item value="22" label="Item 2">Test</ix-select-item>
        </ix-select>
    `);
  const element = page.locator('ix-select');
  await expect(element).toHaveClass(/hydrated/);

  await page.locator('[data-select-dropdown]').click();

  const dropdown = element.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).toBeVisible();
});

test('editable mode', async ({ mount, page }) => {
  await mount(`
        <ix-select editable>
          <ix-select-item value="11" label="Item 1">Test</ix-select-item>
          <ix-select-item value="22" label="Item 2">Test</ix-select-item>
        </ix-select>
    `);
  const element = page.locator('ix-select');
  await expect(element).toHaveClass(/hydrated/);

  await page.locator('[data-select-dropdown]').click();
  await page.getByTestId('input').fill('Not existing');

  const dropdown = element.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  await expect(page.getByRole('button', { name: 'Item 1' })).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).not.toBeVisible();

  const add = page.getByRole('button', { name: /Not existing/ });
  await expect(add).toBeVisible();

  await add.click();
  await expect(page.getByTestId('input')).toHaveValue(/Not existing/);
  await page.locator('[data-select-dropdown]').click();

  await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).toBeVisible();

  const addedItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Not existing' });

  await expect(addedItem).toBeVisible();
});

test('single selection', async ({ mount, page }) => {
  await mount(`
        <ix-select>
          <ix-select-item value="11" label="Item 1">Test</ix-select-item>
          <ix-select-item value="22" label="Item 2">Test</ix-select-item>
        </ix-select>
    `);
  const element = page.locator('ix-select');
  await element.evaluate(
    (select: HTMLIxSelectElement) => (select.value = '22')
  );

  await page.locator('[data-select-dropdown]').click();

  const dropdown = element.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Item 2' }).locator('ix-icon')
  ).toBeVisible();
});

test('multiple selection', async ({ mount, page }) => {
  await mount(`
        <ix-select mode="multiple">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="3" label="Item 3">Test</ix-select-item>
          <ix-select-item value="4" label="Item 4">Test</ix-select-item>
        </ix-select>
    `);
  const element = page.locator('ix-select');
  await element.evaluate((select: HTMLIxSelectElement) => (select.value = []));
  await page.locator('[data-select-dropdown]').click();

  const dropdown = element.locator('ix-dropdown');
  const chips = element.locator('.chips');

  await expect(dropdown).toBeVisible();

  const item1 = element.locator('ix-select-item').nth(0);
  const item3 = element.locator('ix-select-item').nth(2);
  await item1.click();
  await page.locator('[data-select-dropdown]').click();
  await item3.click();
  await page.locator('[data-select-dropdown]').click();

  await expect(item1.locator('ix-icon')).toBeVisible();
  await expect(item3.locator('ix-icon')).toBeVisible();

  const chip1 = chips.getByTitle('Item 1');
  const chip3 = chips.getByTitle('Item 3');

  await expect(chip1).toBeVisible();
  await expect(chip3).toBeVisible();
});

test('filter', async ({ mount, page }) => {
  await mount(`
        <ix-select mode="multiple">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="abc" label="abc">Test</ix-select-item>
          <ix-select-item value="4" label="Item 4">Test</ix-select-item>
        </ix-select>
    `);
  const element = page.locator('ix-select');
  await element.evaluate((select: HTMLIxSelectElement) => (select.value = []));

  await page.locator('[data-select-dropdown]').click();
  const dropdown = element.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  await element.locator('input').fill('abc');

  const item1 = page.getByRole('button', { name: 'Item 1' });
  const item2 = page.getByRole('button', { name: 'Item 2' });
  const item4 = page.getByRole('button', { name: 'Item 4' });
  const item_abc = page.getByRole('button', { name: 'abc' });

  await expect(item1).not.toBeVisible();
  await expect(item2).not.toBeVisible();
  await expect(item4).not.toBeVisible();
  await expect(item_abc).toBeVisible();
});

test('open filtered dropdown on input', async ({ mount, page }) => {
  await mount(`
        <ix-select>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
    `);
  const element = page.locator('ix-select');
  await element.evaluate((select: HTMLIxSelectElement) => (select.value = []));

  await page.locator('[data-testid="input"]').focus();
  page.keyboard.down('Escape');
  const dropdown = element.locator('ix-dropdown');
  await expect(dropdown).not.toBeVisible();

  page.keyboard.down('1');

  const item1 = page.getByRole('button', { name: 'Item 1' });
  const item2 = page.getByRole('button', { name: 'Item 2' });

  await expect(item1).toBeVisible();
  await expect(item2).not.toBeVisible();
});
