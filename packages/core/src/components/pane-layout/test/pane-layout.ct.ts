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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-pane-layout></ix-pane-layout>`);
  const pane = page.locator('ix-pane-layout');
  await expect(pane).toHaveClass(/hydrated/);
});

regressionTest.describe('pane-layout with floating pane', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `
        <div style="width: 100vw; height: 100vh;">
          <ix-pane-layout variant="floating">
            <ix-pane
              heading="LEFT"
              slot="left"
              icon="star"
              expanded="true"
              size="240px"
              hide-on-collapse
            >
              <h1>Test Heading</h1>
            </ix-pane>
            <div slot="content" style="width: 100%; height: 100%; display: flex; flex-direction: row;">
              <div style="width: 200px; height: 100%;">
                <p>Text 1</p>
              </div>
              <div style="width: 200px; height: 100%; margin-left: 100px;">
                <p>Text 2</p>
              </div>
            </div>
          </ix-pane-layout>
        </div>
      `
    );
  });

  regressionTest('expanded', async ({ page }) => {
    await page.waitForSelector('h1');
    const title = page.locator('h1');
    // timeout to make sure it is currently not closing
    await page.waitForTimeout(1000);
    await expect(title).toBeVisible();
  });

  regressionTest('floating pane closes on content click', async ({ page }) => {
    await page.waitForSelector('h1');
    await page.getByText('Text 2').click();
    const textOne = page.getByText('Text 1');
    await expect(textOne).toBeVisible();
  });
});
