/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Example/Modal/Accessibility',
  tags: [],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=605-9072&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * Modal dialog with an accessible name via `aria-labelledby` (blocking / `aria-modal="true"`).
 */
export const Default: Story = {
  render: () => html`
    <ix-modal class="visible" aria-labelledby="modal-a11y-title">
      <ix-modal-header id="modal-a11y-title">Modal title</ix-modal-header>
      <ix-modal-content>Supporting description for this dialog.</ix-modal-content>
      <ix-modal-footer>
        <ix-button outline>Cancel</ix-button>
        <ix-button>Save</ix-button>
      </ix-modal-footer>
    </ix-modal>
  `,
};

/**
 * Non-modal panel: page remains operable, `aria-modal="false"`. Still needs an accessible name.
 */
export const NonBlocking: Story = {
  render: () => html`
    <main>
      <p>Page content stays interactable while the panel is open.</p>
      <ix-modal
        class="visible"
        aria-labelledby="modal-nb-title"
        ?is-non-blocking=${true}
      >
        <ix-modal-header id="modal-nb-title">Notification</ix-modal-header>
        <ix-modal-content>
          A non-modal panel does not use a modal focus trap.
        </ix-modal-content>
        <ix-modal-footer>
          <ix-button>Dismiss</ix-button>
        </ix-modal-footer>
      </ix-modal>
    </main>
  `,
};
