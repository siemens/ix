/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import {
  iconAlarm,
  iconError,
  iconInfo,
  iconNotification,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

/**
 * Figma order: error, danger, warning, caution, success, information, neutral, accent, critical.
 */
const messageBarTypes = [
  { type: 'error', icon: iconError },
  { type: 'danger', icon: iconAlarm },
  { type: 'warning', icon: iconWarningRhomb },
  { type: 'caution', icon: iconWarning },
  { type: 'success', icon: iconSuccess },
  { type: 'information', icon: iconInfo },
  { type: 'neutral', icon: iconNotification },
  { type: 'accent', icon: iconNotification },
  { type: 'critical', icon: iconWarningOctagon },
] as const;

regressionTest.describe('ix-message-bar', () => {
  regressionTest(
    'renders with default information type',
    async ({ mount, page }) => {
      await mount(`<ix-message-bar persistent>Content</ix-message-bar>`);
      const messageBar = page.locator('ix-message-bar');
      await expect(messageBar).toHaveAttribute('hydrated');
      await expect(messageBar.locator('.message-container')).toHaveClass(
        /information/
      );
    }
  );

  for (const { type, icon } of messageBarTypes) {
    regressionTest(
      `renders ${type} type with its icon`,
      async ({ mount, page }) => {
        await mount(
          `<ix-message-bar type="${type}" persistent>Content</ix-message-bar>`
        );
        const messageBar = page.locator('ix-message-bar');
        await expect(messageBar.locator('.message-container')).toHaveClass(
          new RegExp(`\\b${type}\\b`)
        );
        await expect(messageBar.locator('ix-icon').first()).toHaveJSProperty(
          'name',
          icon
        );
      }
    );
  }

  regressionTest(
    'uses paragraph typography for slotted content',
    async ({ mount, page }) => {
      await mount(
        `<ix-message-bar type="danger" persistent="false">Content</ix-message-bar>`
      );
      const content = page.locator('ix-message-bar .message-content');

      await expect(content).toHaveCSS('font-size', '14px');
      await expect(content).toHaveCSS('line-height', '20px');
      await expect(content).toHaveCSS('font-weight', '400');
    }
  );

  regressionTest(
    'emits closeAnimationCompleted event',
    async ({ mount, page }) => {
      await mount(
        `<ix-message-bar type="danger" persistent="false">Content</ix-message-bar>`
      );
      const messageBar = page.locator('ix-message-bar');
      const closeButton = messageBar.locator('[data-testid="close-btn"]');

      const onCloseAnimationCompleted = messageBar.evaluate((element) => {
        return new Promise<void>((resolve) => {
          element.addEventListener('closeAnimationCompleted', () => resolve());
        });
      });
      await closeButton.click();
      await onCloseAnimationCompleted;

      await expect(messageBar).not.toBeVisible();
    }
  );

  regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
    await mount(
      messageBarTypes
        .map(
          ({ type }) =>
            `<ix-message-bar type="${type}" persistent>Content</ix-message-bar>`
        )
        .join('')
    );
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
