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

regressionTest.describe('accessibility', () => {
  regressionTest('default', async ({ mount, makeAxeBuilder }) => {
    await mount(`
      <ix-action-card
        heading="Scan for new devices"
        subheading="Secondary text"
      ></ix-action-card>
    `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  regressionTest('passive', async ({ mount, makeAxeBuilder }) => {
    await mount(`
      <ix-action-card
        heading="Scan for new devices"
        subheading="Secondary text"
        passive
      ></ix-action-card>
    `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
