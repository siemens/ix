/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, Page } from '@playwright/test';
import { regressionTest, expect } from '@utils/test';

const html = String.raw;

const contextMenuFixture = (dropdownAttributes = '') => html`
  <style>
    #area {
      position: fixed;
      inset: 0;
    }
  </style>
  <div id="area"></div>
  <ix-dropdown id="context-menu" role="menu" ${dropdownAttributes}>
    <ix-dropdown-item label="Copy"></ix-dropdown-item>
    <ix-dropdown-item label="Paste"></ix-dropdown-item>
    <ix-dropdown-item label="Delete"></ix-dropdown-item>
  </ix-dropdown>
`;

function openContextMenuOnRightClick(page: Page, areaSelector = '#area') {
  return page.evaluate((selector) => {
    const area = document.querySelector(selector)!;
    area.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      const { clientX, clientY } = event as MouseEvent;
      document
        .querySelector<HTMLIxDropdownElement>('#context-menu')!
        .showAt(clientX, clientY);
    });
  }, areaSelector);
}

async function expectTopLeftAt(locator: Locator, x: number, y: number) {
  await expect(async () => {
    const box = await locator.boundingBox();
    if (!box) {
      throw new Error('Expected bounding box');
    }
    expect(Math.round(box.x)).toBe(x);
    expect(Math.round(box.y)).toBe(y);
  }).toPass({ timeout: 2000 });
}

regressionTest.describe('anchor position', () => {
  regressionTest('renders at anchorPosition', async ({ mount, page }) => {
    await mount(html`
      <ix-dropdown id="dropdown">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      </ix-dropdown>
    `);

    const dropdown = page.locator('#dropdown');
    await expect(dropdown).toHaveAttribute('hydrated');

    await dropdown.evaluate((element: HTMLIxDropdownElement) => {
      element.anchorPosition = { x: 120, y: 80 };
      element.show = true;
    });

    await expect(dropdown).toBeVisible();
    await expectTopLeftAt(dropdown, 120, 80);

    await dropdown.evaluate((element: HTMLIxDropdownElement) => {
      element.anchorPosition = { x: 200, y: 150 };
    });

    await expectTopLeftAt(dropdown, 200, 150);
  });

  regressionTest(
    'anchorPosition takes precedence over anchor',
    async ({ mount, page }) => {
      await mount(html`
        <ix-button id="trigger">Trigger</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      `);

      const dropdown = page.locator('#dropdown');
      await expect(dropdown).toHaveAttribute('hydrated');

      await dropdown.evaluate((element: HTMLIxDropdownElement) => {
        element.anchorPosition = { x: 300, y: 200 };
      });
      await page.getByRole('button', { name: 'Trigger' }).click();

      await expect(dropdown).toBeVisible();
      await expectTopLeftAt(dropdown, 300, 200);
    }
  );

  regressionTest(
    'stays within the viewport near the edge',
    async ({ mount, page }) => {
      await mount(contextMenuFixture());
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      const { width, height } = await page.evaluate(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
      await page.mouse.click(width - 5, height - 5, { button: 'right' });

      await expect(dropdown).toBeVisible();
      await expect(async () => {
        const box = await dropdown.boundingBox();
        if (!box) {
          throw new Error('Expected bounding box');
        }
        expect(box.x + box.width).toBeLessThanOrEqual(width);
        expect(box.y + box.height).toBeLessThanOrEqual(height);
      }).toPass({ timeout: 2000 });
    }
  );

  regressionTest.describe('context menu', () => {
    regressionTest(
      'opens at the pointer and moves on another right-click',
      async ({ mount, page }) => {
        await mount(contextMenuFixture());
        await openContextMenuOnRightClick(page);

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        await page.mouse.click(100, 100, { button: 'right' });
        await expect(dropdown).toBeVisible();
        await expectTopLeftAt(dropdown, 100, 100);

        await page.mouse.click(250, 180, { button: 'right' });
        await expect(dropdown).toBeVisible();
        await expectTopLeftAt(dropdown, 250, 180);
      }
    );

    regressionTest('closes on outside click', async ({ mount, page }) => {
      await mount(contextMenuFixture());
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.mouse.click(100, 100, { button: 'right' });
      await expect(dropdown).toBeVisible();

      await page.mouse.click(400, 400);
      await expect(dropdown).not.toBeVisible();
    });

    regressionTest('closes on item click', async ({ mount, page }) => {
      await mount(contextMenuFixture());
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.mouse.click(100, 100, { button: 'right' });
      await page.getByRole('menuitem', { name: 'Paste' }).click();
      await expect(dropdown).not.toBeVisible();
    });

    regressionTest('works with enableTopLayer', async ({ mount, page }) => {
      await mount(contextMenuFixture('enable-top-layer'));
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.mouse.click(150, 120, { button: 'right' });
      const dialog = dropdown.locator('dialog');
      await expect(dialog).toBeVisible();
      await expectTopLeftAt(dialog, 150, 120);

      await page.mouse.click(400, 400, { button: 'right' });
      await expectTopLeftAt(dialog, 400, 400);
    });

    regressionTest(
      'focuses the first item and supports keyboard navigation',
      async ({ mount, page }) => {
        await mount(contextMenuFixture());
        await openContextMenuOnRightClick(page);

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        await page.mouse.click(100, 100, { button: 'right' });

        await expect(dropdown).toBeFocused();

        const items = dropdown.locator('ix-dropdown-item');
        await page.keyboard.press('ArrowDown');
        await expect(items.nth(0)).toHaveClass(/ix-focused/);

        await page.keyboard.press('ArrowDown');
        await expect(items.nth(1)).toHaveClass(/ix-focused/);

        await page.keyboard.press('End');
        await expect(items.nth(2)).toHaveClass(/ix-focused/);

        await page.keyboard.press('Escape');
        await expect(dropdown).not.toBeVisible();
      }
    );

    regressionTest(
      'restores focus to the previously focused element when closed via keyboard',
      async ({ mount, page }) => {
        await mount(html`
          <button id="target">Target</button>
          <ix-dropdown id="context-menu" role="menu">
            <ix-dropdown-item label="Copy"></ix-dropdown-item>
            <ix-dropdown-item label="Paste"></ix-dropdown-item>
          </ix-dropdown>
        `);
        await openContextMenuOnRightClick(page, '#target');

        const dropdown = page.locator('#context-menu');
        const target = page.getByRole('button', { name: 'Target' });
        await expect(dropdown).toHaveAttribute('hydrated');

        await target.focus();
        await page.keyboard.press('Tab');
        await page.keyboard.press('Shift+Tab');
        await expect(target).toBeFocused();

        await target.dispatchEvent('contextmenu');
        await expect(dropdown).toBeVisible();
        await expect(dropdown).toBeFocused();
        await expect(dropdown.locator('ix-dropdown-item').first()).toHaveClass(
          /ix-focused/
        );

        await page.keyboard.press('Escape');
        await expect(dropdown).not.toBeVisible();
        await expect(target).toBeFocused();
      }
    );

    regressionTest('disableFocusHandling', async ({ mount, page }) => {
      await mount(contextMenuFixture('disable-focus-handling'));
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.mouse.click(100, 100, { button: 'right' });
      await expect(dropdown).toBeVisible();
      await expect(dropdown).not.toBeFocused();
    });

    regressionTest(
      'roving-tabindex focuses the first item',
      async ({ mount, page }) => {
        await mount(contextMenuFixture('navigation-mode="roving-tabindex"'));
        await openContextMenuOnRightClick(page);

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        await page.mouse.click(100, 100, { button: 'right' });

        const items = dropdown.locator('ix-dropdown-item');
        await expect(items.nth(0)).toBeFocused();

        await page.keyboard.press('ArrowDown');
        await expect(items.nth(1)).toBeFocused();
      }
    );

    regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
      await mount(contextMenuFixture());
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.mouse.click(100, 100, { button: 'right' });
      await expect(dropdown).toBeVisible();

      const accessibilityScanResults = await makeAxeBuilder()
        .include('ix-dropdown-item')
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
