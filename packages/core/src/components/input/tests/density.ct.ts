/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, regressionTest } from '@utils/test';

const waitForPaddingUpdate = async (page: import('@playwright/test').Page) => {
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      })
  );
};

regressionTest(
  'input family follows default and compact density with slotted content',
  async ({ mount, page }) => {
    await mount(`
      <div style="display: grid; gap: 8px; width: 320px;">
        <ix-input type="text">
          <span slot="start">S</span><span slot="end">E</span>
        </ix-input>
        <ix-input type="password" value="secret"></ix-input>
        <ix-number-input show-stepper-buttons value="10"></ix-number-input>
        <ix-textarea></ix-textarea>
      </div>
    `);

    const input = page.locator('ix-input').first().locator('input');
    const password = page.locator('ix-input').nth(1).locator('input');
    const numberInput = page.locator('ix-number-input').locator('input');
    const textarea = page.locator('ix-textarea').locator('textarea');

    await waitForPaddingUpdate(page);
    await expect(input).toHaveCSS('min-height', '32px');
    await expect(password).toHaveCSS('min-height', '32px');
    await expect(numberInput).toHaveCSS('min-height', '32px');
    await expect(numberInput).toHaveCSS('min-width', '96px');
    await expect(textarea).toHaveCSS('height', '64px');
    await expect(input).toHaveAttribute(
      'style',
      /--si-sys-sizing-spacing-x-40/
    );

    const defaultPadding = await input.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).paddingLeft)
    );

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    await expect(input).toHaveCSS('min-height', '24px');
    await expect(password).toHaveCSS('min-height', '24px');
    await expect(numberInput).toHaveCSS('min-height', '24px');
    await expect(numberInput).toHaveCSS('min-width', '80px');
    await expect(textarea).toHaveCSS('height', '48px');

    const compactPadding = await input.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).paddingLeft)
    );
    expect(defaultPadding - compactPadding).toBeCloseTo(2, 0);
  }
);

regressionTest(
  'character counter shares the helper text typography in both densities',
  async ({ mount, page }) => {
    await mount(`
      <ix-input helper-text="Input helper" max-length="20"></ix-input>
      <ix-textarea helper-text="Textarea helper" max-length="30"></ix-textarea>
    `);

    const pairs = [
      [
        page.locator('ix-typography', { hasText: 'Input helper' }),
        page.getByText('0/20'),
      ],
      [
        page.locator('ix-typography', { hasText: 'Textarea helper' }),
        page.getByText('0/30'),
      ],
    ] as const;

    const expectSameTypography = async (fontSize: string) => {
      for (const [helper, counter] of pairs) {
        await expect(helper).toHaveCSS('font-size', fontSize);
        await expect(counter).toHaveCSS('font-size', fontSize);
        const helperLineHeight = await helper.evaluate(
          (element) => getComputedStyle(element).lineHeight
        );
        await expect(counter).toHaveCSS('line-height', helperLineHeight);
      }
    };

    await expectSameTypography('14px');

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    await expectSameTypography('12px');
  }
);
