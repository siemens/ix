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

type Element = Components.IxFlipTileContent;

const meta = {
  title: 'Example/Flip Tile Content',
  tags: [],
  render: stencil((args) => (
    <ix-flip-tile>
      <ix-flip-tile-content {...args}>
        <h3>Asset status</h3>
        <p>All systems operational</p>
      </ix-flip-tile-content>
    </ix-flip-tile>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-flip-tile-content'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
