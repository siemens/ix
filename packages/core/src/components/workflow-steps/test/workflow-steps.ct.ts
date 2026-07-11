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

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-workflow-steps>
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
    </ix-workflow-steps>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});
regressionTest(
  'should have correct aria attributes for accessibility',
  async ({ mount, page }) => {
    await mount(`
      <ix-workflow-steps clickable>
        <ix-workflow-step status="error">Step 1</ix-workflow-step>
        <ix-workflow-step status="error" disabled>Step 2</ix-workflow-step>
        <ix-workflow-step status="error">Step 3</ix-workflow-step>
      </ix-workflow-steps>
    `);

    const workflowSteps = page.locator('ix-workflow-steps');
    const steps = page.locator('ix-workflow-step');

    await expect(workflowSteps).toHaveClass(/hydrated/);

    await workflowSteps.evaluate(
      (el: HTMLIxWorkflowStepsElement) => (el.selectedIndex = 2)
    );

    const step1Div = steps.nth(0).locator('.step');
    const step2Div = steps.nth(1).locator('.step');
    const step3Div = steps.nth(2).locator('.step');

    await expect(step1Div).toHaveAttribute('role', 'button');
    await expect(step1Div).toHaveAttribute('tabindex', '0');

    await expect(step2Div).toHaveAttribute('aria-disabled', 'true');
    await expect(step2Div).toHaveAttribute('tabindex', '-1');

    await expect(step3Div).toHaveAttribute('aria-current', 'step');
  }
);
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
  'supports keyboard selection via Enter and Space',
  async ({ mount, page }) => {
    await mount(`
      <ix-workflow-steps clickable>
        <ix-workflow-step>Step 1</ix-workflow-step>
        <ix-workflow-step>Step 2</ix-workflow-step>
      </ix-workflow-steps>
    `);

    const first = page.locator('ix-workflow-step').nth(0).locator('.step');
    const second = page.locator('ix-workflow-step').nth(1).locator('.step');

    await first.focus();
    await first.press('Enter');
    await expect(first).toHaveClass(/selected/);

    await second.focus();
    await second.press('Space');
    await expect(second).toHaveClass(/selected/);
  }
);

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
    await expect(workflowSteps).toHaveClass(/hydrated/);

    const step1 = page.locator('#step1');
    await expect(step1).toHaveClass(/hydrated/);

    const selectedDiv = step1.locator('.step');

    await expect(workflowSteps).toHaveClass(/hydrated/);
    await expect(selectedDiv).toHaveClass(/selected/);

    let icon = page.locator('#step1 ix-icon').nth(1);
    await step1.evaluate((el) => {
      el.setAttribute('status', 'error');
    });

    await expect(step1).toHaveAttribute('status', 'error');
    await expect(icon).toHaveAttribute('aria-label', 'Error');

    await step1.evaluate((el) => {
      el.setAttribute('status', 'open');
    });
    await expect(step1).toHaveAttribute('status', 'open');

    await expect(icon).toHaveAttribute('aria-label', 'Circle dot');
    await expect(selectedDiv).toHaveClass(/selected/);
  }
);
