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

const smallWidth = 639;
const mediumWidth = 642;
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
      width: mediumWidth,
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

    await expect(page.locator('ix-menu-settings')).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('mobile expanded overlay', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: smallWidth,
    });

    await page.waitForTimeout(500);
    const header = page.locator('ix-application-header');
    const menuElement = header.locator('ix-burger-menu');

    await expect(menuElement).toBeVisible();

    await menuElement.click();
    await expect(page.locator('ix-menu')).toHaveClass(/mode-small/);
    await expect(page.locator('ix-menu')).toHaveClass(/expanded/);

    const settingsButton = await page.waitForSelector('#settings');
    await settingsButton.click();
    await expect(page.locator('ix-menu-settings')).toBeVisible();

    await menuElement.click();

    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});
