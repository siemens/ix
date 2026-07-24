/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BadgeVisualPage } from './badge.page';
import { regressionTest } from '@utils/test';

regressionTest.describe('badge', () => {
  regressionTest('counter', async ({ page }) => {
    const badge = new BadgeVisualPage(page);
    await badge.gotoCounter();
    await badge.waitForReady();
    await badge.expectSnapshot();
  });

  regressionTest('label', async ({ page }) => {
    const badge = new BadgeVisualPage(page);
    await badge.gotoLabel();
    await badge.waitForReady();
    await badge.expectSnapshot();
  });

  regressionTest('dot', async ({ page }) => {
    const badge = new BadgeVisualPage(page);
    await badge.gotoDot();
    await badge.waitForReady();
    await badge.expectSnapshot();
  });

  regressionTest('status-icon', async ({ page }) => {
    const badge = new BadgeVisualPage(page);
    await badge.gotoStatusIcon();
    await badge.waitForReady();
    await badge.expectSnapshot();
  });
});
