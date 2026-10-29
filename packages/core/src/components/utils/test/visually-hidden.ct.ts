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

regressionTest.describe('ix-visually-hidden', () => {
  regressionTest(
    'removes content from the visual layout',
    async ({ mount, page }) => {
      await mount(
        `<button type="button"><span class="ix-visually-hidden">Add to favorites</span></button>`
      );

      const boundingBox = await page
        .locator('.ix-visually-hidden')
        .boundingBox();

      expect(boundingBox?.width).toBeLessThanOrEqual(1);
      expect(boundingBox?.height).toBeLessThanOrEqual(1);
    }
  );

  regressionTest(
    'keeps content in the accessibility tree',
    async ({ mount, page }) => {
      await mount(
        `<button type="button"><span class="ix-visually-hidden">Add to favorites</span></button>`
      );

      await expect(page.locator('button')).toHaveAccessibleName(
        'Add to favorites'
      );
    }
  );

  regressionTest(
    'contributes hidden text to the accessible name of its parent',
    async ({ mount, page }) => {
      await mount(
        `<a href="#safety">Read more<span class="ix-visually-hidden"> about safety instructions</span></a>`
      );

      await expect(page.locator('a')).toHaveAccessibleName(
        'Read more about safety instructions'
      );
    }
  );

  regressionTest(
    'keeps a hidden caption as the accessible name of its table',
    async ({ mount, page }) => {
      await mount(
        `<table><caption class="ix-visually-hidden">Sensor readings for line 4</caption><tbody><tr><td>1</td></tr></tbody></table>`
      );

      await expect(page.locator('table')).toHaveAccessibleName(
        'Sensor readings for line 4'
      );
    }
  );

  regressionTest(
    'does not take a table caption out of flow',
    async ({ mount, page }) => {
      await mount(
        `<table><caption class="ix-visually-hidden">Sensor readings</caption><tbody><tr><td>1</td></tr></tbody></table>`
      );

      const caption = page.locator('caption');

      // `position: absolute` on a caption breaks the table layout, so the
      // utility deliberately skips it while still hiding the caption.
      await expect(caption).toHaveCSS('position', 'static');
      expect((await caption.boundingBox())?.height).toBeLessThanOrEqual(1);
    }
  );
});

regressionTest.describe('ix-visually-hidden-focusable', () => {
  const skipLink = `<a class="ix-visually-hidden-focusable" href="#main">Skip to main content</a><div id="main" tabindex="-1">Main content</div>`;

  regressionTest('is hidden while unfocused', async ({ mount, page }) => {
    await mount(skipLink);

    const boundingBox = await page
      .locator('a.ix-visually-hidden-focusable')
      .boundingBox();

    expect(boundingBox?.width).toBeLessThanOrEqual(1);
    expect(boundingBox?.height).toBeLessThanOrEqual(1);
  });

  regressionTest(
    'becomes visible on keyboard focus',
    async ({ mount, page }) => {
      await mount(skipLink);

      const link = page.locator('a.ix-visually-hidden-focusable');
      await page.keyboard.press('Tab');

      await expect(link).toBeFocused();

      const boundingBox = await link.boundingBox();
      expect(boundingBox?.width).toBeGreaterThan(1);
      expect(boundingBox?.height).toBeGreaterThan(1);
    }
  );
});
