/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

const snapshotOptions = {
  threshold: 0.05,
  maxDiffPixelRatio: 0.01,
};

async function openAndSettlePopover(page: Page, checkTriggerAria = true) {
  const popover = page.locator('ix-popover').first();
  const trigger = page.locator('ix-button#trigger').first();
  const triggerButton = trigger.getByRole('button');

  await expect(trigger).toBeVisible();
  await trigger.evaluate((el: HTMLIxButtonElement) => el.componentOnReady());
  await expect(trigger).toHaveAttribute('data-ix-popover-trigger', '');
  await popover.evaluate((el: HTMLIxPopoverElement) => el.showPopover());
  await expect(popover).toHaveAttribute('show', '');

  // Scope by panel id so nested popovers (slot content) do not match twice.
  const panelId = await popover.getAttribute('data-ix-popover');
  if (!panelId) {
    throw new Error('Popover panel id is missing');
  }
  const dialog = page.locator(`dialog#${panelId}`);
  await expect(dialog).toBeVisible();
  if (checkTriggerAria) {
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(triggerButton).toHaveAttribute('aria-controls', panelId);
  }

  // Pointer off trigger so the snapshot is Active-while-open, not :hover.
  await page.mouse.move(5, 5, { steps: 10 });
  await expect(popover).toHaveAttribute('show', '');
  await expect(dialog).toBeVisible();
  if (checkTriggerAria) {
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
  }
}

regressionTest.describe('popover', () => {
  (
    [
      'basic',
      'with-image',
      'no-spike',
      'placement-top',
      'placement-bottom',
      'placement-left',
      'placement-right',
      'stepper-footer',
      'header-with-icon',
      'header-no-close',
      'minimal',
      'nesting',
    ] as const
  ).forEach((variant) => {
    regressionTest(variant, async ({ page }) => {
      await page.goto(`popover/${variant}`);
      // The minimal fixture can open without exposing trigger ARIA; its snapshot only needs a visible panel.
      await openAndSettlePopover(page, variant !== 'minimal');

      if (variant === 'nesting') {
        await expect(page.locator('ix-popover#inner-popover')).toHaveAttribute(
          'show',
          ''
        );
      }

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
        snapshotOptions
      );
    });
  });

  regressionTest('hover-trigger', async ({ page }) => {
    await page.goto('popover/hover-trigger');

    const trigger = page.locator('ix-button#trigger');
    const triggerButton = trigger.getByRole('button');
    const popover = page.locator('ix-popover');

    await trigger.hover();
    await expect(popover).toHaveAttribute('show', '');

    const panelId = await popover.getAttribute('data-ix-popover');
    if (!panelId) {
      throw new Error('Popover panel id is missing');
    }
    await expect(page.locator(`dialog#${panelId}`)).toBeVisible();
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(triggerButton).toHaveAttribute('aria-controls', panelId);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      snapshotOptions
    );
  });
});
