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
import { genericRender, makeArgTypes } from './generic-render';

type Element = Components.IxButton & { textContent: string };

const meta = {
  title: 'Example/Button',
  tags: [],
  render: (args) => genericRender('ix-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-button', {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      description: 'test',
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
    textContent: 'Button',
  },
};

export const Loading: Story = {
  args: {
    textContent: 'Button',
    loading: true,
    ghost: false,
  },
};

export const ButtonOutlineWithIcon: Story = {
  args: {
    textContent: 'Button',
    disabled: false,
    ghost: false,
    icon: 'eye',
    loading: false,
    outline: true,
    variant: 'primary',
  },
};
