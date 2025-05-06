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
  class?: string;
}

const meta = {
  title: 'Example/Input/Slots',
  tags: [],
  argTypes: {
    ...makeArgTypes<Partial<ArgTypes<Element>>>('ix-input', {}),
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

export const AllSlots: Story = {
  args: {
    label: 'All Slots',
    required: true,
    class: 'ix-valid',
    validText: 'Valid text content',
    invalidText: 'Invalid text content',
    warningText: 'Warning text content',
    infoText: 'Info text content',
    helperText: 'Helper text content',
    showTextAsTooltip: false,
  },
  render: (args) => html`
    <ix-input
      label=${args.label}
      required=${args.required}
      class=${args.class}
      .validText=${args.validText}
      .invalidText=${args.invalidText}
      .warningText=${args.warningText}
      .infoText=${args.infoText}
      .helperText=${args.helperText}
      .showTextAsTooltip=${args.showTextAsTooltip}
    >
      <div slot="valid">Valid slot content</div>
      <div slot="invalid">Invalid slot content</div>
      <div slot="warning">Warning slot content</div>
      <div slot="info">Info slot content</div>
      <div slot="helper">Helper slot content</div>
    </ix-input>
  `
};


export const Helper: Story = {
  args: {
    label: 'Required',
    required: true,
    helperText: 'Helper text content',
    showTextAsTooltip: true,
  },
  render: (args) => html`
    <ix-input
      label=${args.label}
      required=${args.required}
      .helperText=${args.helperText}
      .showTextAsTooltip=${args.showTextAsTooltip}
    >
      <div slot="helper">Helper slot content</div>
    </ix-input>
  `
};

export const Valid: Story = {
  args: {
    label: 'Valid Input',
    class: 'ix-valid',
    validText: 'Valid text content',
  },
  render: (args) => html`
    <ix-input
      label=${args.label}
      class=${args.class}
      .validText=${args.validText}
    >
      <div slot="valid">Valid slot content</div>
    </ix-input>
  `
};

export const Invalid: Story = {
  args: {
    label: 'Invalid Input',
    required: true,
    class: 'ix-invalid',
    invalidText: 'Invalid text content',
  },
  render: (args) => html`
    <ix-input
      label=${args.label}
      required=${args.required}
      class=${args.class}
      .invalidText=${args.invalidText}
    >
      <div slot="invalid">Invalid slot content</div>
    </ix-input>
  `
};

export const Warning: Story = {
  args: {
    label: 'Warning Input',
    class: 'ix-warning',
    warningText: 'Warning text content',
  },
  render: (args) => html`
    <ix-input
      label=${args.label}
      class=${args.class}
      .warningText=${args.warningText}
    >
      <div slot="warning">Warning slot content</div>
    </ix-input>
  `
};

export const Info: Story = {
  args: {
    label: 'Info Input',
    class: 'ix-info',
    infoText: 'Info text content',
  },
  render: (args) => html`
    <ix-input
      label=${args.label}
      class=${args.class}
      .infoText=${args.infoText}
    >
      <div slot="info">Info slot content</div>
    </ix-input>
  `
};


export const PasswordExample: Story = {
  args: {
    label: 'Password',
    type: 'password',
    required: true,
    maxLength: 20,
  },
  render: (args) => {
    const handleInput = (e: Event) => {
      const input = e.target as HTMLInputElement;
      const password = input.value;
      const helperElement = input.parentElement?.querySelector('[slot="helper"]');

      if (helperElement) {
        const hasMinLength = password.length >= 8;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        helperElement.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div>
              <span style="color: ${hasMinLength ? '#00cc00' : '#ff0000'}">
                ${hasMinLength ? '✓' : '✗'}
              </span>
              Minimum length: ${password.length}/8 characters
            </div>
            <div>
              <span style="color: ${hasSpecialChar ? '#00cc00' : '#ff0000'}">
                ${hasSpecialChar ? '✓' : '✗'}
              </span>
              Minimum 1 special character
            </div>
            <div>
              <span style="color: ${hasUpperCase ? '#00cc00' : '#ff0000'}">
                ${hasUpperCase ? '✓' : '✗'}
              </span>
              Minimum 1 upper case character
            </div>
            <div>
              <span style="color: ${hasNumber ? '#00cc00' : '#ff0000'}">
                ${hasNumber ? '✓' : '✗'}
              </span>
              Minimum 1 number
            </div>
          </div>`;
      }
    };

    return html`
      <ix-input
        label=${args.label}
        type="password"
        required=${args.required}
        @input=${handleInput}
        .maxLength=${args.maxLength}
      >
        <div slot="helper">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div>
              <span style="color: #ff0000">✗</span>
              Minimum length: 0/8 characters
            </div>
            <div>
              <span style="color: #ff0000">✗</span>
              Minimum 1 special character
            </div>
            <div>
              <span style="color: #ff0000">✗</span>
              Minimum 1 upper case character
            </div>
            <div>
              <span style="color: #ff0000">✗</span>
              Minimum 1 number
            </div>
          </div>
        </div>
      </ix-input>
    `;
  }
};
