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
  iconAlarm,
  iconInfo,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

/**
 * Figma order: neutral, warning, danger, caution, success, information, accent, critical.
 */
const kpiStates = [
  { state: 'neutral', icon: undefined },
  { state: 'warning', icon: iconWarning },
  { state: 'danger', icon: iconAlarm },
  { state: 'caution', icon: iconWarningRhomb },
  { state: 'success', icon: iconSuccess },
  { state: 'information', icon: iconInfo },
  { state: 'accent', icon: undefined },
  { state: 'critical', icon: iconWarningOctagon },
] as const;

regressionTest.describe('ix-kpi', () => {
  regressionTest(
    'renders with default neutral state',
    async ({ mount, page }) => {
      await mount(
        `<ix-kpi label="Motor speed" value="122.6" unit="rpm"></ix-kpi>`
      );

      const kpi = page.locator('ix-kpi');
      await expect(kpi).toHaveAttribute('hydrated');
      await expect(kpi.locator('.kpi-container')).toHaveClass(/\bneutral\b/);
      await expect(kpi.locator('ix-icon')).toHaveCount(0);
    }
  );

  for (const { state, icon } of kpiStates) {
    regressionTest(`renders state ${state}`, async ({ mount, page }) => {
      await mount(
        `<ix-kpi label="Motor speed" value="122.6" state="${state}"></ix-kpi>`
      );

      const kpi = page.locator('ix-kpi');
      await expect(kpi).toHaveAttribute('hydrated');
      await expect(kpi.locator('.kpi-container')).toHaveClass(
        new RegExp(`\\b${state}\\b`)
      );

      const statusIcon = kpi.locator('ix-icon');
      if (icon) {
        await expect(statusIcon).toHaveJSProperty('name', icon);
      } else {
        await expect(statusIcon).toHaveCount(0);
      }
    });
  }

  regressionTest('renders vertical orientation', async ({ mount, page }) => {
    await mount(
      `<ix-kpi label="Motor speed" value="122.6" state="danger" orientation="vertical"></ix-kpi>`
    );

    const kpi = page.locator('ix-kpi');
    await expect(kpi).toHaveAttribute('hydrated');
    await expect(kpi).toHaveClass(/\bstacked\b/);
  });

  regressionTest.describe('status icon aria label', () => {
    regressionTest(
      'uses ariaLabelStatusIcon for states without a specific label',
      async ({ mount, page }) => {
        await mount(
          `<ix-kpi label="Motor speed" value="122.6" state="caution" aria-label-status-icon="Caution status"></ix-kpi>`
        );

        const kpi = page.locator('ix-kpi');
        await expect(kpi).toHaveAttribute('hydrated');
        await expect(kpi.locator('ix-icon')).toHaveAttribute(
          'aria-label',
          'Caution status'
        );
      }
    );

    regressionTest(
      'prefers the specific label for danger and warning',
      async ({ mount, page }) => {
        await mount(`
          <ix-kpi id="danger" label="Motor speed" value="1" state="danger" aria-label-alarm-icon="Danger" aria-label-status-icon="Status"></ix-kpi>
          <ix-kpi id="warning" label="Motor speed" value="2" state="warning" aria-label-warning-icon="Warning" aria-label-status-icon="Status"></ix-kpi>
        `);

        await expect(page.locator('#danger')).toHaveAttribute('hydrated');
        await expect(page.locator('#warning')).toHaveAttribute('hydrated');
        await expect(page.locator('#danger ix-icon')).toHaveAttribute(
          'aria-label',
          'Danger'
        );
        await expect(page.locator('#warning ix-icon')).toHaveAttribute(
          'aria-label',
          'Warning'
        );
      }
    );
  });

  regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
    await mount(
      kpiStates
        .map(
          ({ state }) =>
            `<ix-kpi label="Motor speed" value="122.6" unit="rpm" state="${state}"></ix-kpi>`
        )
        .join('')
    );

    // Set as property: an `aria-*` named HTML attribute is reported as invalid by axe.
    const kpis = page.locator('ix-kpi');
    await kpis.evaluateAll((elements: HTMLIxKpiElement[]) => {
      for (const element of elements) {
        element.ariaLabelStatusIcon = `${element.state} status`;
      }
    });

    const { violations } = await makeAxeBuilder().analyze();
    expect(violations).toEqual([]);
  });
});
