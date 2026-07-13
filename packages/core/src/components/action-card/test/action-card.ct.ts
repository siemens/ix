/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-action-card heading="Heading" subheading="Subheading"></ix-action-card>
  `);
  const actionCard = page.locator('ix-action-card');
  await expect(actionCard).toHaveClass(/\bhydrated\b/);
  await expect(actionCard.locator('button')).toBeVisible();
});

regressionTest(
  'passive card renders a disabled button',
  async ({ mount, page }) => {
    await mount(`
      <ix-action-card heading="Heading" subheading="Subheading" passive></ix-action-card>
    `);
    const actionCard = page.locator('ix-action-card');
    await expect(actionCard).toHaveClass(/\bhydrated\b/);
    await expect(actionCard.locator('button')).toBeDisabled();
  }
);

regressionTest.describe('accessibility', () => {
  regressionTest('default', async ({ mount, makeAxeBuilder }) => {
    await mount(`
      <ix-action-card heading="Heading" subheading="Subheading"></ix-action-card>
    `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  regressionTest('passive', async ({ mount, makeAxeBuilder }) => {
    await mount(`
      <ix-action-card heading="Heading" subheading="Subheading" passive></ix-action-card>
    `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
