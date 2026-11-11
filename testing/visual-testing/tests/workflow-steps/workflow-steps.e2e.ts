/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('workflow-steps', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('workflow-steps/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('workflow-steps/overflow');
    const workflowSteps = page.locator('ix-workflow-steps');
    await expect(workflowSteps).toHaveAttribute('hydrated');

    const stepItems = workflowSteps.locator('ix-workflow-step');

    await stepItems.nth(4).scrollIntoViewIfNeeded();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('toggle and disable', async ({ page }) => {
    await page.goto('workflow-steps/toggle');

    const stepItemLocator = page.locator('ix-workflow-step').nth(1);
    await stepItemLocator.evaluate((stepItem: any) => {
      stepItem.status = 'done';
      stepItem.disabled = true;
    });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-workflow-steps clickable style="width: 30rem"><ix-workflow-step>Step 1</ix-workflow-step><ix-workflow-step>Step 2</ix-workflow-step></ix-workflow-steps>
    </div>`
  );

  await focusWithKeyboard(page, page.locator('ix-workflow-step >> nth=0'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});
