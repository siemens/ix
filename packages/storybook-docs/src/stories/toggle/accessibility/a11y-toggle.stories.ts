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
      config: {
        rules: [
          // Host is role=switch; internal input has tabindex=-1 for form/label. Axe flags as nested-interactive.
          { id: 'nested-interactive', enabled: false },
        ],
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Basic toggle with visible On/Off label (default).
 * Screen readers announce state via aria-checked (e.g. "off, switch").
 */
export const BasicUsage: Story = {
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
  args: {
    checked: false,
    disabled: false,
    textOn: 'Yes',
    textOff: 'No',
  },
};

/**
 * Toggle with no visible text (hideText) – ensure aria-label is set in real usage.
 */
export const NoVisibleLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    hideText: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When hideText is true, the toggle must have an accessible name (e.g. aria-label on the host). This story may show a11y warnings without it.',
      },
    },
  },
};
