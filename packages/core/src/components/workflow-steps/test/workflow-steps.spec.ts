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
import { createMutationObserver } from './../../utils/mutation-observer';

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
    page.root.querySelector('ix-workflow-steps').append(step);

    observerCallback([{ type: 'childList' }]);

    await page.waitForChanges();
    expect(step).toEqualAttributes({
      position: 'last',
      selected: true,
    });
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
    page.root.querySelector('ix-workflow-steps').append(step);
    page.root.querySelector('ix-workflow-steps').append(step1);

    observerCallback([{ type: 'childList' }]);
    await page.waitForChanges();

    expect(step).toEqualAttributes({
      position: 'first',
      selected: true,
    });

    expect(step1).toEqualAttributes({
      position: 'last',
      selected: false,
    });

    page.root.querySelector('ix-workflow-steps').append(step2);
    observerCallback([{ type: 'childList' }]);
    await page.waitForChanges();

    expect(step).toEqualAttributes({
      position: 'first',
      selected: true,
    });

    expect(step1).toEqualAttributes({
      position: 'undefined',
      selected: false,
    });

    expect(step2).toEqualAttributes({
      position: 'last',
      selected: false,
    });
  });
});
