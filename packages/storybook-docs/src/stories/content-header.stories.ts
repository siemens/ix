/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type Element = Components.IxContentHeader;

const meta = {
  title: 'Example/ContentHeader',
  tags: [],
  parameters: {
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

const title =
  'Content title that demonstrates behavior when horizontal space is limited';
const subtitle =
  'Supporting context also responds to the available component width';

export const TextOverflow: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; max-width: 28rem;"
    >
      <section>
        <h3>Wrap (default)</h3>
        <ix-content-header
          header-title=${title}
          header-subtitle=${subtitle}
        ></ix-content-header>
      </section>

      <section>
        <h3>Ellipsis</h3>
        <ix-content-header
          header-title=${title}
          header-subtitle=${subtitle}
          text-overflow="ellipsis"
        ></ix-content-header>
      </section>
    </div>
  `,
};
