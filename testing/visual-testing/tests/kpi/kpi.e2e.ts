/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('kpi', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('kpi/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
    </div>`
  );

  await focusWithKeyboard(page, page.locator('ix-kpi'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});
