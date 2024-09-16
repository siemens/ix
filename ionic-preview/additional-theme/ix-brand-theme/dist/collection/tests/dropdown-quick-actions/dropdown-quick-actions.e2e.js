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
regressionTest.describe('dropdown-quick-actions', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('dropdown-quick-actions/basic');
        await page.locator('ix-button').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=dropdown-quick-actions.e2e.js.map
