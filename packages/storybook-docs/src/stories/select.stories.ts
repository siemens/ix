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
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9899&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const editableSelect: Story = {
  render: ({ value, editable, allowClear, disabled, }) => {
    return html`
      <ix-select value=${value} ?editable=${editable} ?allow-clear=${allowClear} disabled=${disabled}>
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
  },
};
