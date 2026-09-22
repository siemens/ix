/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest(
  'nested cards and application shell consume live density tokens',
  async ({ mount, page }) => {
    await mount(`
      <ix-application style="height: 360px;">
        <ix-application-header name="Density test"></ix-application-header>
        <ix-card-list label="Cards">
          <ix-card>
            <ix-card-content id="card-content">Card content</ix-card-content>
          </ix-card>
        </ix-card-list>
        <ix-push-card class="card-outline">
          <ix-card-content>Push card content</ix-card-content>
        </ix-push-card>
      </ix-application>
    `);

    const header = page.locator('ix-application-header');
    const cardContent = page.locator('#card-content');

    await expect(header).toHaveCSS('min-height', '48px');
    await expect(cardContent).toHaveCSS('padding-top', '16px');
    await expect(page).toHaveScreenshot('content-density-default.png');

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    await expect(header).toHaveCSS('min-height', '40px');
    await expect(cardContent).toHaveCSS('padding-top', '12px');
    await expect(page).toHaveScreenshot('content-density-compact.png');
  }
);
