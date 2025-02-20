/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-chip></ix-chip>`);
  const datePicker = page.locator('ix-chip');
  await expect(datePicker).toHaveClass(/hydrated/);
});

test.describe('chip test', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `
      <ix-chip>Label</ix-chip>
      <ix-chip outline>Label</ix-chip>
      `
    );
  });

  test('outline and normal variant should have the same width', async ({
    page,
  }) => {
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
  });
});

test('check inactive class', async ({ mount, page }) => {
  await mount(`<ix-chip active="false">test</ix-chip>`);
  const chip = page.locator('ix-chip');
  await expect(chip).toHaveClass('inactive hydrated');
});

test('title with text content should be applied when tooltip-text is not set', async ({
  mount,
  page,
}) => {
  await mount('<ix-chip>Text content</ix-chip>');
  const chip = page.locator('ix-chip');

  await expect(chip).toHaveAttribute('title', 'Text content');
});

test('title with text content should be applied when tooltip-text is empty', async ({
  mount,
  page,
}) => {
  await mount('<ix-chip tooltip-text="">Text content</ix-chip>');
  const chip = page.locator('ix-chip');

  await expect(chip).toHaveAttribute('title', 'Text content');
});

test('title with custom text should be applied when tooltip-text is set', async ({
  mount,
  page,
}) => {
  await mount('<ix-chip tooltip-text="Custom tooltip">Text content</ix-chip>');
  const chip = page.locator('ix-chip');

  await expect(chip).toHaveAttribute('title', 'Custom tooltip');
});

test('no title should be applied when tooltip-text is none', async ({
  mount,
  page,
}) => {
  await mount('<ix-chip tooltip-text="none">Text content</ix-chip>');
  const chip = page.locator('ix-chip');

  await expect(chip).not.toHaveAttribute('title');
});
