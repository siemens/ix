/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { getDropdownDialog, regressionTest } from '@utils/test';

regressionTest.describe('ix-dropdown top-layer (suppressTopLayer)', () => {
  regressionTest.describe(
    'Popover API mode (default suppressTopLayer=false)',
    () => {
      regressionTest(
        'renders with dialog popover structure',
        async ({ mount, page }) => {
          await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" aria-label="Menu">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);
          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);
          await trigger.click();

          await expect(getDropdownDialog(dropdown)).toBeAttached();
        }
      );

      regressionTest(
        'shows and hides using Popover API',
        async ({ mount, page }) => {
          await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);
          const dialog = getDropdownDialog(dropdown);

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
        <ix-dropdown id="dropdown" trigger="trigger" header="Menu">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

        const trigger = page.locator('ix-button#trigger');
        await expect(trigger).toHaveClass(/hydrated/);
        const dropdown = page.locator('ix-dropdown#dropdown');
        await expect(dropdown).toHaveClass(/hydrated/);
        const dialog = getDropdownDialog(dropdown);

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
          suppress-overflow-behavior="true"
          header="Menu"
        >
          ${Array.from(
            { length: 20 },
            (_, i) => `<ix-dropdown-item label="Item ${i}"></ix-dropdown-item>`
          ).join('')}
        </ix-dropdown>
      `);

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          await trigger.click();

          const dialog = getDropdownDialog(
            page.locator('ix-dropdown#dropdown')
          );
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
          suppress-overflow-behavior="false"
          header="Menu"
        >
          ${Array.from(
            { length: 20 },
            (_, i) => `<ix-dropdown-item label="Item ${i}"></ix-dropdown-item>`
          ).join('')}
        </ix-dropdown>
      `);

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          await trigger.click();

          const dialog = getDropdownDialog(
            page.locator('ix-dropdown#dropdown')
          );
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
          close-behavior="both"
          header="Menu"
        >
          <ix-dropdown-item id="item-1" label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);
          await trigger.click();

          const dialog = getDropdownDialog(dropdown);
          await expect(dialog).toBeVisible();

          const item = page.locator('ix-dropdown-item').first();
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
          header="Menu"
        >
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);
          await trigger.click();

          const dialog = getDropdownDialog(dropdown);
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
        'escapes CSS stacking context - dropdown is fully visible and not hidden (default top-layer)',
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
              header="Actions"
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

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);
          await trigger.click();

          const dialog = getDropdownDialog(dropdown);
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

          const firstItem = page.locator('ix-dropdown-item').first();
          await expect(firstItem).toBeVisible();
          await firstItem.click();
        }
      );
    }
  );

  regressionTest.describe(
    'Suppress Popover API mode (suppress-top-layer=true)',
    () => {
      regressionTest(
        'opens with host show class (no dialog popover)',
        async ({ mount, page }) => {
          await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" suppress-top-layer="true" aria-label="Menu">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);
          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);
          await trigger.click();

          await expect(dropdown).toHaveClass(/show/);
          await expect(dropdown.locator('dialog')).toHaveCount(0);
        }
      );

      regressionTest('shows and hides inline menu', async ({ mount, page }) => {
        await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" suppress-top-layer="true">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

        const trigger = page.locator('ix-button#trigger');
        await expect(trigger).toHaveClass(/hydrated/);
        const dropdown = page.locator('ix-dropdown#dropdown');
        await expect(dropdown).toHaveClass(/hydrated/);

        await expect(dropdown).not.toHaveClass(/show/);

        await trigger.click();
        await expect(dropdown).toHaveClass(/show/);

        await page.mouse.click(400, 200);
        await expect(dropdown).not.toHaveClass(/show/);
      });

      regressionTest(
        'Escape key closes inline dropdown',
        async ({ mount, page }) => {
          await mount(`
        <ix-button id="trigger">Open</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" suppress-top-layer="true" header="Menu">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown>
      `);

          const trigger = page.locator('ix-button#trigger');
          await expect(trigger).toHaveClass(/hydrated/);
          const dropdown = page.locator('ix-dropdown#dropdown');
          await expect(dropdown).toHaveClass(/hydrated/);

          await trigger.click();
          await expect(dropdown).toHaveClass(/show/);

          await page.keyboard.press('Escape');
          await expect(dropdown).not.toHaveClass(/show/);
        }
      );
    }
  );

  regressionTest.describe(
    'Nested dropdowns with mixed suppressTopLayer',
    () => {
      regressionTest(
        'parent with suppress-top-layer=true, child default (top-layer)',
        async ({ mount, page }) => {
          await mount(`
        <ix-button id="trigger-1">Trigger 1</ix-button>
        <ix-dropdown id="dropdown-1" trigger="trigger-1" suppress-top-layer="true">
          <ix-dropdown-item id="trigger-2">Item 1</ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown id="dropdown-2" trigger="trigger-2" header="Submenu">
          <ix-dropdown-item>Item 1.1</ix-dropdown-item>
          <ix-dropdown-item>Item 1.2</ix-dropdown-item>
        </ix-dropdown>
      `);

          const trigger1 = page.locator('ix-button#trigger-1');
          await expect(trigger1).toHaveClass(/hydrated/);
          const dropdown1 = page.locator('ix-dropdown#dropdown-1');
          await expect(dropdown1).toHaveClass(/hydrated/);
          await trigger1.click();

          await expect(dropdown1).toHaveClass(/show/);

          const trigger2 = page.locator('#trigger-2');
          await trigger2.click();

          const dropdown2 = page.locator('ix-dropdown#dropdown-2');
          await expect(getDropdownDialog(dropdown2)).toBeVisible();
        }
      );
    }
  );
});
