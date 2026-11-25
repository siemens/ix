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

type Element = Components.IxDropdown;

const meta = {
  title: 'Example/Dropdown',
  tags: [],
  render: stencil((args) => (
    <div>
      <ix-button id="dropdown-trigger">Open dropdown</ix-button>
      <ix-dropdown {...args}>
        <ix-dropdown-item label="First item"></ix-dropdown-item>
        <ix-dropdown-item label="Second item"></ix-dropdown-item>
      </ix-dropdown>
    </div>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-dropdown'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    show: true,
    trigger: 'dropdown-trigger',
  },
};

export const ContextMenu: Story = {
  render: stencil((args) => (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20rem',
          border: '1px dashed var(--theme-color-soft-bdr)',
        }}
        onContextMenu={(event: MouseEvent) => {
          event.preventDefault();
          const dropdown = (event.currentTarget as HTMLElement)
            .nextElementSibling as HTMLIxDropdownElement;
          dropdown.showAt(event.clientX, event.clientY);
        }}
      >
        Right-click in this area
      </div>
      <ix-dropdown {...args} role="menu">
        <ix-dropdown-item label="Copy"></ix-dropdown-item>
        <ix-dropdown-item label="Paste"></ix-dropdown-item>
        <ix-dropdown-item label="Delete"></ix-dropdown-item>
      </ix-dropdown>
    </div>
  )),
  args: {},
};
