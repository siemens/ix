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

regressionTest.describe('basic navigation', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('expanded', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.locator('ix-menu ix-burger-menu').click();
    await page.waitForSelector('ix-menu ix-burger-menu.expanded');

    await page.waitForTimeout(800);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest.describe('basic navigation mobile', () => {
  regressionTest('mobile', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: 500,
    });

    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mobile expanded', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: 500,
    });

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-burger-menu'
    );
    await menuElement.click();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mobile overlay', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: 500,
    });

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-burger-menu'
    );
    await menuElement.click();
    await page.waitForTimeout(500);
    const settingsButton = await page.waitForSelector('#settings');
    await settingsButton.click();

    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mobile expanded overlay', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize({
      height: 1200,
      width: 500,
    });

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-burger-menu'
    );
    await menuElement.click();
    await page.waitForTimeout(500);
    const settingsButton = await page.waitForSelector('#settings');

    await settingsButton.click();
    await menuElement.click();

    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
