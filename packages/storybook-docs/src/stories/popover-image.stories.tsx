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
import exampleImage from './introduction.png';

type Element = Components.IxPopoverImage;

const meta = {
  title: 'Example/Popover Image',
  tags: [],
  render: stencil((args) => <ix-popover-image {...args}></ix-popover-image>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-popover-image'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    image: exampleImage,
    imageAlt: 'Industrial Experience introduction',
  },
};
