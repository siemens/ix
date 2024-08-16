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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-pane></ix-pane>`);
  const pane = page.locator('ix-pane');
  await expect(pane).toHaveClass(/hydrated/);
});

regressionTest('expanded', async ({ mount, page }) => {
  await mount(`
    <ix-pane
      heading="LEFT"
      composition="left"
      icon="star"
      expanded="true"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `);

  const title = page.locator('h1');
  await expect(title).toBeVisible();
});
