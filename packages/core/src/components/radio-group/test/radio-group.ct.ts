/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(
    `
      <ix-radio-group>
        <ix-radio label="Option 1" value="option1"></ix-radio>
        <ix-radio label="Option 2" value="option2"></ix-radio>
        <ix-radio label="Option 3" value="option3"></ix-radio>
      </ix-radio-group>
    `
  );
  const radioGroupElement = page.locator('ix-radio-group');
  const radioOption1 = page.locator('ix-radio').nth(0);
  const radioOption2 = page.locator('ix-radio').nth(1);
  const radioOption3 = page.locator('ix-radio').nth(2);
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioOption1).toHaveClass(/hydrated/);
  await expect(radioOption2).toHaveClass(/hydrated/);
  await expect(radioOption3).toHaveClass(/hydrated/);
});

test('initial checked', async ({ mount, page }) => {
  await mount(
    `
      <ix-radio-group>
        <ix-radio label="Option 1" value="option1"></ix-radio>
        <ix-radio label="Option 2" value="option2" checked></ix-radio>
        <ix-radio label="Option 3" value="option3"></ix-radio>
      </ix-radio-group>
    `
  );
  const radioGroupElement = page.locator('ix-radio-group');
  const radioOption1 = page.locator('ix-radio').nth(0);
  const radioOption2 = page.locator('ix-radio').nth(1);
  const radioOption3 = page.locator('ix-radio').nth(2);
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioOption1).toHaveClass(/hydrated/);
  await expect(radioOption2).toHaveClass(/hydrated/);
  await expect(radioOption3).toHaveClass(/hydrated/);

  await expect(radioOption2.locator('.checkmark')).toBeAttached();
});

test('change checked', async ({ mount, page }) => {
  await mount(
    `
      <ix-radio-group>
        <ix-radio label="Option 1" value="option1"></ix-radio>
        <ix-radio label="Option 2" value="option2" checked></ix-radio>
        <ix-radio label="Option 3" value="option3"></ix-radio>
      </ix-radio-group>
    `
  );
  const radioGroupElement = page.locator('ix-radio-group');
  const radioOption1 = page.locator('ix-radio').nth(0);
  const radioOption2 = page.locator('ix-radio').nth(1);
  const radioOption3 = page.locator('ix-radio').nth(2);
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioOption1).toHaveClass(/hydrated/);
  await expect(radioOption2).toHaveClass(/hydrated/);
  await expect(radioOption2.locator('.checkmark')).toBeAttached();
  await expect(radioOption3).toHaveClass(/hydrated/);

  await radioOption3.click();

  await expect(radioOption2).not.toHaveAttribute('checked');
  await expect(radioOption2.locator('.checkmark')).not.toBeAttached();
  await expect(radioOption3.locator('.checkmark')).toBeAttached();
  await expect(radioOption3).toHaveAttribute('checked');
});

test('emit group changed change', async ({ mount, page }) => {
  await mount(
    `
      <ix-radio-group>
        <ix-radio label="Option 1" value="option1"></ix-radio>
        <ix-radio label="Option 2" value="option2" checked></ix-radio>
        <ix-radio label="Option 3" value="option3"></ix-radio>
      </ix-radio-group>
    `
  );
  const radioGroupElement = page.locator('ix-radio-group');
  const radioOption3 = page.locator('ix-radio').nth(2);

  const onValueChange = radioGroupElement.evaluate<string>(
    (el) =>
      new Promise((resolve) => {
        el.addEventListener('valueChange', (event) => {
          const customEvent = event as CustomEvent<string>;
          resolve(customEvent.detail);
        });
      })
  );

  await radioOption3.click();

  expect(await onValueChange).toEqual('option3');
});

test('disabled', async ({ mount, page }) => {
  await mount(
    `
      <ix-radio-group>
        <ix-radio label="Option 1" value="option1"></ix-radio>
        <ix-radio label="Option 2" value="option2" checked></ix-radio>
        <ix-radio label="Option 3" value="option3" disabled></ix-radio>
      </ix-radio-group>
    `
  );
  const radioOption3 = page.locator('ix-radio').nth(2);
  await expect(radioOption3).not.toBeEnabled();
  await expect(radioOption3.locator('.checkmark')).not.toBeAttached();
});
