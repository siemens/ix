/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { genericRender, makeArgTypes } from './utils/generic-render';
import { html } from 'lit';

type Element = Components.IxSelect;

const meta = {
  title: 'Example/Select',
  tags: [],
  render: (args) => genericRender('ix-select', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-select'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=42365-175539&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const editableSelect: Story = {
  render: ({ value, editable, allowClear, disabled, mode }) => {
    return html` <ix-select
      value=${value}
      mode=${mode}
      ?editable=${editable}
      ?allow-clear=${allowClear}
      disabled=${disabled}
    >
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`;
  },
  args: {
    value: 'Administrator',
    editable: true,
    allowClear: true,
    disabled: false,
    mode: 'single',
  },
};

export const editable_with_dropdown_width: Story = {
  render: ({ editable, disabled, dropdownWidth, dropdownMaxWidth }) => {
    return html` <ix-select
      editable=${editable}
      disabled=${disabled}
      dropdown-width=${dropdownWidth}
      dropdown-max-width=${dropdownMaxWidth}
    >
      <ix-select-item
        label="this is an example for a very long selection option. this is an example for a very long selection option."
        value="1"
      ></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`;
  },
  args: {
    editable: true,
    disabled: false,
    dropdownWidth: '35rem',
    dropdownMaxWidth: '25rem',
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required',
  },
};

export const multiSelect: Story = {
  render: (args) => {
    const container = genericRender('ix-select', args, ['value']);
    const select = container.querySelector('ix-select')!;
    const items = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
    ];

    items.forEach(({ label, value }) => {
      const item = document.createElement('ix-select-item');
      item.label = label;
      item.value = value;
      select.appendChild(item);
    });

    select.value = args.value;

    return container;
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Selected values in multiple mode',
    },
  },
  args: {
    mode: 'multiple',
    allowClear: true,
    value: ['1', '2', '3', '4', '5'],
  },
};
