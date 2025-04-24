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
regressionTest.describe('typography', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('typography/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('line-through', async ({ page }) => {
        await page.goto('typography/line-through');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('underline', async ({ page }) => {
        await page.goto('typography/underline');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('text color', async ({ page }) => {
        await page.goto('typography/text-color');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=typography.e2e.js.map
