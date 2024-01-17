/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';


test('renders', async ({ mount, page }) => {
  await mount(`<ix-panes></ix-panes`);
  const panes = page.locator('ix-panes');
  await expect(panes).toHaveClass(/hydrated/);
});


test.describe('pane tests', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-pane
        paneTitle="LEFT"
        position="left"
        icon="star"
        expand="false"
      >
        <h1>Test Heading</h1>
        <p>This is a test content with a button</p>
        <ix-button>PUSH ME</ix-button>
      </ix-pane>`
    );
  });

  test('expand pane', async ({ page }) => {
    await page.waitForSelector('ix-pane');
    const button = page.locator('ix-icon-button');
    await button.click();

    await page.waitForSelector('h1');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});
