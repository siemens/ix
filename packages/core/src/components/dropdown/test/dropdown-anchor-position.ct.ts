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
    'showAt position does not persist after hiding',
    async ({ mount, page }) => {
      await mount(html`
        <ix-button id="trigger">Trigger</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      `);

      const dropdown = page.locator('#dropdown');
      await expect(dropdown).toHaveAttribute('hydrated');

      await dropdown.evaluate((element: HTMLIxDropdownElement) =>
        element.showAt(300, 200)
      );
      await expectTopLeftAt(dropdown, 300, 200);

      await page.keyboard.press('Escape');
      await expect(dropdown).not.toBeVisible();
      expect(
        await dropdown.evaluate(
          (element: HTMLIxDropdownElement) => element.anchorPosition
        )
      ).toBeUndefined();

      const trigger = page.getByRole('button', { name: 'Trigger' });
      await trigger.click();
      await expect(dropdown).toBeVisible();

      const triggerBox = await trigger.boundingBox();
      if (!triggerBox) {
        throw new Error('Expected bounding box');
      }
      await expectTopLeftAt(
        dropdown,
        Math.round(triggerBox.x),
        Math.round(triggerBox.y + triggerBox.height)
      );
    }
  );

  regressionTest(
    'prevented showChange keeps showAt closed',
    async ({ mount, page }) => {
      await mount(contextMenuFixture());

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await dropdown.evaluate((element: HTMLIxDropdownElement) => {
        element.addEventListener('showChange', (event) =>
          event.preventDefault()
        );
        return element.showAt(100, 100);
      });

      await expect(dropdown).not.toBeVisible();
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

  regressionTest(
    'fallback placement of a clipped trigger does not apply to showAt',
    async ({ mount, page }) => {
      await mount(html`
        <style>
          #trigger {
            position: fixed;
            left: 20px;
            bottom: -16px;
          }
        </style>
        <ix-button id="trigger">Trigger</ix-button>
        <ix-dropdown id="dropdown" trigger="trigger" placement="bottom-start">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      `);

      const dropdown = page.locator('#dropdown');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.getByRole('button', { name: 'Trigger' }).click();
      await expect(dropdown).toHaveAttribute(
        'data-ix-dropdown-placement',
        /^top/
      );

      await dropdown.evaluate((element: HTMLIxDropdownElement) =>
        element.showAt(300, 200)
      );
      await expectTopLeftAt(dropdown, 300, 200);
      await expect(dropdown).toHaveAttribute(
        'data-ix-dropdown-placement',
        'bottom-start'
      );
    }
  );

  regressionTest(
    'showAt moves focus into a dropdown with a trigger',
    async ({ mount, page }) => {
      await mount(html`
        <ix-button id="trigger">Trigger</ix-button>
        <input id="target" aria-label="Name" />
        <ix-dropdown id="context-menu" trigger="trigger">
          <ix-dropdown-item label="Copy"></ix-dropdown-item>
          <ix-dropdown-item label="Paste"></ix-dropdown-item>
        </ix-dropdown>
      `);
      await openContextMenuOnRightClick(page, '#target');

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      const input = page.getByLabel('Name');
      await input.click();
      await input.click({ button: 'right' });
      await expect(dropdown).toBeFocused();

      const items = dropdown.locator('ix-dropdown-item');
      await page.keyboard.press('ArrowDown');
      await expect(items.nth(0)).toHaveClass(/ix-focused/);
      await page.keyboard.press('ArrowDown');
      await expect(items.nth(1)).toHaveClass(/ix-focused/);

      await page.keyboard.press('Escape');
      await expect(dropdown).not.toBeVisible();
      await expect(input).toBeFocused();
    }
  );

  regressionTest(
    'closes with a containing popover without trigger',
    async ({ mount, page }) => {
      await mount(html`
        <ix-button id="popover-trigger">Open popover</ix-button>
        <ix-popover id="popover" trigger="popover-trigger">
          <ix-popover-content>
            Content
            <ix-dropdown id="context-menu">
              <ix-dropdown-item label="Copy"></ix-dropdown-item>
            </ix-dropdown>
          </ix-popover-content>
        </ix-popover>
      `);

      const popover = page.locator('#popover');
      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await popover.evaluate((element: HTMLIxPopoverElement) =>
        element.showPopover()
      );
      await dropdown.evaluate((element: HTMLIxDropdownElement) =>
        element.showAt(100, 100)
      );
      await expect(dropdown).toBeVisible();

      await popover.evaluate((element: HTMLIxPopoverElement) =>
        element.hidePopover()
      );
      await expect
        .poll(() =>
          dropdown.evaluate((element: HTMLIxDropdownElement) => element.show)
        )
        .toBe(false);

      await popover.evaluate((element: HTMLIxPopoverElement) =>
        element.showPopover()
      );
      await expect(page.getByText('Content')).toBeVisible();
      await expect(dropdown).not.toBeVisible();
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
      'exposes the active item via aria-activedescendant',
      async ({ mount, page }) => {
        await mount(contextMenuFixture());
        await openContextMenuOnRightClick(page);

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        await page.mouse.click(100, 100, { button: 'right' });
        await expect(dropdown).toBeFocused();

        const activeDescendantLabel = () =>
          dropdown.evaluate((element) => {
            const id = element.getAttribute('aria-activedescendant');
            return id
              ? (document.getElementById(id)?.getAttribute('label') ?? null)
              : null;
          });

        await page.keyboard.press('ArrowDown');
        await expect.poll(activeDescendantLabel).toBe('Copy');

        await page.keyboard.press('ArrowDown');
        await expect.poll(activeDescendantLabel).toBe('Paste');

        await page.keyboard.press('Escape');
        await expect(dropdown).not.toHaveAttribute('aria-activedescendant');
      }
    );

    regressionTest(
      'restores focus to the previously focused element after item click',
      async ({ mount, page }) => {
        await mount(html`
          <input id="target" aria-label="Name" />
          <ix-dropdown id="context-menu" role="menu">
            <ix-dropdown-item label="Paste"></ix-dropdown-item>
          </ix-dropdown>
        `);
        await openContextMenuOnRightClick(page, '#target');

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        const input = page.getByLabel('Name');
        await input.click();
        await input.click({ button: 'right' });
        await expect(dropdown).toBeFocused();

        await page.getByRole('menuitem', { name: 'Paste' }).click();
        await expect(dropdown).not.toBeVisible();
        await expect(input).toBeFocused();
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

    regressionTest(
      'supports keyboard navigation with an anchor',
      async ({ mount, page }) => {
        await mount(html`
          <div id="anchor">Anchor</div>
          <ix-dropdown id="context-menu" role="menu" anchor="anchor">
            <ix-dropdown-item label="Copy"></ix-dropdown-item>
            <ix-dropdown-item label="Paste"></ix-dropdown-item>
          </ix-dropdown>
        `);
        await openContextMenuOnRightClick(page, '#anchor');

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        await page.getByText('Anchor').click({ button: 'right' });
        await expect(dropdown).toBeFocused();

        const items = dropdown.locator('ix-dropdown-item');
        await page.keyboard.press('ArrowDown');
        await expect(items.nth(0)).toHaveClass(/ix-focused/);
        await page.keyboard.press('End');
        await expect(items.nth(1)).toHaveClass(/ix-focused/);

        await page.keyboard.press('Enter');
        await expect(dropdown).not.toBeVisible();
      }
    );

    regressionTest.describe('Tab with disabled focus trap', () => {
      const tabFixture = html`
        <button>Before</button>
        <button id="target">Target</button>
        <button>After</button>
        <ix-dropdown id="context-menu" role="menu" disable-focus-trap>
          <ix-dropdown-item label="Copy"></ix-dropdown-item>
        </ix-dropdown>
      `;

      regressionTest(
        'Tab closes and moves focus after the opener',
        async ({ mount, page }) => {
          await mount(tabFixture);
          await openContextMenuOnRightClick(page, '#target');

          const dropdown = page.locator('#context-menu');
          await expect(dropdown).toHaveAttribute('hydrated');

          await page.getByRole('button', { name: 'Target' }).focus();
          await page
            .getByRole('button', { name: 'Target' })
            .dispatchEvent('contextmenu');
          await expect(dropdown).toBeFocused();

          await page.keyboard.press('Tab');
          await expect(dropdown).not.toBeVisible();
          await expect(
            page.getByRole('button', { name: 'After' })
          ).toBeFocused();
        }
      );

      regressionTest(
        'Shift+Tab closes and returns focus to the opener',
        async ({ mount, page }) => {
          await mount(tabFixture);
          await openContextMenuOnRightClick(page, '#target');

          const dropdown = page.locator('#context-menu');
          await expect(dropdown).toHaveAttribute('hydrated');

          const target = page.getByRole('button', { name: 'Target' });
          await target.focus();
          await target.dispatchEvent('contextmenu');
          await expect(dropdown).toBeFocused();

          await page.keyboard.press('Shift+Tab');
          await expect(dropdown).not.toBeVisible();
          await expect(target).toBeFocused();
        }
      );
    });

    regressionTest(
      'roving-tabindex Tab continues after an ix-button opener',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="opener">Opener</ix-button>
          <button>Next</button>
          <ix-dropdown
            id="context-menu"
            role="menu"
            navigation-mode="roving-tabindex"
          >
            <ix-dropdown-item label="Copy"></ix-dropdown-item>
          </ix-dropdown>
        `);
        await openContextMenuOnRightClick(page, '#opener');

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        const opener = page.getByRole('button', { name: 'Opener' });
        await opener.focus();
        await opener.dispatchEvent('contextmenu');
        await expect(dropdown.locator('ix-dropdown-item')).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(dropdown).not.toBeVisible();
        await expect(page.getByRole('button', { name: 'Next' })).toBeFocused();
      }
    );

    regressionTest(
      'keeps keyboard focus when switching to active-descendant',
      async ({ mount, page }) => {
        await mount(contextMenuFixture('navigation-mode="roving-tabindex"'));
        await openContextMenuOnRightClick(page);

        const dropdown = page.locator('#context-menu');
        await expect(dropdown).toHaveAttribute('hydrated');

        await page.mouse.click(100, 100, { button: 'right' });
        const items = dropdown.locator('ix-dropdown-item');
        await expect(items.nth(0)).toBeFocused();

        await dropdown.evaluate((element: HTMLIxDropdownElement) => {
          element.navigationMode = 'active-descendant';
        });
        await expect(dropdown).toBeFocused();

        await page.keyboard.press('End');
        await expect(items.nth(2)).toHaveClass(/ix-focused/);
      }
    );

    regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
      await mount(contextMenuFixture());
      await openContextMenuOnRightClick(page);

      const dropdown = page.locator('#context-menu');
      await expect(dropdown).toHaveAttribute('hydrated');

      await page.mouse.click(100, 100, { button: 'right' });
      await expect(dropdown).toBeVisible();
      await expect(dropdown).not.toHaveAttribute('aria-modal');

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
