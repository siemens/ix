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
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxProgressIndicator & { defaultSlot: string };

const meta = {
  title: 'Example/ProgressIndicator',
  tags: [],
  render: (args) => genericRender('ix-progress-indicator', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-progress-indicator',
    {}
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'REPLACE ME',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Linear: Story = {
  args: {
    label: 'Progress Indicator',
    helperText: 'This is a progress indicator',
    value: 50,
    defaultSlot: '100%',
  },
};

export const Circular: Story = {
  args: {
    label: 'Progress Indicator',
    helperText: 'This is a progress indicator',
    value: 50,
    defaultSlot: 'Upload 1/2',
  },
};

export const TooltipPlacement: Story = {
  args: {
    label: 'Progress Indicator',
    helperText: 'This is a progress indicator',
    value: 50,
    status: 'warning',
    size: 'md',
    showTextAsTooltip: true,
    defaultSlot: '100%',
  },
};
