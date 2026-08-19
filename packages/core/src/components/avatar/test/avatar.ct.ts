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
  regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
    await mount(
      `
      <ix-application-header name="Test">
        <ix-avatar username="John" extra="Doe">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-avatar>
      </ix-application-header>
    `
    );

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  regressionTest('renders', async ({ page, mount }) => {
    await mount(
      `
      <ix-application-header name="Test">
        <ix-avatar></ix-avatar>
      </ix-application-header>
    `
    );

    const avatar = page.locator('ix-avatar');

    await expect(avatar).toHaveClass(/\bhydrated\b/);
    await expect(avatar).toBeVisible();
  });

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

    const dropdown = avatar.locator('ix-dropdown');
    await expect(dropdown).toHaveClass(/show/);
    await expect(
      dropdown.getByRole('menuitem', { name: 'Item 1' })
    ).toBeVisible();
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

    await expect(username).toHaveText(/foo/);
    await expect(extra).toHaveText(/bar/);

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

  regressionTest(
    'should apply no-truncate class when wrapUsername is true',
    async ({ page, mount }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(
        `
      <ix-application-header name="Test">
        <ix-avatar username="foo" wrap-username>
        </ix-avatar>
      </ix-application-header>
    `
      );

      const avatar = page.locator('ix-avatar');
      await avatar.click();

      await expect(avatar.locator('.user-info')).toHaveClass(
        /\buser-info--no-truncate\b/
      );
    }
  );

  regressionTest(
    'should not apply no-truncate class when wrapUsername is false',
    async ({ page, mount }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(
        `
      <ix-application-header name="Test">
        <ix-avatar username="foo">
        </ix-avatar>
      </ix-application-header>
    `
      );

      const avatar = page.locator('ix-avatar');
      await avatar.click();

      await expect(avatar.locator('.user-info')).not.toHaveClass(
        /\buser-info--no-truncate\b/
      );
    }
  );

  regressionTest(
    'should keep the popup width fixed and wrap long usernames when wrapUsername is true',
    async ({ page, mount }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(
        `
      <ix-application-header name="Test">
        <ix-avatar username="foo" wrap-username>
        </ix-avatar>
      </ix-application-header>
    `
      );

      const avatar = page.locator('ix-avatar');
      await avatar.click();

      const userInfo = avatar.locator('.user-info');

      const initialMetrics = await userInfo.evaluate((element) => {
        const rect = element.getBoundingClientRect();
        return {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      });

      const longUsername = 'verylongstringthatisnotfullydisplayed';
      await avatar.evaluate((element, value) => {
        element.setAttribute('username', value);
      }, longUsername);

      await expect(userInfo).toHaveText(new RegExp(longUsername));

      const updatedMetrics = await userInfo.evaluate((element) => {
        const rect = element.getBoundingClientRect();
        return {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      });

      expect(updatedMetrics.width).toBe(initialMetrics.width);
      expect(updatedMetrics.height).toBeGreaterThan(initialMetrics.height);
    }
  );

  regressionTest('should show no tooltip', async ({ page, mount }) => {
    await mount(`<ix-avatar aria-label-tooltip="myTooltip"></ix-avatar>`);

    const avatar = page.locator('ix-avatar');
    await avatar.hover();

    const tooltip = avatar.getByLabel('myTooltip');
    await expect(tooltip).not.toBeAttached();
  });

  regressionTest(
    'should show tooltip text with username or tooltip-text',
    async ({ page, mount }) => {
      await mount(
        `<ix-avatar aria-label-tooltip="myTooltip" username="foo"></ix-avatar>`
      );

      const avatar = page.locator('ix-avatar');
      await avatar.hover();

      const tooltip = avatar.getByLabel('myTooltip');
      await expect(tooltip).toHaveClass(/hydrated/);
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText(/foo/);

      await avatar.evaluate((avatar) =>
        avatar.setAttribute('tooltip-text', 'other text')
      );

      await expect(tooltip).toHaveClass(/hydrated/);
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText(/other text/);
    }
  );

  regressionTest(
    'tooltip should only appear when hovering the button, not hovering entire host element',
    async ({ page, mount }) => {
      await mount(
        `
      <ix-application-header name="Test">
        <ix-avatar username="foo" aria-label-tooltip="avatarTooltip">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-avatar>
      </ix-application-header>
    `
      );

      const avatar = page.locator('ix-avatar');
      const button = avatar.locator('button').first();
      const tooltip = avatar.getByLabel('avatarTooltip');
      const dropdownItem = page.getByRole('menuitem', { name: 'Item 1' });

      await button.hover();
      await expect(tooltip).toHaveClass(/visible/);

      await page.mouse.move(0, 0);
      await button.click();
      await expect(avatar.locator('ix-dropdown')).toHaveClass(/show/);

      await dropdownItem.hover();
      await expect(tooltip).not.toHaveClass(/visible/);

      await button.hover();
      await expect(tooltip).toHaveClass(/visible/);
    }
  );
});
