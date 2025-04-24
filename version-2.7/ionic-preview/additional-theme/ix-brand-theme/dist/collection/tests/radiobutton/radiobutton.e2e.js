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
regressionTest.describe('radiobutton', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto(`radiobutton/basic`);
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('basic hover checked', async ({ page }) => {
        await page.goto(`radiobutton/basic`);
        const noCheckedCheckbox = await page.waitForSelector('label[for="checkbox_1_1"]');
        await noCheckedCheckbox.hover();
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('basic hover unchecked', async ({ page }) => {
        await page.goto(`radiobutton/basic`);
        const noCheckedCheckbox = await page.waitForSelector('label[for="checkbox_1_2"]');
        await noCheckedCheckbox.hover();
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('no checked', async ({ page }) => {
        await page.goto(`radiobutton/no-checked`);
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('long text', async ({ page }) => {
        await page.goto(`radiobutton/long-text`);
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=radiobutton.e2e.js.map
