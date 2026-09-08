/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxMenuAboutNews;

const meta = {
  title: 'Example/Menu/About News',
  tags: [],
  render: stencil((args) => (
    <ix-menu-about-news {...args}>
      <h3>What is new</h3>
      <p>Discover the latest Industrial Experience updates.</p>
    </ix-menu-about-news>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-menu-about-news'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    show: true,
  },
};
