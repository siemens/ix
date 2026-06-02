/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AxeBuilder from '@axe-core/playwright';
import { expect, Locator, Page } from '@playwright/test';
import {
  FAR_CORNER_X,
  FAR_CORNER_Y,
  OUTSIDE_CLICK_X,
  OUTSIDE_CLICK_Y,
} from './popover.constants';

/**
 * Page Object Model for ix-popover component testing
 *
 * Usage:
 * ```ts
 * const popover = new PopoverPage(page);
 * await popover.open();
 * await popover.expectOpen();
 * ```
 */
export class PopoverPage {
  readonly page: Page;
  readonly triggerId: string;

  constructor(page: Page, triggerId = 'trigger') {
    this.page = page;
    this.triggerId = triggerId;
  }

  /**
   * Get the trigger button locator
   */
  get trigger(): Locator {
    return this.page.locator(`ix-button#${this.triggerId}`);
  }

  /** Native button inside the trigger host (pierces open shadow root). */
  get triggerButton(): Locator {
    return this.trigger.locator('button');
  }

  /** First popover on the page (single-popover fixtures). */
  get host(): Locator {
    return this.popoverElement;
  }

  private async getTriggerAriaAttribute(
    attribute: 'aria-controls' | 'aria-expanded'
  ): Promise<string | null> {
    return this.page.evaluate(
      ({ triggerId, attributeName }) => {
        const host =
          document.querySelector(`ix-button#${triggerId}`) ??
          document.getElementById(triggerId);
        const inner = host?.shadowRoot?.querySelector<HTMLElement>(
          'button, a[role="button"]'
        );
        return (inner ?? host)?.getAttribute(attributeName) ?? null;
      },
      { triggerId: this.triggerId, attributeName: attribute }
    );
  }

  /**
   * Resolves the popover host via the trigger's `aria-controls` id.
   * That id is assigned when the trigger registers (typically before the first open).
   *
   * `expectOpen()` and `expectClosed()` call this when no locator is passed; Playwright
   * retries the `aria-controls` assertion until the link exists. Prefer those helpers
   * after open/close actions unless you need the locator for further queries.
   */
  async getPopover(): Promise<Locator> {
    await expect(async () => {
      const popoverId = await this.getTriggerAriaAttribute('aria-controls');
      expect(popoverId).toMatch(/.+/);
    }).toPass({ timeout: 5000 });

    const dialogId = await this.getTriggerAriaAttribute('aria-controls');
    return this.page.locator(`ix-popover[data-ix-popover="${dialogId}"]`);
  }

  /**
   * Same as {@link getPopover}; use after mount when the trigger is registered but the
   * popover is still closed (e.g. hover/focus tests).
   */
  linkedPopover(): Promise<Locator> {
    return this.getPopover();
  }

  /**
   * Get the popover locator directly by page (for closed state checks)
   */
  get popoverElement(): Locator {
    return this.page.locator('ix-popover').first();
  }

  /**
   * Get the dialog element within a popover
   */
  dialog(popover: Locator): Locator {
    return popover.locator('[role="dialog"], [role="status"]').first();
  }

  /**
   * Open popover by clicking the trigger
   */
  async open(): Promise<void> {
    await expect(this.trigger).toHaveAttribute('data-ix-popover-trigger', '');
    await this.trigger.click();
  }

  /**
   * Assert that popover is visible
   */
  async expectOpen(popover?: Locator): Promise<void> {
    const target = popover ?? (await this.getPopover());
    await expect(target).toHaveClass(/visible/);
    await expect(this.dialog(target)).toBeVisible();
  }

  /**
   * Assert that popover is closed
   */
  async expectClosed(popover?: Locator): Promise<void> {
    const target = popover ?? (await this.getPopover());
    await expect(target).not.toHaveClass(/visible/);
    await expect(this.dialog(target)).not.toBeVisible();
  }

  /**
   * Check if popover has spike element in shadow DOM
   */
  async hasSpike(popover: Locator): Promise<boolean> {
    return popover.evaluate(
      (element) => !!element.shadowRoot?.querySelector('.spike')
    );
  }

  /**
   * Close button on this popover's header only (avoids nested header matches)
   */
  scopedHeaderCloseButton(popover: Locator): Locator {
    return popover
      .locator(':scope > ix-popover-header')
      .getByRole('button', { name: 'Close' });
  }

  /**
   * Get the close button in popover header
   */
  getCloseButton(popover: Locator): Locator {
    return this.scopedHeaderCloseButton(popover);
  }

  async openWithKeyboard(): Promise<void> {
    await this.trigger.focus();
    await this.page.keyboard.press('Enter');
  }

  /** Keyboard open can lag behind aria-controls / visible state; poll until stable. */
  async openWithKeyboardAndExpectOpen(popover?: Locator): Promise<Locator> {
    await this.openWithKeyboard();
    await expect(async () => this.expectOpen(popover)).toPass({
      timeout: 5000,
    });
    return popover ?? (await this.getPopover());
  }

  async closeWithEscape(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  /**
   * Assert focus stayed on the trigger (host or shadow-DOM button inside ix-button).
   */
  async expectTriggerFocused(timeout = 5000): Promise<void> {
    await expect(async () => {
      expect(await this.isTriggerFocused()).toBe(true);
    }).toPass({ timeout });
  }

  async expectTriggerButtonNotFocused(): Promise<void> {
    await expect(this.triggerButton).not.toBeFocused();
  }

  async callShowPopover(popover: Locator = this.host): Promise<void> {
    await popover.evaluate((el: HTMLIxPopoverElement) => el.showPopover());
  }

  async callHidePopover(popover: Locator = this.host): Promise<void> {
    await popover.evaluate((el: HTMLIxPopoverElement) => el.hidePopover());
  }

  async setShowProperty(
    show: boolean,
    popover: Locator = this.host
  ): Promise<void> {
    await popover.evaluate((el: HTMLIxPopoverElement, visible: boolean) => {
      el.show = visible;
    }, show);
  }

  async callShowPopoverConcurrently(
    times: number,
    popover: Locator = this.host
  ): Promise<void> {
    await popover.evaluate(async (el: HTMLIxPopoverElement, count: number) => {
      const promises = Array.from({ length: count }, () => el.showPopover());
      await promises[0];
    }, times);
  }

  /**
   * Blocks open via cancelable `showChange` (same pattern as other IX CTs:
   * `locator.evaluate` + `addEventListener`, not `document.querySelector`).
   */
  async preventShowChangeOnOpen(popover: Locator = this.host): Promise<void> {
    await popover.evaluate((el: HTMLIxPopoverElement) => {
      el.addEventListener('showChange', (event) => {
        if ((event as CustomEvent<boolean>).detail === true) {
          event.preventDefault();
        }
      });
    });
  }

  async preventShowChangeOnClose(popover: Locator = this.host): Promise<void> {
    await popover.evaluate((el: HTMLIxPopoverElement) => {
      el.addEventListener('showChange', (event) => {
        if ((event as CustomEvent<boolean>).detail === false) {
          event.preventDefault();
        }
      });
    });
  }

  async preventHeaderCloseClick(popover: Locator): Promise<void> {
    await popover
      .locator(':scope > ix-popover-header')
      .evaluate((header: HTMLElement) => {
        header.addEventListener('closeClick', (event) => {
          event.preventDefault();
        });
      });
  }

  private async isTriggerFocused(): Promise<boolean> {
    return this.page.evaluate((triggerId) => {
      const host = document.querySelector(`ix-button#${triggerId}`);
      const innerButton = host?.shadowRoot?.querySelector('button');
      const active = document.activeElement;
      return (
        active === host ||
        active === innerButton ||
        (host instanceof HTMLElement && host.contains(active))
      );
    }, this.triggerId);
  }

  async clickOutside(x = OUTSIDE_CLICK_X, y = OUTSIDE_CLICK_Y): Promise<void> {
    await this.page.mouse.click(x, y);
  }

  async pointerDismissFarCorner(): Promise<void> {
    await this.page.mouse.move(FAR_CORNER_X, FAR_CORNER_Y);
  }

  async expectAriaExpanded(expanded: 'true' | 'false'): Promise<void> {
    await expect(async () => {
      expect(await this.getTriggerAriaAttribute('aria-expanded')).toBe(
        expanded
      );
    }).toPass({ timeout: 3000 });
  }

  async expectAriaControlsMatch(popover: Locator): Promise<void> {
    const dialogId = await this.dialog(popover).getAttribute('id');
    await expect(async () => {
      expect(await this.getTriggerAriaAttribute('aria-controls')).toBe(
        dialogId
      );
    }).toPass({ timeout: 3000 });
  }

  static async installShowChangedTracker(page: Page): Promise<void> {
    const popover = new PopoverPage(page);
    await popover.host.evaluate((el: HTMLIxPopoverElement) => {
      (
        globalThis as unknown as { __showChangedEvents: boolean[] }
      ).__showChangedEvents = [];
      el.addEventListener('showChanged', (event) => {
        (
          globalThis as unknown as { __showChangedEvents: boolean[] }
        ).__showChangedEvents.push((event as CustomEvent<boolean>).detail);
      });
    });
  }

  async expectShowChangedEvents(expected: boolean[]): Promise<void> {
    await expect
      .poll(() =>
        this.page.evaluate(
          () =>
            (globalThis as unknown as { __showChangedEvents: boolean[] })
              .__showChangedEvents
        )
      )
      .toEqual(expected);
  }

  async runAxe(makeAxeBuilder: () => AxeBuilder): Promise<void> {
    const results = await makeAxeBuilder().exclude('ix-button').analyze();
    expect(results.violations).toEqual([]);
  }
}

/**
 * Assert popover placement relative to trigger
 */
export async function expectPlacement(
  page: Page,
  triggerSelector: string,
  popover: Locator,
  placement: 'top' | 'bottom' | 'left' | 'right'
) {
  const getDialog = (popover: Locator) =>
    popover.locator('[role="dialog"], [role="status"]').first();

  await expect(async () => {
    const triggerBox = await page.locator(triggerSelector).boundingBox();
    const dialogBox = await getDialog(popover).boundingBox();

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

/**
 * Mount popover component and wait for hydration
 */
export async function mountPopover(
  mount: (markup: string) => Promise<unknown>,
  page: Page,
  markup: string
) {
  await mount(markup);
  // Wait for the component to hydrate - using first() is acceptable here
  // as we just need to ensure at least one popover is hydrated
  await expect(page.locator('ix-popover').first()).toHaveClass(/hydrated/);
}
