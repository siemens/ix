/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('Animations', () => {
  regressionTest('should have animation variables', async ({ mount, page }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await mount(``);

    const animationDuration = await page.evaluate(() => {
      const computedStyle = window.getComputedStyle(document.body);

      const values = [
        '--theme-x-slow-time',
        '--theme-slow-time',
        '--theme-medium-time',
        '--theme-default-time',
        '--theme-short-time',
      ].map((varName) => {
        return computedStyle.getPropertyValue(varName);
      });

      return values;
    });

    expect(animationDuration).toStrictEqual(['1000', '500', '300', '150', '0']);
  });

  regressionTest('should respect reduce animation', async ({ mount, page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await mount(``);

    const animationDuration = await page.evaluate(() => {
      const computedStyle = window.getComputedStyle(document.body);

      const values = [
        '--theme-x-slow-time',
        '--theme-slow-time',
        '--theme-medium-time',
        '--theme-default-time',
        '--theme-short-time',
      ].map((varName) => {
        return computedStyle.getPropertyValue(varName);
      });

      return values;
    });

    expect(animationDuration).toStrictEqual(['0', '0', '0', '0', '0']);
  });
});
