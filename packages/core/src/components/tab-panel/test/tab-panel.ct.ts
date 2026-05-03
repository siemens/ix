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

regressionTest('should render with role tabpanel', async ({ mount, page }) => {
  await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">Panel Content</ix-tab-panel>
      </ix-tab-panels>
    `);

  const panel = page.locator('ix-tab-panel');
  await expect(panel).toHaveClass(/\bhydrated\b/);
  await expect(panel).toHaveAttribute('role', 'tabpanel');
});

regressionTest('should render slot content', async ({ mount, page }) => {
  await mount(`
      <ix-tab-panels>
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        </ix-tabs>
        <ix-tab-panel tab-key="tab-1">
          <div id="panel-content">Hello from panel</div>
        </ix-tab-panel>
      </ix-tab-panels>
    `);

  await expect(page.locator('#panel-content')).toBeVisible();
  await expect(page.locator('#panel-content')).toHaveText('Hello from panel');
});

regressionTest(
  'should be hidden when not the active tab',
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
  }
);

regressionTest(
  'should become visible after switching to its tab',
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

    await page.locator('ix-tab-item').nth(1).click();

    const panels = page.locator('ix-tab-panel');
    await expect(panels.nth(0)).toHaveAttribute('hidden', '');
    await expect(panels.nth(1)).not.toHaveAttribute('hidden', '');
  }
);
