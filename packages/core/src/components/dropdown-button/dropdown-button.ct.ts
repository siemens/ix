/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
  <ix-dropdown-button label="Open">
    <ix-dropdown-item label="Test"></ix-dropdown-item>
  </ix-dropdown-button>
  `);

  await page.locator('ix-dropdown-button').click();
  const item = page.locator('ix-dropdown-item');
  await expect(item).toBeVisible();

  await item.click();
  await expect(item).not.toBeVisible();
});

regressionTest('close behavior - outside', async ({ mount, page }) => {
  await mount(`
  <ix-dropdown-button close-behavior="outside" label="Open">
    <ix-dropdown-item label="Test"></ix-dropdown-item>
  </ix-dropdown-button>
  `);

  await page.locator('ix-dropdown-button').click();
  const item = page.locator('ix-dropdown-item');
  await expect(item).toBeVisible();

  await item.click();
  await expect(item).toBeVisible();
});

regressionTest('submenu', async ({ mount, page }) => {
  await mount(`
    <ix-dropdown-button close-behavior="outside" label="Open">
      <ix-dropdown-item label="Test" id="submenu"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown close-behavior="outside" trigger="submenu">
      <ix-dropdown-item label="Subitem"></ix-dropdown-item>
    </ix-dropdown>
  `);

  await page.locator('ix-dropdown-button').click();
  const item = page.locator('ix-dropdown-item').first();
  await item.click();
  const subItem = page.locator('ix-dropdown-item').last();
  await subItem.click();

  await expect(subItem).toBeVisible();
});

regressionTest(
  'should reflect aria-disabled on disabled dropdown button',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button id="disabled-button" label="Disabled" disabled>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button id="enabled-button" label="Enabled">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    const disabledButton = page.locator('#disabled-button');
    const enabledButton = page.locator('#enabled-button');

    await expect(disabledButton).toHaveAttribute('aria-disabled', 'true');
    await expect(enabledButton).toHaveAttribute('aria-disabled', 'false');
  }
);

regressionTest(
  'should reflect disabled attribute in DOM when changed dynamically',
  async ({ page, mount }) => {
    await mount(`
      <ix-dropdown-button id="dynamic-disabled" label="Dynamic Disabled">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dynamicButton = page.locator('#dynamic-disabled');

    await expect(dynamicButton).not.toHaveAttribute('disabled');

    await dynamicButton.evaluate((element: any) => {
      element.disabled = true;
    });
    await expect(dynamicButton).toHaveAttribute('disabled');

    await dynamicButton.evaluate((element: any) => {
      element.disabled = false;
    });
    await expect(dynamicButton).not.toHaveAttribute('disabled');
  }
);

regressionTest(
  'should not render focus outline on trigger while dropdown is expanded',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button label="Open">
      <ix-dropdown-item id="item-1" label="Test1"></ix-dropdown-item>
      <ix-dropdown-item id="item-2" label="Test2"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    const button = page.locator('ix-dropdown-button');
    await expect(button).toHaveClass(/hydrated/);

    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();

    await expect(button).not.toHaveCSS('outline-style', 'none');

    await page.keyboard.press('Enter');

    const dropdown = button.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded', 'true');

    await expect(button).toHaveCSS('outline-style', 'none');
  }
);

regressionTest(
  'handle visible focus in combination with aria-activedescendant',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button label="Open">
      <ix-dropdown-item id="acc-1" label="Test1"></ix-dropdown-item>
      <ix-dropdown-item id="acc-2" label="Test2"></ix-dropdown-item>
      <ix-dropdown-item id="acc-3" label="Test3"></ix-dropdown-item>
    </ix-dropdown-button>
  `);
    const button = page.locator('ix-dropdown-button');
    const item2 = page.locator('#acc-2');

    const $onClickItem2 = item2.evaluateHandle(
      (el) =>
        new Promise<void>((resolve) => {
          el.addEventListener('click', () => resolve());
        })
    );

    await expect(button).toHaveClass(/hydrated/);

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');

    const dropdown = button.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    await expect(button).toHaveAttribute('aria-activedescendant', 'acc-1');

    await page.keyboard.press('ArrowDown');
    await expect(button).toHaveAttribute('aria-activedescendant', 'acc-2');

    await page.keyboard.press('Enter');

    await $onClickItem2;
    await expect(dropdown).not.toBeVisible();
  }
);

regressionTest(
  'roving-tabindex navigation moves DOM focus without aria-activedescendant',
  async ({ page, mount, makeAxeBuilder }) => {
    await mount(`
    <ix-dropdown-button label="Open" navigation-mode="roving-tabindex">
      <ix-dropdown-item id="rov-1" label="Test1"></ix-dropdown-item>
      <ix-dropdown-item id="rov-2" label="Test2"></ix-dropdown-item>
      <ix-dropdown-item id="rov-3" label="Test3"></ix-dropdown-item>
    </ix-dropdown-button>
  `);
    const button = page.locator('ix-dropdown-button');
    const item1 = page.locator('#rov-1');
    const item2 = page.locator('#rov-2');

    const $onClickItem2 = item2.evaluateHandle(
      (el) =>
        new Promise<void>((resolve) => {
          el.addEventListener('click', () => resolve());
        })
    );

    await expect(button).toHaveClass(/hydrated/);

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');

    const dropdown = button.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    await expect(item1).toBeFocused();
    await expect(item1).toHaveAttribute('tabindex', '0');
    await expect(button).not.toHaveAttribute('aria-activedescendant');

    const accessibilityScanResults = await makeAxeBuilder()
      .include('ix-dropdown-item')
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    await page.keyboard.press('ArrowDown');
    await expect(item2).toBeFocused();
    await expect(item2).toHaveAttribute('tabindex', '0');
    await expect(item1).toHaveAttribute('tabindex', '-1');

    await page.keyboard.press('Enter');

    await $onClickItem2;
    await expect(dropdown).not.toBeVisible();
  }
);

regressionTest(
  'roving-tabindex closes on Tab and moves focus past the dropdown button',
  async ({ page, mount, makeAxeBuilder }) => {
    await mount(`
      <button id="before">Before</button>
      <ix-dropdown-button label="Open" navigation-mode="roving-tabindex">
        <ix-dropdown-item id="tab-1" label="Test1"></ix-dropdown-item>
        <ix-dropdown-item id="tab-2" label="Test2"></ix-dropdown-item>
      </ix-dropdown-button>
      <button id="after">After</button>
    `);
    const button = page.locator('ix-dropdown-button');
    const dropdown = button.locator('ix-dropdown');
    const item1 = page.locator('#tab-1');
    const after = page.locator('#after');

    await expect(button).toHaveClass(/hydrated/);
    await button.focus();
    await page.keyboard.press('ArrowDown');
    await expect(item1).toBeFocused();

    const accessibilityScanResults = await makeAxeBuilder()
      .include('ix-dropdown-item')
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    await page.keyboard.press('Tab');

    await expect(dropdown).not.toBeVisible();
    await expect(after).toBeFocused();
  }
);

regressionTest(
  'updates the open dropdown when navigation mode changes',
  async ({ page, mount }) => {
    await mount(`
      <ix-dropdown-button label="Open">
        <ix-dropdown-item id="dynamic-1" label="Test1"></ix-dropdown-item>
        <ix-dropdown-item id="dynamic-2" label="Test2"></ix-dropdown-item>
      </ix-dropdown-button>
    `);
    const button = page.locator('ix-dropdown-button');
    const item1 = page.locator('#dynamic-1');

    await expect(button).toHaveClass(/hydrated/);
    await button.focus();
    await page.keyboard.press('ArrowDown');
    await expect(button).toHaveAttribute('aria-activedescendant', 'dynamic-1');

    await button.evaluate(
      (element: HTMLIxDropdownButtonElement) =>
        (element.navigationMode = 'roving-tabindex')
    );

    await expect(item1).toBeFocused();
    await expect(button).not.toHaveAttribute('aria-activedescendant');

    await button.evaluate(
      (element: HTMLIxDropdownButtonElement) =>
        (element.navigationMode = 'active-descendant')
    );

    await expect(button).toBeFocused();
    await expect(button).toHaveAttribute('aria-activedescendant', 'dynamic-1');
  }
);
