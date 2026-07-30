/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconCheckboxes } from '@siemens/ix-icons/icons';
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
  'applies active button appearance while dropdown is expanded',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button label="Open">
      <ix-dropdown-item label="Test"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    const dropdownButton = page.locator('ix-dropdown-button');
    const trigger = dropdownButton.locator('ix-button');

    const getTriggerBackground = () =>
      trigger.evaluate((el) => {
        const button = el.shadowRoot?.querySelector('button');
        return button ? getComputedStyle(button).backgroundColor : '';
      });

    const closedBackground = await getTriggerBackground();

    await dropdownButton.click();
    await expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');
    await expect(dropdownButton.locator('ix-dropdown')).toBeVisible();

    const openBackground = await getTriggerBackground();
    expect(openBackground).not.toBe(closedBackground);

    const activeBackground = await dropdownButton.evaluate((el) => {
      const probe = document.createElement('div');
      probe.style.backgroundColor =
        'var(--theme-btn-primary--background--active)';
      el.appendChild(probe);
      const value = getComputedStyle(probe).backgroundColor;
      probe.remove();
      return value;
    });

    expect(openBackground).toBe(activeBackground);
  }
);

regressionTest(
  'applies active icon button appearance while dropdown is expanded',
  async ({ page, mount }) => {
    await mount(
      `
    <ix-dropdown-button icon="checkboxes">
      <ix-dropdown-item label="Test"></ix-dropdown-item>
    </ix-dropdown-button>
  `,
      {
        icons: { iconCheckboxes },
      }
    );

    const dropdownButton = page.locator('ix-dropdown-button');
    const trigger = dropdownButton.locator('ix-icon-button');

    const getTriggerBackground = () =>
      trigger.evaluate((el) => {
        const button = el.shadowRoot?.querySelector('button');
        return button ? getComputedStyle(button).backgroundColor : '';
      });

    const closedBackground = await getTriggerBackground();

    await dropdownButton.click();
    await expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');

    const openBackground = await getTriggerBackground();
    expect(openBackground).not.toBe(closedBackground);

    const activeBackground = await dropdownButton.evaluate((el) => {
      const probe = document.createElement('div');
      probe.style.backgroundColor =
        'var(--theme-btn-primary--background--active)';
      el.appendChild(probe);
      const value = getComputedStyle(probe).backgroundColor;
      probe.remove();
      return value;
    });

    expect(openBackground).toBe(activeBackground);
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
