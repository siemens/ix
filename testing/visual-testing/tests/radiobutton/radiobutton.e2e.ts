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

regressionTest.describe('radiobutton', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`radiobutton/basic`, {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('basic hover checked', async ({ page }) => {
    await page.goto(`radiobutton/basic`, {
      skipIxHydrationCheck: true,
    });

    const noCheckedCheckbox = await page.waitForSelector(
      'label[for="checkbox_1_1"]'
    );

    await noCheckedCheckbox.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('basic hover unchecked', async ({ page }) => {
    await page.goto(`radiobutton/basic`, {
      skipIxHydrationCheck: true,
    });

    const noCheckedCheckbox = await page.waitForSelector(
      'label[for="checkbox_1_2"]'
    );

    await noCheckedCheckbox.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('no checked', async ({ page }) => {
    await page.goto(`radiobutton/no-checked`, {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('long text', async ({ page }) => {
    await page.goto(`radiobutton/long-text`, {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-radio label="Radio"></ix-radio>
    </div>`
  );

  await focusWithKeyboard(page, page.locator('ix-radio'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});

regressionTest(
  'should show focus-visible outline on native radio',
  async ({ page }) => {
    await page.goto('radiobutton/basic');
    await page.addStyleTag({ content: 'body { padding: 1rem !important; }' });

    await focusWithKeyboard(
      page,
      page.locator('input.ix-form-control[type="radio"]').first()
    );

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  }
);
