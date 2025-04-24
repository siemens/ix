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
regressionTest.describe('basic', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('dropdown-button/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('dropdown-button-icon', async ({ page }) => {
        await page.goto('dropdown-button/dropdown-button-icon');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('dropdown should open', async ({ page }) => {
        await page.goto('dropdown-button/dropdown');
        const triggerHandle = await page.waitForSelector('.dropdown-button');
        await triggerHandle.click();
        await page.waitForSelector('.dropdown.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
            maxDiffPixelRatio: 0.01,
        });
    });
});
//# sourceMappingURL=dropdown-button.e2e.js.map
