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

type Element = Components.IxPill & { defaultSlot: string };

const meta = {
  title: 'Example/Pill/Accessibility',
  tags: [],
  render: (args) => genericRender('ix-pill', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-pill', {}),
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
 * Basic pill with text content.
 * Screen readers announce the text content by default.
 */
export const BasicUsage: Story = {
  args: {
    defaultSlot: 'Active',
    variant: 'primary',
  },
};

/**
 * Icon-only pill with aria-label (REQUIRED for accessibility).
 * Without aria-label, icon-only pills have no accessible name.
 */
export const IconOnlyWithLabel: Story = {
  render: () => {
    return html`<ix-pill icon="star" aria-label="Featured item"></ix-pill>`;
  },
};

/**
 * Pill with custom aria-label to provide context.
 * Use when visual content needs clarification for screen readers.
 */
export const CustomAriaLabel: Story = {
  render: () => {
    return html`<ix-pill aria-label="Priority: Critical" variant="critical"
      >P0</ix-pill
    >`;
  },
};

/**
 * Decorative pill hidden from screen readers.
 * Use when pill information is redundant with surrounding text.
 */
export const DecorativePill: Story = {
  render: () => {
    return html`
      <div>
        <span>Status: Online</span>
        <ix-pill aria-hidden variant="success">•</ix-pill>
      </div>
    `;
  },
};

/**
 * Pill with role="status" for live status indicators.
 * Use for dynamic content that updates to inform users of status changes.
 */
export const StatusRole: Story = {
  render: () => {
    return html`<ix-pill role="status" variant="success">System Online</ix-pill>`;
  },
};

/**
 * Pill with role="status" and aria-live for dynamic updates.
 * Screen readers announce when content changes.
 */
export const LiveStatusUpdates: Story = {
  render: () => {
    return html`<ix-pill role="status" aria-live="polite" variant="success"
      >Connected</ix-pill
    >`;
  },
};

/**
 * Pill with decorative icon.
 * Icon is automatically hidden from screen readers (aria-hidden="true").
 */
export const DecorativeIcon: Story = {
  args: {
    defaultSlot: 'Featured',
    icon: 'star',
    variant: 'primary',
  },
};

/**
 * Pill with informational icon.
 * Icon has aria-label-icon to describe its meaning to screen readers.
 * Note: aria-label-icon is a custom IX prop, not a standard ARIA attribute.
 */
export const InformationalIcon: Story = {
  render: () => {
    return html`<ix-pill icon="warning" aria-label-icon="Warning" variant="warning"
      >Check Required</ix-pill
    >`;
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'aria-valid-attr', enabled: false },
        ],
      },
    },
  },
};

/**
 * Icon-only pill with tooltip.
 * Both aria-label (for screen readers) and tooltip (for visual users) are provided.
 * Note: Tooltip text is visual-only, not announced by screen readers (by design).
 */
export const IconOnlyWithTooltip: Story = {
  render: () => {
    return html`<ix-pill
      icon="star"
      aria-label="Featured item"
      tooltip-text="This item is featured in search results"
    ></ix-pill>`;
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'aria-tooltip-name', enabled: false },
        ],
      },
    },
  },
};

/**
 * Pill with aria-describedby referencing external description.
 * Use for complex descriptions that need to be read by screen readers.
 */
export const WithDescription: Story = {
  render: () => {
    return html`
      <div>
        <ix-pill
          aria-label="System status"
          aria-describedby="status-desc"
          role="status"
          variant="success"
          >Online</ix-pill
        >
        <span id="status-desc" hidden>
          System has been operational for 48 hours without interruption.
        </span>
      </div>
    `;
  },
};

/**
 * Pill with multiple ARIA attributes working together.
 * Demonstrates combining role, aria-label, and aria-live.
 */
export const MultipleAriaAttributes: Story = {
  render: () => {
    return html`<ix-pill
      role="status"
      aria-label="Connection status: Active"
      aria-live="polite"
      variant="success"
      >Connected</ix-pill
    >`;
  },
};

/**
 * State-indicating icon with status role.
 * Icon visualizes state (online/offline), but state is conveyed via text and role.
 */
export const StateIndicatingIcon: Story = {
  render: () => {
    return html`<ix-pill icon="circle" role="status" variant="success"
      >Online</ix-pill
    >`;
  },
};
