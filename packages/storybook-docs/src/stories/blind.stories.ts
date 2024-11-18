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
import {
  genericRender,
  getLoremIpsum,
  makeArgTypes,
} from './utils/generic-render';

type Element = Components.IxBlind;

const meta = {
  title: 'Example/Blind',
  tags: [],
  render: (args) => genericRender('ix-blind', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-blind', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9900&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    collapsed: false,
    icon: 'info',
    label: 'Blind',
    sublabel: getLoremIpsum(),
  },
};
