/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@playwright/test';
import { waitForReadiness } from './utils';

test('application skip links use the expected targets', async ({ page }) => {
  await page.goto('/preview/application');
  await waitForReadiness(page);

  const target = page.locator('#main-content');
  const skipLink = page.getByRole('link', {
    name: 'Skip to main content',
  });
  const footerSkipLink = page.getByRole('link', {
    name: 'Skip to footer',
  });

  await expect(skipLink).toHaveAttribute('href', '#main-content');
  await expect(footerSkipLink).toHaveAttribute(
    'href',
    '#ix-application-footer'
  );
  await expect(page.getByRole('listitem')).toHaveCount(2);

  await skipLink.focus();
  await skipLink.press('Enter');
  await expect(target).toBeFocused();

  await footerSkipLink.focus();
  await footerSkipLink.press('Enter');
  await expect(
    page.locator('ix-application').getByRole('contentinfo')
  ).toBeFocused();
});
