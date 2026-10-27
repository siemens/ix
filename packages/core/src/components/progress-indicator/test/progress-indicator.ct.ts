/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  iconCirclePause,
  iconError,
  iconInfo,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';
import type { ProgressIndicatorStatus } from '../progress-indicator.types';

const statuses: {
  status: ProgressIndicatorStatus;
  icon?: string;
}[] = [
  { status: 'base' },
  { status: 'success', icon: iconSuccess },
  { status: 'error', icon: iconError },
  { status: 'information', icon: iconInfo },
  { status: 'warning', icon: iconWarning },
  { status: 'paused', icon: iconCirclePause },
];

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-progress-indicator label="Download" value="50"></ix-progress-indicator>`
  );
  const el = page.locator('ix-progress-indicator');
  await expect(el).toHaveAttribute('hydrated');
  await expect(el).toBeVisible();
});

regressionTest('defaults status to base', async ({ mount, page }) => {
  await mount(
    `<ix-progress-indicator label="Download" value="50" helper-text="Help"></ix-progress-indicator>`
  );
  const el = page.locator('ix-progress-indicator');
  await expect(el).toHaveJSProperty('status', 'base');
  await expect(el.locator('.progress-indicator')).toHaveClass(/base/);
});

for (const { status, icon } of statuses) {
  regressionTest(
    `status ${status} applies class and helper icon`,
    async ({ mount, page }) => {
      await mount(
        `
        <ix-progress-indicator
          label="Download"
          value="75"
          status="${status}"
          helper-text="Helper"
        ></ix-progress-indicator>
        `,
        {
          icons: {
            iconCirclePause,
            iconError,
            iconInfo,
            iconSuccess,
            iconWarning,
          },
        }
      );

      const el = page.locator('ix-progress-indicator');
      await expect(el.locator('.progress-indicator')).toHaveClass(
        new RegExp(status)
      );

      const helperIcon = el.locator('.helper-text ix-icon');
      if (icon) {
        await expect(helperIcon).toBeVisible();
        await expect(helperIcon).toHaveAttribute('aria-hidden', 'true');
      } else {
        await expect(helperIcon).toHaveCount(0);
      }
    }
  );
}

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(
    `
    <ix-progress-indicator
      label="Download"
      value="50"
      status="information"
      helper-text="Helper text"
    >
      50%
    </ix-progress-indicator>
    `,
    {
      icons: {
        iconInfo,
      },
    }
  );
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
