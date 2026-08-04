/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxDatetimeInput;

const meta = {
  title: 'Example/DateTimeInput/Accessibility',
  tags: [],
  render: (args) => genericRender('ix-datetime-input', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-datetime-input', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Default datetime input with value
 */
export const Default: Story = {
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
  },
};

/**
 * Datetime input with label
 */
export const WithLabel: Story = {
  args: {
    label: 'Select date and time',
    value: '2026/02/08 12:30:00',
  },
};

/**
 * Disabled datetime input
 */
export const DisabledState: Story = {
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    disabled: true,
  },
};

/**
 * Readonly datetime input
 */
export const ReadonlyState: Story = {
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    readonly: true,
  },
};

/**
 * Required datetime input
 */
export const RequiredState: Story = {
  args: {
    label: 'Required field',
    value: '',
    required: true,
  },
};

/**
 * Datetime input with helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Event date',
    value: '2026/02/08 00:00:00',
    helperText: 'Select the date and time for the event',
  },
};

/**
 * Datetime input with min/max date constraints
 */
export const WithMinMaxDate: Story = {
  args: {
    label: 'Date and time',
    value: '2026/06/15 10:00:00',
    minDate: '2026/01/01',
    maxDate: '2026/12/31',
  },
};

/**
 * Datetime input with aria-label
 */
export const WithAriaLabel: Story = {
  render: () => {
    return html`<ix-datetime-input
      value="2026/02/08 00:00:00"
      label="Appointment"
      aria-label="Select appointment date and time"
    ></ix-datetime-input>`;
  },
};
