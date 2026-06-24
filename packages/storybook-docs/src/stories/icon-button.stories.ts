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
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxIconButton & {
  styles?: Record<string, string>;
};

const meta = {
  title: 'Example/IconButton',
  tags: [],
  render: (args) => genericRender('ix-icon-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-icon-button', {
    styles: {
      control: { type: 'object' },
    },
  }),
  args: {
    icon: 'star',
    variant: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=107193-14086&p=f&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const SubtlePrimary: Story = {
  args: {
    variant: 'subtle-primary',
  },
};

export const SubtleSecondary: Story = {
  args: {
    variant: 'subtle-secondary',
  },
};

export const SubtleTertiary: Story = {
  args: {
    variant: 'subtle-tertiary',
  },
};

export const DangerPrimary: Story = {
  args: {
    icon: 'trashcan',
    variant: 'danger-primary',
  },
};

export const DangerSecondary: Story = {
  args: {
    icon: 'trashcan',
    variant: 'danger-secondary',
  },
};

export const DangerTertiary: Story = {
  args: {
    icon: 'trashcan',
    variant: 'danger-tertiary',
  },
};

export const Oval: Story = {
  args: {
    oval: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Size16: Story = {
  args: {
    size: '16',
  },
};

export const Size12: Story = {
  args: {
    size: '12',
  },
};

export const CustomIconColor: Story = {
  args: {
    iconColor: 'color-alarm',
  },
};
