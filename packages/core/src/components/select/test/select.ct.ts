/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
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

regressionTest('editable mode', async ({ mount, page }) => {
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

regressionTest('single selection', async ({ mount, page }) => {
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

regressionTest('multiple selection', async ({ mount, page }) => {
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

regressionTest('filter', async ({ mount, page }) => {
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

regressionTest('open filtered dropdown on input', async ({ mount, page }) => {
  await mount(`
        <ix-select>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
    `);
  const select = page.locator('ix-select');
  const input = select.locator('input');
  await select.evaluate((select: HTMLIxSelectElement) => (select.value = []));

  await input.focus();
  await page.keyboard.press('Escape');
  const dropdown = select.locator('ix-dropdown');
  await expect(dropdown).not.toBeVisible();

  await input.fill('1');

  const item1 = page.getByRole('button', { name: 'Item 1' });
  const item2 = page.getByRole('button', { name: 'Item 2' });

  await expect(item1).toBeVisible();
  await expect(item2).not.toBeVisible();
});

regressionTest(
  'remove text from input and reselect the element',
  async ({ mount, page }) => {
    await mount(`
        <ix-select value="2">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="3" label="Item 3">Test</ix-select-item>
        </ix-select>
    `);

    await page.locator('[data-select-dropdown]').click();
    const element = page.locator('ix-select');
    await element.evaluate(
      (select: HTMLIxSelectElement) => (select.value = [])
    );
    const dropdown = element.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    const item2 = page.getByRole('button', { name: 'Item 2' });
    await item2.click();

    const inputValue = await element.locator('input').inputValue();
    expect(inputValue).toEqual('Item 2');
  }
);

regressionTest(
  'type in a novel item name in editable mode and then remove it',
  async ({ mount, page }) => {
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

    await expect(
      page.getByRole('button', { name: 'Item 1' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Item 2' })
    ).not.toBeVisible();

    const add = page.getByRole('button', { name: 'test' });
    await expect(add).toBeVisible();

    await page.getByTestId('input').fill('');

    await expect(page.getByRole('button', { name: 'Item 1' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Item 2' })).toBeVisible();
    await expect(add).not.toBeVisible();
  }
);

regressionTest(
  'type in a novel item name in editable mode, click outside and reopen the select',
  async ({ mount, page }) => {
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
  }
);

regressionTest(
  'type in a novel item name and click outside',
  async ({ mount, page }) => {
    await mount(`
        <ix-select value="2">
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="3" label="Item 3">Test</ix-select-item>
        </ix-select>
        <ix-button>outside</ix-button>
    `);

    const selectElement = page.locator('ix-select');
    await expect(selectElement).toHaveClass(/hydrated/);

    await page.locator('[data-select-dropdown]').click();
    await page.getByTestId('input').fill('test');

    await page.keyboard.press('Enter');
    const inputValue = await page.getByTestId('input').inputValue();

    expect(inputValue).toBe('Item 2');
  }
);

regressionTest(
  'type in a novel item name in multiple mode, click outside',
  async ({ mount, page }) => {
    await mount(`
        <ix-select value="2" mode="multiple">
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

    await btnElement.click();
    const inputValue = await page.getByTestId('input').inputValue();

    expect(inputValue).toBe('');
  }
);

regressionTest(
  'pass string as value and check if it is selectable',
  async ({ mount, page }) => {
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
          e.value = `Item ${index}`;
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
  }
);

regressionTest.describe('arrow key navigation', () => {
  regressionTest.describe('ArrowDown', () => {
    regressionTest('input -> slotted item', async ({ mount, page }) => {
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

    regressionTest('input -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      const itemOne = await page.locator('.add-item');
      await expect(itemOne).toBeFocused();
    });

    regressionTest('input -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
      await page.keyboard.down('Enter');
      await page.locator('ix-icon-button').click();
      await page.waitForSelector('.checkmark');

      await page.keyboard.down('ArrowDown');
      const addItem = page.locator('ix-dropdown-item');
      await expect(addItem).toBeFocused();
    });

    regressionTest('slot -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
      await page.keyboard.down('Enter');
      await page.locator('ix-icon-button').click();
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

    regressionTest('slot -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
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

    regressionTest('dynamic item -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('Item 2');
      await page.keyboard.down('Enter');
      await page.locator('ix-icon-button').click();
      await page.waitForSelector('.checkmark');

      await input.clear();
      await input.fill('I');
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

    regressionTest('wrap - dynamic item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('Item 2');
      await page.keyboard.press('Enter');
      await input.clear();

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

    regressionTest('wrap - add item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
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

    regressionTest(
      'wrap - add item -> dynamic item',
      async ({ mount, page }) => {
        await mount(`
          <ix-select editable></ix-select>
      `);

        const input = await page.locator('ix-select input');
        await input.focus();
        await input.fill('Item 1');
        await page.keyboard.press('Enter');
        await page.locator('ix-icon-button').click();
        await page.waitForSelector('.checkmark');

        await input.clear();
        await input.fill('I');
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
      }
    );
  });

  regressionTest.describe('ArrowUp', () => {
    regressionTest('dynamic item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
      await page.keyboard.down('Enter');
      await page.locator('ix-icon-button').click();
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

    regressionTest('add item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
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

    regressionTest('add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
      `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('Item 1');
      await page.keyboard.press('Enter');
      await page.locator('ix-icon-button').click();
      await page.waitForSelector('.checkmark');

      await input.clear();
      await input.fill('I');
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

    regressionTest('wrap - slot -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      const input = await page.locator('input');
      await input.focus();
      await input.fill('Item 2');
      await page.keyboard.press('Enter');
      await page.locator('ix-icon-button').click();
      await page.locator('input').clear();

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const itemTwo = page.locator('ix-select-item').last();
      await expect(itemTwo).toBeFocused();
    });

    regressionTest('wrap - slot -> add-item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        </ix-select>
     `);

      const input = await page.locator('ix-select input');
      await input.focus();
      await input.fill('I');
      await page.waitForSelector('.add-item');

      await page.keyboard.down('ArrowDown');
      await page.waitForTimeout(100);
      await page.keyboard.down('ArrowUp');
      await page.waitForTimeout(100);

      const addItem = page.locator('.add-item');
      await expect(addItem).toBeFocused();
    });

    regressionTest(
      'wrap - dynamic item -> add item',
      async ({ mount, page }) => {
        await mount(`
          <ix-select editable></ix-select>
        `);

        const input = await page.locator('ix-select input');
        await input.focus();
        await input.fill('Item 1');
        await page.keyboard.press('Enter');
        await page.locator('ix-icon-button').click();
        await page.waitForSelector('.checkmark');

        await input.clear();
        await input.fill('I');
        await page.waitForSelector('.add-item');

        await page.keyboard.down('ArrowDown');
        await page.waitForTimeout(100);
        await page.keyboard.down('ArrowUp');
        await page.waitForTimeout(100);

        const addItem = page.locator('.add-item');
        await expect(addItem).toBeFocused();
      }
    );
  });
});

regressionTest('form-ready', async ({ mount, page }) => {
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

  const formData = await getFormValue(formElement, 'my-custom-entry', page);
  expect(formData).toEqual('2');
});

regressionTest('form-ready - with initial value', async ({ mount, page }) => {
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
  const formData = await getFormValue(formElement, 'my-custom-entry', page);
  expect(formData).toEqual('some other');
});

regressionTest.describe('Events', () => {
  regressionTest('value change', async ({ mount, page }) => {
    await mount(`<ix-select>
      <ix-select-item value="1" label="Item 1"></ix-select-item>
      </ix-select>`);

    const select = await page.locator('ix-select');
    const valueChanged = select.evaluate((elm) => {
      return new Promise<number>((resolve) => {
        elm.addEventListener('valueChange', (e: Event) =>
          resolve((e as CustomEvent).detail)
        );
      });
    });

    await page.locator('ix-icon-button').click();
    await page.locator('ix-select-item').click();

    await expect(select).toHaveClass(/hydrated/);
    expect(await valueChanged).toBe('1');
  });

  regressionTest('add item', async ({ mount, page }) => {
    const itemText = 'test';
    await mount(`<ix-select editable></ix-select>`);
    const select = await page.locator('ix-select');
    const itemAdded = select.evaluate((elm) => {
      return new Promise<number>((resolve) => {
        elm.addEventListener('addItem', (e: Event) =>
          resolve((e as CustomEvent).detail)
        );
      });
    });
    const input = await page.locator('input');
    await input.focus();
    await input.fill(itemText);
    await page.keyboard.press('Enter');

    await expect(select).toHaveClass(/hydrated/);
    expect(await itemAdded).toBe(itemText);
  });

  regressionTest.describe('prevent default', () => {
    regressionTest('value change', async ({ mount, page }) => {
      await mount(`<ix-select>
      <ix-select-item value="1" label="Item 1"></ix-select-item>
      </ix-select>`);
      const select = await page.locator('ix-select');
      await select.evaluate((i) =>
        i.addEventListener('vauleChange', (e) => e.preventDefault())
      );
      await page.locator('ix-icon-button').click();
      const item = await page.locator('ix-select-item');
      await item.click();
      await expect(item).not.toHaveClass('selected');
    });

    regressionTest('add item', async ({ mount, page }) => {
      await mount(`<ix-select editable></ix-select>`);
      const select = await page.locator('ix-select');
      await select.evaluate((i) =>
        i.addEventListener('addItem', (e) => e.preventDefault())
      );
      const input = await page.locator('input');
      await input.focus();
      await input.fill('test');
      await page.keyboard.press('Enter');
      const count = await page.locator('ix-select-item').count();
      await expect(count).toBe(0);
    });
  });
});

regressionTest(
  'async set content and check input value',
  async ({ mount, page }) => {
    await mount(`<ix-select value="1"></ix-select>`);

    await page.evaluate(async () => {
      const select = document.querySelector('ix-select');
      if (select) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        select.innerHTML = `
        <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        <ix-select-item value="2" label="Item 2">Test</ix-select-item>
      `;
      }
    });

    const input = page.locator('input');
    await expect(input).toHaveValue('Item 1');
  }
);
