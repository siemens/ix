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
regressionTest.describe('link-button', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('link-button/basic');
        const selectItem = await page.waitForSelector("[link-button-id='1']");
        await selectItem.hover();
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('truncate', async ({ page }) => {
        await page.goto('link-button/truncate');
        const selectItem = await page.waitForSelector("[link-button-id='1']");
        await selectItem.hover();
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=link-button.e2e.js.map
