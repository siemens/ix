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
  await mount(
    `
      <ix-basic-navigation application-name="test">
      </ix-basic-navigation>
    `
  );

  const header = page.locator('ix-basic-navigation ix-application-header');

  await expect(header).toBeVisible();
  await expect(header).toHaveClass(/breakpoint-lg/);
});
