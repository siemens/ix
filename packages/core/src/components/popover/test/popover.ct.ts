/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
import { iconInfo } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

const html = String.raw;
const HOVER_HIDE_MS = 200;

function popoverDialog(popover: Locator) {
  return popover.locator('[role="dialog"], [role="status"]').first();
}

async function expectPopoverOpen(popover: Locator) {
  await expect(popover).toHaveClass(/visible/);
  await expect(popoverDialog(popover)).toBeVisible();
}

async function expectPopoverClosed(popover: Locator) {
  await expect(popover).not.toHaveClass(/visible/);
  await expect(popoverDialog(popover)).not.toBeVisible();
}

async function openViaClick(page: Page, triggerId = 'trigger') {
  const trigger = page.locator(`ix-button#${triggerId}`);
  await expect(trigger).toHaveAttribute('data-ix-popover-trigger', '');
  await trigger.click({ force: true });
}

async function popoverForTrigger(page: Page, triggerId = 'trigger') {
  const trigger = page.locator(`ix-button#${triggerId}`);
  await expect(trigger).toHaveAttribute('aria-controls', /.+/);
  const popoverId = await trigger.getAttribute('aria-controls');
  return page.locator(`#${popoverId}`);
}

async function mountPopover(
  mount: (markup: string) => Promise<unknown>,
  page: Page,
  markup: string
) {
  await mount(markup);
  await expect(page.locator('ix-popover').first()).toHaveClass(/hydrated/);
}

function placementTestMarkup(placement: 'top' | 'bottom' | 'left' | 'right') {
  return html`
    <div
      style="display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 12rem;"
    >
      ${interactivePopoverMarkup({
        placement,
        hasSpike: true,
        showFooterDismiss: false,
      })}
    </div>
  `;
}

function interactivePopoverMarkup(options?: {
  id?: string;
  triggerId?: string;
  triggerLabel?: string;
  placement?: string;
  closeOnClickOutside?: boolean;
  triggerMode?: string;
  hasSpike?: boolean;
  ariaLabel?: string;
  hideClose?: boolean;
  showFooterDismiss?: boolean;
}) {
  const {
    id = 'popover',
    triggerId = 'trigger',
    triggerLabel = 'Open popover',
    placement = 'bottom',
    closeOnClickOutside,
    triggerMode,
    hasSpike,
    ariaLabel,
    hideClose,
    showFooterDismiss = true,
  } = options ?? {};

  return html`
    <ix-button id="${triggerId}">${triggerLabel}</ix-button>
    <ix-popover
      id="${id}"
      trigger="${triggerId}"
      placement="${placement}"
      ${closeOnClickOutside ? 'close-on-click-outside' : ''}
      ${triggerMode ? `trigger-mode="${triggerMode}"` : ''}
      ${hasSpike ? 'has-spike' : ''}
      ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
    >
      <ix-popover-header ${hideClose ? 'hide-close' : ''}
        >Popover title</ix-popover-header
      >
      <ix-popover-content>Popover body content</ix-popover-content>
      ${showFooterDismiss
        ? html`<ix-popover-footer>
            <ix-button id="${id}-dismiss">Dismiss</ix-button>
          </ix-popover-footer>`
        : ''}
    </ix-popover>
  `;
}

async function expectPlacement(
  page: Page,
  triggerSelector: string,
  popover: Locator,
  placement: 'top' | 'bottom' | 'left' | 'right'
) {
  await expect(async () => {
    const triggerBox = await page.locator(triggerSelector).boundingBox();
    const dialogBox = await popoverDialog(popover).boundingBox();

    expect(triggerBox).not.toBeNull();
    expect(dialogBox).not.toBeNull();

    const tolerance = 24;

    if (placement === 'bottom') {
      expect(dialogBox!.y).toBeGreaterThanOrEqual(
        triggerBox!.y + triggerBox!.height - tolerance
      );
    }

    if (placement === 'top') {
      expect(dialogBox!.y + dialogBox!.height).toBeLessThanOrEqual(
        triggerBox!.y + tolerance
      );
    }

    if (placement === 'right') {
      expect(dialogBox!.x).toBeGreaterThanOrEqual(
        triggerBox!.x + triggerBox!.width - tolerance
      );
    }

    if (placement === 'left') {
      expect(dialogBox!.x + dialogBox!.width).toBeLessThanOrEqual(
        triggerBox!.x + tolerance
      );
    }
  }).toPass({ timeout: 3000 });
}

async function hasSpikeElement(popover: Locator) {
  return popover.evaluate(
    (element) => !!element.shadowRoot?.querySelector('.spike')
  );
}

regressionTest.describe('ix-popover', () => {
  regressionTest.describe('rendering', () => {
    regressionTest(
      'hydrates and is closed by default',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        const popover = page.locator('ix-popover').first();

        await expect(page.locator('ix-button#trigger')).toHaveAttribute(
          'data-ix-popover-trigger',
          ''
        );
        await expect(popover).toHaveClass(/hydrated/);
        await expect(popover).not.toHaveClass(/visible/);
        await expect(popoverDialog(popover)).not.toBeVisible();
      }
    );

    regressionTest(
      'renders sub-components in slots',
      async ({ mount, page }) => {
        await mount(
          html`
            <ix-button id="trigger">Open</ix-button>
            <ix-popover id="popover" trigger="trigger">
              <ix-popover-header icon="info">Title</ix-popover-header>
              <ix-popover-image
                src="/assets/test.png"
                alt="Preview"
              ></ix-popover-image>
              <ix-popover-content>Body</ix-popover-content>
              <ix-popover-footer>
                <span slot="start">Step 1/2</span>
                <ix-button>Action</ix-button>
              </ix-popover-footer>
            </ix-popover>
          `,
          { icons: { iconInfo } }
        );

        await openViaClick(page);
        const popover = await popoverForTrigger(page);

        await expect(popover.locator('ix-popover-header')).toBeVisible();
        await expect(popover.locator('ix-popover-image')).toBeVisible();
        await expect(popover.locator('ix-popover-content')).toHaveText(/Body/);
        await expect(popover.locator('ix-popover-footer')).toContainText(
          'Step 1/2'
        );
      }
    );

    regressionTest(
      'renders minimal informational content',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Info</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-content>Information only</ix-popover-content>
          </ix-popover>
        `);

        await openViaClick(page);
        await expect(page.locator('ix-popover-content')).toHaveText(
          /Information only/
        );
      }
    );

    regressionTest(
      'uses dialog popover manual in shadow DOM',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        await openViaClick(page);

        const dialog = (await popoverForTrigger(page)).getByRole('dialog');
        await expect(dialog).toHaveAttribute('popover', 'manual');
      }
    );
  });

  regressionTest.describe('click trigger', () => {
    regressionTest(
      'opens and closes on trigger click',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await expectPopoverOpen(popover);

        await openViaClick(page);
        await expectPopoverClosed(popover);
      }
    );

    regressionTest('opens on Enter and Space', async ({ mount, page }) => {
      await mount(interactivePopoverMarkup());
      const popover = await popoverForTrigger(page);
      const trigger = page.locator('ix-button#trigger');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expectPopoverOpen(popover);

      await page.keyboard.press('Escape');
      await expectPopoverClosed(popover);

      await trigger.focus();
      await page.keyboard.press('Space');
      await expectPopoverOpen(popover);
    });

    regressionTest(
      'emits showChanged when opening and closing',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());

        await page.evaluate(() => {
          (
            window as unknown as { __showChangedEvents: boolean[] }
          ).__showChangedEvents = [];
          document
            .querySelector('ix-popover')
            ?.addEventListener('showChanged', (event) => {
              (
                window as unknown as { __showChangedEvents: boolean[] }
              ).__showChangedEvents.push(
                (event as CustomEvent<boolean>).detail
              );
            });
        });

        await openViaClick(page);
        await expect
          .poll(() =>
            page.evaluate(
              () =>
                (window as unknown as { __showChangedEvents: boolean[] })
                  .__showChangedEvents
            )
          )
          .toEqual([true]);

        await page.keyboard.press('Escape');
        await expect
          .poll(() =>
            page.evaluate(
              () =>
                (window as unknown as { __showChangedEvents: boolean[] })
                  .__showChangedEvents
            )
          )
          .toEqual([true, false]);
      }
    );
  });

  regressionTest.describe('hover trigger', () => {
    regressionTest.describe.configure({ mode: 'serial' });

    regressionTest(
      'opens on mouseenter and closes on mouseleave',
      async ({ mount, page }) => {
        await mount(
          interactivePopoverMarkup({
            triggerMode: 'hover',
            showFooterDismiss: false,
          })
        );

        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger');

        await trigger.hover();
        await expectPopoverOpen(popover);

        await page.mouse.move(800, 600);
        await expect(async () => {
          await expectPopoverClosed(popover);
        }).toPass({ timeout: 3000 });
      }
    );

    regressionTest(
      'stays open when pointer moves into the panel',
      async ({ mount, page }) => {
        await mount(
          interactivePopoverMarkup({
            triggerMode: 'hover',
            closeOnClickOutside: true,
          })
        );

        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger button');

        await trigger.hover();
        await expectPopoverOpen(popover);

        await popoverDialog(popover).hover();
        await page.waitForTimeout(HOVER_HIDE_MS);
        await expectPopoverOpen(popover);
      }
    );

    regressionTest(
      'opens on focus and restores focus after Escape',
      async ({ mount, page }) => {
        await mount(
          interactivePopoverMarkup({
            triggerMode: 'hover',
            closeOnClickOutside: true,
          })
        );

        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger');

        await trigger.focus();
        await expectPopoverOpen(popover);

        await page.keyboard.press('Escape');
        await expectPopoverClosed(popover);
        await expect(trigger).toBeFocused();
      }
    );

    regressionTest(
      'does not keep focus on trigger after pointer dismiss',
      async ({ mount, page }) => {
        await mount(
          interactivePopoverMarkup({
            triggerMode: 'hover',
            closeOnClickOutside: true,
            showFooterDismiss: false,
          })
        );

        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger button');

        await trigger.hover();
        await expectPopoverOpen(popover);

        await page.mouse.move(800, 600);
        await expect(async () => {
          await expectPopoverClosed(popover);
        }).toPass({ timeout: 3000 });

        await expect
          .poll(async () =>
            page.evaluate(() => {
              const triggerButton = document
                .querySelector('ix-button#trigger')
                ?.shadowRoot?.querySelector('button');
              return document.activeElement === triggerButton;
            })
          )
          .toBe(false);
      }
    );
  });

  regressionTest.describe('placement and spike', () => {
    for (const placement of ['top', 'bottom', 'left', 'right'] as const) {
      regressionTest(
        `positions popover ${placement}`,
        async ({ mount, page }) => {
          await mount(placementTestMarkup(placement));

          const popover = await popoverForTrigger(page);
          await openViaClick(page);
          await expectPlacement(page, 'ix-button#trigger', popover, placement);
        }
      );
    }

    regressionTest(
      'shows spike when hasSpike is true',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ hasSpike: true }));
        await openViaClick(page);

        expect(await hasSpikeElement(await popoverForTrigger(page))).toBe(true);
      }
    );

    regressionTest('hides spike by default', async ({ mount, page }) => {
      await mount(interactivePopoverMarkup());
      await openViaClick(page);

      expect(await hasSpikeElement(await popoverForTrigger(page))).toBe(false);
    });
  });

  regressionTest.describe('programmatic API', () => {
    regressionTest(
      'opens and closes via showPopover and hidePopover',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());

        await page.evaluate(async () => {
          await (
            document.querySelector('ix-popover') as HTMLIxPopoverElement
          ).showPopover();
        });
        const popover = await popoverForTrigger(page);
        await expectPopoverOpen(popover);

        await page.evaluate(async () => {
          await (
            document.querySelector('ix-popover') as HTMLIxPopoverElement
          ).hidePopover();
        });
        await expectPopoverClosed(popover);
      }
    );

    regressionTest('reacts to show prop changes', async ({ mount, page }) => {
      await mountPopover(mount, page, interactivePopoverMarkup());
      const popover = await popoverForTrigger(page);

      await page.evaluate(() => {
        (document.querySelector('ix-popover') as HTMLIxPopoverElement).show =
          true;
      });
      await expectPopoverOpen(popover);

      await page.evaluate(() => {
        (document.querySelector('ix-popover') as HTMLIxPopoverElement).show =
          false;
      });
      await expectPopoverClosed(popover);
    });
  });

  regressionTest.describe('showChange guards', () => {
    regressionTest(
      'prevents open when showChange is canceled',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger');

        // Prevent all open attempts (Enter triggers both keydown and click)
        await page.evaluate(() => {
          document
            .querySelector('ix-popover')
            ?.addEventListener('showChange', (event) => {
              if ((event as CustomEvent<boolean>).detail === true) {
                event.preventDefault();
              }
            });
        });

        await trigger.focus();
        await page.keyboard.press('Enter');

        // Wait a bit for both keydown and click events to process
        await page.waitForTimeout(100);
        await expectPopoverClosed(popover);
      }
    );

    regressionTest(
      'prevents close when showChange is canceled',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await expectPopoverOpen(popover);

        await page.evaluate(() => {
          document
            .querySelector('ix-popover')
            ?.addEventListener('showChange', (event) => {
              if ((event as CustomEvent<boolean>).detail === false) {
                event.preventDefault();
              }
            });
        });

        await page.keyboard.press('Escape');
        await expectPopoverOpen(popover);
      }
    );
  });

  regressionTest.describe('close behavior', () => {
    regressionTest('closes on Escape', async ({ mount, page }) => {
      await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
      const popover = await popoverForTrigger(page);

      await openViaClick(page);
      await page.keyboard.press('Escape');
      await expectPopoverClosed(popover);
    });

    regressionTest(
      'does not close on outside click by default',
      async ({ mount, page }) => {
        await mount(html`
          <div style="padding: 8rem 0 0 8rem;">
            ${interactivePopoverMarkup()}
          </div>
        `);
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await page.mouse.click(16, 16);
        await expectPopoverOpen(popover);
      }
    );

    regressionTest(
      'closes on outside click when closeOnClickOutside is enabled',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await page.mouse.click(5, 5);
        await expectPopoverClosed(popover);
      }
    );

    regressionTest(
      'closes via header close button',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await popover
          .locator('ix-popover-header')
          .getByRole('button', { name: 'Close' })
          .click();
        await expectPopoverClosed(popover);
      }
    );

    regressionTest(
      'keeps popover open when closeClick is prevented',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await page.evaluate(() => {
          const header = document.querySelector('ix-popover-header')!;
          header.addEventListener('closeClick', (event) => {
            event.preventDefault();
          });
        });

        await popover
          .locator('ix-popover-header')
          .getByRole('button', { name: 'Close' })
          .click();
        await expectPopoverOpen(popover);
      }
    );

    regressionTest(
      'hides header close button when hideClose is set',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ hideClose: true }));
        await openViaClick(page);

        await expect(
          page
            .locator('ix-popover-header')
            .getByRole('button', { name: 'Close' })
        ).toHaveCount(0);
      }
    );
  });

  regressionTest.describe('focus management', () => {
    regressionTest(
      'focuses first focusable element and traps focus for interactive popovers',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger');

        await trigger.focus();
        await page.keyboard.press('Enter');
        await expectPopoverOpen(popover);

        await page.keyboard.press('Tab');
        await expect(
          popover.locator('ix-popover-header button[aria-label="Close"]')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          page.locator('ix-button#popover-dismiss button')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          popover.locator('ix-popover-header button[aria-label="Close"]')
        ).toBeFocused();
      }
    );

    regressionTest(
      'restores focus to trigger after Escape for interactive popovers',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        const trigger = page.locator('ix-button#trigger');

        await trigger.focus();
        await page.keyboard.press('Enter');
        await page.keyboard.press('Escape');

        await expect(trigger).toBeFocused();
      }
    );

    regressionTest(
      'keeps focus on trigger for informational popovers',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Info</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-content>Information only</ix-popover-content>
          </ix-popover>
        `);

        const trigger = page.locator('ix-button#trigger');
        const popover = await popoverForTrigger(page);

        await trigger.focus();
        await page.keyboard.press('Enter');
        await expectPopoverOpen(popover);
        await expect(trigger).toBeFocused();
        await expect(popoverDialog(popover)).toHaveAttribute(
          'aria-modal',
          'false'
        );
      }
    );

    regressionTest(
      'sets aria-modal true for interactive popovers',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        await openViaClick(page);

        await expect(
          popoverDialog(await popoverForTrigger(page))
        ).toHaveAttribute('aria-modal', 'true');
      }
    );

    regressionTest(
      'delegates focus to the close button when clicking the header',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        const popover = await popoverForTrigger(page);

        await openViaClick(page);
        await popover
          .locator('ix-popover-header')
          .click({ position: { x: 8, y: 8 } });

        await expect(
          popover
            .locator('ix-popover-header')
            .getByRole('button', { name: 'Close' })
        ).toBeFocused();
      }
    );
  });

  regressionTest.describe('nesting', () => {
    const nestedMarkup = html`
      <div style="padding: 8rem 0 0 8rem;">
        <ix-button id="outer-trigger">Outer</ix-button>
        <ix-popover
          id="outer-popover"
          trigger="outer-trigger"
          close-on-click-outside
        >
          <ix-popover-header>Outer popover</ix-popover-header>
          <ix-popover-content>
            <ix-button id="inner-trigger">Inner</ix-button>
            <ix-popover
              id="inner-popover"
              trigger="inner-trigger"
              close-on-click-outside
            >
              <ix-popover-header>Inner popover</ix-popover-header>
              <ix-popover-content>Nested body</ix-popover-content>
            </ix-popover>
          </ix-popover-content>
        </ix-popover>
        <ix-button id="other-trigger">Other</ix-button>
        <ix-popover
          id="other-popover"
          trigger="other-trigger"
          close-on-click-outside
        >
          <ix-popover-header>Other popover</ix-popover-header>
          <ix-popover-content>Other body</ix-popover-content>
        </ix-popover>
      </div>
    `;

    regressionTest(
      'keeps parent open when opening nested popover',
      async ({ mount, page }) => {
        await mount(nestedMarkup);

        await openViaClick(page, 'outer-trigger');
        await openViaClick(page, 'inner-trigger');
        const outer = await popoverForTrigger(page, 'outer-trigger');
        const inner = await popoverForTrigger(page, 'inner-trigger');
        await expectPopoverOpen(outer);
        await expectPopoverOpen(inner);
      }
    );

    regressionTest(
      'dismisses nested popover when parent closes',
      async ({ mount, page }) => {
        await mount(nestedMarkup);

        await openViaClick(page, 'outer-trigger');
        await openViaClick(page, 'inner-trigger');
        const outer = await popoverForTrigger(page, 'outer-trigger');
        const inner = await popoverForTrigger(page, 'inner-trigger');

        await outer
          .locator(':scope > ix-popover-header')
          .getByRole('button', {
            name: 'Close',
          })
          .click();

        await expectPopoverClosed(outer);
        await expectPopoverClosed(inner);
      }
    );

    regressionTest(
      'dismisses open chain when unrelated popover opens',
      async ({ mount, page }) => {
        await mount(nestedMarkup);

        await openViaClick(page, 'outer-trigger');
        await openViaClick(page, 'inner-trigger');
        const outer = await popoverForTrigger(page, 'outer-trigger');
        const inner = await popoverForTrigger(page, 'inner-trigger');

        await openViaClick(page, 'other-trigger');
        const other = await popoverForTrigger(page, 'other-trigger');

        await expectPopoverOpen(other);
        await expectPopoverClosed(outer);
        await expectPopoverClosed(inner);
      }
    );

    regressionTest(
      'dismisses nested popovers on outside click',
      async ({ mount, page }) => {
        await mount(nestedMarkup);

        await openViaClick(page, 'outer-trigger');
        await openViaClick(page, 'inner-trigger');
        const outer = await popoverForTrigger(page, 'outer-trigger');
        const inner = await popoverForTrigger(page, 'inner-trigger');

        await page.mouse.click(5, 5);

        await expectPopoverClosed(outer);
        await expectPopoverClosed(inner);
      }
    );
  });

  regressionTest.describe('sub-components', () => {
    regressionTest(
      'renders footer start slot content',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Open</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-footer>
              <span slot="start">Step 2/3</span>
              <ix-button>Next</ix-button>
            </ix-popover-footer>
          </ix-popover>
        `);

        await openViaClick(page);
        await expect(page.locator('ix-popover-footer')).toContainText(
          'Step 2/3'
        );
      }
    );

    regressionTest(
      'renders image with src and alt',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Open</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-image
              src="/assets/test.png"
              alt="Release preview"
            ></ix-popover-image>
          </ix-popover>
        `);

        await openViaClick(page);
        const image = page.locator('ix-popover-image img');
        await expect(image).toHaveAttribute('src', /test\.png/);
        await expect(image).toHaveAttribute('alt', 'Release preview');
      }
    );

    regressionTest(
      'removes content padding when paddingless is set',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Open</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-content paddingless
              >Paddingless body</ix-popover-content
            >
          </ix-popover>
        `);

        await openViaClick(page);
        await expect(page.locator('ix-popover-content')).toHaveClass(
          /paddingless/
        );
      }
    );

    regressionTest(
      'supports vertical footer alignment',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Open</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-footer alignment="vertical">
              <ix-button>Primary</ix-button>
              <ix-button variant="secondary">Secondary</ix-button>
            </ix-popover-footer>
          </ix-popover>
        `);

        await openViaClick(page);
        await expect(page.locator('ix-popover-footer')).toHaveClass(
          /alignment-vertical/
        );
      }
    );
  });

  regressionTest.describe('accessibility', () => {
    regressionTest(
      'updates trigger aria-expanded and aria-controls',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        const popover = await popoverForTrigger(page);
        const trigger = page.locator('ix-button#trigger');

        await expect(trigger).toHaveAttribute('aria-expanded', 'false');

        await openViaClick(page);

        const popoverId = await popover.getAttribute('id');
        await expect(trigger).toHaveAttribute('aria-expanded', 'true');
        await expect(trigger).toHaveAttribute('aria-controls', popoverId!);
      }
    );

    regressionTest(
      'forwards host aria-label to dialog',
      async ({ mount, page }) => {
        await mount(
          interactivePopoverMarkup({ ariaLabel: 'What is new panel' })
        );
        await openViaClick(page);

        await expect(
          popoverDialog(await popoverForTrigger(page))
        ).toHaveAttribute('aria-label', 'What is new panel');
      }
    );

    regressionTest(
      'forwards custom role to dialog',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Status</ix-button>
          <ix-popover id="popover" trigger="trigger" role="status">
            <ix-popover-content>Status message</ix-popover-content>
          </ix-popover>
        `);

        await openViaClick(page);
        await expect(
          popoverDialog(await popoverForTrigger(page))
        ).toHaveAttribute('role', 'status');
      }
    );

    regressionTest(
      'passes axe for interactive popover',
      async ({ mount, page, makeAxeBuilder }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        await openViaClick(page);

        const accessibilityScanResults = await makeAxeBuilder()
          .exclude('ix-button')
          .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      }
    );

    regressionTest(
      'passes axe for informational popover',
      async ({ mount, page, makeAxeBuilder }) => {
        await mount(html`
          <ix-button id="trigger">Info</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-content>Information only</ix-popover-content>
          </ix-popover>
        `);

        await openViaClick(page);
        const accessibilityScanResults = await makeAxeBuilder()
          .exclude('ix-button')
          .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      }
    );
  });
});
