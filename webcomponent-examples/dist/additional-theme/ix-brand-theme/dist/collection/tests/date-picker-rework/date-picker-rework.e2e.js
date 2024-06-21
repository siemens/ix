/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from "@playwright/test";
import { regressionTest } from "../utils/test/index";
regressionTest.describe('date picker', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('date-picker-rework/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
            maxDiffPixels: 5,
        });
    });
    regressionTest('range', async ({ page }) => {
        await page.goto('date-picker-rework/range');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
            maxDiffPixels: 5,
        });
    });
    regressionTest('year/month selection', async ({ page }) => {
        await page.goto('date-picker-rework/year-month-selection');
        const button = page.locator('div.selector > ix-button');
        await button.click();
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('week start', async ({ page }) => {
        await page.goto('date-picker-rework/week-start');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=date-picker-rework.e2e.js.map
