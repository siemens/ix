/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxButton & { defaultSlot: string };

const meta = {
  title: 'Example/Button/Accessibility',
  tags: [],
  render: (args) => genericRender('ix-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-button', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Button with icon and text
 */
export const IconAndText: Story = {
  args: {
    defaultSlot: 'Add Device',
    icon: 'add-circle',
    variant: 'primary',
  },
};

/**
 * Icon-only button with aria-label
 */
export const IconOnlyWithLabel: Story = {
  render: () => {
    return html`<ix-button
      icon="trash"
      aria-label="Delete item"
      variant="danger-primary"
    ></ix-button>`;
  },
};

/**
 * Disabled button
 */
export const DisabledState: Story = {
  args: {
    defaultSlot: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
};

/**
 * Loading button
 */
export const LoadingState: Story = {
  args: {
    defaultSlot: 'Loading...',
    loading: true,
    variant: 'primary',
  },
};

/**
 * Button as link with security attributes
 */
export const LinkButton: Story = {
  args: {
    defaultSlot: 'External Link',
    href: 'https://ix.siemens.io',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: 'open-external',
    variant: 'secondary',
  },
};

/**
 * Button with aria-describedby
 */
export const WithDescription: Story = {
  render: () => {
    return html`
      <div>
        <ix-button aria-describedby="delete-desc" variant="danger-primary">
          Delete Account
        </ix-button>
        <span id="delete-desc" hidden>
          This will permanently delete your account and all associated data.
          This action cannot be undone.
        </span>
      </div>
    `;
  },
};

/**
 * Button with icons on left and right
 */
export const MultipleIconPositions: Story = {
  args: {
    defaultSlot: 'Navigate',
    icon: 'chevron-left',
    iconRight: 'chevron-right',
    variant: 'secondary',
  },
};
