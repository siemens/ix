/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { iconInfo } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';
import {
  FAR_CORNER_X,
  FAR_CORNER_Y,
  HOVER_HIDE_MS,
  OUTSIDE_CLICK_X,
  OUTSIDE_CLICK_Y,
} from './popover.constants';
import {
  interactivePopoverMarkup,
  nestedPopoverMarkup,
  outerPopoverWithNestedMountMarkup,
  placementTestMarkup,
} from './popover.fixtures';
import {
  expectPlacement,
  injectLateNestedPopover,
  mountPopover,
  PopoverPage,
} from './popover.page';

const html = String.raw;

regressionTest.describe('ix-popover', () => {
  regressionTest.describe('rendering', () => {
    regressionTest(
      'hydrates and is closed by default',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());
        const popover = new PopoverPage(page);

        await expect(popover.trigger).toHaveAttribute(
          'data-ix-popover-trigger',
          ''
        );
        await expect(popover.popoverElement).toHaveClass(/hydrated/);
        await expect(popover.popoverElement).not.toHaveClass(/visible/);
        await expect(
          await popover.dialog(popover.popoverElement)
        ).not.toBeVisible();
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
                image="/assets/test.png"
                image-alt="Preview"
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

        const popover = new PopoverPage(page);
        await popover.open();
        const popoverEl = await popover.getPopover();

        await expect(popoverEl.locator('ix-popover-header')).toBeVisible();
        await expect(popoverEl.locator('ix-popover-image')).toBeVisible();
        await expect(popoverEl.locator('ix-popover-content')).toHaveText(
          /Body/
        );
        await expect(popoverEl.locator('ix-popover-footer')).toContainText(
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

        const popover = new PopoverPage(page);
        await popover.open();
        await expect(page.locator('ix-popover-content')).toHaveText(
          /Information only/
        );
      }
    );

    regressionTest(
      'uses dialog popover manual in shadow DOM',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());
        const popover = new PopoverPage(page);
        await popover.open();

        const popoverEl = await popover.getPopover();
        const dialog = popoverEl.getByRole('dialog');
        await expect(dialog).toHaveAttribute('popover', 'manual');
      }
    );
  });

  regressionTest.describe('click trigger', () => {
    regressionTest(
      'opens and closes on trigger click',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());
        const popover = new PopoverPage(page);

        await popover.open();
        await popover.expectOpen();

        await popover.open();
        await popover.expectClosed();
      }
    );

    regressionTest('opens on Enter and Space', async ({ mount, page }) => {
      await mountPopover(mount, page, interactivePopoverMarkup());
      const popover = new PopoverPage(page);

      await popover.trigger.focus();
      await page.keyboard.press('Enter');
      await popover.expectOpen();

      await page.keyboard.press('Escape');
      await popover.expectClosed();

      await popover.trigger.focus();
      await page.keyboard.press('Space');
      await popover.expectOpen();
    });

    regressionTest(
      'emits showChanged when opening and closing',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());
        await PopoverPage.installShowChangedTracker(page);

        const popover = new PopoverPage(page);
        await popover.open();
        await popover.expectShowChangedEvents([true]);

        await popover.closeWithEscape();
        await popover.expectShowChangedEvents([true, false]);
      }
    );
  });

  regressionTest.describe('placement and spike', () => {
    (['top', 'bottom', 'left', 'right'] as const).forEach((placement) => {
      regressionTest(
        `positions popover ${placement}`,
        async ({ mount, page }) => {
          await mount(placementTestMarkup(placement));
          const popover = new PopoverPage(page);
          await popover.open();

          const popoverEl = await popover.getPopover();
          await expectPlacement(
            page,
            'ix-button#trigger',
            popoverEl,
            placement
          );
        }
      );
    });

    regressionTest(
      'shows spike when hasSpike is true',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ hasSpike: true })
        );
        const popover = new PopoverPage(page);
        await popover.open();

        expect(await popover.hasSpike(await popover.getPopover())).toBe(true);
      }
    );

    regressionTest('hides spike by default', async ({ mount, page }) => {
      await mountPopover(mount, page, interactivePopoverMarkup());
      const popover = new PopoverPage(page);
      await popover.open();

      expect(await popover.hasSpike(await popover.getPopover())).toBe(false);
    });

    regressionTest(
      'spike does not block clicks on raw slotted buttons',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          html`
            <button id="outer-trigger" type="button">Trigger</button>
            <ix-popover trigger="outer-trigger" close-on-click-outside>
              <button type="button">1</button>
              <button id="inner-trigger" type="button">Trigger2</button>
              <ix-popover
                trigger="inner-trigger"
                has-spike
                close-on-click-outside
              >
                <button id="inner-action" type="button">3</button>
                <button type="button">4</button>
              </ix-popover>
            </ix-popover>
          `
        );

        await page.locator('#outer-trigger').click();
        await page.locator('#inner-trigger').click();

        const innerAction = page.locator('#inner-action');
        await innerAction.click();
        await expect(innerAction).toBeFocused();
      }
    );
  });

  regressionTest.describe('hover trigger', () => {
    // Serial mode prevents hover state leakage between tests
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

        const popover = new PopoverPage(page);
        // aria-controls is set at trigger registration, before the first open
        const popoverEl = await popover.linkedPopover();

        await popover.trigger.hover();
        await popover.expectOpen(popoverEl);
        await popover.pointerDismissFarCorner();
        await expect(async () => popover.expectClosed(popoverEl)).toPass({
          timeout: 3000,
        });
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

        const popover = new PopoverPage(page);
        const popoverEl = await popover.linkedPopover();

        await popover.triggerButton.hover();
        await popover.expectOpen(popoverEl);

        await (await popover.dialog(popoverEl)).hover();
        // Wait for hide delay to confirm popover STAYS open (testing negative case)
        await page.waitForTimeout(HOVER_HIDE_MS);
        await popover.expectOpen(popoverEl);
      }
    );

    regressionTest(
      'closes on Escape while pointer remains on trigger',
      async ({ mount, page }) => {
        await mount(
          interactivePopoverMarkup({
            triggerMode: 'hover',
            showFooterDismiss: false,
          })
        );

        const popover = new PopoverPage(page);
        const popoverEl = await popover.linkedPopover();

        await popover.trigger.hover();
        await popover.expectOpen(popoverEl);

        await popover.closeWithEscape();
        await expect(async () => popover.expectClosed(popoverEl)).toPass({
          timeout: 3000,
        });
        await page.waitForTimeout(HOVER_HIDE_MS);
        await popover.expectClosed(popoverEl);
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

        const popover = new PopoverPage(page);
        const popoverEl = await popover.linkedPopover();

        await popover.trigger.focus();
        await popover.expectOpen(popoverEl);

        await popover.closeWithEscape();
        await popover.expectClosed(popoverEl);
        await popover.expectTriggerFocused();
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

        const popover = new PopoverPage(page);
        const popoverEl = await popover.linkedPopover();

        await popover.triggerButton.hover();
        await popover.expectOpen(popoverEl);
        await popover.pointerDismissFarCorner();
        await expect(async () => popover.expectClosed(popoverEl)).toPass({
          timeout: 3000,
        });

        await popover.expectTriggerButtonNotFocused();
      }
    );
  });

  regressionTest.describe('programmatic API', () => {
    regressionTest(
      'opens and closes via showPopover and hidePopover',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());
        const popover = new PopoverPage(page);

        await popover.callShowPopover();
        await popover.expectOpen();

        await popover.callHidePopover();
        await popover.expectClosed();
      }
    );

    regressionTest('reacts to show prop changes', async ({ mount, page }) => {
      await mountPopover(mount, page, interactivePopoverMarkup());
      const popover = new PopoverPage(page);

      await popover.setShowProperty(true);
      await popover.expectOpen();

      await popover.setShowProperty(false);
      await popover.expectClosed();
    });

    regressionTest(
      'opens when mounted with show attribute',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ show: true })
        );
        const popover = new PopoverPage(page);

        await popover.expectOpen();
      }
    );

    regressionTest(
      'handles rapid showPopover calls gracefully',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());

        const popover = new PopoverPage(page);
        await popover.callShowPopoverConcurrently(3);
        await popover.expectOpen();
      }
    );
  });

  regressionTest.describe('showChange guards', () => {
    regressionTest(
      'prevents open when showChange is canceled',
      async ({ mount, page }) => {
        await mountPopover(mount, page, interactivePopoverMarkup());
        const popover = new PopoverPage(page);

        await popover.preventShowChangeOnOpen();
        await popover.callShowPopover();
        await expect(async () => {
          await popover.expectClosed(popover.popoverElement);
          await popover.expectAriaExpanded('false');
        }).toPass({ timeout: 500 });
      }
    );

    regressionTest(
      'prevents close when showChange is canceled',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup());
        const popover = new PopoverPage(page);

        await popover.open();
        await popover.preventShowChangeOnClose();

        await popover.closeWithEscape();
        await popover.expectOpen();
      }
    );
  });

  regressionTest.describe('close behavior', () => {
    regressionTest('closes on Escape', async ({ mount, page }) => {
      await mountPopover(mount, page, interactivePopoverMarkup());
      const popover = new PopoverPage(page);

      await popover.open();
      await popover.expectOpen();

      await page.keyboard.press('Escape');
      await popover.expectClosed();
    });

    regressionTest(
      'does not close on outside click by default',
      async ({ mount, page }) => {
        await mount(html`
          <div style="padding: 8rem 0 0 8rem;">
            ${interactivePopoverMarkup()}
          </div>
        `);
        const popover = new PopoverPage(page);

        await popover.open();
        await popover.clickOutside();
        await popover.expectOpen();
      }
    );

    regressionTest(
      'closes on outside click when closeOnClickOutside is enabled',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.open();
        await page.mouse.click(OUTSIDE_CLICK_X, OUTSIDE_CLICK_Y);
        await popover.expectClosed();
      }
    );

    regressionTest(
      'closes via header close button',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.open();
        await popover.getCloseButton(await popover.getPopover()).click();
        await popover.expectClosed();
      }
    );

    regressionTest(
      'keeps popover open when closeClick is prevented',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.open();
        const host = await popover.getPopover();
        await popover.preventHeaderCloseClick(host);

        await popover.getCloseButton(host).click();
        await popover.expectOpen();
      }
    );

    regressionTest(
      'hides header close button when hideClose is set',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ hideClose: true })
        );
        await new PopoverPage(page).open();

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
      'focuses first focusable element without visible ring when opened with pointer',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.open();
        const dismissButton = page.locator('ix-button#popover-dismiss button');
        await expect(dismissButton).toBeFocused();
        await expect(async () => {
          const showsFocusVisible = await dismissButton.evaluate((button) =>
            button.matches(':focus-visible')
          );
          expect(showsFocusVisible).toBe(false);
        }).toPass({ timeout: 3000 });

        await page.keyboard.press('Tab');
        await expect(
          (await popover.getPopover()).locator(
            'ix-popover-header button[aria-label="Close"]'
          )
        ).toBeFocused();
      }
    );

    regressionTest(
      'focuses first focusable element and traps focus for interactive popovers',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.openWithKeyboard();
        const popoverEl = await popover.getPopover();

        await page.keyboard.press('Tab');
        await expect(
          popoverEl.locator('ix-popover-header button[aria-label="Close"]')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          page.locator('ix-button#popover-dismiss button')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          popoverEl.locator('ix-popover-header button[aria-label="Close"]')
        ).toBeFocused();
      }
    );

    regressionTest(
      'does not restore focus to trigger after pointer dismiss for interactive popovers',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.open();
        await page.mouse.click(FAR_CORNER_X, FAR_CORNER_Y);
        await popover.expectClosed();
        await expect(async () => {
          await popover.expectTriggerButtonNotFocused();
        }).toPass({ timeout: 5000 });
      }
    );

    regressionTest(
      'allows Tab between time picker columns inside popover content',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          html`
            <ix-button id="schedule-trigger">Open</ix-button>
            <ix-popover
              id="schedule-popover"
              trigger="schedule-trigger"
              close-on-click-outside
            >
              <ix-popover-header aria-label-close-icon-button="Close">
                Schedule
              </ix-popover-header>
              <ix-popover-content>
                <ix-time-picker
                  id="schedule-time-picker"
                  time="09:30:00"
                ></ix-time-picker>
              </ix-popover-content>
              <ix-popover-footer>
                <ix-button id="schedule-apply">Apply</ix-button>
              </ix-popover-footer>
            </ix-popover>
          `
        );

        const popover = new PopoverPage(page, 'schedule-trigger');
        await popover.openWithKeyboardAndExpectOpen();

        const picker = page.locator('ix-time-picker#schedule-time-picker');
        await picker
          .getByRole('option', { name: 'hr: 9', exact: true })
          .focus();
        await page.keyboard.press('ArrowDown');

        await page.keyboard.press('Tab');
        await expect(
          picker.getByRole('option', { name: 'min: 30', exact: true })
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          picker.getByRole('option', { name: 'sec: 0', exact: true })
        ).toBeFocused();
      }
    );

    regressionTest(
      'restores focus to trigger after Escape for interactive popovers',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);

        await popover.openWithKeyboardAndExpectOpen();
        await popover.closeWithEscape();
        await popover.expectTriggerFocused();
      }
    );

    regressionTest(
      'focuses header close button when content has no focusables',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          html`
            <ix-button id="text-trigger">Text-only</ix-button>
            <ix-popover id="text-popover" trigger="text-trigger">
              <ix-popover-header>Text-only popover</ix-popover-header>
              <ix-popover-content>
                Just plain text, no buttons.
              </ix-popover-content>
            </ix-popover>
          `
        );

        const popover = new PopoverPage(page, 'text-trigger');
        const popoverEl = await popover.openWithKeyboardAndExpectOpen();
        const closeButton = popover.scopedHeaderCloseButton(popoverEl);

        await expect(closeButton).toBeFocused();
      }
    );

    regressionTest(
      'keeps focus on trigger for informational popovers',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          html`
            <ix-button id="trigger">Info</ix-button>
            <ix-popover id="popover" trigger="trigger">
              <ix-popover-content>Information only</ix-popover-content>
            </ix-popover>
          `
        );

        const popover = new PopoverPage(page);
        await popover.openWithKeyboardAndExpectOpen();

        await popover.expectTriggerFocused();
      }
    );

    regressionTest('omits aria-modal on dialog', async ({ mount, page }) => {
      await mount(interactivePopoverMarkup());
      const popover = new PopoverPage(page);
      await popover.open();
      await expect(
        await popover.dialog(await popover.getPopover())
      ).not.toHaveAttribute('aria-modal');
    });

    regressionTest(
      'delegates focus to the close button when clicking the header',
      async ({ mount, page }) => {
        await mount(interactivePopoverMarkup({ closeOnClickOutside: true }));
        const popover = new PopoverPage(page);

        await popover.open();
        const popoverEl = await popover.getPopover();
        await popoverEl
          .locator('ix-popover-header')
          .click({ position: { x: 8, y: 8 } });

        await expect(popover.getCloseButton(popoverEl)).toBeFocused();
      }
    );
  });

  regressionTest.describe('nesting', () => {
    regressionTest(
      'keeps parent open when opening nested popover',
      async ({ mount, page }) => {
        await mount(nestedPopoverMarkup());
        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await inner.open();

        await outer.expectOpen();
        await inner.expectOpen();
      }
    );

    regressionTest(
      'keeps parent open when nested popover mounts after parent opens',
      async ({ mount, page }) => {
        await mount(outerPopoverWithNestedMountMarkup());
        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await injectLateNestedPopover(page);
        await inner.open();

        await outer.expectOpen();
        await inner.expectOpen();
      }
    );

    regressionTest(
      'dismisses nested popover when parent closes',
      async ({ mount, page }) => {
        await mount(nestedPopoverMarkup());
        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await inner.open();

        await outer.scopedHeaderCloseButton(await outer.getPopover()).click();

        await outer.expectClosed();
        await inner.expectClosed();
      }
    );

    regressionTest(
      'dismisses open chain when unrelated popover opens',
      async ({ mount, page }) => {
        await mount(nestedPopoverMarkup());

        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');
        const other = new PopoverPage(page, 'other-trigger');

        await outer.open();
        await inner.open();
        await other.open();

        await other.expectOpen();
        await outer.expectClosed();
        await inner.expectClosed();
      }
    );

    regressionTest(
      'dismisses nested popovers on outside click',
      async ({ mount, page }) => {
        await mount(nestedPopoverMarkup());
        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await inner.open();

        await page.mouse.click(OUTSIDE_CLICK_X, OUTSIDE_CLICK_Y);

        await outer.expectClosed();
        await inner.expectClosed();
      }
    );

    regressionTest(
      'traps focus in outer popover content including sibling buttons',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          html`
            <ix-button id="outer-trigger">Outer</ix-button>
            <ix-popover
              id="outer-popover"
              trigger="outer-trigger"
              close-on-click-outside
            >
              <ix-popover-header>Outer popover</ix-popover-header>
              <ix-popover-content>
                <ix-button id="inner-trigger">Inner</ix-button>
                <ix-button id="parent-action">Parent action</ix-button>
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
            <ix-button id="outside-trigger">Outside</ix-button>
          `
        );

        const outer = new PopoverPage(page, 'outer-trigger');
        const outerEl = await outer.openWithKeyboardAndExpectOpen();
        const closeButton = outer.scopedHeaderCloseButton(outerEl);

        await expect(
          page.locator('ix-button#inner-trigger button')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          page.locator('ix-button#parent-action button')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(closeButton).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          page.locator('ix-button#inner-trigger button')
        ).toBeFocused();
      }
    );

    regressionTest(
      'traps focus for popover inside an ancestor shadow root',
      async ({ mount, page }) => {
        await mount(html`<div id="shadow-mount"></div>`);
        await page.evaluate(async () => {
          await customElements.whenDefined('ix-popover');

          const shadowMount = document.getElementById('shadow-mount');
          if (!shadowMount) {
            return;
          }

          shadowMount.attachShadow({ mode: 'open' }).innerHTML = `
            <button id="shadow-trigger" type="button">Trigger</button>
            <ix-popover trigger="shadow-trigger" close-on-click-outside>
              <button id="shadow-panel-1" type="button">1</button>
              <button id="shadow-panel-2" type="button">2</button>
              <button id="shadow-trigger2" type="button">Trigger2</button>
            </ix-popover>
            <ix-popover trigger="shadow-trigger2" close-on-click-outside>
              <button id="shadow-inner-1" type="button">3</button>
              <button id="shadow-inner-2" type="button">4</button>
            </ix-popover>
          `;
        });

        await page.waitForSelector('#shadow-trigger');
        await expect(page.locator('ix-popover').first()).toHaveClass(
          /hydrated/
        );

        await page.locator('#shadow-trigger').click();
        await expect(page.locator('#shadow-panel-1')).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(page.locator('#shadow-panel-2')).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(page.locator('#shadow-trigger2')).toBeFocused();

        await page.locator('#shadow-trigger2').click();
        await expect(page.locator('#shadow-inner-1')).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(page.locator('#shadow-inner-2')).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(page.locator('#shadow-inner-1')).toBeFocused();
      }
    );

    regressionTest(
      'traps focus in open nested popover when parent stays open',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          html`
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
                  <ix-popover-content>
                    <ix-button id="inner-action-a">Inner action A</ix-button>
                    <ix-button id="inner-action-b" variant="secondary">
                      Inner action B
                    </ix-button>
                  </ix-popover-content>
                </ix-popover>
              </ix-popover-content>
            </ix-popover>
          `
        );

        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await inner.open();

        const innerEl = await inner.getPopover();
        const innerClose = inner.scopedHeaderCloseButton(innerEl);

        await expect(
          page.locator('ix-button#inner-action-a button')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          page.locator('ix-button#inner-action-b button')
        ).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(innerClose).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(
          page.locator('ix-button#inner-action-a button')
        ).toBeFocused();
      }
    );

    regressionTest(
      'Escape closes only the topmost nested popover',
      async ({ mount, page }) => {
        await mount(nestedPopoverMarkup());
        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await inner.open();

        await page.keyboard.press('Escape');

        await inner.expectClosed();
        await outer.expectOpen();
      }
    );

    regressionTest(
      'second Escape closes parent after nested popover is dismissed',
      async ({ mount, page }) => {
        await mount(nestedPopoverMarkup());
        const outer = new PopoverPage(page, 'outer-trigger');
        const inner = new PopoverPage(page, 'inner-trigger');

        await outer.open();
        await inner.open();

        await page.keyboard.press('Escape');
        await inner.expectClosed();
        await outer.expectOpen();

        await page.keyboard.press('Escape');
        await outer.expectClosed();
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

        const popover = new PopoverPage(page);
        await popover.open();
        await expect(page.locator('ix-popover-footer')).toContainText(
          'Step 2/3'
        );
      }
    );

    regressionTest(
      'renders image with image and imageAlt',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Open</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-image
              image="/assets/test.png"
              image-alt="Release preview"
            ></ix-popover-image>
          </ix-popover>
        `);

        const popover = new PopoverPage(page);
        await popover.open();
        const img = page.locator('ix-popover-image img');
        await expect(img).toHaveAttribute('src', /test\.png/);
        await expect(img).toHaveAttribute('alt', 'Release preview');
      }
    );

    regressionTest(
      'removes content padding when noPadding is set',
      async ({ mount, page }) => {
        await mount(html`
          <ix-button id="trigger">Open</ix-button>
          <ix-popover id="popover" trigger="trigger">
            <ix-popover-content no-padding>No padding body</ix-popover-content>
          </ix-popover>
        `);

        const popover = new PopoverPage(page);
        await popover.open();
        await expect(page.locator('ix-popover-content')).toHaveClass(
          /no-padding/
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

        const popover = new PopoverPage(page);
        await popover.open();
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
        await mountPopover(mount, page, interactivePopoverMarkup());
        const popover = new PopoverPage(page);

        await popover.expectAriaExpanded('false');
        await popover.open();

        const popoverEl = await popover.getPopover();
        await popover.expectAriaExpanded('true');
        await popover.expectAriaControlsMatch(popoverEl);
      }
    );

    regressionTest('preserves host id attribute', async ({ mount, page }) => {
      await mount(html`
        <ix-button id="trigger">Open</ix-button>
        <ix-popover id="my-popover" trigger="trigger">
          <ix-popover-content>Body</ix-popover-content>
        </ix-popover>
      `);

      const popover = new PopoverPage(page);
      await popover.open();
      await expect(page.locator('ix-popover#my-popover')).toHaveAttribute(
        'id',
        'my-popover'
      );
    });

    regressionTest(
      'forwards host aria-label to dialog',
      async ({ mount, page }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ ariaLabel: 'What is new panel' })
        );
        const popover = new PopoverPage(page);
        await popover.open();
        await expect(
          await popover.dialog(await popover.getPopover())
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

        const popover = new PopoverPage(page);
        await popover.open();
        await expect(
          await popover.dialog(await popover.getPopover())
        ).toHaveAttribute('role', 'status');
      }
    );

    regressionTest(
      'passes axe for interactive popover',
      async ({ mount, page, makeAxeBuilder }) => {
        await mountPopover(
          mount,
          page,
          interactivePopoverMarkup({ closeOnClickOutside: true })
        );
        const popover = new PopoverPage(page);
        await popover.open();

        await popover.runAxe(makeAxeBuilder);
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

        const popover = new PopoverPage(page);
        await popover.open();

        await popover.runAxe(makeAxeBuilder);
      }
    );
  });
});
