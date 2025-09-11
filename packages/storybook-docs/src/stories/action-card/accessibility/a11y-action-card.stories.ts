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
import { genericRender, makeArgTypes } from '@utils/generic-render';

type Element = Components.IxActionCard & { defaultSlot: string };

const meta = {
  title: 'Example/ActionCard/Accessibility',
  tags: [],
  render: (args) => genericRender('ix-action-card', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-action-card', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Selected
 */
export const IconSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    selected: true,
  },
};

export const VariantAlarmSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'alarm',
    selected: true,
  },
};

export const VariantCriticalSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'critical',
    selected: true,
  },
};

export const VariantSuccessSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'success',
    selected: true,
  },
};

export const VariantWarningSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'warning',
    selected: true,
  },
};

export const VariantInfoSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'info',
    selected: true,
  },
};

export const VariantNeutralSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'neutral',
    selected: true,
  },
};

export const VariantOutlineSelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'outline',
    selected: true,
  },
};

export const VariantPrimarySelected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'primary',
    selected: true,
  },
};
