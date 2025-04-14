/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('workflow-steps', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('workflow-steps/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('workflow-steps/overflow');
    const workflowSteps = page.locator('ix-workflow-steps');
    await expect(workflowSteps).toHaveClass(/hydrated/);

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

  regressionTest('updated workflowUI after status change', async ({ page }) => {
    await page.goto('workflow-steps/vertical');

    // Locate the specific ix-workflow-steps element
    const workflowSteps = page.locator('ix-workflow-steps').first();
    const selectedStep = workflowSteps.locator('ix-workflow-step').nth(0);
    const selectedStepIcon = selectedStep.locator('ix-icon').nth(1);

    const stepText = await selectedStep.evaluate((step) => step.textContent);
    console.log('Selected Step Text:', stepText);

    const stepAttributes = await selectedStep.evaluate((step) => {
      return Array.from(step.attributes).reduce(
        (acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        },
        {} as Record<string, string>
      );
    });
    console.log('Selected Step Attributes:', stepAttributes);

    const iconStyle = await selectedStepIcon.evaluate((icon) =>
      icon.getAttribute('style')
    );
    console.log('Selected Step Icon Style:', iconStyle);

    await expect(workflowSteps).toHaveClass(/hydrated/);
    await expect(selectedStepIcon).toHaveAttribute(
      'style',
      'color: var(--theme-workflow-step-icon-default--color--selected);'
    );
    await page.evaluate(() => {
      const step1 = document.getElementById('step1');
      step1?.setAttribute('status', 'error');
    });
    await expect(selectedStepIcon).toHaveAttribute(
      'style',
      'color: var(--theme-color-alarm);'
    );
    await page.evaluate(() => {
      const step1 = document.getElementById('step1');
      step1?.setAttribute('status', 'open');
    });

    await expect(selectedStepIcon).toHaveAttribute(
      'style',
      'color: var(--theme-workflow-step-icon-default--color--selected);'
    );
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
