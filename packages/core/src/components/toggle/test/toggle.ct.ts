/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-toggle></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await expect(toggle).toBeVisible();
});

regressionTest('should toggle', async ({ mount, page }) => {
  await mount(`<ix-toggle></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await toggle.click();

  await expect(toggle).toHaveJSProperty('checked', true);
});

regressionTest(
  'should not toggle - default prevented',
  async ({ mount, page }) => {
    await mount(`<ix-toggle></ix-toggle>`);
    const toggle = page.locator('ix-toggle');

    await toggle.evaluate((t) => {
      t.addEventListener('checkedChange', (e) => {
        e.preventDefault();
      });
    });

    await expect(toggle).toHaveClass(/hydrated/);

    await toggle.click();

    await expect(toggle).toHaveJSProperty('checked', false);
  }
);

regressionTest('should not toggle if disabled', async ({ mount, page }) => {
  await mount(`<ix-toggle disabled></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await toggle.click({
    force: true,
  });

  await expect(toggle).toHaveJSProperty('checked', false);
});

regressionTest(
  'should be toggled ON after indeterminate',
  async ({ mount, page }) => {
    await mount(
      `<ix-toggle indeterminate aria-label="Test switch"></ix-toggle>`
    );
    const toggle = page.locator('ix-toggle');
    await expect(toggle).toHaveClass(/hydrated/);
    await expect(toggle).toHaveJSProperty('indeterminate', true);
    await expect(toggle).toHaveJSProperty('checked', false);
    await expect(toggle).toHaveAttribute('aria-checked', 'mixed');
    await expect(toggle).toHaveAttribute('aria-label', 'Test switch');

    await toggle.click();

    await expect(toggle).toHaveJSProperty('checked', true);
    await expect(toggle).toHaveJSProperty('indeterminate', false);
    await expect(toggle).toHaveAttribute('aria-checked', 'true');
    await expect(toggle).toHaveAttribute('aria-label', 'Test switch');
  }
);

regressionTest(`form-ready`, async ({ mount, page }) => {
  await mount(`<form><ix-toggle name="my-field-name"></ix-toggle></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-toggle').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`form-ready with value`, async ({ mount, page }) => {
  await mount(
    `<form><ix-toggle name="my-field-name" value="custom-value"></ix-toggle></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-toggle').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('custom-value');
});

regressionTest(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-toggle name="my-field-name" checked></ix-toggle></form>`
  );

  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await expect(toggle).toHaveJSProperty('checked', true);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(
  'should expose stable name via aria-label for accessible queries',
  async ({ mount, page }) => {
    await mount(
      `<ix-toggle text-on="Enabled" text-off="Disabled" aria-label="Power"></ix-toggle>`
    );
    const toggleByRole = page.getByRole('switch', { name: 'Power' });
    await expect(toggleByRole).toBeVisible();
  }
);

regressionTest(
  'should be directly clickable via host element with accessible query',
  async ({ mount, page }) => {
    await mount(
      `<ix-toggle text-on="On" text-off="Off" aria-label="Notifications"></ix-toggle>`
    );
    const host = page.locator('ix-toggle');
    const sw = page.getByRole('switch', { name: 'Notifications' });
    await expect(sw).toBeVisible();
    await expect(host).toHaveJSProperty('checked', false);
    await sw.click();
    await expect(host).toHaveJSProperty('checked', true);
    await expect(
      page.getByRole('switch', { name: 'Notifications' })
    ).toBeVisible();
  }
);

regressionTest(
  'should keep a stable accessible name; state only in aria-checked',
  async ({ mount, page }) => {
    await mount(`<ix-toggle aria-label="Wi-Fi"></ix-toggle>`);
    const host = page.locator('ix-toggle');
    await expect(host).toHaveAttribute('aria-label', 'Wi-Fi');
    await expect(host).toHaveAttribute('aria-checked', 'false');

    await host.click();

    await expect(host).toHaveAttribute('aria-checked', 'true');
    await expect(host).toHaveAttribute('aria-label', 'Wi-Fi');
  }
);

regressionTest(
  'should respect disabled state when clicking via accessible query',
  async ({ mount, page }) => {
    await mount(
      `<ix-toggle text-on="On" text-off="Off" disabled aria-label="Option"></ix-toggle>`
    );
    const toggle = page.getByRole('switch', { name: 'Option' });
    await toggle.click({ force: true });
    await expect(toggle).toHaveJSProperty('checked', false);
  }
);
