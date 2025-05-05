/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxInput;

interface InputWithSlots extends Element {
  helperSlot?: string;
  validSlot?: string;
  invalidSlot?: string;
  warningSlot?: string;
  infoSlot?: string;
  class?: string;
}

const meta = {
  title: 'Example/Input/Slots',
  tags: [],
  render: (args) => html`
    <ix-input
      label=${args.label}
      value=${args.value}
      required=${args.required}
      .helperText=${args.helperText}
      .validText=${args.validText}
      .invalidText=${args.invalidText}
      .infoText=${args.infoText}
      .warningText=${args.warningText}
      .showTextAsTooltip=${args.showTextAsTooltip}
      class=${args.class ?? ''}
    >
      ${args.helperSlot ? html`<div slot="helper">${args.helperSlot}</div>` : ''}
      ${args.validSlot ? html`<div slot="valid">${args.validSlot}</div>` : ''}
      ${args.invalidSlot ? html`<div slot="invalid">${args.invalidSlot}</div>` : ''}
      ${args.warningSlot ? html`<div slot="warning">${args.warningSlot}</div>` : ''}
      ${args.infoSlot ? html`<div slot="info">${args.infoSlot}</div>` : ''}
    </ix-input>
  `,
  argTypes: {
    ...makeArgTypes<Partial<ArgTypes<Element>>>('ix-input', {}),
    helperSlot: { control: 'text' },
    validSlot: { control: 'text' },
    invalidSlot: { control: 'text' },
    warningSlot: { control: 'text' },
    infoSlot: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<InputWithSlots>;

export default meta;
type Story = StoryObj<InputWithSlots>;

export const Helper: Story = {
  args: {
    label: 'Required',
    required: true,
    helperText: 'Helper text content',
    helperSlot: 'Helper slot content'
  },
};

export const Valid: Story = {
  args: {
    label: 'Valid Input',
    class: 'ix-valid',
    validText: 'Valid text content',
    validSlot: 'Valid slot content'
  },
};

export const Invalid: Story = {
  args: {
    label: 'Invalid Input',
    required: true,
    class: 'ix-invalid',
    invalidText: 'Invalid text content',
    invalidSlot: 'Invalid slot content'
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Input',
    class: 'ix-warning',
    warningText: 'Warning text content',
    warningSlot: 'Warning slot content'
  },
};

export const Info: Story = {
  args: {
    label: 'Info Input',
    class: 'ix-info',
    infoText: 'Info text content',
    infoSlot: 'Info slot content'
  },
};

export const SlotInTooltip: Story = {
  args: {
    label: 'Tooltip Input',
    helperText: 'Helper text content',
    showTextAsTooltip: true,
    helperSlot: 'Helper slot content'
  },
};
