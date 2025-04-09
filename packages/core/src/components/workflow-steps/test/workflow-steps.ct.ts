/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
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

test('should be clickable', async ({ mount, page }) => {
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

test('should prevent click navigation', async ({ mount, page }) => {
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

test.only('Workflow status when in open is updating properly after updating of the status', async ({
  mount,
  page,
}) => {
  await mount(`
    <div>
    <ix-workflow-steps clickable vertical>
      <ix-workflow-step id="step1" status='open'>Step 1</ix-workflow-step>
      <ix-workflow-step status='success'>Step 2</ix-workflow-step>
      <ix-workflow-step status='error'>Step 3</ix-workflow-step>
    </ix-workflow-steps>

    <ix-button id="toggle-button">Toggle Step 1</ix-button>
    </div>
  `);
  const workflowSteps = page.locator('ix-workflow-steps');

  await expect(workflowSteps).toHaveClass(/hydrated/);

  await page.evaluate(() => {
    const button = document.getElementById('toggle-button');
    const step1 = document.getElementById('step1');

    button?.addEventListener('click', () => {
      const currentStatus = step1?.getAttribute('status');
      step1?.setAttribute(
        'status',
        currentStatus === 'open' ? 'error' : 'open'
      );
    });
  });

  // ✅ Click toggle button and assert status changes
  const toggleBtn = page.locator('#toggle-button');
  const step1 = page.locator('#step1');
  await toggleBtn.click();
  await expect(step1).toHaveAttribute('status', 'error');
  await toggleBtn.click();
  await expect(step1).toHaveAttribute('status', 'open');

  const selectedStep = workflowSteps.locator('ix-workflow-step').nth(0);
  const selectedDiv = selectedStep.locator('.step');

  await expect(selectedDiv).toHaveClass(/selected/);
});
