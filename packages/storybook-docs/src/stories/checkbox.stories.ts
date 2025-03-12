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
import { action } from '@storybook/addon-actions';

type Element = Components.IxCheckbox & {
  defaultSlot: string;
  ['checked-change']: any;
  validation: string;
  'text-on': string;
};

type GroupElement = Components.IxCheckboxGroup & {
  label: string;
  defaultSlot: string;
};

const CheckboxRender = (args: Element) => {
  const container = genericRender('ix-checkbox', args);
  const ixCheckbox = container.querySelector(
    'ix-checkbox'
  ) as HTMLIxCheckboxElement;
  ixCheckbox.addEventListener('checkedChange', action('checkedChange'));
  return container;
};

const CheckboxGroupRender = (args: GroupElement) => {
  const container = genericRender('ix-checkbox-group', args);
  const checkboxGroup = container.querySelector(
    'ix-checkbox-group'
  ) as HTMLIxCheckboxGroupElement;
  checkboxGroup.setAttribute('label', args.label || 'Group');

  const checkbox1 = document.createElement('ix-checkbox');
  checkbox1.setAttribute('label', 'Checkbox 1');
  checkbox1.setAttribute('name', 'checkbox1');
  checkbox1.addEventListener('checkedChange', action('checkbox1Change'));

  const checkbox2 = document.createElement('ix-checkbox');
  checkbox2.setAttribute('label', 'Checkbox 2');
  checkbox2.setAttribute('name', 'checkbox2');
  checkbox2.addEventListener('checkedChange', action('checkbox2Change'));

  checkboxGroup.appendChild(checkbox1);
  checkboxGroup.appendChild(checkbox2);
  container.appendChild(checkboxGroup);

  return container;
};

const meta = {
  title: 'Example/Checkbox',
  tags: [],
  render: (args) => CheckboxRender(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-checkbox', {
    validation: {
      control: { type: 'select' },
    },
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;
type GroupStory = StoryObj<GroupElement>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    disabled: false,
    label: 'Checkbox',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Checkbox',
  },
};

export const Group: GroupStory = {
  render: (args) => CheckboxGroupRender(args),
  args: {
    label: 'Checkbox Group',
  },
};
