/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { getFormValue, preventFormSubmission, test } from '@utils/test';

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
  await item3.click();

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

test('remove text from input and reselect the element', async ({
  mount,
  page,
}) => {
  await mount(`
        <ix-select value="2">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="3" label="Item 3">Test</ix-select-item>
        </ix-select>
    `);

  await page.locator('[data-select-dropdown]').click();
  const element = page.locator('ix-select');
  await element.evaluate((select: HTMLIxSelectElement) => (select.value = []));
  const dropdown = element.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  const item2 = page.getByRole('button', { name: 'Item 2' });
  await item2.click();

  const inputValue = await element.locator('input').inputValue();
  expect(inputValue).toEqual('Item 2');
});

test('type in a novel item name in editable mode and then remove it', async ({
  mount,
  page,
}) => {
  await mount(`
        <ix-select value="2" editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
    `);

  const element = page.locator('ix-select');
  await expect(element).toHaveClass(/hydrated/);

  await page.locator('[data-select-dropdown]').click();
  await page.getByTestId('input').fill('test');

  await expect(page.getByRole('button', { name: 'Item 1' })).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).not.toBeVisible();

  const add = page.getByRole('button', { name: 'test' });
  await expect(add).toBeVisible();

  await page.getByTestId('input').fill('');

  await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).toBeVisible();
  await expect(add).not.toBeVisible();
});

test('type in a novel item name in editable mode, click outside and reopen the select', async ({
  mount,
  page,
}) => {
  await mount(`
        <ix-select value="2" editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="3" label="Item 3">Test</ix-select-item>
        </ix-select>
        <ix-button>outside</ix-button>
    `);

  const selectElement = page.locator('ix-select');
  const btnElement = page.locator('ix-button');
  await expect(selectElement).toHaveClass(/hydrated/);
  await expect(btnElement).toBeVisible();

  await page.locator('[data-select-dropdown]').click();
  await page.getByTestId('input').fill('test');

  const add = page.getByRole('button', { name: 'test' });
  await expect(add).toBeVisible();

  await btnElement.click();
  const inputValue = await page.getByTestId('input').inputValue();

  expect(inputValue).toBe('Item 2');

  await page.locator('[data-select-dropdown]').click();

  await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 3' })).toBeVisible();
});

test('pass object as value and check if it is selectable', async ({
  mount,
  page,
}) => {
  await mount(`
        <ix-select>
          <ix-select-item label="Item 1">Test</ix-select-item>
          <ix-select-item label="Item 2">Test</ix-select-item>
          <ix-select-item label="Item 3">Test</ix-select-item>
        </ix-select>
    `);
  const selectElement = page.locator('ix-select');
  await expect(selectElement).toHaveClass(/hydrated/);

  async function setSelectItemValue(index: number): Promise<void> {
    await page
      .locator('ix-select-item')
      .nth(index)
      .evaluate((e: HTMLIxSelectItemElement, index) => {
        e.value = { selectLabel: `Item ${index}`, selectValue: `${index}` };
      });
  }

  for (let index = 0; index < 3; index++) {
    await setSelectItemValue(index);
  }

  await page.locator('[data-select-dropdown]').click();
  await page.locator('ix-select-item').last().click();
  await page.locator('[data-select-dropdown]').click();

  await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 2' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Item 3' })).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Item 3' }).locator('ix-icon')
  ).toBeVisible();
});

test.describe('arrow key navigation', () => {
  test.describe('ArrowDown', () => {
    test('input -> slotted item', async ({ mount, page }) => {
      await mount(`
        <ix-select>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
      `);

      await page.locator('ix-select input').click();
      await page.keyboard.down('ArrowDown');
      const itemOne = await page.locator('ix-select-item').first();
      await expect(itemOne).toBeFocused();
    });

    test('input -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      const itemOne = await page.locator('.add-item');
      await expect(itemOne).toBeFocused();
    });

    test('input -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.keyboard.down('Enter');
      await page.waitForSelector('.checkmark');

      await page.keyboard.down('ArrowDown');
      const addItem = await page.locator('ix-dropdown-item');
      await expect(addItem).toBeFocused();
    });

    test('slot -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.keyboard.down('Enter');
      await page.waitForSelector('.checkmark');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const itemThree = page.locator('ix-select-item').last();
      await expect(itemThree).toBeFocused();
    });

    test('slot -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();
    });

    test('dynamic item -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('Item 2');
      await page.keyboard.down('Enter');
      await page.waitForSelector('.checkmark');

      await page.locator('input').clear();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();
    });

    test('wrap - dynamic item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('Item 2');
      await page.keyboard.press('Enter');
      await page.locator('input').clear();

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const itemTwo = page.locator('ix-select-item').nth(1);
      await expect(itemTwo).toBeFocused();

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const itemOne = page.locator('ix-select-item').first();
      await expect(itemOne).toBeFocused();
    });

    test('wrap - add item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const itemOne = page.locator('ix-select-item').first();
      await expect(itemOne).toBeFocused();
    });

    test('wrap - add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('Item 1');
      await page.keyboard.press('Enter');
      await page.waitForSelector('.checkmark');

      await page.locator('input').clear();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const itemOne = page.locator('ix-select-item');
      await expect(itemOne).toBeFocused();
    });
  });

  test.describe('ArrowUp', () => {
    test('dynamic item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.keyboard.down('Enter');
      await page.waitForSelector('.checkmark');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const itemTwo = page.locator('ix-select-item').last();
      await expect(itemTwo).toBeFocused();

      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const itemOne = page.locator('ix-select-item').first();
      await expect(itemOne).toBeFocused();
    });

    test('add item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();

      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const itemOne = page.locator('ix-select-item');
      await expect(itemOne).toBeFocused();
    });

    test('add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
      `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('Item 1');
      await page.keyboard.press('Enter');
      await page.waitForSelector('.checkmark');

      await page.locator('input').clear();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();

      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const itemOne = page.locator('ix-select-item');
      await expect(itemOne).toBeFocused();
    });

    test('wrap - slot -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      await page.locator('input').focus();
      await page.keyboard.type('Item 2');
      await page.keyboard.press('Enter');
      await page.locator('input').clear();

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const itemTwo = page.locator('ix-select-item').last();
      await expect(itemTwo).toBeFocused();
    });

    test('wrap - slot -> add-item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();
    });

    test('wrap - dynamic item -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      await page.locator('ix-select input').focus();
      await page.keyboard.type('Item 1');
      await page.keyboard.press('Enter');
      await page.waitForSelector('.checkmark');

      await page.locator('input').clear();
      await page.keyboard.type('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();
    });
  });
});

test('form-ready', async ({ mount, page }) => {
  await mount(`
    <form>
      <ix-select name="my-custom-entry">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
      </ix-select>
    </form>
  `);

  const select = page.locator('ix-select');
  const formElement = page.locator('form');
  await preventFormSubmission(formElement);
  await page.locator('[data-select-dropdown]').click();
  await page.locator('ix-select-item').nth(1).click();

  const inputValue = await select.locator('input').inputValue();
  expect(inputValue).toEqual('Item 2');

  const formData = await getFormValue(formElement, 'my-custom-entry');
  expect(formData).toEqual('2');
});

test('form-ready - with initial value', async ({ mount, page }) => {
  await mount(`
    <form>
      <ix-select name="my-custom-entry" value="some other">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="some other" label="Item 3">Test</ix-select-item>
      </ix-select>
    </form>
  `);

  const formElement = page.locator('form');
  await preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-custom-entry');
  expect(formData).toEqual('some other');
});
