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

regressionTest.describe('tabs', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('tabs/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('rounded', async ({ page }) => {
    await page.goto('tabs/rounded');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('stretched', async ({ page }) => {
    await page.goto('tabs/stretched');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('tabs/overflow');

    const selectItem = await page.waitForSelector("[data-tab-id='5']");
    await selectItem.click();

    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest(
  'should show focus-visible outline on tab item',
  async ({ mount, page }) => {
    const container = await mount(
      `<div style="padding: 0.5rem; width: fit-content">
      <ix-tabs><ix-tab-item selected>Tab 1</ix-tab-item><ix-tab-item>Tab 2</ix-tab-item><ix-tab-item>Tab 3</ix-tab-item></ix-tabs>
    </div>`
    );

    await focusWithKeyboard(page, page.locator('ix-tab-item >> nth=0'));

    expect(
      await container.screenshot({ animations: 'disabled' })
    ).toMatchSnapshot();
  }
);

regressionTest(
  'should show focus-visible outline on overflowing tabs',
  async ({ mount, page }) => {
    const container = await mount(
      `<div style="padding: 0.5rem; width: fit-content">
      <ix-tabs style="width: 15rem"><ix-tab-item selected>Tab 1</ix-tab-item><ix-tab-item>Tab 2</ix-tab-item><ix-tab-item>Tab 3</ix-tab-item><ix-tab-item>Tab 4</ix-tab-item><ix-tab-item>Tab 5</ix-tab-item><ix-tab-item>Tab 6</ix-tab-item><ix-tab-item>Tab 7</ix-tab-item><ix-tab-item>Tab 8</ix-tab-item></ix-tabs>
    </div>`
    );

    // Overflow is measured asynchronously after load; wait until it is applied
    await page.locator('ix-tabs .tabs-context-menu').waitFor();

    await focusWithKeyboard(page, page.locator('ix-tabs .tabs'));

    expect(
      await container.screenshot({ animations: 'disabled' })
    ).toMatchSnapshot();
  }
);
