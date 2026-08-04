/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it } from 'vitest';

async function flushWorkflowMutation(waitForChanges: () => Promise<void>) {
  await Promise.resolve();
  await waitForChanges();
}

describe('workflow-steps', () => {
  it('should render steps', async () => {
    const { root, waitForChanges } = await render(
      <ix-workflow-steps></ix-workflow-steps>
    );

    const workflowSteps = root as HTMLIxWorkflowStepsElement;
    const step = document.createElement(
      'ix-workflow-step'
    ) as HTMLIxWorkflowStepElement;

    workflowSteps.append(step);
    await flushWorkflowMutation(waitForChanges);

    expect(step.position).toBe('single');
    expect(step.selected).toBe(true);
  });

  it('should re-render workflow steps', async () => {
    const { root, waitForChanges } = await render(
      <ix-workflow-steps></ix-workflow-steps>
    );

    const workflowSteps = root as HTMLIxWorkflowStepsElement;
    const step = document.createElement(
      'ix-workflow-step'
    ) as HTMLIxWorkflowStepElement;
    const step1 = document.createElement(
      'ix-workflow-step'
    ) as HTMLIxWorkflowStepElement;
    const step2 = document.createElement(
      'ix-workflow-step'
    ) as HTMLIxWorkflowStepElement;

    workflowSteps.append(step);
    workflowSteps.append(step1);
    await flushWorkflowMutation(waitForChanges);

    expect(step.position).toBe('first');
    expect(step.selected).toBe(true);

    expect(step1.position).toBe('last');
    expect(step1.selected).toBe(false);

    workflowSteps.append(step2);
    await flushWorkflowMutation(waitForChanges);

    expect(step.position).toBe('first');
    expect(step.selected).toBe(true);

    expect(step1.position).toBe('undefined');
    expect(step1.selected).toBe(false);

    expect(step2.position).toBe('last');
    expect(step2.selected).toBe(false);
  });
});
