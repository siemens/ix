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

type Element = Components.IxRadio & {
  defaultSlot: string;
  ['checked-change']: any;
  validation: string;
  'text-on': string;
};

type GroupElement = Components.IxRadioGroup & {
  label: string;
  defaultSlot: string;
};

const radioRender = (args: Element) => {
  const container = genericRender('ix-radio', args);
  const ixradio = container.querySelector('ix-radio') as HTMLIxRadioElement;
  ixradio.addEventListener('checkedChange', action('checkedChange'));
  return container;
};

const radioGroupRender = (args: GroupElement) => {
  const container = genericRender('ix-radio-group', args);
  const radioGroup = container.querySelector(
    'ix-radio-group'
  ) as HTMLIxRadioGroupElement;
  radioGroup.setAttribute('label', args.label || 'Group');

  const radio1 = document.createElement('ix-radio');
  radio1.setAttribute('label', 'Radio 1');
  radio1.setAttribute('name', 'radio1');
  radio1.addEventListener('checkedChange', action('radio1Change'));

  const radio2 = document.createElement('ix-radio');
  radio2.setAttribute('label', 'Radio 2');
  radio2.setAttribute('name', 'radio2');
  radio2.addEventListener('checkedChange', action('radio2Change'));

  radioGroup.appendChild(radio1);
  radioGroup.appendChild(radio2);
  container.appendChild(radioGroup);

  return container;
};

const meta = {
  title: 'Example/Radio',
  tags: [],
  render: (args) => radioRender(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-radio', {
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
    label: 'Radio',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Radio',
  },
};

export const Group: GroupStory = {
  render: (args) => radioGroupRender(args),
  args: {
    label: 'Radio Group',
  },
};
