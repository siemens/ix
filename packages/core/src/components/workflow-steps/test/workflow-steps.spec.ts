/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { WorkflowStep } from '../..//workflow-step/workflow-step';
import { WorkflowSteps } from '../workflow-steps';
//@ts-ignore
import { createMutationObserver } from './../../utils/mutation-observer';
import {
  iconCircle,
  iconCircleDot,
  iconCircleFilled,
  iconError,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';

jest.mock('./../../utils/mutation-observer');

describe('workflow-steps', () => {
  let observerCallback: Function;

  beforeEach(async () => {
    //@ts-ignore
    createMutationObserver = jest.fn((callback) => {
      observerCallback = callback;
      return {
        observe: jest.fn(),
      };
    });
  });

  it('should render steps', async () => {
    const page = await newSpecPage({
      components: [WorkflowSteps, WorkflowStep],
      html: `<ix-workflow-steps>
      <ix-workflow-steps>`,
    });

    const step = document.createElement('ix-workflow-step');
    page.root!.querySelector('ix-workflow-steps')!.append(step);

    observerCallback([{ type: 'childList' }]);

    await page.waitForChanges();

    expect(step.position).toEqual('single');
    expect(step.selected).toEqual(true);
  });

  it('should re-render workflow steps', async () => {
    const page = await newSpecPage({
      components: [WorkflowSteps, WorkflowStep],
      html: `<ix-workflow-steps>
      <ix-workflow-steps>`,
    });

    const step = document.createElement('ix-workflow-step');
    const step1 = document.createElement('ix-workflow-step');
    const step2 = document.createElement('ix-workflow-step');
    page.root!.querySelector('ix-workflow-steps')!.append(step);
    page.root!.querySelector('ix-workflow-steps')!.append(step1);

    observerCallback([{ type: 'childList' }]);
    await page.waitForChanges();

    expect(step.position).toEqual('first');
    expect(step.selected).toEqual(true);

    expect(step1.position).toEqual('last');
    expect(step1.selected).toEqual(false);

    page.root!.querySelector('ix-workflow-steps')!.append(step2);
    observerCallback([{ type: 'childList' }]);
    await page.waitForChanges();

    expect(step.position).toEqual('first');
    expect(step.selected).toEqual(true);

    expect(step1.position).toEqual('undefined');
    expect(step1.selected).toEqual(false);

    expect(step2.position).toEqual('last');
    expect(step2.selected).toEqual(false);
  });
  it('should render correct icons for all states', async () => {
    const step1 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="open"></ix-workflow-step>`,
    });
    expect(step1.rootInstance.iconName).toBe(iconCircle);
    expect(step1.rootInstance.iconColor).toBe(
      'workflow-step-icon-default--color'
    );

    const step2 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="open" selected></ix-workflow-step>`,
    });
    expect(step2.rootInstance.iconName).toBe(iconCircleDot);
    expect(step2.rootInstance.iconColor).toBe(
      'workflow-step-icon-default--color--selected'
    );

    const step3 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="success"></ix-workflow-step>`,
    });
    expect(step3.rootInstance.iconName).toBe(iconSuccess);
    expect(step3.rootInstance.iconColor).toBe('color-success');

    const step4 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="done"></ix-workflow-step>`,
    });
    expect(step4.rootInstance.iconName).toBe(iconCircleFilled);
    expect(step4.rootInstance.iconColor).toBe('workflow-step-icon-done--color');

    const step5 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="done" selected></ix-workflow-step>`,
    });
    expect(step5.rootInstance.iconName).toBe(iconCircleFilled);
    expect(step5.rootInstance.iconColor).toBe(
      'workflow-step-icon-done--color--selected'
    );

    const step6 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="warning"></ix-workflow-step>`,
    });
    expect(step6.rootInstance.iconName).toBe(iconWarning);
    expect(step6.rootInstance.iconColor).toBe('color-warning');

    const step7 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step status="error"></ix-workflow-step>`,
    });
    expect(step7.rootInstance.iconName).toBe(iconError);
    expect(step7.rootInstance.iconColor).toBe('color-alarm');

    const step8 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step disabled></ix-workflow-step>`,
    });
    expect(step8.rootInstance.iconName).toBe(iconCircle);
    expect(step8.rootInstance.iconColor).toBe(
      'workflow-step-icon-success--color--disabled'
    );

    const step9 = await newSpecPage({
      components: [WorkflowStep],
      html: `<ix-workflow-step></ix-workflow-step>`,
    });
    expect(step9.rootInstance.iconName).toBe(iconCircle);
    expect(step9.rootInstance.iconColor).toBe(
      'workflow-step-icon-default--color'
    );
  });
});
