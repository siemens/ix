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
regressionTest.describe('toggle-button: basic', () => {
    regressionTest('should not have visual regressions', async ({ page }) => {
        await page.goto('toggle-button/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('should have a hover effect', async ({ page }) => {
        await page.goto('toggle-button/basic');
        const bodyElement = await page.waitForSelector('body');
        await page.evaluate((body) => {
            body
                .querySelectorAll('ix-toggle-button:not([disabled])')
                .forEach((b) => b.shadowRoot.querySelector('button').classList.add('hover'));
        }, bodyElement);
        await page.waitForSelector('ix-toggle-button > button.hover');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('should have an active effect', async ({ page }) => {
        await page.goto('toggle-button/basic');
        const bodyElement = await page.waitForSelector('body');
        await page.evaluate((body) => {
            body
                .querySelectorAll('ix-toggle-button:not([disabled])')
                .forEach((b) => b.shadowRoot.querySelector('button').classList.add('active'));
        }, bodyElement);
        await page.waitForSelector('ix-toggle-button > button.active');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('should show loading spinner', async ({ page }) => {
        await page.goto('toggle-button/loading');
        expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot();
    });
});
//# sourceMappingURL=toggle-button.e2e.js.map
