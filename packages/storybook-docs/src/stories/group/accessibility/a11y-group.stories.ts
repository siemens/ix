/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxGroup;

const meta = {
  title: 'Example/Group/Accessibility',
  tags: [],
  render: (args) => html`
    <ix-group
      header=${args.header}
      sub-header=${args.subHeader}
      ?expanded=${args.expanded}
      ?selected=${args.selected}
      ?suppress-header-selection=${args.suppressHeaderSelection}
    >
      <ix-group-item text="Item 1"></ix-group-item>
      <ix-group-item text="Item 2"></ix-group-item>
      <ix-group-item text="Item 3"></ix-group-item>
    </ix-group>
  `,
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-group', {}),
  args: {
    header: 'Header text',
    subHeader: 'Subheader text',
    expanded: false,
    selected: false,
    suppressHeaderSelection: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Collapsed group with selectable header and expand control.
 */
export const Collapsed: Story = {};

/**
 * Expanded group shows slotted items for keyboard and screen reader traversal.
 */
export const Expanded: Story = {
  args: {
    expanded: true,
  },
};

/**
 * Selected header exposes `aria-pressed` on the header select control.
 */
export const Selected: Story = {
  args: {
    selected: true,
  },
};

/**
 * With header selection suppressed, only the expand control is a tab stop in the header.
 */
export const SuppressHeaderSelection: Story = {
  args: {
    suppressHeaderSelection: true,
    expanded: true,
  },
};
