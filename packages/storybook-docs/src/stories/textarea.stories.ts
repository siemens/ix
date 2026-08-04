/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxTextarea & {
  validation: 'default' | 'info' | 'warning' | 'invalid' | 'valid';
};

function genericInputRender(args: Partial<Element>) {
  const container = genericRender('ix-textarea', args, ['validation']);
  const input = container.querySelector('ix-textarea') as HTMLIxTextareaElement;

  input.classList.remove('ix-info', 'ix-warning', 'ix-invalid', 'ix-valid');

  if (args.validation !== 'default') {
    input.classList.add(`ix-${args.validation}`);
  }
  return container;
}

const meta = {
  title: 'Example/Textarea',
  tags: [],
  render: (args) => genericInputRender(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-textarea', {
    validation: {
      options: ['default', 'info', 'warning', 'invalid', 'valid'],
      control: { type: 'select' },
    },
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const Required: Story = {
  args: {
    label: 'Required',
    value: '',
    required: true,
  },
};

export const ValidationStates: Story = {
  args: {
    label: 'Validation States',
    value: 'Test',
    required: true,
    validation: 'invalid',
  },
};
