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
import { genericRender, makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxChip & { defaultSlot: string };

const meta = {
  title: 'Example/Chip/Accessibility',
  tags: [],
  render: (args) => genericRender('ix-chip', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chip', {}),
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
 * Default chip: visible label from the default slot; leading icon is decorative when text is present.
 */
export const BasicUsage: Story = {
  args: {
    icon: 'info',
    defaultSlot: 'Example Text',
    variant: 'primary',
  },
};

/**
 * Closable chip: main action keeps the slot name; close control has a dedicated accessible name.
 */
export const ClosableChip: Story = {
  args: {
    icon: 'filter',
    defaultSlot: 'Status',
    variant: 'info',
    closable: true,
  },
};

/**
 * Host `aria-label` names the main control; the host gets `role="group"` when supporting controls (e.g. close, tooltip) are present.
 * Use when the visible abbreviation needs a clearer spoken name.
 */
export const HostAriaLabelWithGroup: Story = {
  render: () => html`
    <ix-chip closable aria-label="Project Alpha" icon="bulb">PA</ix-chip>
  `,
};

/**
 * Icon-only chip: a host accessible name is required (there is no slot text).
 */
export const IconOnlyWithAriaLabel: Story = {
  render: () => html`
    <ix-chip icon="print" aria-label="Print document"></ix-chip>
  `,
};

/**
 * Leading icon is meaningful: describe it with `aria-label-icon` (IX prop) while the chip label comes from the slot.
 */
export const InformationalIcon: Story = {
  render: () => html`
    <ix-chip
      icon="warning"
      aria-label-icon="Warning"
      variant="warning"
      closable
    >
      Check required
    </ix-chip>
  `,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'aria-valid-attr', enabled: false }],
      },
    },
  },
};

/**
 * Tooltip supplements the visible label; the main button remains the named control.
 */
export const WithTooltip: Story = {
  render: () => html`
    <ix-chip
      icon="info"
      variant="info"
      tooltip-text="Open details for this status"
    >
      Info
    </ix-chip>
  `,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'aria-tooltip-name', enabled: false }],
      },
    },
  },
};

/**
 * Custom accessible name on the host with tooltip — common filter/status pattern.
 */
export const AriaLabelWithTooltip: Story = {
  render: () => html`
    <ix-chip
      icon="info"
      variant="info"
      outline
      tooltip-text="Click to edit"
      aria-label="In review"
    >
      Info
    </ix-chip>
  `,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'aria-tooltip-name', enabled: false }],
      },
    },
  },
};

/**
 * Inactive chip: not interactive; no separate close control.
 */
export const InactiveChip: Story = {
  args: {
    icon: 'info',
    defaultSlot: 'Read only',
    inactive: true,
    variant: 'neutral',
  },
};

/**
 * Accessible name from `aria-labelledby` (with visible slot text) still establishes a composite `group` on the host when needed.
 */
export const WithAriaLabelledby: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
      <span
        id="a11y-chip-section-label"
        style="font: var(--theme-font-label-lg)"
        >Filter</span
      >
      <ix-chip
        icon="filter"
        variant="neutral"
        closable
        aria-labelledby="a11y-chip-section-label"
      >
        Active (3)
      </ix-chip>
    </div>
  `,
};

/**
 * Description referenced by `aria-describedby` on the host (forwarded to the main control).
 */
export const WithDescription: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ix-chip
        icon="filter"
        closable
        aria-label="Active filters"
        aria-describedby="chip-filter-desc"
      >
        3 filters
      </ix-chip>
      <p id="chip-filter-desc" style="margin: 0;">
        Results are narrowed by status, owner, and date range.
      </p>
    </div>
  `,
};
