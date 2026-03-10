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
import { Locator } from '@playwright/test';
import { regressionTest, expect } from '@utils/test';

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

  await expect(breadcrumb).toHaveClass(/hydrated/);
  await breadcrumb.evaluate((breadcrumbElement: HTMLIxBreadcrumbElement) => {
    const item = document.createElement('ix-breadcrumb-item');
    item.label = 'NewItem';

    breadcrumbElement.appendChild(item);
  });

  const breadcrumbItem1 = page.locator('ix-breadcrumb-item').nth(0);
  const breadcrumbItemNewItem = page.locator('ix-breadcrumb-item').nth(3);

  const showHiddenButton = breadcrumb.getByLabel(
    'Show previous breadcrumb items'
  );

  await expect(breadcrumbItem1).not.toBeVisible();
  await expect(breadcrumbItemNewItem).toBeVisible();

  await showHiddenButton.click();

  await expect(showHiddenButton.locator('ix-dropdown')).toHaveClass(/show/);

  const dropdownElement = breadcrumb.locator('ix-dropdown').nth(0);
  const dropdownItem1 = showHiddenButton.getByRole('menuitem', {
    name: /Item 1/,
  });
  const dropdownItem2 = showHiddenButton.getByRole('menuitem', {
    name: /Item 2/,
  });
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

  await expect(breadcrumbItem).toHaveText(/Item 3/);

  await breadcrumbItem.evaluate((item: HTMLIxBreadcrumbItemElement) => {
    item.label = 'UPDATED';
  });
  await expect(breadcrumbItem).toHaveText(/UPDATED/);
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

  const lastItem = breadcrumb.locator('ix-dropdown-button', {
    hasText: /Item 3/,
  });
  await lastItem.click();

  const dropdownElement = lastItem.locator('ix-dropdown');

  await expect(dropdownElement).toHaveClass(/show/);

  const item1 = lastItem.getByRole('menuitem', { name: /Next Item 1/ });
  const item2 = lastItem.getByRole('menuitem', { name: /Next Item 2/ });
  await expect(dropdownElement).toBeVisible();

  await expect(item1).toHaveText(/Next Item 1/);
  await expect(item2).toHaveText(/Next Item 2/);
});

async function getByControlsBy(locator: Locator, component: Locator) {
  const controlsById = await locator.evaluate((element) => {
    console.log(element.getAttribute('aria-controls'));
    return element.getAttribute('aria-controls');
  });
  return component.locator(`#${controlsById}`);
}

regressionTest.describe('keyboard navigation', () => {
  regressionTest('previous items', async ({ mount, page }) => {
    await mount(`
  <ix-breadcrumb visible-item-count="3">
    <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 6"></ix-breadcrumb-item>
  </ix-breadcrumb>`);

    const breadcrumb = page.locator('ix-breadcrumb');
    await breadcrumb.evaluate((bc: HTMLIxBreadcrumbElement) => {
      bc.nextItems = ['Next Item 1', 'Next Item 2'];
    });

    const previousButton = breadcrumb.getByLabel(
      'Show previous breadcrumb items'
    );
    await previousButton.waitFor({ state: 'visible' });
    await expect(previousButton).toBeVisible();

    await previousButton.focus();
    await expect(previousButton).toBeFocused();

    await page.keyboard.press('ArrowDown');

    const previousDropdown = previousButton.locator('ix-dropdown');
    await expect(previousDropdown).toBeVisible();
    await expect(previousDropdown).toHaveClass(/show/);

    const item1 = previousButton.getByRole('menuitem', { name: 'Item 1' });
    await expect(item1).toBeVisible();
    await expect(item1).toHaveVisibleFocus();
  });

  regressionTest('next items', async ({ mount, page }) => {
    await mount(`
  <ix-breadcrumb visible-item-count="3">
    <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>
    <ix-breadcrumb-item label="Item 6" aria-label="Item 6"></ix-breadcrumb-item>
  </ix-breadcrumb>`);

    const breadcrumb = page.locator('ix-breadcrumb');
    await breadcrumb.evaluate((bc: HTMLIxBreadcrumbElement) => {
      bc.nextItems = ['Next Item 1', 'Next Item 2'];
    });

    await page.waitForTimeout(500);

    const nextButton = breadcrumb.locator('ix-dropdown-button', {
      hasText: /Item 6/,
    });

    await nextButton.focus();
    await expect(nextButton).toBeFocused();

    await page.keyboard.press('ArrowDown');

    const nextDropdown = nextButton.locator('ix-dropdown');
    await expect(nextDropdown).toBeVisible();
    await expect(nextDropdown).toHaveClass(/show/);

    const item1 = nextButton.getByRole('menuitem', { name: 'Next Item 1' });
    await expect(item1).toBeVisible();
    await expect(item1).toHaveVisibleFocus();

    await page.keyboard.press('ArrowDown');

    const item2 = nextButton.getByRole('menuitem', { name: 'Next Item 2' });
    await expect(item2).toBeVisible();
    await expect(item2).toHaveVisibleFocus();
  });
});
