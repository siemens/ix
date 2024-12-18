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

regressionTest(
  'should not define icons if meta tag is set to false',
  async ({ page, mount }) => {
    await mount(`<ix-icon name="star"></ix-icon>`, {
      headTags: ['<meta name="ix:legacy-icons" content="false" />'],
    });
    await page.waitForTimeout(1000);
    await expect(page.locator('ix-icon')).not.toBeVisible();
  }
);
