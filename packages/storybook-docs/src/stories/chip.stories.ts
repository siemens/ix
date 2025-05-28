/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { genericRender, makeArgTypes } from './utils/generic-render';
import { html } from 'lit';

type Element = Components.IxChip & {
  defaultSlot: string;
  previewWidth?: string;
};

const meta = {
  title: 'Example/Chip',
  tags: [],
  render: (args) => genericRender('ix-chip', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chip', {
    previewWidth: {
      control: { type: 'text' },
    },
  }),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const With_Icon_and_Text: Story = {
  args: {
    icon: 'info',
    defaultSlot: 'Example Text',
  },
};

export const With_Icon_only: Story = {
  args: {
    icon: 'info',
  },
};

export const With_Text_only: Story = {
  args: {
    defaultSlot: 'Example Text',
  },
};

export const With_Icon_and_Text_Ellipsis: Story = {
  args: {
    icon: 'info',
    defaultSlot: 'Example Text',
  },
  render: (args) => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';

    return container;
  },
};

export const With_Text_only_Ellipsis: Story = {
  args: {
    defaultSlot: 'Example Text',
  },
  render: (args) => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';

    return container;
  },
};

export const With_Icon_and_Element: Story = {
  render: ({ icon }) => {
    return html`<ix-chip icon=${icon}
      ><div style="display: flex;">
        <ix-icon name="${icon}" size="16"></ix-icon></div
    ></ix-chip>`;
  },
  args: {
    icon: 'info',
  },
};
