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

type Element = Components.IxToggleButton & {
  defaultSlot: string;
  styles?: Record<string, string>;
};

const meta = {
  title: 'Example/ToggleButton',
  tags: [],
  render: (args) => genericRender('ix-toggle-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-toggle-button', {
    styles: {
      control: { type: 'object' },
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

export const Primary: Story = {
  args: {
    defaultSlot: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    defaultSlot: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    defaultSlot: 'Button',
    variant: 'tertiary',
  },
};

export const SubtlePrimary: Story = {
  args: {
    defaultSlot: 'Button',
    variant: 'subtle-primary',
  },
};

export const SubtleSecondary: Story = {
  args: {
    defaultSlot: 'Button',
    variant: 'subtle-secondary',
  },
};

export const SubtleTertiary: Story = {
  args: {
    defaultSlot: 'Button',
    variant: 'subtle-tertiary',
  },
};
