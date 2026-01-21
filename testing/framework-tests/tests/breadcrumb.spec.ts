/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { test, expect } from '@playwright/test';

test.describe('breadcrumb', () => {
  test('breadcrumb', async ({ page }) => {
    await page.goto('/preview/breadcrumb');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - navigation "breadcrumbs":
        - list:
          - listitem:
            - button "Item 1":
              - img
          - listitem:
            - button "Item 2":
              - img
          - listitem:
            - button "Item 3"
    `);
  });

  test('truncate', async ({ page }) => {
    await page.goto('/preview/breadcrumb-truncate');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - listitem:
        - button "...":
          - img
      - navigation "breadcrumbs":
        - list:
          - listitem:
            - button "Item 3":
              - img
          - listitem:
            - button "Item 4":
              - img
          - listitem:
            - button "Item 5"
    `);
  });
});
