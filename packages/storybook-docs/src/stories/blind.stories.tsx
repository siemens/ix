/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { getLoremIpsum, makeArgTypes } from './utils/generic-render';

type Element = Components.IxBlind;

const meta = {
  title: 'Example/Blind',
  tags: [],
  render: stencil((args) => (
    <ix-blind {...args}>
      <div>{getLoremIpsum()}</div>
    </ix-blind>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-blind'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9900&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    collapsed: false,
    icon: 'info',
    label: 'Blind',
    sublabel: getLoremIpsum(),
  },
};
