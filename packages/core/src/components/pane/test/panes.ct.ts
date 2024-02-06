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
  await mount(`<ix-pane-layout></ix-pane-layout`);
  const panes = page.locator('ix-pane-layout');
  await expect(panes).toHaveClass(/hydrated/);
});

test.describe('pane tests', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `
      <>
        <ix-pane
          heading="LEFT"
          composition="left"
          icon="star"
          expanded="true"
          hide-on-collapse
        >
          <h1>Test Heading</h1>
        </ix-pane>
        <p>Some Text<p>
      </>
      `
    );
  });

  test('expanded pane', async ({ page }) => {
    await page.waitForSelector('h1');
    const title = page.locator('h1');
    await expect(title).toBeVisible();
  });

  test('closes on outside click', async ({ page }) => {
    await page.waitForSelector('h1');
    page.getByText('Some Text').click();
    const title = page.locator('h1');
    await expect(title).not.toBeVisible();
  });
});
