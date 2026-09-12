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
import { GroupPage } from './group.page';

const groupWithItems = `
  <ix-group header="Header text" sub-header="Subheader text">
    <ix-group-item text="Item 1"></ix-group-item>
    <ix-group-item text="Item 2"></ix-group-item>
  </ix-group>
`;

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(groupWithItems);
  const group = new GroupPage(page);
  await group.expectHydrated();

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

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
  'marks the context menu trigger active while the dropdown is open',
  async ({ mount, page }) => {
    await mount(`
      <ix-group header="Header text">
        <ix-dropdown slot="dropdown">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
        <ix-group-item>Item 1</ix-group-item>
      </ix-group>
    `);

    const group = page.locator('ix-group');
    const trigger = group.locator('ix-group-context-menu ix-icon-button');
    const dropdown = group.locator('ix-dropdown');

    await expect(group).toHaveClass(/hydrated/);
    await expect(trigger).not.toHaveClass(/\bactive\b/);

    await trigger.click();
    await expect(dropdown).toHaveClass(/show/);
    await expect(trigger).toHaveClass(/\bactive\b/);
    await expect(trigger.locator('button')).toHaveAttribute(
      'aria-expanded',
      'true'
    );

    await page.keyboard.press('Escape');
    await expect(dropdown).not.toHaveClass(/show/);
    await expect(trigger).not.toHaveClass(/\bactive\b/);
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
  'selected group item exposes aria-pressed',
  async ({ mount, page }) => {
    await mount(groupWithItems);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.clickExpand();
    const itemButton = group.itemButton('Item 1');
    await expect(itemButton).toHaveAttribute('aria-pressed', 'false');

    await itemButton.click();
    await expect(itemButton).toHaveAttribute('aria-pressed', 'true');
  }
);

regressionTest(
  'expand button exposes disclosure ARIA',
  async ({ mount, page }) => {
    await mount(groupWithItems);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.expectExpandAria({
      expanded: false,
      accessibleName: 'Header text',
    });
    await group.expectExpandControlsContent();
    await group.expectExpandIconDecorative();

    await group.clickExpand();
    await group.expectExpandAria({
      expanded: true,
      accessibleName: 'Header text',
    });
  }
);

regressionTest(
  'Space and Enter toggle expand on expand button',
  async ({ mount, page }) => {
    await mount(groupWithItems);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.focusExpand();
    await group.pressSpace();
    await group.expectExpanded();
    await expect(group.expandButton).toHaveAttribute('aria-expanded', 'true');

    await group.pressEnter();
    await group.expectExpanded(false);
    await expect(group.expandButton).toHaveAttribute('aria-expanded', 'false');
  }
);

regressionTest(
  'Escape collapses expanded group and focuses expand button',
  async ({ mount, page }) => {
    await mount(groupWithItems);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.clickExpand();
    await group.expectExpanded();

    await group.focusItem('Item 1');
    await group.pressEscape();

    await group.expectExpanded(false);
    await expect(group.expandButton).toBeFocused();
  }
);

regressionTest(
  'Space and Enter select group header',
  async ({ mount, page }) => {
    await mount(groupWithItems);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.expectSelectPressed(false);

    await group.focusSelect();
    await group.pressSpace();
    await group.expectSelected();
    await group.expectSelectPressed(true);

    await group.pressEnter();
    await group.expectSelected(false);
    await group.expectSelectPressed(false);
  }
);

regressionTest(
  'suppressHeaderSelection hides select button and keeps expand',
  async ({ mount, page }) => {
    await mount(`
      <ix-group
        header="Header text"
        sub-header="Subheader text"
        suppress-header-selection
      >
        <ix-group-item text="Item 1"></ix-group-item>
        <ix-group-item text="Item 2"></ix-group-item>
      </ix-group>
    `);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.expectNoSelectButton();

    await group.focusExpand();
    await group.pressSpace();
    await group.expectExpanded();
    await expect(group.expandButton).toHaveAttribute('aria-expanded', 'true');
  }
);

regressionTest(
  'Escape does not collapse group while context menu is open',
  async ({ mount, page }) => {
    await mount(`
      <ix-group header="Header text" expanded>
        <ix-dropdown slot="dropdown">
          <ix-dropdown-item label="Edit"></ix-dropdown-item>
        </ix-dropdown>
        <ix-group-item text="Item 1"></ix-group-item>
      </ix-group>
    `);
    const group = new GroupPage(page);
    await group.expectHydrated();
    await group.expectExpanded();

    await group.openContextMenu();
    await group.expectDropdownOpen();

    await group.pressEscape();
    await group.expectDropdownOpen(false);
    await group.expectExpanded();
  }
);

regressionTest(
  'Tab order is header select then expand',
  async ({ mount, page }) => {
    await mount(groupWithItems);
    const group = new GroupPage(page);
    await group.expectHydrated();

    await group.focusSelect();
    await expect(group.selectButton()).toBeFocused();
    await group.pressTab();
    await expect(group.expandButton).toBeFocused();
  }
);
