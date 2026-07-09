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
 * Usage:
 * ```ts
 * const badge = new BadgePage(page);
 * await badge.expectHydrated();
 * await badge.expectLabelText('12');
 * ```
 */
export class BadgePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** First badge on the page (single-badge fixtures). */
  get host(): Locator {
    return this.page.locator('ix-badge').first();
  }

  get indicator(): Locator {
    return this.host.locator('.indicator');
  }

  get label(): Locator {
    return this.host.locator('.label');
  }

  get description(): Locator {
    return this.host.locator(`> .description, > [slot="description"]`).first();
  }

  getButton(name: string): Locator {
    return this.page.getByRole('button', { name });
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
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

  async expectLabelText(
    text: string,
    badge: Locator = this.host
  ): Promise<void> {
    await expect(badge.locator('.label')).toHaveText(text);
  }

  async expectNoIndicator(badge: Locator = this.host): Promise<void> {
    await expect(badge.locator('.indicator')).toHaveCount(0);
  }

  async expectIndicatorVisible(badge: Locator = this.host): Promise<void> {
    await expect(badge.locator('.indicator')).toBeVisible();
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

  async expectLeadingIconDecorative(): Promise<void> {
    await expect(this.leadingIcon).toBeVisible();
    await expect(this.leadingIcon).toHaveAttribute('aria-hidden', 'true');
  }

  async expectLeadingIconNamed(ariaLabel: string): Promise<void> {
    await expect(this.leadingIcon).toBeVisible();
    await expect(this.leadingIcon).toHaveAttribute('aria-label', ariaLabel);
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
    expect(describedBy).toBeTruthy();

    await expect(this.description).toHaveText(descriptionText);
    const descriptionId = await this.description.getAttribute('id');
    expect(descriptionId).toBeTruthy();
    expect(describedBy!.split(/\s+/)).toContain(descriptionId);

    // Description stays in light DOM for aria-describedby.
    await expect
      .poll(async () =>
        this.page.evaluate(
          (id) => document.getElementById(id)?.textContent ?? null,
          descriptionId!
        )
      )
      .toBe(descriptionText);
    await expect
      .poll(async () =>
        this.host.evaluate((host, id) => {
          const description = host.querySelector(`:scope > #${CSS.escape(id)}`);
          return description?.getAttribute('slot') ?? null;
        }, descriptionId!)
      )
      .toBe('description');
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
      await this.expectLabelText(options.visibleLabel);
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
    role?: string;
    ariaLabel?: string;
    ariaLive?: string;
  }): Promise<void> {
    await this.expectStandalone();
    await expect(this.indicator).not.toHaveAttribute('role');

    if (options.role !== undefined) {
      await expect(this.host).toHaveAttribute('role', options.role);
    }
    if (options.ariaLabel !== undefined) {
      await expect(this.host).toHaveAttribute('aria-label', options.ariaLabel);
    }
    if (options.ariaLive !== undefined) {
      await expect(this.host).toHaveAttribute('aria-live', options.ariaLive);
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

  async disconnectKeepingAnchor(anchorSelector: string): Promise<void> {
    await this.page.evaluate((selector) => {
      const badge = document.querySelector('ix-badge');
      const anchor = document.querySelector(selector);

      if (badge && anchor) {
        document.body.appendChild(anchor);
        badge.remove();
      }
    }, anchorSelector);
  }
}
