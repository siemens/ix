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
import { genericRender, makeArgTypes } from '@utils/generic-render';

type Element = Components.IxActionCard & { defaultSlot: string };

const meta = {
  title: 'Example/ActionCard',
  tags: [],
  render: (args) => genericRender('ix-action-card', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-action-card', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=104612-25078&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    defaultSlot: 'Button',
  },
};

export const SubHeading: Story = {
  args: {
    defaultSlot: 'Some content',
    subheading: 'I am a subheading',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
  },
};

export const HeadingWithoutSlottedContent: Story = {
  args: {
    defaultSlot: '',
    heading: 'I am a heading',
  },
};

export const Selected: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    selected: true,
  },
};

export const Icon: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
  },
};

export const VariantDanger: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'danger',
  },
};

export const VariantWarning: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'warning',
  },
};

export const VariantCaution: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'caution',
  },
};

export const VariantInformation: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'information',
  },
};

export const VariantAccent: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'accent',
  },
};

export const VariantCritical: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'critical',
  },
};

export const VariantSuccess: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'success',
  },
};

export const VariantNeutral: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'neutral',
  },
};

export const OutlineFalse: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    variant: 'default',
    outline: false,
  },
};

export const NotClickable: Story = {
  args: {
    defaultSlot: 'Some content',
    heading: 'I am a heading',
    icon: 'add-circle-filled',
    clickable: false,
  },
};
