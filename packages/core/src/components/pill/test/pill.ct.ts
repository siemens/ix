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

  test('title with text content should be applied when tooltip-text is not set', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill>Text content</ix-pill>');
    const pill = page.locator('ix-pill');

    await expect(pill).toHaveAttribute('title', 'Text content');
  });

  test('title with text content should be applied when tooltip-text is empty', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill tooltip-text="">Text content</ix-pill>');
    const pill = page.locator('ix-pill');

    await expect(pill).toHaveAttribute('title', 'Text content');
  });

  test('title with custom text should be applied when tooltip-text is set', async ({
    mount,
    page,
  }) => {
    await mount(
      '<ix-pill tooltip-text="Custom tooltip">Text content</ix-pill>'
    );
    const pill = page.locator('ix-pill');

    await expect(pill).toHaveAttribute('title', 'Custom tooltip');
  });

  test('no title should be applied when tooltip-text is none', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill tooltip-text="none">Text content</ix-pill>');
    const pill = page.locator('ix-pill');

    await expect(pill).not.toHaveAttribute('title');
  });
});
