/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

const icons = { iconChevronRightSmall };

regressionTest('renders', async ({ mount, page }) => {
  await mount('<ix-link-button url="/safe">Safe link</ix-link-button>', {
    icons,
  });

  await expect(page.locator('ix-link-button')).toHaveClass(/hydrated/);
  await expect(page.getByRole('link', { name: 'Safe link' })).toHaveAttribute(
    'href',
    '/safe'
  );
});

regressionTest('blocks unsafe URL protocols', async ({ mount, page }) => {
  await mount(
    '<ix-link-button url="javascript:alert(1)">Unsafe link</ix-link-button>',
    { icons }
  );

  const link = page.locator('ix-link-button a');
  await expect(link).not.toHaveAttribute('href');

  await page.locator('ix-link-button').evaluate((element) => {
    (element as HTMLIxLinkButtonElement).url = 'mailto:user@example.com';
  });
  await expect(link).toHaveAttribute('href', 'mailto:user@example.com');
});

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount('<ix-link-button url="/safe">Safe link</ix-link-button>', {
    icons,
  });

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});
