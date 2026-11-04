/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const controls = [
  { tag: 'ix-input', control: 'input' },
  { tag: 'ix-number-input', control: 'input' },
  { tag: 'ix-textarea', control: 'textarea' },
];

controls.forEach(({ tag, control }) => {
  regressionTest.describe(`${tag} - aria attributes on the host`, () => {
    regressionTest(
      'moves aria-label to the native control',
      async ({ mount, page }) => {
        await mount(`<${tag} aria-label="Location"></${tag}>`);
        const host = page.locator(tag);
        await expect(host).toHaveAttribute('hydrated');

        await expect(host.locator(control)).toHaveAttribute(
          'aria-label',
          'Location'
        );
        await expect(host).not.toHaveAttribute('aria-label');
      }
    );

    regressionTest(
      'exposes aria-required on the native control',
      async ({ mount, page }) => {
        await mount(`<${tag} aria-required="true"></${tag}>`);
        const host = page.locator(tag);
        await expect(host).toHaveAttribute('hydrated');

        await expect(host.locator(control)).toHaveAttribute(
          'aria-required',
          'true'
        );
      }
    );

    regressionTest(
      'keeps aria-labelledby and aria-hidden on the host',
      async ({ mount, page }) => {
        await mount(
          `<span id="external-label">Location</span><${tag} label="City" aria-labelledby="external-label" aria-hidden="true"></${tag}>`
        );
        const host = page.locator(tag);
        await expect(host).toHaveAttribute('hydrated');

        await expect(host).toHaveAttribute('aria-labelledby', 'external-label');
        await expect(host).toHaveAttribute('aria-hidden', 'true');
        await expect(host.locator(control)).not.toHaveAttribute(
          'aria-labelledby'
        );
        await expect(host.locator(control)).toHaveAttribute(
          'aria-label',
          'City'
        );
      }
    );

    regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
      await mount(
        `<${tag} aria-label="Location" aria-required="true"></${tag}>`
      );
      const accessibilityScanResults = await makeAxeBuilder()
        .include(tag)
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    regressionTest(
      'keeps aria-required from the required property',
      async ({ mount, page }) => {
        await mount(`<${tag} required></${tag}>`);
        const host = page.locator(tag);
        await expect(host).toHaveAttribute('hydrated');

        await expect(host.locator(control)).toHaveAttribute(
          'aria-required',
          'true'
        );
      }
    );
  });
});
