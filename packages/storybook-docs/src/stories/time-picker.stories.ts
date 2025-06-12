/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxTimePicker;

const meta = {
  title: 'Example/Time Picker',
  tags: [],
  render: (args) => genericRender('ix-time-picker', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-time-picker', {}),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    time: '09:30:00',
    format: 'HH:mm:ss',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'rounded',
    standaloneAppearance: true,
  },
};

export const AMPM: Story = {
  args: {
    time: '09:30:00 AM',
    format: 'hh:mm:ss a',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 1,
  },
};

export const Milliseconds: Story = {
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 1,
  },
};

export const Intervals: Story = {
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 15,
    hourInterval: 1,
    millisecondInterval: 50,
    secondInterval: 30,
  },
};

export const HourOnly: Story = {
  args: {
    time: '09',
    format: 'HH',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'rounded',
    standaloneAppearance: true,
  },
};
