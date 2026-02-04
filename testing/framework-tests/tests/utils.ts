/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Page } from '@playwright/test';

export async function waitForReadiness(page: Page) {
  await page.waitForTimeout(250);
}
