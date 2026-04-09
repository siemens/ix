/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@utils/test';

test.describe('Playwright screen reader', () => {
  test('announces the focused button', async ({
    page,
    mount,
    browserName,
    screenReader,
  }) => {
    await mount('<button>My super button</button>');
    const button = page.locator('button');

    await expect(button).toBeVisible();
    await screenReader.navigateToWebContent(page, browserName);
    await screenReader.press('Tab');
    await expect(button).toBeFocused();
    await expect
      .poll(async () => page.evaluate(() => document.hasFocus()))
      .toBe(true);

    await expect
      .poll(async () => screenReader.lastSpokenPhrase())
      .toContain('My super button');
  });
});
