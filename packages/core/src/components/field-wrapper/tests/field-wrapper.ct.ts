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
regressionTest(
  'doesnt render helper text when it is null',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-field-wrapper helper-text="Helper text">
      Content
    </ix-field-wrapper>
    `
    );
    const fieldWrapperElement = page.locator('ix-field-wrapper');
    await expect(fieldWrapperElement).toHaveClass(/hydrated/);

    await fieldWrapperElement.evaluate((e: HTMLIxFieldWrapperElement) => {
      (e.helperText as any) = null;
    });

    await page.waitForTimeout(100);
    const helperTextElement = fieldWrapperElement
      .locator('.field-bottom')
      .locator('ix-typography.bottom-text')
      .filter({ hasText: 'Helper text' });

    await expect(helperTextElement).toHaveCount(0);
  }
);

regressionTest('doesnt render empty string text', async ({ mount, page }) => {
  await mount(
    `
    <ix-field-wrapper helper-text="">
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
  );
  const fieldWrapperElement = page.locator('ix-field-wrapper');
  await expect(fieldWrapperElement).toHaveClass(/hydrated/);
  const helperTextElement = fieldWrapperElement
    .locator('.field-bottom')
    .locator('ix-typography.bottom-text')
    .filter({ hasText: 'Helper text' });

  await expect(helperTextElement).toHaveCount(0);
});

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

regressionTest(
  'should not create tooltip when helper text is empty',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-field-wrapper helper-text=" " show-text-as-tooltip>
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
    );

    const fieldWrapperElement = page.locator('ix-field-wrapper');
    await expect(fieldWrapperElement).toHaveClass(/hydrated/);
    const tooltip = fieldWrapperElement.locator('ix-tooltip');
    await expect(tooltip).toHaveCount(0);
    await page.mouse.move(10, 10);
    await page.waitForTimeout(100);
    await expect(tooltip).toHaveCount(0);
  }
);

regressionTest(
  'should not create tooltip when helper text is set to null',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-field-wrapper helper-text="initial helper" show-text-as-tooltip>
      <div style="position: relative; width: 100%; height: 2rem; background: red;">Content</div>
    </ix-field-wrapper>
    `
    );

    const fieldWrapperElement = page.locator('ix-field-wrapper');
    await expect(fieldWrapperElement).toHaveClass(/hydrated/);
    await fieldWrapperElement.evaluate((e: HTMLIxFieldWrapperElement) => {
      (e.helperText as any) = null;
    });
    await page.waitForTimeout(100);
    const tooltip = fieldWrapperElement.locator('ix-tooltip');
    await expect(tooltip).not.toBeVisible();
    await page.mouse.move(10, 10);
    await page.waitForTimeout(100);
    await expect(tooltip).not.toBeVisible();
  }
);

regressionTest(
  'should not create when valid-text is undefined',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-field-wrapper helper-text="my helper text is visible" is-valid>
        </ix-field-wrapper>
      `
    );

    const fieldWrapperElement = page.locator('ix-field-wrapper');
    await expect(fieldWrapperElement).toHaveClass(/hydrated/);

    await fieldWrapperElement.evaluate(
      (elm: HTMLIxHelperTextElement) => ((elm as any)[`valid-text`] = undefined)
    );

    const helperTextElement = fieldWrapperElement
      .locator('.field-bottom')
      .locator('ix-typography.bottom-text')
      .filter({ hasText: 'my helper text is visible' });

    await expect(helperTextElement).toHaveCount(1);
  }
);
