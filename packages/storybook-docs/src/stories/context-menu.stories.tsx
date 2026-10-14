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

type Element = Components.IxContextMenu;

const meta = {
  title: 'Example/ContextMenu',
  tags: [],
  render: stencil((args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20rem',
        border: '1px dashed var(--theme-color-soft-bdr)',
      }}
    >
      Right-click in this area
      <ix-context-menu {...args}>
        <ix-dropdown-item icon="copy" label="Copy"></ix-dropdown-item>
        <ix-dropdown-item icon="paste" label="Paste"></ix-dropdown-item>
        <ix-divider></ix-divider>
        <ix-dropdown-item id="share" icon="share" label="Share"></ix-dropdown-item>
        <ix-dropdown trigger="share">
          <ix-dropdown-item label="Email"></ix-dropdown-item>
          <ix-dropdown-item label="Link"></ix-dropdown-item>
        </ix-dropdown>
        <ix-divider></ix-divider>
        <ix-dropdown-item icon="trashcan" label="Delete"></ix-dropdown-item>
      </ix-context-menu>
    </div>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-context-menu'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    ariaLabelMenu: 'Actions',
  },
};
