/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-empty-state
      header="No elements available"
      description="Create an element first"
    ></ix-empty-state>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-empty-state header="No elements available"></ix-empty-state>`
  );

  const emptyState = page.locator('ix-empty-state');
  await expect(emptyState).toHaveAttribute('hydrated');
  await expect(emptyState).toBeVisible();
  await expect(page.getByText('No elements available')).toBeVisible();
  await expect(emptyState.locator('.label__description')).toHaveCount(0);
});

for (const layout of ['large', 'compact', 'compactBreak'] as const) {
  regressionTest(
    `renders description in ${layout} layout`,
    async ({ mount, page }) => {
      await mount(`
      <ix-empty-state
        layout="${layout}"
        header="No elements available"
        description="Create an element first"
      ></ix-empty-state>
    `);

      await expect(page.locator('ix-empty-state')).toHaveAttribute('hydrated');
      await expect(page.getByText('Create an element first')).toBeVisible();
    }
  );
}

regressionTest('updates and removes description', async ({ mount, page }) => {
  await mount(
    `<ix-empty-state header="No elements available"></ix-empty-state>`
  );

  const emptyState = page.locator('ix-empty-state');
  await expect(emptyState).toHaveAttribute('hydrated');

  await emptyState.evaluate((element: HTMLIxEmptyStateElement) => {
    element.description = 'Create an element first';
  });
  await expect(page.getByText('Create an element first')).toBeVisible();

  await emptyState.evaluate((element: HTMLIxEmptyStateElement) => {
    element.description = 'Try adjusting the current filters';
  });
  await expect(
    page.getByText('Try adjusting the current filters')
  ).toBeVisible();
  await expect(page.getByText('Create an element first')).toHaveCount(0);

  await emptyState.evaluate((element: HTMLIxEmptyStateElement) => {
    element.description = '';
  });
  await expect(emptyState.locator('.label__description')).toHaveCount(0);
});
