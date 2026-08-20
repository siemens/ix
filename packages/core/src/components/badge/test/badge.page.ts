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
    await expect(badge).toHaveClass(/\bhydrated\b/);
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
}
