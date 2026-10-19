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

regressionTest.describe('link-button', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('link-button/basic');

    await expect(page.locator('ix-link-button ix-icon')).toHaveCount(0);
    const selectItem = await page.waitForSelector("[link-button-id='1']");
    await selectItem.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('truncate', async ({ page }) => {
    await page.goto('link-button/truncate');

    const trailingIconLink = page.locator(
      'ix-link-button[icon="external"][icon-position="end"]'
    );
    const icon = trailingIconLink.locator('ix-icon');
    await expect(page.locator('ix-link-button ix-icon')).toHaveCount(1);
    await expect(icon.locator('svg')).toHaveCount(1);
    await expect(icon).toHaveCSS('width', '16px');
    await expect
      .poll(() =>
        trailingIconLink
          .locator('.link')
          .evaluate((label) => label.scrollWidth > label.clientWidth)
      )
      .toBe(true);
    await expect
      .poll(() =>
        trailingIconLink.locator('a').evaluate((link) => {
          const icon = link.querySelector('ix-icon');
          return (
            icon !== null &&
            icon.getBoundingClientRect().right <=
              link.getBoundingClientRect().right
          );
        })
      )
      .toBe(true);
    const selectItem = await page.waitForSelector("[link-button-id='1']");
    await selectItem.hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('variants', async ({ page }) => {
    await page.goto('link-button/variants');

    const variants = ['internal', 'external', 'file', 'action', 'none'];
    await expect(page.locator('ix-link-button')).toHaveCount(
      variants.length * 2 - 1
    );
    for (const icon of variants) {
      const positions = icon === 'none' ? ['start'] : ['start', 'end'];
      for (const position of positions) {
        const positionSelector =
          position === 'start'
            ? ':not([icon-position])'
            : '[icon-position="end"]';
        const linkButton = page.locator(
          `ix-link-button[icon="${icon}"]${positionSelector}`
        );
        await expect(linkButton).toHaveCount(1);
        await expect(linkButton).toHaveJSProperty('iconPosition', position);
        await expect(
          linkButton.getByRole('link', { name: 'Link text' })
        ).toBeVisible();
        await expect(linkButton.locator('ix-icon')).toHaveCount(
          icon === 'none' ? 0 : 1
        );
      }
    }

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
