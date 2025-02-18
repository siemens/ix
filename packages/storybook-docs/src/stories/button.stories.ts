/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';
import { action } from '@storybook/addon-actions';

type Element = Components.IxButton & { defaultSlot: string };

const meta = {
  title: 'Example/Button',
  tags: [],
  render: (args) => genericRender('ix-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-button', {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  }),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    defaultSlot: 'Button',
  },
};

export const Loading: Story = {
  args: {
    defaultSlot: 'Button',
    loading: true,
    ghost: false,
  },
};

export const ButtonOutlineWithIcon: Story = {
  args: {
    defaultSlot: 'Button',
    disabled: false,
    ghost: false,
    icon: 'eye',
    loading: false,
    outline: true,
    variant: 'primary',
  },
};

export const TypeSubmit: Story = {
  render: (args) => {
    const button = genericRender('ix-button', args);
    const form = document.createElement('form');
    form.appendChild(button);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      action('Form submitted')();
    });

    return form;
  },
  args: {
    defaultSlot: 'Button',
    type: 'submit',
  },
};
