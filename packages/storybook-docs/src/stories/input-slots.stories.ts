/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { makeArgTypes } from './utils/generic-render';
import { property } from 'lit/decorators.js';

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
  `,
};

export const PasswordExample: Story = {
  args: {
    label: 'Password',
    type: 'password',
    maxLength: 20,
    showTextAsTooltip: false,
    helperText: 'Password Instructions',
  },
  render: (args) => {
    class PasswordValidator extends LitElement {
      @property({ type: Object })
      state = {
        length: 0,
        hasMinLength: false,
        hasSpecialChar: false,
        hasUpperCase: false,
        hasNumber: false,
      };

      updateState(password: string) {
        this.state = {
          length: password.length,
          hasMinLength: password.length >= 8,
          hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
          hasUpperCase: /[A-Z]/.test(password),
          hasNumber: /\d/.test(password),
        };
      }

      render() {
        const validationItem = (isValid: boolean, text: string) => html`
          <div>
            <span style="color: ${isValid ? '#00cc00' : '#ff0000'}">
              ${isValid ? '✓' : '✗'}
            </span>
            ${text}
          </div>
        `;

        return html`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${validationItem(
              this.state.hasMinLength,
              `Minimum length 8 characters`
            )}
            ${validationItem(
              this.state.hasSpecialChar,
              'Minimum 1 special character'
            )}
            ${validationItem(
              this.state.hasUpperCase,
              'Minimum 1 upper case character'
            )}
            ${validationItem(this.state.hasNumber, 'Minimum 1 number')}
          </div>
        `;
      }
    }

    if (!customElements.get('password-validator')) {
      customElements.define('password-validator', PasswordValidator);
    }

    const handleInput = (e: Event) => {
      const input = e.target as HTMLInputElement;
      const validator = document.querySelector(
        'password-validator'
      ) as PasswordValidator;
      if (validator) {
        validator.updateState(input.value);
      }
    };

    return html`
      <ix-input
        label=${args.label}
        type="password"
        @input=${handleInput}
        .maxLength=${args.maxLength}
        .showTextAsTooltip=${args.showTextAsTooltip}
        .helperText=${args.helperText}
      >
        <password-validator slot="helper"></password-validator>
      </ix-input>
    `;
  },
};
