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

regressionTest.describe('checkbox', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('checkbox/basic', {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('indeterminate', async ({ page }) => {
    await page.goto('checkbox/indeterminate', {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('checkbox/long-text', {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot()).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-checkbox label="Checkbox"></ix-checkbox>
    </div>`
  );

  await focusWithKeyboard(page, page.locator('ix-checkbox'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});

regressionTest(
  'should show focus-visible outline on native checkbox',
  async ({ page }) => {
    await page.goto('checkbox/basic');
    await page.addStyleTag({ content: 'body { padding: 1rem !important; }' });

    await focusWithKeyboard(
      page,
      page.locator('input.ix-form-control[type="checkbox"]').first()
    );

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  }
);
