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
  await mount(`
    <ix-flip-tile state="none">
      <div slot="header">Flip header</div>
      <div slot="footer">
        Some footer content
      </div>
      <ix-flip-tile-content>Example 1</ix-flip-tile-content>
      <ix-flip-tile-content>Example 2</ix-flip-tile-content>
    </ix-flip-tile>
  `);
  const flipElement = page.locator('ix-flip-tile');

  const flipContentOneElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(0);
  const flipContentTwoElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(1);
  await expect(flipElement).toHaveClass(/hydrated/);
  await expect(flipContentOneElement).toBeVisible();
  await expect(flipContentTwoElement).not.toBeVisible();
});

regressionTest('should change content', async ({ mount, page }) => {
  await mount(`
    <ix-flip-tile state="none">
      <div slot="header">Flip header</div>
      <div slot="footer">
        Some footer content
      </div>
      <ix-flip-tile-content>Example 1</ix-flip-tile-content>
      <ix-flip-tile-content>Example 2</ix-flip-tile-content>
    </ix-flip-tile>
  `);
  const flipElement = page.locator('ix-flip-tile');

  const flipButton = flipElement.locator('.flip-tile-header ix-icon-button');
  await flipButton.click();

  const flipContentOneElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(0);
  const flipContentTwoElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(1);
  await expect(flipElement).toHaveClass(/hydrated/);
  await expect(flipContentOneElement).not.toBeVisible();
  await expect(flipContentTwoElement).toBeVisible();
});
