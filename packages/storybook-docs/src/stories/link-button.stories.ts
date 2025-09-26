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

type Element = Components.IxLinkButton & {
  defaultSlot: string;
  styles?: Record<string, string>;
};

const meta = {
  title: 'Example/LinkButton',
  tags: [],
  render: (args) => genericRender('ix-link-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-link-button', {
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

export const Default: Story = {
  args: {
    defaultSlot: 'My link',
  },
};
