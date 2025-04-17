/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/web-components';
import { genericRender } from './utils/generic-render';

type Element = Components.IxRadio & {
  defaultSlot: string;
  ['checked-change']: any;
  validation: string;
  'text-on': string;
};

type GroupElement = Components.IxRadioGroup & {
  label: string;
  defaultSlot: string;
  required: boolean;
};

const radioRender = (args: Element) => {
  const container = genericRender('ix-radio', args);
  const ixradio = container.querySelector('ix-radio') as HTMLIxRadioElement;
  ixradio.addEventListener('checkedChange', action('checkedChange'));
  return container;
};

const radioGroupRender = (args: GroupElement) => {
  const radioGroup = document.createElement('ix-radio-group');
  radioGroup.setAttribute('label', args.label || 'Group');

  const radio1 = document.createElement('ix-radio');
  radio1.setAttribute('label', 'Radio 1');
  radio1.setAttribute('name', 'a-group');
  radio1.addEventListener('checkedChange', action('radio1Change'));
  radio1.required = args.required;

  const radio2 = document.createElement('ix-radio');
  radio2.setAttribute('label', 'Radio 2');
  radio2.setAttribute('name', 'a-group');
  radio2.addEventListener('checkedChange', action('radio2Change'));

  radioGroup.appendChild(radio1);
  radioGroup.appendChild(radio2);

  return radioGroup;
};

const meta = {
  title: 'Example/Radio/Group',
  tags: [],
  render: (args) => radioRender(args),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<GroupElement>;

export const Default: Story = {
  render: (args) => radioGroupRender(args),
  args: {
    label: 'Radio Group',
  },
  argTypes: {},
};

export const Required: Story = {
  render: (args) => radioGroupRender(args),
  args: {
    label: 'Radio Group',
    required: true,
  },
  argTypes: {},
};
