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
regressionTest.describe('map-navigation', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('map-navigation/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('content-width', async ({ page }) => {
        await page.goto('map-navigation/content-width');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=map-navigation.e2e.js.map
