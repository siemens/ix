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

type Element = Components.IxDropdownButton;

const meta = {
  title: 'Example/DropdownButton',
  tags: [],
  render: (args) => genericRender('ix-dropdown-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-dropdown-button'),
  args: {
    icon: 'eye',
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Button',
    variant: 'tertiary',
  },
};

export const SubtlePrimary: Story = {
  args: {
    label: 'Button',
    variant: 'subtle-primary',
  },
};

export const SubtleSecondary: Story = {
  args: {
    label: 'Button',
    variant: 'subtle-secondary',
  },
};

export const SubtleTertiary: Story = {
  args: {
    label: 'Button',
    variant: 'subtle-tertiary',
  },
};

export const DangerPrimary: Story = {
  args: {
    label: 'Button',
    variant: 'danger-primary',
  },
};

export const DangerSecondary: Story = {
  args: {
    label: 'Button',
    variant: 'danger-secondary',
  },
};

export const DangerTertiary: Story = {
  args: {
    label: 'Button',
    variant: 'danger-tertiary',
  },
};

export const PrimaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'primary',
  },
};

export const SecondaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'secondary',
  },
};

export const TertiaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'tertiary',
  },
};

export const SubtlePrimaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'subtle-primary',
  },
};

export const SubtleSecondaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'subtle-secondary',
  },
};

export const SubtleTertiaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'subtle-tertiary',
  },
};

export const DangerPrimaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'danger-primary',
  },
};

export const DangerSecondaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'danger-secondary',
  },
};

export const DangerTertiaryIcon: Story = {
  args: {
    icon: 'eye',
    variant: 'danger-tertiary',
  },
};
