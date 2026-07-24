/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';

export const BADGE_COUNTER_ROUTE = 'badge/counter';
export const BADGE_LABEL_ROUTE = 'badge/label';
export const BADGE_DOT_ROUTE = 'badge/dot';
export const BADGE_STATUS_ICON_ROUTE = 'badge/status-icon';

/**
 * Page Object Model for ix-badge visual regression tests.
 */
export class BadgeVisualPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get badges(): Locator {
    return this.page.locator('ix-badge');
  }

  async gotoCounter(): Promise<void> {
    await this.page.goto(BADGE_COUNTER_ROUTE);
  }

  async gotoLabel(): Promise<void> {
    await this.page.goto(BADGE_LABEL_ROUTE);
  }

  async gotoDot(): Promise<void> {
    await this.page.goto(BADGE_DOT_ROUTE);
  }

  async gotoStatusIcon(): Promise<void> {
    await this.page.goto(BADGE_STATUS_ICON_ROUTE);
  }

  async waitForReady(): Promise<void> {
    await this.badges.first().waitFor();
    await expect(this.badges).not.toHaveCount(0);
    await expect(this.page.locator('ix-badge.hydrated').first()).toBeVisible();
  }

  async expectSnapshot(): Promise<void> {
    expect(await this.page.screenshot({ fullPage: true })).toMatchSnapshot();
  }
}
