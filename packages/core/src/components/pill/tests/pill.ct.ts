/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test } from '@utils/test';
import { expect } from '@playwright/test';

test.describe('Pill', () => {
  test('dynamic gap behavior', async ({ mount, page }) => {
    await mount('<ix-pill icon="star">Dynamic gap</ix-pill>');
    const pill = page.locator('ix-pill');
    const innerContainer = pill.locator('.container');

    await expect(innerContainer).toHaveClass(/with-gap/);

    await pill.evaluate((el: HTMLIxPillElement) => {
      el.innerText = '';
    });

    await expect(innerContainer).not.toHaveClass(/with-gap/);
  });
});
