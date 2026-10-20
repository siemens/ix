/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconCopy,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxMarkdown;

// Images only render from absolute http(s) URLs.
const imageUrl = new URL('images/example-company.svg', window.location.href)
  .href;

const allElements = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

A paragraph with *emphasis*, **strong text**, ~~strikethrough~~ and \`inline code\`.
Soft line breaks stay in the same paragraph,
while a trailing backslash forces a hard break.\\
This line starts after a hard break.

Visit the [Siemens iX documentation](https://ix.siemens.io) or write to
[support@example.com](mailto:support@example.com). Bare URLs like https://ix.siemens.io are linked too.

> A block quote with **formatted** text.
>
> It can span several paragraphs.

- Unordered item
- Another item
  - Nested item
  - Another nested item
- Last item

1. Ordered item
2. Another item
   1. Nested ordered item
3. Last item

An ordered list can start at any number:

5. Fifth item
6. Sixth item

![Example company logo](${imageUrl})
`;

const chatAnswer = `### Reducing unplanned downtime

Based on the last **30 days** of telemetry, three machines on *line 7* show rising vibration levels:

1. **Press 13**: bearing temperature up 12 %
2. **Conveyor 4**: motor current spikes during start-up
3. **Robot 2**: torque deviations on axis \`J3\`

I recommend scheduling an inspection of press 13 first. See the
[maintenance guidelines](https://ix.siemens.io) for the inspection checklist.

> Note: Values are averaged per shift.
`;

const unsafeContent = `Raw HTML is shown as text: <b>not bold</b>, <span style="color: red">not red</span>.

<script>alert('never runs')</script>

A line break tag is the only HTML that renders:<br>this line follows a \`<br>\`.

Unsafe links keep only their text: [javascript link](javascript:alert(1)),
[data link](data:text/html,<script>alert(1)</script>),
[vbscript link](vbscript:msgbox(1)).

Images need an absolute http(s) URL, so the two images below are not shown:

![relative image](./image.png)
![data image](data:image/png;base64,iVBORw0KGgo=)
`;

function renderMarkdown(args: Partial<Element>) {
  return <ix-markdown markdown={args.markdown}></ix-markdown>;
}

const meta = {
  title: 'Example/Markdown',
  tags: [],
  render: stencil((args) => renderMarkdown(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-markdown'),
  args: {
    markdown: allElements,
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

function createAction(label: string, icon: string) {
  return (
    <ix-icon-button
      aria-label={label}
      icon={icon}
      size="16"
      slot="actions"
      variant="subtle-tertiary"
    ></ix-icon-button>
  );
}

export const InChatMessage: Story = {
  render: stencil((args) => (
    <ix-chat-ai-message>
      {renderMarkdown(args)}
      {createAction('Copy message', iconCopy)}
      {createAction('Helpful response', iconThumbUp)}
      {createAction('Not helpful response', iconThumbDown)}
      {createAction('Regenerate response', iconRefresh)}
    </ix-chat-ai-message>
  )),
  args: {
    markdown: chatAnswer,
  },
};

export const Security: Story = {
  args: {
    markdown: unsafeContent,
  },
};

export const Empty: Story = {
  args: {
    markdown: '',
  },
};
