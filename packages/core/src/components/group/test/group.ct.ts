/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-group></ix-group>`);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);
});

regressionTest('hide expand icon initial', async ({ mount, page }) => {
  await mount(`
    <ix-group>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);

  const expandIcon = group.getByTestId('expand-collapsed-icon');
  await expect(expandIcon).not.toBeVisible();

  await group.evaluate((group) => {
    const item = document.createElement('ix-group-item');
    group.appendChild(item);
  });

  await expect(expandIcon).toBeVisible();
});

regressionTest('show expand icon initial', async ({ mount, page }) => {
  await mount(`
    <ix-group>
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);

  const expandIcon = group.getByTestId('expand-collapsed-icon');
  await expect(expandIcon).toBeVisible();

  await group.evaluate((group) => {
    const item = group.querySelector('ix-group-item');
    if (item) {
      item.remove();
    }
  });

  await expect(expandIcon).not.toBeVisible();
});

regressionTest(
  'suppress selection should not stop event propagation',
  async ({ mount, page }) => {
    await mount(`
    <ix-group>
      <ix-group-item suppress-selection>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const expandIcon = group.getByTestId('expand-collapsed-icon');
    await expandIcon.click();

    const groupItem = page.locator('ix-group-item').first();
    await expect(group).toHaveClass(/hydrated/);

    await groupItem.evaluate((item) => {
      item.addEventListener('click', () => (item.innerHTML += 'Clicked'));
    });

    await groupItem.click();
    await expect(groupItem).toHaveText(/Item 1Clicked/);
  }
);

regressionTest(
  'item prevent default selection item event',
  async ({ mount, page }) => {
    await mount(`
    <ix-group>
      <ix-group-item>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const expandIcon = group.getByTestId('expand-collapsed-icon');
    await expandIcon.click();

    const groupItem = page.locator('ix-group-item').first();
    await expect(group).toHaveClass(/hydrated/);

    await group.evaluate((item) => {
      item.addEventListener('selectItem', (e) => e.preventDefault());
    });

    await groupItem.click();
    await expect(groupItem).not.toHaveClass(/hydrated selected/);
  }
);

regressionTest(
  'group header prevent default collapse/expand',
  async ({ mount, page }) => {
    await mount(`
    <ix-group>
      <ix-group-item>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const expandIcon = group.getByTestId('expand-collapsed-icon');

    await group.evaluate((item) => {
      item.addEventListener('expandedChanged', (e) => e.preventDefault());
    });

    await expandIcon.click();

    await expect(group).not.toHaveAttribute('expanded');
  }
);

regressionTest(
  'group header prevent default selection event',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test" sub-header="Test2">
      <ix-group-item>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const groupHeader = group.locator('.group-header');

    await group.evaluate((item) => {
      item.addEventListener('selectGroup', (e) => e.preventDefault());
    });

    await groupHeader.click();

    await expect(group).not.toHaveAttribute('selected');
  }
);

regressionTest(
  'disabled prop reflects to host attribute',
  async ({ mount, page }) => {
    await mount(`
    <ix-group>
      <ix-group-item disabled>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const expandIcon = group.getByTestId('expand-collapsed-icon');
    await expandIcon.click();
    const groupItem = page.locator('ix-group-item').first();
    await expect(groupItem).toHaveAttribute('disabled', '');
    await groupItem.evaluate((item) => {
      (item as HTMLElement & { disabled: boolean }).disabled = false;
    });
    await expect(groupItem).not.toHaveAttribute('disabled');
    await groupItem.click();
    await expect(groupItem).toHaveClass(/selected/);
  }
);

regressionTest(
  'chevron icon is hidden from accessibility tree',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const expandIcon = group.getByTestId('expand-collapsed-icon');
    await expect(expandIcon).toHaveAttribute('aria-hidden', 'true');
  }
);

regressionTest(
  'header has role=button and aria-expanded when group has children',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const header = group.locator('.group-header');
    await expect(header).toHaveAttribute('role', 'button');
    await expect(header).toHaveAttribute('aria-expanded', 'false');
  }
);

regressionTest(
  'aria-expanded updates when group is expanded',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const header = group.locator('.group-header');
    await expect(header).toHaveAttribute('aria-expanded', 'false');
    await group.getByTestId('expand-collapsed-icon').click();
    await expect(header).toHaveAttribute('aria-expanded', 'true');
  }
);

regressionTest(
  'header has no role or aria-expanded when group has no children',
  async ({ mount, page }) => {
    await mount(`<ix-group header="Test"></ix-group>`);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const header = group.locator('.group-header');
    await expect(header).not.toHaveAttribute('role');
    await expect(header).not.toHaveAttribute('aria-expanded');
  }
);

regressionTest('can expand group using Enter key', async ({ mount, page }) => {
  await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);
  const header = group.locator('.group-header');
  await header.focus();
  await expect(group).not.toHaveAttribute('expanded');
  await page.keyboard.press('Enter');
  await expect(group).toHaveAttribute('expanded', '');
});

regressionTest('can expand group using Space key', async ({ mount, page }) => {
  await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);
  const header = group.locator('.group-header');
  await header.focus();
  await page.keyboard.press('Space');
  await expect(group).toHaveAttribute('expanded', '');
});

regressionTest(
  'can collapse expanded group using Escape key',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test" expanded>
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const header = group.locator('.group-header');
    await header.focus();
    await expect(group).toHaveAttribute('expanded', '');
    await page.keyboard.press('Escape');
    await expect(group).not.toHaveAttribute('expanded');
  }
);

regressionTest(
  'focus stays on header after keyboard expand/collapse',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const header = group.locator('.group-header');
    await header.focus();
    await page.keyboard.press('Enter');
    await expect(header).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(header).toBeFocused();
  }
);

regressionTest(
  'Escape key does not collapse group when already closed',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test">
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    await expect(group).toHaveClass(/hydrated/);
    const header = group.locator('.group-header');
    await header.focus();
    await page.keyboard.press('Escape');
    await expect(group).not.toHaveAttribute('expanded');
  }
);
