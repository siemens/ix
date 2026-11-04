/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object Model for ix-badge component testing.
 *
 * Prefer accessibility locators (`getByRole`, `getByText`, accessible name /
 * description) for author-facing contracts. Fall back to tag / CSS selectors
 * for custom-element host state and decorative chrome (e.g. attached
 * `aria-hidden` indicator) that is intentionally outside the a11y tree.
 *
 * Usage:
 * ```ts
 * const badge = new BadgePage(page);
 * await badge.expectHydrated();
 * await badge.expectVisibleLabel('12');
 * ```
 */
export class BadgePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** First badge on the page (single-badge fixtures without a naming role). */
  get host(): Locator {
    return this.page.locator('ix-badge').first();
  }

  /**
   * Named standalone badge via host `role` + accessible name.
   * Prefer this over `host` when the fixture sets `role` / `aria-label`.
   */
  getByRole(role: 'img' | 'alert' | 'status', name: string | RegExp): Locator {
    return this.page.getByRole(role, { name });
  }

  getButton(name: string | RegExp): Locator {
    return this.page.getByRole('button', { name });
  }

  /**
   * Decorative indicator chrome (often `aria-hidden` when attached).
   * Structural on purpose — not exposed in the accessibility tree.
   */
  get indicator(): Locator {
    return this.host.locator('.indicator');
  }

  indicatorOf(badge: Locator): Locator {
    return badge.locator('.indicator');
  }

  get label(): Locator {
    return this.host.locator('.label');
  }

  get description(): Locator {
    return this.host.locator(`> .description, > [slot="description"]`).first();
  }

  get leadingIcon(): Locator {
    return this.indicator.locator('ix-icon.icon');
  }

  get statusIconPlate(): Locator {
    return this.indicator.locator('ix-icon.status-icon-plate');
  }

  get statusIconGlyph(): Locator {
    return this.indicator.locator('ix-icon.status-icon-glyph');
  }

  async expectHydrated(badge: Locator = this.host): Promise<void> {
    await expect(badge).toHaveAttribute('hydrated');
  }

  async expectAttached(badge: Locator = this.host): Promise<void> {
    await expect(badge).toHaveClass(/\battached\b/);
  }

  async expectStandalone(badge: Locator = this.host): Promise<void> {
    await expect(badge).not.toHaveClass(/\battached\b/);
  }

  async expectHostClass(
    pattern: RegExp,
    badge: Locator = this.host
  ): Promise<void> {
    await expect(badge).toHaveClass(pattern);
  }

  async expectNoHostClass(
    pattern: RegExp,
    badge: Locator = this.host
  ): Promise<void> {
    await expect(badge).not.toHaveClass(pattern);
  }

  async expectVisibleLabel(
    text: string,
    badge: Locator = this.host
  ): Promise<void> {
    await expect(badge.getByText(text, { exact: true })).toBeVisible();
  }

  async expectNoIndicator(badge: Locator = this.host): Promise<void> {
    await expect(this.indicatorOf(badge)).toHaveCount(0);
  }

  async expectIndicatorVisible(badge: Locator = this.host): Promise<void> {
    await expect(this.indicatorOf(badge)).toBeVisible();
  }

  async expectLeadingIconDecorative(): Promise<void> {
    await expect(this.leadingIcon).toBeVisible();
    await expect(this.leadingIcon).toHaveAttribute('aria-hidden', 'true');
  }

  async expectLeadingIconNamed(ariaLabel: string): Promise<void> {
    await expect(this.indicator.getByLabel(ariaLabel)).toBeVisible();
    await expect(this.leadingIcon).toHaveAttribute('aria-hidden', 'false');
  }

  async expectCustomVariantColors(
    background: string,
    color: string,
    badge: Locator = this.host
  ): Promise<void> {
    await expect(async () => {
      const resolvedBackground = await badge.evaluate((el) =>
        el.style.getPropertyValue('--ix-badge-custom-background')
      );
      const resolvedColor = await badge.evaluate((el) =>
        el.style.getPropertyValue('--ix-badge-custom-color')
      );
      expect(resolvedBackground).toBe(background);
      expect(resolvedColor).toBe(color);
    }).toPass();
  }

  async expectOffsets(
    offsetX: string,
    offsetY: string,
    badge: Locator = this.host
  ): Promise<void> {
    await expect(async () => {
      const resolvedOffsetX = await badge.evaluate((el) =>
        el.style.getPropertyValue('--ix-badge-offset-x')
      );
      const resolvedOffsetY = await badge.evaluate((el) =>
        el.style.getPropertyValue('--ix-badge-offset-y')
      );
      expect(resolvedOffsetX).toBe(offsetX);
      expect(resolvedOffsetY).toBe(offsetY);
    }).toPass();
  }

  async expectAttachedTextLabelA11y(
    buttonName: string,
    descriptionText: string
  ): Promise<void> {
    const button = this.getButton(buttonName);
    const describedBy = await button.getAttribute('aria-describedby');

    if (!describedBy) {
      throw new Error('Expected aria-describedby to be present on button');
    }

    await expect(this.description).toHaveText(descriptionText);
    const descriptionId = await this.description.getAttribute('id');

    if (!descriptionId) {
      throw new Error('Expected description id to be present');
    }
    expect(describedBy.split(/\s+/)).toContain(descriptionId);

    // Description stays in light DOM for aria-describedby (SR-only chrome is
    // not always exposed via Playwright's accessible description API).
    await expect
      .poll(async () =>
        this.page.evaluate(
          (id) => document.getElementById(id)?.textContent ?? null,
          descriptionId
        )
      )
      .toBe(descriptionText);
    await expect(this.indicator).toHaveAttribute('aria-hidden', 'true');
  }

  async expectDotAttachedNoDescribedBy(buttonName: string): Promise<void> {
    const button = this.getButton(buttonName);
    await expect(button).not.toHaveAttribute('aria-describedby');
    await expect(this.host).toHaveAttribute('type', 'dot');
    await expect(this.description).toHaveCount(0);
  }

  async expectMergedDescribedBy(
    buttonName: string,
    existingId: string,
    descriptionText: string
  ): Promise<void> {
    const button = this.getButton(buttonName);
    const describedBy = await button.getAttribute('aria-describedby');

    expect(describedBy).toContain(existingId);
    expect(describedBy?.split(/\s+/).length).toBeGreaterThan(1);
    await expect(this.description).toHaveText(descriptionText);
  }

  async expectStandaloneStaticChrome(
    options: {
      visibleLabel?: string;
      hostRole?: string | null;
      hostAriaLabel?: string;
    } = {}
  ): Promise<void> {
    await this.expectStandalone();
    await expect(this.indicator).not.toHaveAttribute('role');
    await expect(this.indicator).not.toHaveAttribute('aria-live');
    await expect(this.indicator).not.toHaveAttribute('aria-label');

    if (options.visibleLabel !== undefined) {
      await this.expectVisibleLabel(options.visibleLabel);
    }

    if (options.hostRole === null) {
      await expect(this.host).not.toHaveAttribute('role');
    } else if (options.hostRole !== undefined) {
      await expect(this.host).toHaveAttribute('role', options.hostRole);
    }

    if (options.hostAriaLabel !== undefined) {
      await expect(this.host).toHaveAttribute(
        'aria-label',
        options.hostAriaLabel
      );
    }
  }

  async expectStandaloneHostAria(options: {
    role: 'img' | 'alert' | 'status';
    ariaLabel: string;
    ariaLive?: string;
  }): Promise<void> {
    const named = this.getByRole(options.role, options.ariaLabel);
    await expect(named).toBeVisible();
    await this.expectStandalone(named);
    await expect(this.indicatorOf(named)).not.toHaveAttribute('role');

    if (options.ariaLive !== undefined) {
      await expect(named).toHaveAttribute('aria-live', options.ariaLive);
    }
  }

  async setLabel(label: string, badge: Locator = this.host): Promise<void> {
    await badge.evaluate(
      (el: HTMLElement & { label?: string }, value: string) => {
        el.label = value;
      },
      label
    );
  }

  async disconnectKeepingAnchor(buttonName: string): Promise<void> {
    const button = this.getButton(buttonName);
    await button.evaluate((anchor) => {
      const badge = anchor.closest('ix-badge');
      if (badge) {
        document.body.appendChild(anchor);
        badge.remove();
      }
    });
  }

  tooltip(badge: Locator = this.host): Locator {
    return badge.locator('ix-tooltip');
  }

  /**
   * Freezes the pulse animation at `progress` (0–1) and returns the offset in
   * CSS px between the painted pulse center and the indicator box center.
   * The pulse is isolated by diffing a pulse-only screenshot against an empty one.
   */
  async measurePulseCenterOffset(
    progress: number,
    deviceScaleFactor: number,
    badge: Locator = this.host
  ): Promise<{ x: number; y: number }> {
    await this.expectHydrated(badge);
    await expect
      .poll(() => badge.evaluate((el) => el.shadowRoot!.getAnimations().length))
      .toBeGreaterThan(0);

    const rect = await badge.evaluate((el, value) => {
      const root = el.shadowRoot!;
      for (const animation of root.getAnimations()) {
        const duration = Number(animation.effect?.getTiming().duration ?? 0);
        animation.pause();
        animation.currentTime = duration * value;
      }

      const style = document.createElement('style');
      style.setAttribute('data-pulse-probe', '');
      root.appendChild(style);
      style.textContent = `
        .indicator > * { visibility: hidden !important; }
        .indicator { background: transparent !important; border-color: transparent !important; outline: none !important; }
      `;

      const { x, y, width, height } = root
        .querySelector('.indicator')!
        .getBoundingClientRect();
      return { x, y, width, height };
    }, progress);

    const margin = 24;
    const clip = {
      x: rect.x - margin,
      y: rect.y - margin,
      width: rect.width + margin * 2,
      height: rect.height + margin * 2,
    };

    const withPulse = await this.page.screenshot({ clip, animations: 'allow' });
    await badge.evaluate((el) => {
      el.shadowRoot!.querySelector('style[data-pulse-probe]')!.textContent +=
        '.indicator::after { display: none !important; }';
    });
    const withoutPulse = await this.page.screenshot({
      clip,
      animations: 'allow',
    });
    await badge.evaluate((el) =>
      el.shadowRoot!.querySelector('style[data-pulse-probe]')!.remove()
    );

    const box = await this.page.evaluate(
      async ([a, b]) => {
        const read = async (base64: string) => {
          const image = new Image();
          image.src = `data:image/png;base64,${base64}`;
          await image.decode();
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const context = canvas.getContext('2d');
          if (!context) {
            throw new Error('Canvas 2D context unavailable');
          }
          context.drawImage(image, 0, 0);
          return context.getImageData(0, 0, canvas.width, canvas.height);
        };
        const [imageA, imageB] = await Promise.all([read(a), read(b)]);
        let bounds: { x0: number; y0: number; x1: number; y1: number } | null =
          null;

        for (let y = 0; y < imageA.height; y++) {
          for (let x = 0; x < imageA.width; x++) {
            const i = (y * imageA.width + x) * 4;
            const delta =
              Math.abs(imageA.data[i] - imageB.data[i]) +
              Math.abs(imageA.data[i + 1] - imageB.data[i + 1]) +
              Math.abs(imageA.data[i + 2] - imageB.data[i + 2]);

            if (delta > 12) {
              bounds ??= { x0: x, y0: y, x1: x + 1, y1: y + 1 };
              bounds.x0 = Math.min(bounds.x0, x);
              bounds.y0 = Math.min(bounds.y0, y);
              bounds.x1 = Math.max(bounds.x1, x + 1);
              bounds.y1 = Math.max(bounds.y1, y + 1);
            }
          }
        }

        return bounds;
      },
      [withPulse.toString('base64'), withoutPulse.toString('base64')]
    );

    if (!box) {
      throw new Error('Expected the pulse to be painted');
    }

    return {
      x: (box.x0 + box.x1) / 2 / deviceScaleFactor - (margin + rect.width / 2),
      y: (box.y0 + box.y1) / 2 / deviceScaleFactor - (margin + rect.height / 2),
    };
  }
}
