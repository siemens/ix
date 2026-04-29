/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test.describe('password input', () => {
  let input: import('@playwright/test').Locator;
  let eyeButton: import('@playwright/test').Locator;

  test.beforeEach(async ({ page }) => {
    input = page.locator('ix-input');
    eyeButton = input.locator('ix-icon-button.password-eye');
  });

  test.describe('eye icon visibility', () => {
    test('eye icon is visible for password type', async ({ mount }) => {
      await mount('<ix-input type="password" value="secret123"></ix-input>');
      await expect(eyeButton).not.toHaveClass(/eye-hidden/);
      await expect(eyeButton).toBeVisible();
    });

    const nonPasswordInputTypes = [
      { type: 'text', value: 'visible text' },
      { type: 'email', value: 'test@example.com' },
      { type: 'tel', value: '+1234567890' },
      { type: 'url', value: 'https://example.com' },
    ] as const;

    for (const { type, value } of nonPasswordInputTypes) {
      test(`eye icon is hidden for ${type} type`, async ({ mount }) => {
        await mount(`<ix-input type="${type}" value="${value}"></ix-input>`);
        await expect(eyeButton).toHaveClass(/eye-hidden/);
        await expect(eyeButton).not.toBeVisible();
      });
    }

    test('eye icon is hidden when password input is disabled', async ({
      mount,
    }) => {
      await mount(
        '<ix-input type="password" disabled value="secret"></ix-input>'
      );
      await expect(eyeButton).toHaveClass(/eye-hidden/);
      await expect(eyeButton).not.toBeVisible();
    });

    test('eye icon is visible when password input is readonly', async ({
      mount,
    }) => {
      await mount(
        '<ix-input type="password" readonly value="secret"></ix-input>'
      );
      await expect(eyeButton).not.toHaveClass(/eye-hidden/);
      await expect(eyeButton).toBeVisible();
    });
  });

  test.describe('password toggle functionality', () => {
    test('clicking eye icon toggles password visibility', async ({ mount }) => {
      await mount('<ix-input type="password" value="secret123"></ix-input>');
      const nativeInput = input.locator('input');
      await expect(nativeInput).toHaveAttribute('type', 'password');
      await eyeButton.click();
      await expect(nativeInput).toHaveAttribute('type', 'text');
      await eyeButton.click();
      await expect(nativeInput).toHaveAttribute('type', 'password');
    });
  });
});
