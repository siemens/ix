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

type Element = Components.IxRangeField;

type RangeStoryArgs = Element & {
  startLabel: string;
  endLabel: string;
  startValue: string;
  endValue: string;
};

function rangeFieldRender(
  args: RangeStoryArgs,
  inputTag: 'ix-time-input' | 'ix-date-input'
) {
  const { startLabel, endLabel, startValue, endValue, ...rangeFieldArgs } =
    args;

  const container = genericRender('ix-range-field', rangeFieldArgs as Element);
  const rangeField = container.querySelector('ix-range-field');

  if (!rangeField) {
    return container;
  }

  const startInput = document.createElement(inputTag);
  startInput.label = startLabel;
  startInput.value = startValue;

  const endInput = document.createElement(inputTag);
  endInput.label = endLabel;
  endInput.value = endValue;

  rangeField.appendChild(startInput);
  rangeField.appendChild(endInput);

  return container;
}

const meta = {
  title: 'Example/RangeField',
  tags: [],
  render: (args) => rangeFieldRender(args, 'ix-time-input'),
  argTypes: makeArgTypes<Partial<ArgTypes<RangeStoryArgs>>>('ix-range-field', {
    startLabel: { control: { type: 'text' } },
    endLabel: { control: { type: 'text' } },
    startValue: { control: { type: 'text' } },
    endValue: { control: { type: 'text' } },
  }),
  parameters: {},
} satisfies Meta<RangeStoryArgs>;

export default meta;
type Story = StoryObj<RangeStoryArgs>;

export const Label: Story = {
  render: (args) => rangeFieldRender(args, 'ix-time-input'),
  args: {
    type: 'time-range',
    startLabel: 'From',
    endLabel: 'To',
    startValue: '09:00:00',
    endValue: '17:00:00',
  },
};

export const NoLabel: Story = {
  render: (args) => rangeFieldRender(args, 'ix-date-input'),
  args: {
    type: 'date-range',
    startValue: '2026/03/16',
    endValue: '2026/03/23',
  },
};

export const NoArrow: Story = {
  render: (args) => rangeFieldRender(args, 'ix-date-input'),
  args: {
    type: 'date-range',
    startValue: '2026/03/16',
    endValue: '2026/03/23',
    hideArrow: true,
  },
};
