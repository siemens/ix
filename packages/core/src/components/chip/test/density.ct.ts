/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest(
  'navigation chips, pills, and tabs keep coherent live density sizes',
  async ({ mount, page }) => {
    await mount(`
      <div style="display: flex; gap: 8px; align-items: center;">
        <ix-chip id="chip" closable>Filter</ix-chip>
        <ix-pill id="pill">Online</ix-pill>
        <ix-tabs id="tabs">
          <ix-tab-item selected label="Overview"></ix-tab-item>
          <ix-tab-item label="Details"></ix-tab-item>
        </ix-tabs>
      </div>
    `);

    const chip = page.locator('#chip');
    const pill = page.locator('#pill');
    const tab = page.locator('#tabs ix-tab-item').first();

    await expect(chip).toHaveCSS('height', '32px');
    await expect(pill).toHaveCSS('height', '20px');
    await expect(tab).toHaveCSS('height', '40px');

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    await expect(chip).toHaveCSS('height', '24px');
    await expect(pill).toHaveCSS('height', '16px');
    await expect(tab).toHaveCSS('height', '32px');
  }
);
