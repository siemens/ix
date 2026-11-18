/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import {
  genericValidationRender,
  genericRender,
  makeArgTypes,
} from './utils/generic-render';

type Element = Components.IxInput & {
  validation: 'default' | 'info' | 'warning' | 'invalid' | 'valid';
};

const meta = {
  title: 'Example/Input',
  tags: [],
  render: (args) => genericValidationRender('ix-input', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-input', {
    validation: {
      options: ['default', 'info', 'warning', 'invalid', 'valid'],
      control: { type: 'select' },
    },
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Required: Story = {
  args: {
    label: 'Required',
    value: '',
    required: true,
  },
};

export const Slotted: Story = {
  args: {
    label: 'Required',
    value: 'Test',
    required: true,
  },

  render: (args) => {
    const container = genericRender('ix-input', args);
    const input = container.querySelector('ix-input') as HTMLIxInputElement;

    const icon = document.createElement('ix-icon-button');
    icon.icon = 'search';
    icon.slot = 'start';
    input.appendChild(icon);

    return container;
  },
};

export const MinLength: Story = {
  args: {
    label: 'MinLength',
    minLength: 3,
    maxLength: 5,
    value: '1234567',
  },
};

export const ValidationState: Story = {
  args: {},
};

export const ClearValidation: Story = {
  render: () => {
    const container = document.createElement('div');
    const fields = [
      document.createElement('ix-input'),
      document.createElement('ix-number-input'),
      document.createElement('ix-textarea'),
    ];

    for (const field of fields) {
      field.label = field.tagName.toLowerCase();
      field.required = true;
      field.setAttribute('value', '42');
      const clearButton = document.createElement('ix-button');
      clearButton.type = 'button';
      clearButton.textContent = `Clear ${field.label}`;
      clearButton.addEventListener('click', () => void field.clear());
      container.append(field, clearButton);
    }

    return container;
  },
};
