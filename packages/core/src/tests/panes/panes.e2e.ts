/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest.describe('pane', () => {
  regressionTest(
    'basic, floating, no_collapsed_state, collapsed',
    async ({ page }) => {
      await page.goto('panes/basic');
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest(
    'basic, floating, no_collapsed_state, expanded',
    async ({ page }) => {
      await page.goto('panes/basic');
      await page.locator('ix-button').first().click();
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest(
    'basic, floating, no_collapsed_state, collapsed, mobile',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.sm);
      await page.goto('panes/basic');
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest(
    'basic, floating, no_collapsed_state, expanded, mobile',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.sm);
      await page.goto('panes/basic');
      await page.locator('ix-button').first().click();
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest('layout, floating, collapsed', async ({ page }) => {
    await page.goto('panes/layout');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('changed_layout, floating, collapsed', async ({ page }) => {
    await page.goto('panes/layout');
    await (await page.locator('ix-button').all())[1].click();
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, floating, expanded', async ({ page }) => {
    await page.goto('panes/layout');
    for (const li of await page.locator('ix-icon-button').all())
      await li.click();
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, floating, collapsed, mobile', async ({ page }) => {
    await page.setViewportSize(viewPorts.sm);
    await page.goto('panes/layout');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest(
    'layout, floating, left_expanded, mobile',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.sm);
      await page.goto('panes/layout');
      await page.locator('ix-icon-button').first().click();
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest('layout, inline, collapsed', async ({ page }) => {
    await page.goto('panes/layout');
    await page.locator('ix-button').first().click();
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, inline, icon, collapsed', async ({ page }) => {
    await page.goto('panes/icon');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, inline, expanded', async ({ page }) => {
    await page.goto('panes/layout');
    await page.locator('ix-button').first().click();
    for (const li of await page.locator('ix-icon-button').all())
      await li.click();
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, inline, collapsed, mobile', async ({ page }) => {
    await page.setViewportSize(viewPorts.sm);
    await page.goto('panes/layout');
    await page.locator('ix-button').first().click();
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, inline, left_expanded, mobile', async ({ page }) => {
    await page.setViewportSize(viewPorts.sm);
    await page.goto('panes/layout');
    await page.locator('ix-button').first().click();
    await page.locator('ix-icon-button').first().click();
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('layout, inline, collapsed, responsive', async ({ page }) => {
    await page.goto('panes/layout-responsive');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest(
    'slot, correctly toggles while being collapsed through content click',
    async ({ page }) => {
      await page.goto('panes/slot');
      await page.locator('ix-button').first().click();
      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );
});
