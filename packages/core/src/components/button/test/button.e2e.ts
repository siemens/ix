/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test.describe('button: basic', () => {
  test('should not have visual regressions', async ({ page }) => {
    await page.goto(`button/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
