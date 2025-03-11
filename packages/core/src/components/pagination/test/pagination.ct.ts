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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-pagination>
    </ix-pagination>
  `);
  const element = page.locator('ix-pagination');

  await expect(element).toHaveClass(/hydrated/);
});

regressionTest('advanced', async ({ mount, page }) => {
  await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
  const element = page.locator('ix-pagination[advanced]');

  await expect(element).toHaveClass(/hydrated/);
});

regressionTest('open show number of page dropdown', async ({ mount, page }) => {
  await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
  const element = page.locator('ix-pagination[advanced]');

  await element.getByRole('button').nth(-1).click();

  const dropdown = element.locator('ix-dropdown');

  await expect(dropdown).toBeVisible();
});

regressionTest(
  'should dispatch items count change',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');

    const itemChanged = pagination.evaluate((elm) => {
      return new Promise<number>((resolve) => {
        elm.addEventListener('itemCountChanged', (event) =>
          resolve((event as CustomEvent<number>).detail)
        );
      });
    });

    await pagination.getByRole('button').nth(-1).click();

    await pagination.locator('ix-dropdown-item').nth(3).click();
    await expect(pagination.locator('ix-dropdown')).not.toBeVisible();

    await expect(pagination).toHaveClass(/hydrated/);
    expect(await itemChanged).toBe(40);
  }
);

regressionTest('should not change page', async ({ mount, page }) => {
  await mount(`
    <ix-pagination count="10">
    </ix-pagination>
  `);
  const pagination = page.locator('ix-pagination');

  await pagination.evaluate((elm) => {
    elm.addEventListener('pageSelected', (event) => event.preventDefault());
  });

  const buttons = pagination.locator('button');
  await buttons.nth(1).click();

  await expect(buttons.first()).toHaveAttribute('aria-pressed', 'true');
  await expect(buttons.nth(1)).toHaveAttribute('aria-pressed', 'false');
});
