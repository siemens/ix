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

test('type in a novel item name and click outside', async ({ mount, page }) => {
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
});

test('check if clear button visible in disabled', async ({ mount, page }) => {
  await mount(`
        <ix-select value="2" allow-clear>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
          <ix-select-item value="3" label="Item 3">Test</ix-select-item>
        </ix-select>
    `);

  const selectElement = page.locator('ix-select');
  await expect(selectElement).toHaveClass(/hydrated/);

  const clearButton = page.locator('ix-icon-button.clear.btn-icon-16');
  await expect(clearButton).toBeVisible();

  await selectElement.evaluate(
    (select: HTMLIxSelectElement) => (select.disabled = true)
  );

  await expect(clearButton).not.toBeAttached();
});

test('type in a novel item name in multiple mode, click outside', async ({
  mount,
  page,
}) => {
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

  const formData = await getFormValue(formElement, 'my-custom-entry', page);
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
  const formData = await getFormValue(formElement, 'my-custom-entry', page);
  expect(formData).toEqual('some other');
});

test.describe('Events', () => {
  test('value change', async ({ mount, page }) => {
    await mount(`<ix-select>
      <ix-select-item value="1" label="Item 1"></ix-select-item>
      </ix-select>`);

    const select = page.locator('ix-select');
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

  test('add item', async ({ mount, page }) => {
    const itemText = 'test';
    await mount(`<ix-select editable></ix-select>`);
    const select = page.locator('ix-select');
    const itemAdded = select.evaluate((elm) => {
      return new Promise<number>((resolve) => {
        elm.addEventListener('addItem', (e: Event) =>
          resolve((e as CustomEvent).detail)
        );
      });
    });
    const input = page.locator('input');
    await input.focus();
    await input.fill(itemText);
    await page.keyboard.press('Enter');

    await expect(select).toHaveClass(/hydrated/);
    expect(await itemAdded).toBe(itemText);
  });

  test.describe('prevent default', () => {
    test('value change', async ({ mount, page }) => {
      await mount(`<ix-select>
      <ix-select-item value="1" label="Item 1"></ix-select-item>
      </ix-select>`);
      const select = page.locator('ix-select');
      await select.evaluate((i) =>
        i.addEventListener('vauleChange', (e) => e.preventDefault())
      );
      await page.locator('ix-icon-button').click();
      const item = page.locator('ix-select-item');
      await item.click();
      await expect(item).not.toHaveClass('selected');
    });

    test('add item', async ({ mount, page }) => {
      await mount(`<ix-select editable></ix-select>`);
      const select = page.locator('ix-select');
      await select.evaluate((i) =>
        i.addEventListener('addItem', (e) => e.preventDefault())
      );
      const input = page.locator('input');
      await input.focus();
      await input.fill('test');
      await page.keyboard.press('Enter');
      const count = await page.locator('ix-select-item').count();
      await expect(count).toBe(0);
    });
  });
});

test('async set content and check input value', async ({ mount, page }) => {
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
});

test.describe('Enter selection with non-existing and existing items', () => {
  test('editable', async ({ mount, page }) => {
    await mount(`
      <ix-select editable>
        <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        <ix-select-item value="2" label="Item 2">Test</ix-select-item>
      </ix-select>
    `);

    const selectElement = page.locator('ix-select');
    const input = selectElement.locator('input');

    await input.fill('Item 1');
    await page.keyboard.press('Enter');

    await expect(input).toHaveValue('Item 1');

    await input.fill('Item 3');
    await page.keyboard.press('Enter');

    await expect(input).toHaveValue('Item 3');
  });

  test('non-editable', async ({ mount, page }) => {
    await mount(`
      <ix-select>
        <ix-select-item value="1" label="Item 1">Test</ix-select-item>
        <ix-select-item value="2" label="Item 2">Test</ix-select-item>
      </ix-select>
    `);

    const selectElement = page.locator('ix-select');
    const input = selectElement.locator('input');

    await input.fill('Item 1');
    await page.keyboard.press('Enter');

    await expect(input).toHaveValue('Item 1');

    await input.fill('Item 3');
    await page.keyboard.press('Enter');

    await expect(input).toHaveValue('Item 1');
  });
});

test.describe('Dropdown width', () => {
  test('should be 25rem when dropdown-width is set to 35rem and dropdown-max-width to 25rem', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-select value="1" dropdown-width="35rem" dropdown-max-width="25rem">
      <ix-select-item label="this is an example for a very long selection option. this is an example for a very long selection option." value="1"></ix-select-item>
    </ix-select>`);

    const select = page.locator('ix-select');

    await page.locator('[data-select-dropdown]').click();

    const dropdown = select.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    const box = await dropdown.boundingBox();
    expect(box?.width).toBe(16 * 25);
  });

  test('should be 25rem when dropdown-width is set to 25 and dropdown-max-width to 35rem', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-select value="1" dropdown-width="25rem" dropdown-max-width="35rem">
      <ix-select-item label="this is an example for a very long selection option. this is an example for a very long selection option." value="1"></ix-select-item>
    </ix-select>`);

    const select = page.locator('ix-select');

    await page.locator('[data-select-dropdown]').click();

    const dropdown = select.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    const box = await dropdown.boundingBox();
    expect(box?.width).toBe(16 * 25);
  });

  test('should be 25rem when dropdown-width is set to 25 and dropdown-max-width is not set', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-select value="1" dropdown-width="25rem">
      <ix-select-item label="this is an example for a very long selection option. this is an example for a very long selection option." value="1"></ix-select-item>
    </ix-select>`);

    const select = page.locator('ix-select');

    await page.locator('[data-select-dropdown]').click();

    const dropdown = select.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    const box = await dropdown.boundingBox();
    expect(box?.width).toBe(16 * 25);
  });

  test('should be 35rem when dropdown-width is not set and dropdown-max-width is set to 35rem', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-select value="1" dropdown-max-width="35rem">
      <ix-select-item label="this is an example for a very long selection option. this is an example for a very long selection option." value="1"></ix-select-item>
    </ix-select>`);

    const select = page.locator('ix-select');

    await page.locator('[data-select-dropdown]').click();

    const dropdown = select.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    const box = await dropdown.boundingBox();
    expect(box?.width).toBe(16 * 35);
  });

  test('should be 100% when dropdown-width and dropdown-max-width are not set', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-select value="1">
      <ix-select-item label="this is an example for a very long selection option. this is an example for a very long selection option. this is an example for a very long selection option. this is an example for a very long selection option. this is an example for a very long selection option." value="1"></ix-select-item>
    </ix-select>`);

    const select = page.locator('ix-select');

    await page.locator('[data-select-dropdown]').click();

    const dropdown = select.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    const box = await dropdown.boundingBox();
    const pageWidth = page.viewportSize()?.width;

    expect(box?.width).toBe(pageWidth);
  });
});

test('should be 100% when dropdown-max-width is greater than the viewport width', async ({
  mount,
  page,
}) => {
  await mount(`<ix-select value="1" dropdown-max-width="10000rem">
    <ix-select-item label="this is an example for a very long selection option. this is an example for a very long selection option. this is an example for a very long selection option. this is an example for a very long selection option. this is an example for a very long selection option." value="1"></ix-select-item>
  </ix-select>`);

  const select = page.locator('ix-select');

  await page.locator('[data-select-dropdown]').click();

  const dropdown = select.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  const box = await dropdown.boundingBox();
  const pageWidth = page.viewportSize()?.width;

  expect(box?.width).toBe(pageWidth);
});

test('select and display the last element in the list', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-select>
      ${Array.from(
        {
          length: 20,
        },
        (_, i) =>
          `<ix-select-item value="${i + 1}" label="Item ${i + 1}">Item ${
            i + 1
          }</ix-select-item>`
      ).join('')}
    </ix-select>
  `);

  const select = page.locator('ix-select');
  await page.locator('[data-select-dropdown]').click();

  const dropdown = select.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  const lastItem = page.locator('ix-select-item').last();
  await lastItem.click();

  const inputValue = await select.locator('input').inputValue();
  console.log(`Last selected item: ${inputValue}`);

  expect(inputValue).toEqual('Item 20');
});

test('select and display the last element in the list when select at center', async ({
  mount,
  page,
}) => {
  await mount(`
    <div style="height:60vh"></div>
    <ix-select>
      ${Array.from(
        { length: 20 },
        (_, i) =>
          `<ix-select-item value="${i + 1}" label="Item ${i + 1}">Item ${
            i + 1
          }</ix-select-item>`
      ).join('')}
    </ix-select>
  `);

  const select = page.locator('ix-select');
  await page.locator('[data-select-dropdown]').click();

  const dropdown = select.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();

  const dropdownPosition = await dropdown.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom };
  });

  const selectPosition = await select.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom };
  });

  console.log(
    `Dropdown Position: Top=${dropdownPosition.top}, Bottom=${dropdownPosition.bottom}`
  );
  console.log(
    `Select Position: Top=${selectPosition.top}, Bottom=${selectPosition.bottom}`
  );

  if (dropdownPosition.top >= selectPosition.bottom) {
    console.log('Dropdown appears BELOW the select component.');
  } else if (dropdownPosition.bottom <= selectPosition.top) {
    console.log('Dropdown appears ABOVE the select component.');
  } else {
    console.log('Dropdown overlaps with the select component.');
  }

  const lastItem = page.locator('ix-select-item').last();
  await lastItem.click();

  const inputValue = await select.locator('input').inputValue();
  console.log(`Last selected item: ${inputValue}`);
});
