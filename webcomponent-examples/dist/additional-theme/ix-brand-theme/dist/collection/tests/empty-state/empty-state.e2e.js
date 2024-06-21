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
regressionTest.describe('empty state', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('empty-state/basic');
        const emptyState = await page.waitForSelector('ix-empty-state');
        expect(await emptyState.screenshot()).toMatchSnapshot();
    });
    regressionTest('overflow', async ({ page }) => {
        await page.goto('empty-state/overflow');
        const emptyState = await page.waitForSelector('ix-empty-state');
        expect(await emptyState.screenshot()).toMatchSnapshot();
    });
    regressionTest('compact', async ({ page }) => {
        await page.goto('empty-state/compact');
        const emptyState = await page.waitForSelector('ix-empty-state');
        expect(await emptyState.screenshot()).toMatchSnapshot();
    });
    regressionTest('compact break', async ({ page }) => {
        await page.goto('empty-state/compact-break');
        const emptyState = await page.waitForSelector('ix-empty-state');
        expect(await emptyState.screenshot()).toMatchSnapshot();
    });
});
//# sourceMappingURL=empty-state.e2e.js.map
