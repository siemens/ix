/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test, viewPorts } from '@utils/test';

test.describe('embedded into header', () => {
  test('show avatar as clickable', async ({ page, mount }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(
      `
      <ix-application-header name="Test">
        <ix-avatar></ix-avatar>
      </ix-application-header>
    `
    );

    const avatar = page.locator('ix-avatar');

    await expect(avatar.locator('button')).toBeVisible();
  });

  test('show avatar dropdown', async ({ page, mount }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(
      `
      <ix-application-header name="Test">
        <ix-avatar>
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
          <ix-dropdown-item label="Item 3"></ix-dropdown-item>
        </ix-avatar>
      </ix-application-header>
    `
    );

    const avatar = page.locator('ix-avatar');
    await avatar.click();
    await expect(avatar.locator('ix-dropdown')).toHaveClass(/show/);
    await expect(avatar.getByText('Item 1')).toBeVisible();
  });
});
