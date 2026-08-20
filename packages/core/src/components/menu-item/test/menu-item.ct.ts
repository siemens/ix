/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item>Hello World</ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const menuItem1 = page.locator('ix-menu-item').nth(0);
  const menuItem2 = page.locator('ix-menu-item').nth(1);
  await expect(menuItem1).toHaveClass(/hydrated/);
  await expect(menuItem2).toHaveClass(/hydrated/);

  await expect(menuItem1.locator('.tab-text').locator('slot')).toBeAttached();
});

regressionTest(
  'shares ARIA observation across hosts',
  async ({ mount, page }) => {
    const originalGlobals = await page.evaluateHandle(() => {
      const testWindow = window as Window & {
        getAriaObserverCount?: () => number;
      };

      return {
        mutationObserver: window.MutationObserver,
        getAriaObserverCount: testWindow.getAriaObserverCount,
        hadGetAriaObserverCount: Object.hasOwn(
          testWindow,
          'getAriaObserverCount'
        ),
      };
    });

    try {
      await page.evaluate(() => {
        const NativeMutationObserver = window.MutationObserver;
        const ariaObservers = new Set<MutationObserver>();

        window.MutationObserver = class extends NativeMutationObserver {
          override observe(target: Node, options?: MutationObserverInit): void {
            if (
              options?.attributeFilter?.includes('aria-label') &&
              options.attributeFilter.includes('role')
            ) {
              ariaObservers.add(this);
            }
            super.observe(target, options);
          }
        };

        (
          window as Window & { getAriaObserverCount?: () => number }
        ).getAriaObserverCount = () => ariaObservers.size;
      });

      const items = Array.from(
        { length: 100 },
        (_, index) => `<ix-menu-item>Item ${index}</ix-menu-item>`
      ).join('');
      await mount(
        `<ix-application><ix-menu>${items}</ix-menu></ix-application>`
      );

      const menuItems = page.locator('ix-menu-item');
      await expect(menuItems).toHaveCount(100);
      await expect(menuItems.last()).toHaveClass(/hydrated/);

      await menuItems.evaluateAll((elements) => {
        elements.forEach((element, index) =>
          element.setAttribute('aria-label', `Item label ${index}`)
        );
      });

      await expect(menuItems.first().getByRole('menuitem')).toHaveAttribute(
        'aria-label',
        'Item label 0'
      );
      await expect(menuItems.last().getByRole('menuitem')).toHaveAttribute(
        'aria-label',
        'Item label 99'
      );
      expect(
        await page.evaluate(() =>
          (
            window as Window & { getAriaObserverCount?: () => number }
          ).getAriaObserverCount?.()
        )
      ).toBe(1);
    } finally {
      try {
        await page.evaluate(
          ({
            mutationObserver,
            getAriaObserverCount,
            hadGetAriaObserverCount,
          }) => {
            const testWindow = window as Window & {
              getAriaObserverCount?: () => number;
            };

            window.MutationObserver = mutationObserver;
            if (hadGetAriaObserverCount) {
              testWindow.getAriaObserverCount = getAriaObserverCount;
            } else {
              Reflect.deleteProperty(testWindow, 'getAriaObserverCount');
            }
          },
          originalGlobals
        );
      } finally {
        await originalGlobals.dispose();
      }
    }
  }
);

regressionTest(
  'releases disconnected ARIA-observed hosts',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-button id="retained-aria-host">Retained button</ix-button>
      </ix-application>
    `);
    await expect(page.locator('#retained-aria-host')).toHaveClass(/hydrated/);

    await page.evaluate(async () => {
      let hostElement: HTMLIxButtonElement | null =
        document.createElement('ix-button');
      hostElement.textContent = 'Temporary button';
      document.body.append(hostElement);
      await hostElement.componentOnReady();
      hostElement.remove();
      await new Promise(requestAnimationFrame);

      (
        window as Window & {
          disconnectedAriaHost?: WeakRef<HTMLIxButtonElement>;
        }
      ).disconnectedAriaHost = new WeakRef(hostElement);
      hostElement = null;
    });

    const devtools = await page.context().newCDPSession(page);
    await expect
      .poll(async () => {
        await devtools.send('HeapProfiler.collectGarbage');
        return page.evaluate(
          () =>
            (
              window as Window & {
                disconnectedAriaHost?: WeakRef<HTMLIxButtonElement>;
              }
            ).disconnectedAriaHost?.deref() === undefined
        );
      })
      .toBe(true);

    await devtools.detach();
    await page.evaluate(() => {
      Reflect.deleteProperty(window, 'disconnectedAriaHost');
    });
  }
);

regressionTest('updates inherited ARIA attributes', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item aria-label="Initial label" aria-level="0">
          Foo bar
        </ix-menu-item>
      </ix-menu>
    </ix-application>
  `);
  const menuItem = page.locator('ix-menu-item');
  const button = menuItem.getByRole('menuitem');

  await expect(button).toHaveAttribute('aria-label', 'Initial label');
  await expect(button).toHaveAttribute('aria-level', '0');

  await menuItem.evaluate((element) => {
    element.removeAttribute('aria-label');
    element.removeAttribute('aria-level');
  });

  await expect(button).not.toHaveAttribute('aria-label');
  await expect(button).not.toHaveAttribute('aria-level');

  await menuItem.evaluate((element) => {
    element.setAttribute('aria-label', 'Updated label');
    element.setAttribute('aria-level', '1');
  });

  await expect(button).toHaveAttribute('aria-label', 'Updated label');
  await expect(button).toHaveAttribute('aria-level', '1');

  await menuItem.evaluate((element) => {
    element.removeAttribute('aria-label');
    element.removeAttribute('aria-level');
  });

  await expect(button).not.toHaveAttribute('aria-label');
  await expect(button).not.toHaveAttribute('aria-level');

  await menuItem.evaluate((element) => {
    const parent = element.parentElement;
    element.setAttribute('aria-label', 'Queued before disconnect');
    element.remove();
    parent?.append(element);
  });

  await expect(button).toHaveAttribute(
    'aria-label',
    'Queued before disconnect'
  );

  await menuItem.evaluate((element) => {
    const parent = element.parentElement;
    element.remove();
    element.setAttribute('aria-label', 'Changed while disconnected');
    element.setAttribute('aria-level', '2');
    element.setAttribute('data-reconnect-marker', 'preserved');
    parent?.append(element);
  });

  await expect(button).toHaveAttribute(
    'aria-label',
    'Changed while disconnected'
  );
  await expect(button).toHaveAttribute('aria-level', '2');
  await expect(menuItem).not.toHaveAttribute('aria-label');
  await expect(menuItem).not.toHaveAttribute('aria-level');
  await expect(menuItem).toHaveAttribute('data-reconnect-marker', 'preserved');
});

async function expectMenuItemToHaveTooltip(
  page: Page,
  menuItem: Locator,
  text: string
) {
  await menuItem.hover();
  // Default tooltip delay is 1000ms waiting another 500 ms
  await page.waitForTimeout(1500);

  await expect(menuItem.locator('ix-tooltip')).toHaveClass(/visible/);
  await expect(menuItem.locator('ix-tooltip')).toHaveText(text);
}

regressionTest('show tooltip', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item label="Hello World"></ix-menu-item>
        <ix-menu-item tooltip-text="my tooltip">Foo bar</ix-menu-item>
        <ix-menu-item label="Hello World" tooltip-text="my other tooltip"></ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const slotItem = page.locator('ix-menu-item').nth(0);
  const labelItem = page.locator('ix-menu-item').nth(1);
  const slotCustomTooltipItem = page.locator('ix-menu-item').nth(2);
  const labelCustomTooltipItem = page.locator('ix-menu-item').nth(3);
  await expect(slotItem).toHaveClass(/hydrated/);
  await expect(labelItem).toHaveClass(/hydrated/);
  await expect(slotCustomTooltipItem).toHaveClass(/hydrated/);
  await expect(labelCustomTooltipItem).toHaveClass(/hydrated/);

  await expectMenuItemToHaveTooltip(page, slotItem, 'Foo bar');
  await expectMenuItemToHaveTooltip(page, labelItem, 'Hello World');
  await expectMenuItemToHaveTooltip(page, slotCustomTooltipItem, 'my tooltip');
  await expectMenuItemToHaveTooltip(
    page,
    labelCustomTooltipItem,
    'my other tooltip'
  );
});

regressionTest('update item text', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item>Hello World</ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const menuItem1 = page.locator('ix-menu-item').nth(0);
  const menuItem2 = page.locator('ix-menu-item').nth(1);
  await expect(menuItem1).toHaveClass(/hydrated/);
  await expect(menuItem2).toHaveClass(/hydrated/);

  await expect(menuItem1.locator('.tab-text').locator('slot')).toBeAttached();
  await expect(menuItem1.locator('ix-tooltip')).toHaveText(/Foo bar/);

  await menuItem1.evaluate(
    (item: HTMLIxMenuItemElement) => (item.innerText = 'Test123')
  );

  await menuItem1.hover();
  // Default tooltip delay is 1000ms waiting another 500 ms
  await page.waitForTimeout(1500);

  await expect(menuItem1.locator('ix-tooltip')).toHaveClass(/visible/);
  await expect(menuItem1.locator('ix-tooltip')).toHaveText(/Test123/);
});
