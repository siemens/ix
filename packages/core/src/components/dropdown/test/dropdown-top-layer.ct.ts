/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('enableTopLayer feature', () => {
  regressionTest.describe('Popover API mode (enableTopLayer=true)', () => {
    regressionTest(
      'renders with dialog popover structure',
      async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" enable-top-layer="true">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

        const dropdown = page.locator('ix-dropdown#dropdown');

        const dialog = dropdown.locator('dialog[popover="manual"]');
        await expect(dialog).toBeAttached();
      }
    );

    regressionTest(
      'shows and hides using Popover API',
      async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" enable-top-layer="true">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

        const trigger = page.locator('#trigger');
        const dropdown = page.locator('ix-dropdown#dropdown');
        const dialog = dropdown.locator('dialog[popover="manual"]');

        await expect(dialog).not.toBeVisible();

        await trigger.click();
        await expect(dialog).toBeVisible();

        await page.mouse.click(400, 200);
        await expect(dialog).not.toBeVisible();
      }
    );

    regressionTest('Escape key closes dropdown', async ({ mount, page }) => {
      await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" enable-top-layer="true">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

      const trigger = page.locator('#trigger');
      const dropdown = page.locator('ix-dropdown#dropdown');
      const dialog = dropdown.locator('dialog[popover="manual"]');

      await trigger.click();
      await expect(dialog).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(dialog).not.toBeVisible();
    });

    regressionTest(
      'respects suppressOverflowBehavior=true',
      async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown 
          id="dropdown" 
          trigger="trigger" 
          enable-top-layer="true"
          suppress-overflow-behavior="true"
        >
          ${Array.from(
            { length: 20 },
            (_, i) => `<ix-dropdown-item label="Item ${i}"></ix-dropdown-item>`
          ).join('')}
        </ix-dropdown>
      `);

        const trigger = page.locator('#trigger');
        await trigger.click();

        const dialog = page
          .locator('ix-dropdown#dropdown')
          .locator('dialog[popover="manual"]');

        await expect(dialog).not.toHaveClass(/overflow/);
      }
    );

    regressionTest(
      'respects suppressOverflowBehavior=false',
      async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown 
          id="dropdown" 
          trigger="trigger" 
          enable-top-layer="true"
          suppress-overflow-behavior="false"
        >
          ${Array.from(
            { length: 20 },
            (_, i) => `<ix-dropdown-item label="Item ${i}"></ix-dropdown-item>`
          ).join('')}
        </ix-dropdown>
      `);

        const trigger = page.locator('#trigger');
        await trigger.click();

        const dialog = page
          .locator('ix-dropdown#dropdown')
          .locator('dialog[popover="manual"]');

        await expect(dialog).toHaveClass(/overflow/);
      }
    );

    regressionTest(
      'closes on item click with closeBehavior=both',
      async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown 
          id="dropdown" 
          trigger="trigger" 
          enable-top-layer="true"
          close-behavior="both"
        >
          <ix-dropdown-item id="item-1" label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

        const trigger = page.locator('#trigger');
        await trigger.click();

        const dialog = page
          .locator('ix-dropdown#dropdown')
          .locator('dialog[popover="manual"]');
        await expect(dialog).toBeVisible();

        const item = page.locator('#item-1');
        await item.click();

        await expect(dialog).not.toBeVisible();
      }
    );

    regressionTest(
      'positions correctly with anchor element',
      async ({ mount, page }) => {
        await mount(`
        <div style="margin-top: 100px; margin-left: 100px;">
          <ix-button id="trigger">Open</ix-button>
        </div>
        <ix-dropdown 
          id="dropdown" 
          trigger="trigger" 
          enable-top-layer="true"
        >
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

        const trigger = page.locator('#trigger');
        await trigger.click();

        const dialog = page
          .locator('ix-dropdown#dropdown')
          .locator('dialog[popover="manual"]');
        await expect(dialog).toBeVisible();

        await page.waitForTimeout(100);

        await expect(async () => {
          const triggerBox = await trigger.boundingBox();
          const dialogBox = await dialog.boundingBox();

          expect(triggerBox).toBeTruthy();
          expect(dialogBox).toBeTruthy();

          expect(dialogBox!.y).toBeGreaterThanOrEqual(triggerBox!.y);
        }).toPass({ timeout: 2000 });
      }
    );

    regressionTest(
      'escapes CSS stacking context - dropdown is fully visible and not hidden (enableTopLayer=true)',
      async ({ mount, page }) => {
        await mount(`
        <style>
          .container {
            position: relative;
            width: 300px;
            border: 2px solid blue;
          }
          .row {
            height: 40px;
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            padding: 0 10px;
            position: relative;
            overflow: hidden;
            background: white;
          }
          .row-with-dropdown {
            z-index: 100;
          }
          .row-overlay {
            z-index: 200;
            background: #f0f0f0;
            position: relative;
          }
        </style>
        
        <div class="container">
          <div class="row row-with-dropdown">
            <ix-button id="trigger" size="small">Actions</ix-button>
            <ix-dropdown 
              id="dropdown" 
              trigger="trigger" 
              enable-top-layer="true"
            >
              <ix-dropdown-item label="Edit"></ix-dropdown-item>
              <ix-dropdown-item label="Delete"></ix-dropdown-item>
              <ix-dropdown-item label="Share"></ix-dropdown-item>
              <ix-dropdown-item label="Export"></ix-dropdown-item>
            </ix-dropdown>
          </div>
          <div id="overlay-row" class="row row-overlay">Row 2 (Higher z-index)</div>
          <div class="row">Row 3</div>
          <div class="row">Row 4</div>
        </div>
      `);

        const trigger = page.locator('#trigger');
        await trigger.click();

        const dialog = page
          .locator('ix-dropdown#dropdown')
          .locator('dialog[popover="manual"]');
        await expect(dialog).toBeVisible();

        await page.waitForTimeout(100);

        await expect(async () => {
          const dialogBox = await dialog.boundingBox();
          const overlayBox = await page.locator('#overlay-row').boundingBox();

          expect(dialogBox).toBeTruthy();
          expect(overlayBox).toBeTruthy();

          const dialogBottom = dialogBox!.y + dialogBox!.height;
          const overlayTop = overlayBox!.y;

          expect(dialogBottom).toBeGreaterThan(overlayTop);
        }).toPass({ timeout: 2000 });

        // Verify dropdown items are clickable even over higher z-index elements
        const firstItem = page.locator('ix-dropdown-item').first();
        await expect(firstItem).toBeVisible();
        await firstItem.click();
      }
    );
  });

  regressionTest.describe('Nested dropdowns with mixed enableTopLayer', () => {
    regressionTest(
      'parent with enableTopLayer=false, child with enableTopLayer=true',
      async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger-1">Trigger 1</ix-button>
        <ix-dropdown id="dropdown-1" trigger="trigger-1" enable-top-layer="false">
          <ix-dropdown-item id="trigger-2">Item 1</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown id="dropdown-2" trigger="trigger-2" enable-top-layer="true">
          <ix-dropdown-item>Item 1.1</ix-dropdown-item>
          <ix-dropdown-item>Item 1.2</ix-dropdown-item>
        </ix-dropdown>
      `);

        const trigger1 = page.locator('#trigger-1');
        await trigger1.click();

        const dropdown1 = page.locator('.dropdown-menu.show').first();
        await expect(dropdown1).toBeVisible();

        const trigger2 = page.locator('#trigger-2');
        await trigger2.click();

        const dropdown2Dialog = page.locator(
          '#dropdown-2 dialog[popover="manual"]'
        );
        await expect(dropdown2Dialog).toBeVisible();
      }
    );
  });
});
