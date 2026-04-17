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

type Element = Components.IxToggle & {
  defaultSlot: string;
  ['checked-change']: unknown;
  validation: string;
  'text-on': string;
};

const meta = {
  title: 'Example/Toggle/Accessibility',
  tags: [],
  render: (args: Element) => genericRender('ix-toggle', args, ['validation']),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-toggle', {}),
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
 * Basic toggle: visible On/Off is decorative; stable name via host `aria-label`.
 */
export const BasicUsage: Story = {
  render: (args) =>
    html`<ix-toggle
      aria-label="Notifications"
      text-on=${args.textOn}
      text-off=${args.textOff}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ix-toggle>`,
  args: {
    checked: false,
    disabled: false,
    textOn: 'On',
    textOff: 'Off',
  },
};

/**
 * Toggle without visible label – use aria-label on the host for an accessible name.
 */
export const WithAriaLabel: Story = {
  render: () =>
    html`<ix-toggle aria-label="Enable dark mode" hide-text="true"></ix-toggle>`,
  parameters: {
    a11y: {
      test: 'error',
    },
  },
};

/**
 * Toggle with a longer description via aria-describedby.
 */
export const WithDescription: Story = {
  render: () =>
    html`
      <div>
        <ix-toggle
          aria-label="Enable analytics"
          aria-describedby="toggle-analytics-desc"
        ></ix-toggle>
        <span id="toggle-analytics-desc" hidden>
          Collects anonymous usage data to improve the product.
        </span>
      </div>
    `,
  parameters: {
    a11y: {
      test: 'error',
    },
  },
};

/**
 * Disabled toggle – not focusable, reduced opacity.
 */
export const DisabledState: Story = {
  render: (args) =>
    html`<ix-toggle
      aria-label="Notifications"
      text-on=${args.textOn}
      text-off=${args.textOff}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ix-toggle>`,
  args: {
    checked: false,
    disabled: true,
    textOn: 'On',
    textOff: 'Off',
  },
};

/**
 * Checked (on) state.
 */
export const CheckedState: Story = {
  render: (args) =>
    html`<ix-toggle
      aria-label="Notifications"
      text-on=${args.textOn}
      text-off=${args.textOff}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ix-toggle>`,
  args: {
    checked: true,
    disabled: false,
    textOn: 'On',
    textOff: 'Off',
  },
};

/**
 * Indeterminate (mixed) state – e.g. for "select all" scenarios.
 */
export const IndeterminateState: Story = {
  render: (args) =>
    html`<ix-toggle
      aria-label="Select all rows"
      text-on=${args.textOn}
      text-off=${args.textOff}
      text-indeterminate=${args.textIndeterminate}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?indeterminate=${args.indeterminate}
    ></ix-toggle>`,
  args: {
    checked: false,
    disabled: false,
    indeterminate: true,
    textOn: 'On',
    textOff: 'Off',
    textIndeterminate: 'Mixed',
  },
};

/**
 * Custom on/off labels.
 */
export const CustomLabels: Story = {
  render: (args) =>
    html`<ix-toggle
      aria-label="Newsletter subscription"
      text-on=${args.textOn}
      text-off=${args.textOff}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ix-toggle>`,
  args: {
    checked: false,
    disabled: false,
    textOn: 'Yes',
    textOff: 'No',
  },
};

/**
 * Toggle with no visible text (`hideText`) — a stable host `aria-label` is required (e.g. for axe).
 */
export const NoVisibleLabel: Story = {
  render: (args) =>
    html`<ix-toggle
      aria-label="Enable dark mode"
      ?hide-text=${args.hideText}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ix-toggle>`,
  args: {
    checked: false,
    disabled: false,
    hideText: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `hideText` is true, there is no visible on/off copy; set a stable `aria-label` (or `aria-labelledby`) on the host so the switch has an accessible name.',
      },
    },
  },
};
