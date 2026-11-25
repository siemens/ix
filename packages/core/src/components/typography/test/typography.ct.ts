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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-typography>Example content</ix-typography>`);
  const el = page.locator('ix-typography');
  await expect(el).toHaveAttribute('hydrated');
  await expect(el).toBeVisible();
});

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <div>
      <ix-typography text-color="danger">Danger</ix-typography>
      <ix-typography text-color="warning">Warning</ix-typography>
      <ix-typography text-color="caution">Caution</ix-typography>
      <ix-typography text-color="information">Information</ix-typography>
      <ix-typography text-color="critical">Critical</ix-typography>
      <ix-typography text-color="success">Success</ix-typography>
      <ix-typography text-color="primary">Primary</ix-typography>
      <ix-typography text-color="secondary">Secondary</ix-typography>
      <div style="background: var(--si-sys-color-background-inverse)">
        <ix-typography text-color="inverse">Inverse</ix-typography>
      </div>
      <div style="background: var(--si-sys-color-background-danger)">
        <ix-typography text-color="on-danger">on-danger</ix-typography>
      </div>
      <div style="background: var(--si-sys-color-background-caution)">
        <ix-typography text-color="on-caution">on-caution</ix-typography>
      </div>
      <div style="background: var(--si-sys-color-background-warning)">
        <ix-typography text-color="on-warning">on-warning</ix-typography>
      </div>
    </div>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
