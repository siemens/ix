/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest(
  'light-dom anchor accessibility',
  async ({ mount, makeAxeBuilder }) => {
    await mount(`
    <a href="#anchor-target">Visited link</a>
    <div id="anchor-target">Target</div>
  `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  }
);
