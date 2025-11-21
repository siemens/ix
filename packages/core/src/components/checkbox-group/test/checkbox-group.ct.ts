/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `
      <ix-checkbox-group>
        <ix-checkbox label="Option 1" value="option1"></ix-checkbox>
        <ix-checkbox label="Option 2" value="option2"></ix-checkbox>
        <ix-checkbox label="Option 3" value="option3"></ix-checkbox>
      </ix-checkbox-group>
    `
  );
  const radioGroupElement = page.locator('ix-checkbox-group');
  const radioOption1 = page.locator('ix-checkbox').nth(0);
  const radioOption2 = page.locator('ix-checkbox').nth(1);
  const radioOption3 = page.locator('ix-checkbox').nth(2);
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioOption1).toHaveClass(/hydrated/);
  await expect(radioOption2).toHaveClass(/hydrated/);
  await expect(radioOption3).toHaveClass(/hydrated/);
});

regressionTest('required', async ({ mount, page }) => {
  await mount(
    `
      <ix-checkbox-group label="example">
        <ix-checkbox label="Option 1" value="option1"></ix-checkbox>
        <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
        <ix-checkbox label="Option 3" value="option3"></ix-checkbox>
      </ix-checkbox-group>
    `
  );
  const radioGroupElement = page.locator('ix-checkbox-group');
  await expect(radioGroupElement).toHaveClass(/hydrated/);
  await expect(radioGroupElement).toHaveText(/example\*/);

  const radioOption2 = page.locator('ix-checkbox').nth(1);
  const radioOption3 = page.locator('ix-checkbox').nth(2);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  await expect(radioGroupElement).toHaveClass(/ix-invalid--required/);
  await expect(radioOption2).toHaveClass(/ix-invalid--required/);
  await expect(radioOption3).not.toHaveClass(/ix-invalid/);
});

regressionTest(
  'validation works when noValidate is not set (default)',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-checkbox-group label="Required Options">
          <ix-checkbox label="Option 1" value="option1" required></ix-checkbox>
          <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
          <ix-checkbox label="Option 3" value="option3" required></ix-checkbox>
        </ix-checkbox-group>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkboxGroup = page.locator('ix-checkbox-group');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    const checkbox3 = page.locator('ix-checkbox').nth(2);
    const submitButton = page.locator('button[type="submit"]');

    await form.evaluate((form: HTMLFormElement) => {
      form.addEventListener('submit', (e) => e.preventDefault());
    });

    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await submitButton.click();
    await expect(checkboxGroup).toHaveClass(/ix-invalid--required/);
    await expect(checkbox1).toHaveClass(/ix-invalid--required/);
    await expect(checkbox2).toHaveClass(/ix-invalid--required/);
    await expect(checkbox3).toHaveClass(/ix-invalid--required/);
    await checkbox1.click();
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid/);
    await expect(checkbox3).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'noValidate=true disables validation',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-checkbox-group label="Required Options">
          <ix-checkbox label="Option 1" value="option1" required></ix-checkbox>
          <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
          <ix-checkbox label="Option 3" value="option3" required></ix-checkbox>
        </ix-checkbox-group>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkboxGroup = page.locator('ix-checkbox-group');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    const checkbox3 = page.locator('ix-checkbox').nth(2);
    const submitButton = page.locator('button[type="submit"]');
    await form.evaluate((form: HTMLFormElement) => {
      form.addEventListener('submit', (e) => e.preventDefault());
    });

    await submitButton.click();
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid--required/);
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox3).not.toHaveClass(/ix-invalid--required/);
    await checkbox1.click();
    await checkbox1.press('Tab');

    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'validation behavior with blur when noValidate is not set',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-checkbox-group label="Required Options">
          <ix-checkbox label="Option 1" value="option1" required></ix-checkbox>
          <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
        </ix-checkbox-group>
      </form>
    `
    );

    const checkboxGroup = page.locator('ix-checkbox-group');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    await checkbox1.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(checkboxGroup).toHaveClass(/ix-invalid--required/);
    await expect(checkbox1).toHaveClass(/ix-invalid--required/);
    await expect(checkbox2).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'no validation on blur when noValidate=true',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-checkbox-group label="Required Options">
          <ix-checkbox label="Option 1" value="option1" required></ix-checkbox>
          <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
        </ix-checkbox-group>
      </form>
    `
    );

    const checkboxGroup = page.locator('ix-checkbox-group');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);

    await checkbox1.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid--required/);
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid/);
  }
);
