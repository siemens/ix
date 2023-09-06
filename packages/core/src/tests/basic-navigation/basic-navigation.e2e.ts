/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, test } from '@utils/test';
const smallWidth = 700;
const mediumWidth = 780;
const largeWidth = 1026;

regressionTest.describe('basic navigation large', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.setViewportSize({
      height: 1200,
      width: largeWidth,
    });
    await page.waitForTimeout(500);

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('content width', async ({ page }) => {
    await page.goto('basic-navigation/content-width');
    await page.setViewportSize({
      height: 1200,
      width: largeWidth,
    });
    await page.waitForTimeout(500);

    await expect(page.getByText('Example content')).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});

regressionTest.describe('basic navigation', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.setViewportSize({
      height: 1200,
      width: 780,
    });
    await page.waitForTimeout(500);

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('content width', async ({ page }) => {
    await page.goto('basic-navigation/content-width');
    await page.setViewportSize({
      height: 1200,
      width: mediumWidth,
    });
    await page.waitForTimeout(500);
    await expect(page.getByText('Example content')).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('expanded', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.setViewportSize({
      height: 1200,
      width: mediumWidth,
    });
    await page.waitForTimeout(500);

    await page.locator('ix-menu ix-burger-menu').click();
    await page.waitForSelector('ix-menu ix-burger-menu.expanded');

    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});

regressionTest.describe('basic navigation mobile', () => {
  regressionTest('mobile', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: smallWidth,
    });

    await page.waitForTimeout(500);

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('mobile expanded', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: smallWidth,
    });

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-burger-menu'
    );
    await menuElement.click();

    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('mobile overlay', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: smallWidth,
    });

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-burger-menu'
    );
    await menuElement.click();
    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    const settingsButton = await page.waitForSelector('#settings');
    await settingsButton.click();

    const settings = page.locator('ix-menu-settings');
    const settingsTitle = settings.locator('h2');

    await expect(settings).toBeVisible();
    await expect(settingsTitle).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  test('mobile expanded overlay', async ({ page, mount }) => {
    // await page.goto('basic-navigation/mobile');
    await mount(
      `
      <ix-basic-navigation application-name="Test">
        <div slot="logo">LOGO</div>
        <ix-menu>
          <ix-menu-item>Test 1</ix-menu-item>
          <ix-menu-item>Test 1</ix-menu-item>
          <ix-menu-item>Test 1</ix-menu-item>
          <ix-menu-settings>
            <ix-menu-settings-item>Item 1</ix-menu-settings-item>
            <ix-menu-settings-item>Item 1</ix-menu-settings-item>
            <ix-menu-settings-item>Item 1</ix-menu-settings-item>
          </ix-menu-settings>
        </ix-menu>
        <div class="debug-element"></div>
      </ix-basic-navigation>
      `
    );

    await page.setViewportSize({
      height: 1200,
      width: smallWidth,
    });

    // Animation
    await page.waitForTimeout(500);

    const toggleMenuButton = page.locator('ix-burger-menu').nth(0);
    await expect(toggleMenuButton).toBeVisible();
    await toggleMenuButton.click();

    const menu = page.locator('ix-menu');
    await expect(menu).toHaveClass(/expanded/);

    // Animation
    await page.waitForTimeout(500);

    const settings = page.locator('#settings');
    await settings.click({
      force: true,
    });
    // Animation
    await page.waitForTimeout(500);
    await expect(menu).not.toHaveClass(/expanded/);

    const settingsOverlay = page.locator('ix-menu-settings');
    await expect(settingsOverlay).toBeVisible();

    await toggleMenuButton.click();
    await expect(menu).toHaveClass(/expanded/);

    // Animation
    await page.waitForTimeout(500);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});
