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

regressionTest.describe('icon-button', () => {
  regressionTest('variant secondary', async ({ page }) => {
    await page.goto('icon-button/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('variant danger', async ({ page }) => {
    await page.goto('icon-button/basic');
    const iconButtons = await page.$$('ix-icon-button');
    iconButtons.every(async (iconButton) => {
      iconButton.evaluate((iconButton) => (iconButton.variant = 'danger'));
    });
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('variant primary', async ({ page }) => {
    await page.goto('icon-button/basic');
    const iconButtons = await page.$$('ix-icon-button');
    iconButtons.every(async (iconButton) => {
      iconButton.evaluate((iconButton) => (iconButton.variant = 'primary'));
    });
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('loading variant secondary', async ({ page }) => {
    await page.goto('icon-button/loading');
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('loading variant danger', async ({ page }) => {
    await page.goto('icon-button/loading');
    const iconButtons = await page.$$('ix-icon-button');
    iconButtons.every(async (iconButton) => {
      iconButton.evaluate((iconButton) => (iconButton.variant = 'danger'));
    });
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('loading variant primary', async ({ page }) => {
    await page.goto('icon-button/loading');
    const iconButtons = await page.$$('ix-icon-button');
    iconButtons.every(async (iconButton) => {
      iconButton.evaluate((iconButton) => (iconButton.variant = 'primary'));
    });
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });
});
