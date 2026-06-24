/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('accessibility', () => {
  regressionTest('default', async ({ mount, makeAxeBuilder }) => {
    await mount(`
      <ix-card>
        <ix-card-content>Default Card</ix-card-content>
      </ix-card>
    `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  regressionTest('renders', async ({ mount, page }) => {
    await mount(`
    <ix-card>
      <ix-card-content>Default Card</ix-card-content>
    </ix-card>
  `);

    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bhydrated\b/);
  });

  regressionTest('passive', async ({ mount, makeAxeBuilder, page }) => {
    await mount(`
      <ix-card passive>
        <ix-card-content>Passive Card</ix-card-content>
      </ix-card>
    `);

    const card = page.locator('ix-card');
    await expect(card).not.toHaveAttribute('tabindex', '0');

    await expect(card).not.toHaveAttribute('role', 'button');

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  regressionTest(
    'non passive cards are interactive and can be activated with keyboard',
    async ({ mount, page }) => {
      await mount(`
      <ix-card>
        <ix-card-content>Interactive Card</ix-card-content>
      </ix-card>
    `);

      const card = page.locator('ix-card');

      await page.evaluate(() => {
        const el = document.querySelector('ix-card') as HTMLIxCardElement & {
          __clickCount: number;
        };
        el.__clickCount = 0;
        el.addEventListener('click', () => {
          el.__clickCount += 1;
        });
      });

      await card.press('Enter');
      await card.press(' ');

      const clickCount = await page.evaluate(() => {
        const el = document.querySelector('ix-card') as HTMLIxCardElement & {
          __clickCount: number;
        };
        return el.__clickCount;
      });

      expect(clickCount).toBe(2);
    }
  );
});
