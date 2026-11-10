/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconRocket } from '@siemens/ix-icons/icons';
import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('icon-button', () => {
  regressionTest('variant secondary', async ({ page }) => {
    await page.goto('icon-button/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('variant danger', async ({ page }) => {
    await page.goto('icon-button/danger');
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('variant primary', async ({ page }) => {
    await page.goto('icon-button/primary');
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('loading variant secondary', async ({ page }) => {
    await page.goto('icon-button/loading');
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('loading variant danger', async ({ page }) => {
    await page.goto('icon-button/loading-danger');
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });

  regressionTest('loading variant primary', async ({ page }) => {
    await page.goto('icon-button/loading-primary');
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-icon-button icon="rocket" aria-label="Rocket"></ix-icon-button>
    </div>`,
    { icons: { iconRocket } }
  );

  await focusWithKeyboard(page, page.locator('ix-icon-button'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});
