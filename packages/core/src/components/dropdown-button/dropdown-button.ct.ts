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
  'should reflect disabled attribute in DOM when changed dynamically',
  async ({ page, mount }) => {
    await mount(`
      <ix-dropdown-button id="static-disabled" label="Always Disabled" disabled="true">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button id="dynamic-disabled" label="Dynamic Disabled">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dynamicButton = page.locator('#dynamic-disabled');

    await expect(dynamicButton).not.toHaveAttribute('disabled');

    await dynamicButton.evaluate((element: any) => {
      element.disabled = true;
    });
    await page.waitForTimeout(100);

    await expect(dynamicButton).toHaveAttribute('disabled');

    await dynamicButton.evaluate((element: any) => {
      element.disabled = false;
    });
    await page.waitForTimeout(100);

    await expect(dynamicButton).not.toHaveAttribute('disabled');
  }
);
