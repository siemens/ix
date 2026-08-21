/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconRocket } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder, page }) => {
  await mount(`
      <ix-dropdown-button label="Actions">
        <ix-dropdown-item label="Edit"></ix-dropdown-item>
        <ix-dropdown-item label="Delete"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

  await expect(page.locator('ix-dropdown-button')).toHaveClass(/\bhydrated\b/);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest(
  'renders labeled and icon-only variants',
  async ({ mount, page }) => {
    await mount(
      `
      <ix-dropdown-button id="labeled-button" label="Actions">
        <ix-dropdown-item label="Edit"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button
        id="icon-button"
        icon="rocket"
        aria-label-dropdown-button="Launch actions"
      >
        <ix-dropdown-item label="Launch"></ix-dropdown-item>
      </ix-dropdown-button>
    `,
      { icons: { iconRocket } }
    );

    const labeledButton = page.locator('#labeled-button');
    const iconButton = page.locator('#icon-button');

    await expect(labeledButton).toHaveClass(/\bhydrated\b/);
    await expect(labeledButton).toBeVisible();
    await expect(labeledButton).toHaveAccessibleName('Actions');
    await expect(labeledButton.locator('ix-button')).toHaveClass(
      /\bhydrated\b/
    );

    await expect(iconButton).toHaveClass(/\bhydrated\b/);
    await expect(iconButton).toBeVisible();
    await expect(iconButton).toHaveAccessibleName('Launch actions');
    await expect(iconButton.locator('ix-icon-button')).toHaveClass(
      /\bhydrated\b/
    );
  }
);

regressionTest(
  'uses the expected accessible-label precedence',
  async ({ mount, page }) => {
    await mount(`
    <ix-dropdown-button
      id="host-label"
      aria-label="Host label"
      aria-label-dropdown-button="Dropdown button label"
      label="Visible label"
    >
      <ix-dropdown-item label="Item"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button
      id="dropdown-button-label"
      aria-label-dropdown-button="Dropdown button label"
      label="Visible label"
    >
      <ix-dropdown-item label="Item"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button id="visible-label" label="Visible label">
      <ix-dropdown-item label="Item"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button
      id="empty-host-label"
      aria-label=""
      label="Visible label"
    >
      <ix-dropdown-item label="Item"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button
      id="empty-dropdown-button-label"
      aria-label-dropdown-button=""
      label="Visible label"
    >
      <ix-dropdown-item label="Item"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    await expect(page.locator('#host-label')).toHaveAccessibleName(
      'Host label'
    );
    await expect(page.locator('#dropdown-button-label')).toHaveAccessibleName(
      'Dropdown button label'
    );
    await expect(page.locator('#visible-label')).toHaveAccessibleName(
      'Visible label'
    );
    await expect(page.locator('#empty-host-label')).toHaveAccessibleName(
      'Visible label'
    );
    await expect(
      page.locator('#empty-dropdown-button-label')
    ).toHaveAccessibleName('Visible label');
  }
);

regressionTest('keeps focus on the host button', async ({ mount, page }) => {
  await mount(`
    <button>Before</button>
    <ix-dropdown-button label="Actions">
      <ix-dropdown-item label="Item"></ix-dropdown-item>
    </ix-dropdown-button>
    <button>After</button>
  `);

  const dropdownButton = page.locator('ix-dropdown-button');
  await expect(dropdownButton).toHaveClass(/\bhydrated\b/);

  await page.getByRole('button', { name: 'Before' }).focus();
  await page.keyboard.press('Tab');

  await expect(dropdownButton).toHaveAttribute('tabindex', '0');
  await expect(dropdownButton).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'After' })).toBeFocused();
});

regressionTest('makes nested controls inert', async ({ mount, page }) => {
  await mount(
    `
      <ix-dropdown-button id="labeled-button" label="Actions">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button
        id="icon-button"
        icon="rocket"
        aria-label-dropdown-button="Launch actions"
      >
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `,
    { icons: { iconRocket } }
  );

  await expect(
    page.locator('#labeled-button').locator('ix-button')
  ).toHaveAttribute('inert', '');
  await expect(
    page.locator('#icon-button').locator('ix-icon-button')
  ).toHaveAttribute('inert', '');
});

regressionTest(
  'hides decorative icons from assistive technology',
  async ({ mount, page }) => {
    await mount(
      `
      <ix-dropdown-button id="button-with-icons" icon="rocket" label="Actions">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `,
      { icons: { iconRocket } }
    );

    const decorativeIcons = page
      .locator('#button-with-icons')
      .locator('.content > ix-icon');
    await expect(decorativeIcons).toHaveCount(2);
    await expect(decorativeIcons.nth(0)).toHaveAttribute('aria-hidden', 'true');
    await expect(decorativeIcons.nth(1)).toHaveAttribute('aria-hidden', 'true');
  }
);

regressionTest(
  'uses the visible label as the menu accessible name',
  async ({ mount, page }) => {
    await mount(`
    <ix-dropdown-button label="Actions">
      <ix-dropdown-item label="Edit"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    await page.locator('ix-dropdown-button').click();
    await expect(page.getByRole('menu', { name: 'Actions' })).toBeVisible();
  }
);

regressionTest(
  'uses the open state as accessible name when label is empty',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="">
        <ix-dropdown-item label="Test"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const button = page.locator('ix-dropdown-button');
    await expect(button).toHaveAttribute('aria-label', 'Open dropdown');
    await expect(button).toHaveAccessibleName('Open dropdown');

    await button.click();
    await expect(button).toHaveAttribute('aria-label', 'Close dropdown');
    await expect(button).toHaveAccessibleName('Close dropdown');
  }
);

regressionTest('opens and closes the dropdown', async ({ mount, page }) => {
  await mount(`
    <ix-dropdown-button label="Open">
      <ix-dropdown-item label="Test"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

  await page.locator('ix-dropdown-button').click();
  const item = page.getByRole('menuitem', { name: 'Test' });
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
    await expect(button.locator('ix-button')).toHaveClass(/\bactive\b/);

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
