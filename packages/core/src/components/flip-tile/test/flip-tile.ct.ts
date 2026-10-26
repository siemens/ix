/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
import type { FlipTileVariant } from '../flip-tile.types';

// Same order as the Figma variant set.
const flipTileVariants: FlipTileVariant[] = [
  'outline',
  'filled',
  'accent',
  'neutral',
  'information',
  'success',
  'caution',
  'warning',
  'danger',
  'critical',
];

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-flip-tile variant="filled">
      <div slot="header">Flip header</div>
      <div slot="footer">Some footer content</div>
      <ix-flip-tile-content aria-label="page-1">Example 1</ix-flip-tile-content>
      <ix-flip-tile-content aria-label="page-2">Example 2</ix-flip-tile-content>
    </ix-flip-tile>
  `);

  const { violations } = await makeAxeBuilder().analyze();
  expect(violations).toEqual([]);
});

regressionTest(
  'accessibility - all variants',
  async ({ mount, makeAxeBuilder }) => {
    await mount(
      flipTileVariants
        .map(
          (variant) => `
    <ix-flip-tile variant="${variant}">
      <div slot="header">Flip header</div>
      <div slot="footer">Some footer content</div>
      <ix-flip-tile-content aria-label="page-1-${variant}">Example 1</ix-flip-tile-content>
      <ix-flip-tile-content aria-label="page-2-${variant}">Example 2</ix-flip-tile-content>
    </ix-flip-tile>`
        )
        .join('')
    );

    const { violations } = await makeAxeBuilder().analyze();
    expect(violations).toEqual([]);
  }
);

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-flip-tile variant="filled">
      <div slot="header">Flip header</div>
      <div slot="footer">
        Some footer content
      </div>
      <ix-flip-tile-content>Example 1</ix-flip-tile-content>
      <ix-flip-tile-content>Example 2</ix-flip-tile-content>
    </ix-flip-tile>
  `);
  const flipElement = page.locator('ix-flip-tile');

  const flipContentOneElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(0);
  const flipContentTwoElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(1);
  await expect(flipElement).toHaveAttribute('hydrated');
  await expect(flipContentOneElement).toBeVisible();
  await expect(flipContentTwoElement).not.toBeVisible();
});

regressionTest('should change content', async ({ mount, page }) => {
  await mount(`
    <ix-flip-tile variant="filled">
      <div slot="header">Flip header</div>
      <div slot="footer">
        Some footer content
      </div>
      <ix-flip-tile-content>Example 1</ix-flip-tile-content>
      <ix-flip-tile-content>Example 2</ix-flip-tile-content>
    </ix-flip-tile>
  `);
  const flipElement = page.locator('ix-flip-tile');

  const flipButton = flipElement.locator('.flip-tile-header ix-icon-button');
  await flipButton.click();

  const flipContentOneElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(0);
  const flipContentTwoElement = flipElement
    .locator('ix-flip-tile-content')
    .nth(1);
  await expect(flipElement).toHaveAttribute('hydrated');
  await expect(flipContentOneElement).not.toBeVisible();
  await expect(flipContentTwoElement).toBeVisible();
});

regressionTest('change index programmatically', async ({ mount, page }) => {
  await mount(`
    <ix-flip-tile>
      <ix-flip-tile-content>Page 1</ix-flip-tile-content>
      <ix-flip-tile-content>Page 2</ix-flip-tile-content>
    </ix-flip-tile`);
  const flipTile = page.locator('ix-flip-tile');
  await expect(flipTile).toHaveAttribute('hydrated');
  await flipTile.evaluate((d: HTMLIxFlipTileElement) => (d.index = 1));
  const pageOne = flipTile.locator('ix-flip-tile-content').nth(0);
  const pageTwo = flipTile.locator('ix-flip-tile-content').nth(1);
  await expect(pageOne).not.toBeVisible();
  await expect(pageTwo).toBeVisible();
});

regressionTest('toggle - prevent default', async ({ mount, page }) => {
  await mount(`
    <ix-flip-tile>
      <ix-flip-tile-content aria-label="page-1">Page 1</ix-flip-tile-content>
      <ix-flip-tile-content aria-label="page-2">Page 2</ix-flip-tile-content>
    </ix-flip-tile>`);
  const flipTile = page.locator('ix-flip-tile');
  await expect(flipTile).toHaveAttribute('hydrated');

  await flipTile.evaluate((tileElement: HTMLIxFlipTileElement) =>
    tileElement.addEventListener('toggle', (event) => {
      event.preventDefault();
    })
  );
  await flipTile.locator('ix-icon-button').click();

  const pageOne = page.getByLabel('page-1');
  const pageTwo = page.getByLabel('page-2');

  await expect(pageOne).toBeVisible();
  await expect(pageTwo).not.toBeVisible();
});

regressionTest.describe('variants', () => {
  for (const variant of flipTileVariants) {
    regressionTest(
      `sets variant class for ${variant}`,
      async ({ mount, page }) => {
        await mount(`
        <ix-flip-tile variant="${variant}">
          <ix-flip-tile-content>Example 1</ix-flip-tile-content>
        </ix-flip-tile>
      `);
        const flipTile = page.locator('ix-flip-tile');
        await expect(flipTile).toHaveAttribute('hydrated');
        await expect(flipTile).toHaveClass(
          new RegExp(`\\bflip-tile-variant-${variant}\\b`)
        );
      }
    );
  }

  regressionTest('uses filled as default variant', async ({ mount, page }) => {
    await mount(`
      <ix-flip-tile>
        <ix-flip-tile-content>Example 1</ix-flip-tile-content>
      </ix-flip-tile>
    `);
    const flipTile = page.locator('ix-flip-tile');
    await expect(flipTile).toHaveAttribute('hydrated');
    await expect(flipTile).toHaveClass(/\bflip-tile-variant-filled\b/);
  });
});
