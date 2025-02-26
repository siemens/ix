/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest.describe('embedded into header', () => {
  regressionTest('show avatar as clickable', async ({ page, mount }) => {
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

  regressionTest('show avatar dropdown', async ({ page, mount }) => {
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

  regressionTest('show user-info', async ({ page, mount }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(
      `
      <ix-application-header name="Test">
        <ix-avatar username="foo" extra="bar">
        </ix-avatar>
      </ix-application-header>
    `
    );

    const avatar = page.locator('ix-avatar');
    await avatar.click();

    const userInfo = avatar.locator('.user-info');
    const username = userInfo.locator('.username');
    const extra = userInfo.locator('.extra');

    await expect(avatar.locator('.user-info')).toBeVisible();

    await expect(username).toHaveText('foo');
    await expect(extra).toHaveText('bar');

    await expect(avatar.locator('ix-divider')).not.toBeVisible();
  });

  regressionTest(
    'should show divider if a element is slotted',
    async ({ page, mount }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(
        `
      <ix-application-header name="Test">
        <ix-avatar username="foo" extra="bar">
          <ix-dropdown-item>test</ix-dropdown-item>
        </ix-avatar>
      </ix-application-header>
    `
      );

      const avatar = page.locator('ix-avatar');
      await avatar.click();

      await expect(avatar.locator('ix-divider')).toBeVisible();
    }
  );

  regressionTest(
    'should hide user info if no username is provided',
    async ({ page, mount }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(
        `
      <ix-application-header name="Test">
        <ix-avatar>
          <ix-dropdown-item>Test</ix-dropdown-item>
        </ix-avatar>
      </ix-application-header>
    `
      );

      const avatar = page.locator('ix-avatar');
      await avatar.click();

      const userInfo = avatar.locator('.user-info');

      await expect(userInfo).not.toBeVisible();
      await expect(avatar.locator('ix-divider')).not.toBeVisible();
    }
  );
});
