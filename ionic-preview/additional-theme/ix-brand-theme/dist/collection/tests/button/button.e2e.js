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
regressionTest.describe('button: basic', () => {
    regressionTest('should show loading spinner', async ({ page }) => {
        await page.goto('button/loading');
        expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
    });
    regressionTest('should not have visual regressions', async ({ page }) => {
        await page.goto('button/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('should have an hover effect', async ({ page }) => {
        await page.goto('button/basic');
        const bodyElement = await page.waitForSelector('body');
        await page.evaluate((body) => {
            body
                .querySelectorAll('ix-button')
                .forEach((b) => b.shadowRoot.querySelector('button').classList.add('hover'));
        }, bodyElement);
        await page.waitForSelector('ix-button > button.hover');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
            maxDiffPixelRatio: 0.04,
        });
    });
    regressionTest('should have an active effect', async ({ page }) => {
        await page.goto('button/basic');
        const bodyElement = await page.waitForSelector('body');
        await page.evaluate((body) => {
            body
                .querySelectorAll('ix-button')
                .forEach((b) => b.shadowRoot.querySelector('button').classList.add('active'));
        }, bodyElement);
        await page.waitForSelector('ix-button > button.active');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=button.e2e.js.map
