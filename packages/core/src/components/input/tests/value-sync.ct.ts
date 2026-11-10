/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator } from '@playwright/test';
import { getFormValue, regressionTest } from '@utils/test';

const components = [
  { tag: 'ix-input', control: 'input' },
  { tag: 'ix-textarea', control: 'textarea' },
] as const;

const fieldName = 'my-field-name';

// Keystroke and assignment must share a task; `fill`/`type` would render in between
function typeThenSetValue(
  host: Locator,
  control: string,
  typed: string,
  value: string
) {
  return host.evaluate(
    (element: HTMLElement & { value: string }, args) => {
      const native = element.shadowRoot!.querySelector(args.controlTag) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      native.value = args.typed;
      native.dispatchEvent(
        new Event('input', { bubbles: true, composed: true })
      );
      element.value = args.value;
    },
    { controlTag: control, typed, value }
  );
}

for (const { tag, control } of components) {
  regressionTest.describe(`${tag} programmatic value`, () => {
    regressionTest.beforeEach(async ({ mount, page }) => {
      await mount(
        `<form><${tag} name="${fieldName}" label="Search"></${tag}></form>`
      );
      await expect(page.locator(tag)).toHaveAttribute('hydrated');
    });

    regressionTest(
      'resetting to the last rendered value in the same task as a keystroke updates the native control',
      async ({ page }) => {
        const host = page.locator(tag);

        await typeThenSetValue(host, control, 'num_samples', '');

        await expect(host).toHaveAttribute('value', '');
        await expect(host.locator(control)).toHaveValue('');
        expect(await getFormValue(page.locator('form'), fieldName, page)).toBe(
          ''
        );
      }
    );

    regressionTest(
      'setting a different value in the same task as a keystroke updates the native control',
      async ({ page }) => {
        const host = page.locator(tag);

        await typeThenSetValue(host, control, 'num_samples', 'other');

        await expect(host.locator(control)).toHaveValue('other');
        expect(await getFormValue(page.locator('form'), fieldName, page)).toBe(
          'other'
        );
      }
    );

    regressionTest(
      'setting the value programmatically updates the form value',
      async ({ page }) => {
        const host = page.locator(tag);

        await host.evaluate((element: HTMLElement & { value: string }) => {
          element.value = 'programmatic';
        });

        await expect(host.locator(control)).toHaveValue('programmatic');
        expect(await getFormValue(page.locator('form'), fieldName, page)).toBe(
          'programmatic'
        );
      }
    );

    regressionTest(
      'typing keeps the native control, host value and form value in sync',
      async ({ page }) => {
        const host = page.locator(tag);
        const native = host.locator(control);

        await native.pressSequentially('abc');

        await expect(native).toHaveValue('abc');
        await expect(host).toHaveAttribute('value', 'abc');
        expect(await getFormValue(page.locator('form'), fieldName, page)).toBe(
          'abc'
        );
      }
    );
  });

  regressionTest(
    `${tag} revalidates a touched field when the value is set programmatically`,
    async ({ mount, page }) => {
      await mount(`<${tag} required value="abc"></${tag}>`);
      const host = page.locator(tag);
      await expect(host).toHaveAttribute('hydrated');

      const native = host.locator(control);
      await native.focus();
      await native.blur();
      await expect(host).not.toHaveClass(/ix-invalid--validity-invalid/);

      await host.evaluate((element: HTMLElement & { value: string }) => {
        element.value = '';
      });
      await expect(host).toHaveClass(/ix-invalid--validity-invalid/);

      await host.evaluate((element: HTMLElement & { value: string }) => {
        element.value = 'abc';
      });
      await expect(host).not.toHaveClass(/ix-invalid--validity-invalid/);
    }
  );
}
