/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-tab-panels>
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
      <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
      <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
      <ix-tab-panel tab-key="tab-3">Content 3</ix-tab-panel>
    </ix-tab-panels>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest('renders all components', async ({ mount, page }) => {
  await mount(`
    <ix-tab-panels>
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
      </ix-tabs>
      <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
      <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
    </ix-tab-panels>
  `);

  await expect(page.locator('ix-tab-panels')).toHaveClass(/\bhydrated\b/);
  await expect(page.locator('ix-tabs')).toHaveClass(/\bhydrated\b/);
  await expect(page.locator('ix-tab-panel').nth(0)).toHaveClass(/\bhydrated\b/);
  await expect(page.locator('ix-tab-panel').nth(1)).toHaveClass(/\bhydrated\b/);
});

regressionTest(
  'should show active panel and hide inactive panels',
  async ({ mount, page }) => {
    await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
          <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
        <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
        <ix-tab-panel tab-key="tab-3">Content 3</ix-tab-panel>
      </ix-tab-panels>
    `);

    const panels = page.locator('ix-tab-panel');

    await expect(panels.nth(0)).not.toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).toHaveAttribute('hidden', '');
    await expect(panels.nth(2)).toHaveAttribute('hidden', '');
  }
);

regressionTest(
  'should toggle panel visibility on tab click',
  async ({ mount, page }) => {
    await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
          <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
        <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
        <ix-tab-panel tab-key="tab-3">Content 3</ix-tab-panel>
      </ix-tab-panels>
    `);

    const panels = page.locator('ix-tab-panel');

    await page.locator('ix-tab-item').nth(1).click();

    await expect(panels.nth(0)).toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).not.toHaveAttribute('hidden', '');
    await expect(panels.nth(2)).toHaveAttribute('hidden', '');

    await page.locator('ix-tab-item').nth(2).click();

    await expect(panels.nth(0)).toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).toHaveAttribute('hidden', '');
    await expect(panels.nth(2)).not.toHaveAttribute('hidden', '');
  }
);

regressionTest(
  'should update panel visibility when activeTabKey changes programmatically',
  async ({ mount, page }) => {
    await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
        <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
      </ix-tab-panels>
    `);

    const panels = page.locator('ix-tab-panel');

    await expect(panels.nth(0)).not.toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).toHaveAttribute('hidden', '');

    await page.evaluate(() => {
      document.querySelector('ix-tabs')!.activeTabKey = 'tab-2';
    });

    await expect(panels.nth(0)).toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).not.toHaveAttribute('hidden', '');
  }
);

regressionTest(
  'should set aria-labelledby on tab-panel referencing tab-item id',
  async ({ mount, page }) => {
    await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
        <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
      </ix-tab-panels>
    `);

    const firstTabItem = page.locator('ix-tab-item').nth(0);
    await expect(firstTabItem).toHaveAttribute('id', /./);

    const tabItemId = await firstTabItem.getAttribute('id');

    const panel = page.locator('ix-tab-panel').nth(0);
    await expect(panel).toHaveAttribute('aria-labelledby', tabItemId!);
  }
);

regressionTest(
  'should handle initial state with second tab active',
  async ({ mount, page }) => {
    await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-2">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
          <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
        <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
        <ix-tab-panel tab-key="tab-3">Content 3</ix-tab-panel>
      </ix-tab-panels>
    `);

    const panels = page.locator('ix-tab-panel');

    await expect(panels.nth(0)).toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).not.toHaveAttribute('hidden', '');
    await expect(panels.nth(2)).toHaveAttribute('hidden', '');
  }
);

regressionTest(
  'should update when panels are added dynamically',
  async ({ mount, page }) => {
    await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
        <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
      </ix-tab-panels>
    `);

    await page.evaluate(() => {
      const panels = document.querySelector('ix-tab-panels')!;
      const tabs = panels.querySelector('ix-tabs')!;

      const newTabItem = document.createElement('ix-tab-item');
      newTabItem.setAttribute('tab-key', 'tab-3');
      newTabItem.setAttribute('label', 'Tab 3');
      tabs.appendChild(newTabItem);

      const newPanel = document.createElement('ix-tab-panel');
      newPanel.setAttribute('tab-key', 'tab-3');
      newPanel.textContent = 'Content 3';
      panels.appendChild(newPanel);
    });

    const panels = page.locator('ix-tab-panel');
    await expect(panels).toHaveCount(3);

    await expect(panels.nth(2)).toHaveAttribute('hidden', '');

    await page.locator('ix-tab-item').nth(2).click();

    await expect(panels.nth(0)).toHaveAttribute('hidden', '');
    await expect(panels.nth(2)).not.toHaveAttribute('hidden', '');
  }
);
