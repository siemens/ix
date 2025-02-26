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

regressionTest('check inactive class', async ({ mount, page }) => {
  await mount(`<ix-chip active="false">test</ix-chip>`);
  const chip = page.locator('ix-chip');
  await expect(chip).toHaveClass('inactive hydrated');
});

regressionTest.describe('tooltip', () => {
  regressionTest(
    'should not display when tooltip-text attribute is absent',
    async ({ mount, page }) => {
      await mount('<ix-chip>Text content</ix-chip>');
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).not.toHaveAttribute('tooltip-text');
      await expect(chip.locator('ix-tooltip')).not.toBeVisible();
    }
  );

  regressionTest(
    'should display the component text content when tooltip-text attribute is an empty string',
    async ({ mount, page }) => {
      await mount('<ix-chip tooltip-text="">Text content</ix-chip>');
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).toHaveAttribute('tooltip-text', '');
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveText('Text content');
    }
  );

  regressionTest(
    'should display the component text content when tooltip-text attribute is present but no value is set',
    async ({ mount, page }) => {
      await mount('<ix-chip tooltip-text>Text content</ix-chip>');
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).toHaveAttribute('tooltip-text', undefined);
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveText('Text content');
    }
  );

  regressionTest(
    'should display the custom text when tooltip-text attribute is a custom string',
    async ({ mount, page }) => {
      await mount(
        '<ix-chip tooltip-text="custom tooltip text">Text content</ix-chip>'
      );
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).toHaveAttribute('tooltip-text', 'custom tooltip text');
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveText('custom tooltip text');
    }
  );
});
