/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { makeArgTypes } from './utils/generic-render';
import { html } from 'lit';
import { action } from 'storybook/actions';

type Element = Components.IxWorkflowSteps;

const meta = {
  title: 'Example/Workflow',
  tags: [],
  render: ({ clickable, selectedIndex, vertical }) => html`
    <ix-workflow-steps
      ?clickable=${clickable}
      .selectedIndex=${selectedIndex}
      ?vertical=${vertical}
      @stepSelected=${action('stepSelected')}
    >
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>
  `,
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-workflow-steps'),
  parameters: {
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    clickable: true,
    selectedIndex: 0,
    vertical: false,
  },
};
