/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from "@playwright/test";
import { regressionTest } from "../utils/test/index";
regressionTest.describe('avatar', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('avatar/basic');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('image', async ({ page }) => {
        await page.goto('avatar/image');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('initials', async ({ page }) => {
        await page.goto('avatar/initials');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=avatar.e2e.js.map
