/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from "@playwright/test";
import { regressionTest, viewPorts } from "../utils/test/index";
regressionTest.describe('application header: basic', () => {
    regressionTest('should not have visual regressions', async ({ page }) => {
        await page.goto('application-header/basic');
        await expect(page).toHaveScreenshot();
    });
    regressionTest('should not have visual regressions - svg', async ({ page }) => {
        await page.goto('application-header/basic-svg');
        await expect(page).toHaveScreenshot();
    });
    regressionTest('should content', async ({ page }) => {
        await page.setViewportSize(viewPorts.lg);
        await page.goto('application-header/overflow');
        await expect(page).toHaveScreenshot();
    });
    regressionTest('should content - sm', async ({ page }) => {
        await page.setViewportSize(viewPorts.sm);
        await page.goto('application-header/overflow');
        await expect(page).toHaveScreenshot();
    });
    regressionTest('should content - sm - click context menu', async ({ page }) => {
        await page.setViewportSize(viewPorts.sm);
        await page.goto('application-header/overflow');
        const contextMenu = page
            .locator('ix-application-header')
            .locator('[data-context-menu]');
        await expect(contextMenu).toBeVisible();
        await contextMenu.click();
        const dropdown = page
            .locator('ix-application-header')
            .locator('[data-overflow-dropdown]');
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot();
    });
});
//# sourceMappingURL=application-header.e2e.js.map
