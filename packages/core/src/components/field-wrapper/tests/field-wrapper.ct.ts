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
  await mount(
    `
    <ix-field-wrapper helper-text="Helper text">
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
  );
  const fieldWrapperElement = page.locator('ix-field-wrapper');
  await expect(fieldWrapperElement).toHaveClass(/hydrated/);
  await expect(
    fieldWrapperElement
      .locator('.field-bottom')
      .locator('ix-typography.bottom-text')
      .filter({ hasText: 'Helper text' })
  ).toHaveText('Helper text');
});

regressionTest(
  'show text dependent on provided state',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-field-wrapper helper-text="Helper text" invalid-text="invalid text" is-invalid>
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
    );
    const fieldWrapperElement = page.locator('ix-field-wrapper');
    await expect(fieldWrapperElement).toHaveClass(/hydrated/);
    await expect(
      fieldWrapperElement
        .locator('.field-bottom')
        .locator('ix-typography.bottom-text')
        .filter({ hasText: 'invalid text' })
    ).toHaveText('invalid text');
  }
);

regressionTest('show text by tooltip', async ({ mount, page }) => {
  await mount(
    `
    <ix-field-wrapper helper-text="Helper text" invalid-text="invalid text" show-text-as-tooltip>
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
  );
  const fieldWrapperElement = page.locator('ix-field-wrapper');
  await expect(fieldWrapperElement).toHaveClass(/hydrated/);

  await page.mouse.move(10, 10);

  const tooltip = fieldWrapperElement.locator('ix-tooltip');
  await expect(tooltip).toHaveClass(/visible/);
  await expect(tooltip).toContainText('Helper text');
});

regressionTest('show text by tooltip invalid', async ({ mount, page }) => {
  await mount(
    `
    <ix-field-wrapper helper-text="Helper text" invalid-text="invalid text" is-invalid show-text-as-tooltip>
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
  );
  const fieldWrapperElement = page.locator('ix-field-wrapper');
  await expect(fieldWrapperElement).toHaveClass(/hydrated/);

  await page.mouse.move(10, 10);

  const tooltip = fieldWrapperElement.locator('ix-tooltip');
  await expect(tooltip).toHaveClass(/visible/);
  await expect(tooltip).toContainText('invalid text');
});
