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
import { html } from 'lit';
import { makeArgTypes } from './utils/generic-render';

type Elements = Components.IxMenu & Components.IxMenuCategory & Components.IxMenuItem;

const meta = {
  title: 'Example/Menu/MenuCategory',
  tags: [],
  render: (args) => {
    return html`<ix-menu expand="${args.expand}">
      <ix-menu-item home icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Item 1</ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe">Item 2</ix-menu-item>
        <ix-menu-item active="${args.active}" icon="globe">Item 3</ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Elements>>>('ix-menu'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev',
    },
  },
} satisfies Meta<Elements>;

export default meta;
type Story = StoryObj<Elements>;

export const Default: Story = {
  args: {
    expand: true,
    active: false,
  },
};
