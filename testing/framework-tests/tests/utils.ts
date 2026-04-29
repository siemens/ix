/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Rules disabled globally for all framework axe tests.
 * Add rules here when they represent known issues tracked separately.
 */
const DISABLED_AXE_RULES = ['page-has-heading-one'];

export async function waitForReadiness(page: Page) {
  await page.waitForTimeout(250);
}

export function createAxeBuilder(page: Page) {
  return new AxeBuilder({ page } as any).disableRules(DISABLED_AXE_RULES);
}
