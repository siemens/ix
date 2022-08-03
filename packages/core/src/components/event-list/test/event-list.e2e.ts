/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('event-list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`event-list/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('compact', async ({ page }) => {
    await page.goto(`event-list/test/compact`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom-height', async ({ page }) => {
    await page.goto(`event-list/test/custom-height`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
