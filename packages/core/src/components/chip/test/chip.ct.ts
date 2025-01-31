/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { regressionTest } from '@utils/test';
import { expect } from '@playwright/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-chip></ix-chip>`);
  const datePicker = page.locator('ix-chip');
  await expect(datePicker).toHaveClass(/hydrated/);
});

regressionTest.describe('chip test', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `
      <ix-chip>Label</ix-chip>
      <ix-chip outline>Label</ix-chip>
      `
    );
  });

  regressionTest(
    'outline and normal variant should have the same width',
    async ({ page }) => {
      await page.waitForSelector('ix-chip');

      const normalChipElement = page.locator('ix-chip').first();
      const outlineChipElement = page.locator('ix-chip').last();

      const normalChipSize = (await normalChipElement.boundingBox()) as {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      const outlineChipSize = (await outlineChipElement.boundingBox()) as {
        x: number;
        y: number;
        width: number;
        height: number;
      };

      expect(normalChipSize).not.toBeNull();
      expect(outlineChipSize).not.toBeNull();
      expect(normalChipSize.width).toEqual(outlineChipSize.width);
    }
  );
});
