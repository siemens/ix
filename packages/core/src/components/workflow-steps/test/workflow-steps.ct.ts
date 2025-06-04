/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconCircleDot, iconError } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-workflow-steps>
      <ix-workflow-step>Test 1</ix-workflow-step>
      <ix-workflow-step>Test 2</ix-workflow-step>
      <ix-workflow-step>Test 3</ix-workflow-step>
    </ix-workflow-steps>
  `);
  const workflowSteps = page.locator('ix-workflow-steps');
  workflowSteps.evaluate(
    (step: HTMLIxWorkflowStepsElement) => (step.selectedIndex = 1)
  );
  const step = workflowSteps
    .locator('ix-workflow-step')
    .nth(1)
    .locator('.step .selected');
  await expect(workflowSteps).toHaveClass(/hydrated/);
  await expect(step).toBeVisible();
});

regressionTest('should be clickable', async ({ mount, page }) => {
  await mount(`
    <ix-workflow-steps clickable>
      <ix-workflow-step>Test 1</ix-workflow-step>
      <ix-workflow-step>Test 2</ix-workflow-step>
      <ix-workflow-step>Test 3</ix-workflow-step>
    </ix-workflow-steps>
  `);
  const workflowSteps = page.locator('ix-workflow-steps');
  const lastStep = workflowSteps.locator('ix-workflow-step').nth(2);
  const selectedDiv = lastStep.locator('.step');
  await lastStep.click();

  await expect(workflowSteps).toHaveClass(/hydrated/);
  await expect(selectedDiv).toHaveClass(/selected/);
});

regressionTest('should prevent click navigation', async ({ mount, page }) => {
  await mount(`
    <ix-workflow-steps clickable>
      <ix-workflow-step>Test 1</ix-workflow-step>
      <ix-workflow-step>Test 2</ix-workflow-step>
      <ix-workflow-step>Test 3</ix-workflow-step>
    </ix-workflow-steps>
  `);
  const workflowSteps = page.locator('ix-workflow-steps');

  await workflowSteps.evaluate((steps: HTMLIxWorkflowStepsElement) => {
    steps.addEventListener('stepSelected', (event) => {
      event.preventDefault();
    });
  });

  const firstStep = workflowSteps.locator('ix-workflow-step').nth(0);
  const lastStep = workflowSteps.locator('ix-workflow-step').nth(2);
  const firstStepDiv = firstStep.locator('.step');
  const lastStepDiv = lastStep.locator('.step');

  await lastStep.click();

  await expect(workflowSteps).toHaveClass(/hydrated/);
  await expect(firstStepDiv).toHaveClass(/selected/);
  await expect(lastStepDiv).not.toHaveClass(/selected/);
});

regressionTest(
  'should have the correct visuals after toggling state from open to error and back again to open',
  async ({ mount, page }) => {
    await mount(`
      <ix-workflow-steps clickable vertical>
      <ix-workflow-step id="step1" status='open'>Step 1</ix-workflow-step>
      <ix-workflow-step status='success'>Step 2</ix-workflow-step>
      <ix-workflow-step status='error'>Step 3</ix-workflow-step>
      </ix-workflow-steps>
    `);
    const workflowSteps = page.locator('ix-workflow-steps');
    const selectedStep = workflowSteps.locator('ix-workflow-step').nth(0);
    const selectedDiv = selectedStep.locator('.step');
    const step1 = page.locator('#step1');
    await expect(workflowSteps).toHaveClass(/hydrated/);
    await expect(selectedDiv).toHaveClass(/selected/);
    await step1.evaluate((el) => {
      el.setAttribute('status', 'error');
    });
    await expect(step1).toHaveAttribute('status', 'error');
    let icon = await page.locator('#step1 ix-icon').nth(1);
    let iconSvg = await icon.getAttribute('data-name');
    expect(iconSvg).toContain(iconError);
    await step1.evaluate((el) => {
      el.setAttribute('status', 'open');
    });
    await expect(step1).toHaveAttribute('status', 'open');
    icon = await page.locator('#step1 ix-icon').nth(1);
    iconSvg = await icon.getAttribute('data-name');
    expect(iconSvg).toContain(iconCircleDot);
    await expect(selectedDiv).toHaveClass(/selected/);
  }
);
