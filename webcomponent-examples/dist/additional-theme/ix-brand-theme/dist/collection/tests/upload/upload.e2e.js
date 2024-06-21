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
regressionTest.describe('upload', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('upload/basic');
        await expect(page).toHaveScreenshot();
    });
    regressionTest('States', async ({ page }) => {
        await page.goto('upload/states');
        const uploads = await page.locator('ix-upload').all();
        await Promise.all(uploads.map(async (locator, index) => {
            let state;
            switch (index) {
                case 0:
                    state = 'LOADING';
                    break;
                case 1:
                    state = 'SELECT_FILE';
                    break;
                case 2:
                    state = 'UPLOAD_FAILED';
                    break;
                case 3:
                    state = 'UPLOAD_SUCCESSED';
                    break;
                default:
                    console.error('Invalid enum value');
            }
            await locator.evaluate((elm, state) => {
                elm.state = state;
            }, state);
        }));
        await expect(page).toHaveScreenshot();
    });
});
//# sourceMappingURL=upload.e2e.js.map
