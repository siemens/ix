/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxSplitButton & {
  styles?: Record<string, string>;
};

const meta = {
  title: 'Example/SplitButton',
  tags: [],
  render: (args) => {
    const elm = genericRender('ix-split-button', args);

    const dropdownItem1 = document.createElement('ix-dropdown-item');
    dropdownItem1.label = 'Dropdown Item 1';
    const dropdownItem2 = document.createElement('ix-dropdown-item');
    dropdownItem2.label = 'Dropdown Item 2';
    const dropdownItem3 = document.createElement('ix-dropdown-item');
    dropdownItem3.label = 'Dropdown Item 3';

    const splitButton = elm.querySelector('ix-split-button')!;
    splitButton.appendChild(dropdownItem1);
    splitButton.appendChild(dropdownItem2);
    splitButton.appendChild(dropdownItem3);

    return elm;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-button', {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    styles: {
      control: { type: 'object' },
    },
  }),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};
