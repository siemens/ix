/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Components } from '@siemens/ix/components';
import { render } from '@siemens/ix/markdown/highlight';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type Element = Components.IxMarkdown;

const exampleMarkdown = `# Markdown with iX components

Render **Markdown**, runtime data, and registered web components together.

::ix-message-bar{type="info"}
Explicit iX component tags work without aliases.
::

::status{:variant="data.status" outline}
Registered alias
::

\`\`\`ts
const status = await getAssetStatus('compressor-01');
\`\`\``;

const meta = {
  title: 'Example/Markdown',
  tags: [],
  render: (args) => html`
    <ix-markdown
      .markdown=${args.markdown}
      .renderer=${render}
      .components=${{ status: 'ix-pill' }}
      .data=${{ status: 'success' }}
    ></ix-markdown>
  `,
  argTypes: {
    markdown: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    markdown: exampleMarkdown,
  },
};
