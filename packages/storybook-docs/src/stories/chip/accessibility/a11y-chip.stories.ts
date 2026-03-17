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
import { html } from 'lit';
import { genericRender, makeArgTypes } from '../../utils/generic-render';

type Element = Components.IxChip & {
  defaultSlot: string;
};

const meta = {
  title: 'Example/Chip/Accessibility',
  tags: [],
  render: (args: Element) => genericRender('ix-chip', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chip', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark',
    },
    a11y: {
      test: 'error',
      // aria-label-close-button is a custom component API (sets inner button aria-label), not a standard ARIA attribute
      config: {
        rules: [{ id: 'aria-valid-attr', enabled: false }],
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Basic chip with aria-label for semantic context.
 * Screen readers announce: "User information chip, group".
 */
export const BasicWithAriaLabel: Story = {
  render: () => {
    return html`<ix-chip aria-label="User information chip">John Doe</ix-chip>`;
  },
};

/**
 * Closable chip with accessible close button.
 * Tab key navigates to close button, Space/Enter activates it.
 * Close button hover highlights entire chip (contextual feedback).
 */
export const ClosableChip: Story = {
  render: () => {
    return html`<ix-chip
      closable
      aria-label="User tag"
      aria-label-close-button="Remove user tag"
      >Designer</ix-chip
    >`;
  },
};

/**
 * Icon in chip (always decorative).
 * Icon is hidden from screen readers (aria-hidden="true").
 * Screen reader announces: "Favorite category, group, Music".
 */
export const IconWithLabel: Story = {
  render: () => {
    return html`<ix-chip icon="star" aria-label="Favorite category"
      >Music</ix-chip
    >`;
  },
};

/**
 * Icon without aria-label (decorative by default).
 * Icon is hidden from screen readers (aria-hidden="true").
 * Screen reader announces: "In Progress" (no role since no aria-label).
 */
export const IconDecorative: Story = {
  render: () => {
    return html`<ix-chip icon="rocket">In Progress</ix-chip>`;
  },
};

/**
 * Inactive chip – not interactive, aria-disabled communicates state.
 */
export const InactiveState: Story = {
  render: () => {
    return html`<ix-chip inactive aria-label="Disabled tag">Archived</ix-chip>`;
  },
};

/**
 * Chip without aria-label (display only).
 * Screen reader announces content directly: "Technology".
 */
export const WithoutAriaLabel: Story = {
  render: () => {
    return html`<ix-chip>Technology</ix-chip>`;
  },
};

/**
 * Closable chip with multiple ARIA attributes.
 * Demonstrates full accessibility feature set.
 */
export const FullAccessibilityFeatures: Story = {
  render: () => {
    return html`
      <div>
        <ix-chip
          closable
          icon="star"
          aria-label="Favorite technology tag"
          aria-label-close-button="Remove favorite technology tag"
          aria-describedby="chip-desc"
        >
          JavaScript
        </ix-chip>
        <span id="chip-desc" hidden>
          This tag indicates your favorite programming language.
        </span>
      </div>
    `;
  },
};
