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

type Element = Components.IxNumberInput;

const meta = {
  title: 'Example/Input',
  tags: [],
  render: (args) => genericRender('ix-number-input', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-number-input', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Number: Story = {
  args: {
    value: 1337,
    showStepperButtons: true,
  },
};

export const Default: Story = {
  args: {
  },
};

export const toggleNumberInput: Story = {
  render: ({ value, showStepperButtons }) => {
    let visible = false;

    const toggleVisibility = () => {
      visible = !visible;
      const numberInputContainer = document.getElementById(
        'number-input-container'
      );
      if (numberInputContainer) {
        numberInputContainer.style.display = visible ? 'block' : 'none';
      }
    };

    return html`
      <ix-button @click=${toggleVisibility}>
        ${visible ? 'Remove' : 'Add'} Toggle number-input
      </ix-button>
      <div id="number-input-container" style="display: none">
        <ix-number-input
          style="width: 300px"
          .value=${value}
          ?show-stepper-buttons=${showStepperButtons}
        ></ix-number-input>
      </div>
    `;
  },
  args: {
    value: 0,
    showStepperButtons: true,
  },
};
