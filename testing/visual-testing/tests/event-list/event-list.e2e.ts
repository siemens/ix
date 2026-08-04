/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('event-list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('event-list/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('compact', async ({ page }) => {
    await page.goto('event-list/compact');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('chevron', async ({ page }) => {
    await page.goto('event-list/chevron');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom-height', async ({ page }) => {
    await page.goto('event-list/custom-height');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('hover', async ({ page }) => {
    await page.goto('event-list/basic');
    await (await page.waitForSelector('text="Text 3"')).hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest.describe('event-list filled', () => {
  function changeToFilled(page: Page) {
    return page
      .locator('ix-event-list-item')
      .evaluateAll((items: HTMLIxEventListItemElement[]) =>
        items.forEach((item) => (item.variant = 'filled'))
      );
  }

  regressionTest('basic', async ({ page }) => {
    await page.goto('event-list/basic');
    await changeToFilled(page);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('compact', async ({ page }) => {
    await page.goto('event-list/compact');
    await changeToFilled(page);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('chevron', async ({ page }) => {
    await page.goto('event-list/chevron');
    await changeToFilled(page);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom-height', async ({ page }) => {
    await page.goto('event-list/custom-height');
    await changeToFilled(page);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('hover', async ({ page }) => {
    await page.goto('event-list/basic');
    await changeToFilled(page);

    await (await page.waitForSelector('text="Text 3"')).hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
