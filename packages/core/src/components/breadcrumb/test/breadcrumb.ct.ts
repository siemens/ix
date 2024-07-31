/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
  <ix-breadcrumb>
    <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
  </ix-breadcrumb>`);
  const breadcrumb = page.locator('ix-breadcrumb');
  const breadcrumbItem1 = page.locator('ix-breadcrumb-item').nth(0);
  const breadcrumbItem2 = page.locator('ix-breadcrumb-item').nth(1);
  const breadcrumbItem3 = page.locator('ix-breadcrumb-item').nth(2);
  await expect(breadcrumb).toHaveClass(/hydrated/);
  await expect(breadcrumbItem1).toBeVisible();
  await expect(breadcrumbItem2).toBeVisible();
  await expect(breadcrumbItem3).toBeVisible();
});

regressionTest('should show hidden items', async ({ mount, page }) => {
  await mount(`
  <ix-breadcrumb visible-item-count="2">
    <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
  </ix-breadcrumb>`);
  const breadcrumb = page.locator('ix-breadcrumb');
  await breadcrumb.evaluate((breadcrumbElement: HTMLIxBreadcrumbElement) => {
    const item = document.createElement('ix-breadcrumb-item');
    item.label = 'NewItem';

    breadcrumbElement.appendChild(item);
  });

  const breadcrumbItem1 = page.locator('ix-breadcrumb-item').nth(0);
  const breadcrumbItemNewItem = page.locator('ix-breadcrumb-item').nth(3);

  const showHiddenButton = breadcrumb.getByRole('button', { name: '...' });

  await page.waitForTimeout(1000);
  await expect(breadcrumbItem1).not.toBeVisible();
  await expect(breadcrumbItemNewItem).toBeVisible();

  await showHiddenButton.click();

  const dropdownElement = breadcrumb.locator('ix-dropdown').nth(0);
  const dropdownItem1 = dropdownElement.getByRole('button', { name: 'Item 1' });
  const dropdownItem2 = dropdownElement.getByRole('button', { name: 'Item 2' });
  await expect(dropdownElement).toBeVisible();
  await expect(dropdownItem1).toBeVisible();
  await expect(dropdownItem2).toBeVisible();
});

regressionTest('should change label', async ({ mount, page }) => {
  await mount(`
  <ix-breadcrumb>
    <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
  </ix-breadcrumb>`);
  const breadcrumbItem = page.locator('ix-breadcrumb-item').nth(2);

  await expect(breadcrumbItem).toHaveText('Item 3');

  await breadcrumbItem.evaluate((item: HTMLIxBreadcrumbItemElement) => {
    item.label = 'UPDATED';
  });
  await expect(breadcrumbItem).toHaveText('UPDATED');
});

regressionTest('should show next items', async ({ mount, page }) => {
  await mount(`
  <ix-breadcrumb>
    <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
  </ix-breadcrumb>`);
  const breadcrumb = page.locator('ix-breadcrumb');
  await breadcrumb.evaluate((bc: HTMLIxBreadcrumbElement) => {
    bc.nextItems = ['Next Item 1', 'Next Item 2'];
  });

  await page.waitForTimeout(1000);

  const lastItem = breadcrumb.locator('ix-breadcrumb-item').nth(2);
  await lastItem.click();

  const dropdownElement = breadcrumb.locator('ix-dropdown').nth(1);

  const item1 = dropdownElement.locator('ix-dropdown-item').nth(0);
  const item2 = dropdownElement.locator('ix-dropdown-item').nth(1);
  await expect(dropdownElement).toBeVisible();

  await expect(item1).toHaveText('Next Item 1');
  await expect(item2).toHaveText('Next Item 2');
});
