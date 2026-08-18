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
 * Page object for ix-group a11y / keyboard component tests.
 */
export class GroupPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get host(): Locator {
    return this.page.locator('ix-group').first();
  }

  /** Prefer test id: select and expand can share the same accessible name. */
  get expandButton(): Locator {
    return this.host.getByTestId('expand-collapsed-button');
  }

  get expandIcon(): Locator {
    return this.host.getByTestId('expand-collapsed-icon');
  }

  get contextMenuButton(): Locator {
    return this.host.locator('ix-icon-button');
  }

  get dropdown(): Locator {
    return this.host.locator('ix-dropdown');
  }

  /** Header select control (`aria-pressed`); not the expand disclosure. */
  selectButton(): Locator {
    return this.host.locator('button.group-header-select');
  }

  itemButton(name: string | RegExp): Locator {
    return this.page.getByRole('button', { name });
  }

  contentByControlsId(contentId: string): Locator {
    return this.host.locator(`#${contentId}`);
  }

  async expectHydrated(): Promise<void> {
    await expect(this.host).toHaveClass(/hydrated/);
  }

  async expectExpanded(expanded = true): Promise<void> {
    if (expanded) {
      await expect(this.host).toHaveAttribute('expanded', '');
      return;
    }
    await expect(this.host).not.toHaveAttribute('expanded');
  }

  async expectSelected(selected = true): Promise<void> {
    if (selected) {
      await expect(this.host).toHaveAttribute('selected', '');
      return;
    }
    await expect(this.host).not.toHaveAttribute('selected');
  }

  async expectExpandAria(options: {
    expanded: boolean;
    accessibleName: string;
  }): Promise<void> {
    await expect(this.expandButton).toHaveAttribute(
      'aria-expanded',
      options.expanded ? 'true' : 'false'
    );
    await expect(this.expandButton).toHaveAccessibleName(
      options.accessibleName
    );
  }

  async expectSelectPressed(pressed: boolean): Promise<void> {
    await expect(this.selectButton()).toHaveAttribute(
      'aria-pressed',
      pressed ? 'true' : 'false'
    );
  }

  async expectNoSelectButton(): Promise<void> {
    await expect(this.selectButton()).toHaveCount(0);
  }

  async expectExpandIconDecorative(): Promise<void> {
    await expect(this.expandIcon).toHaveAttribute('aria-hidden', 'true');
  }

  async expectExpandControlsContent(): Promise<string> {
    const contentId = await this.expandButton.getAttribute('aria-controls');
    expect(contentId).toBeTruthy();
    if (!contentId) {
      throw new Error('expand button is missing aria-controls');
    }
    await expect(this.contentByControlsId(contentId)).toBeAttached();
    return contentId;
  }

  async expectDropdownOpen(open = true): Promise<void> {
    if (open) {
      await expect(this.dropdown).toBeVisible();
      await expect(this.dropdown).toHaveJSProperty('show', true);
      return;
    }
    await expect(this.dropdown).toHaveJSProperty('show', false);
  }

  async focusExpand(): Promise<void> {
    await this.expandButton.focus();
  }

  async focusSelect(): Promise<void> {
    await this.selectButton().focus();
  }

  async focusItem(name: string | RegExp): Promise<void> {
    await this.itemButton(name).focus();
  }

  async clickExpand(): Promise<void> {
    await this.expandButton.click();
  }

  async openContextMenu(): Promise<void> {
    await this.contextMenuButton.click();
  }

  async pressSpace(): Promise<void> {
    await this.page.keyboard.press(' ');
  }

  async pressEnter(): Promise<void> {
    await this.page.keyboard.press('Enter');
  }

  async pressEscape(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  async pressTab(): Promise<void> {
    await this.page.keyboard.press('Tab');
  }
}
