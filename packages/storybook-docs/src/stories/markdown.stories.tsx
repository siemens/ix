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
import type {
  MarkdownComponentContext,
  MarkdownComponentFactory,
  MarkdownOptions,
} from '@siemens/ix';
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { expect, waitFor } from 'storybook/test';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxMarkdown;
type MarkdownElement = HTMLElement & Element;

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

const fence = '```';

const directivesContent = `Built-in Directives let an LLM ask for iX components.

Buttons raise a Markdown action: :button[Retry]{variant=primary icon=refresh action=retry} :button[Show details]{variant=secondary action=details}

Pills show statuses and tags: :pill[Running]{variant=success icon=success} :pill[Maintenance due]{variant=warning icon=warning} :pill[Stopped]{variant=alarm icon=error}

Icons can be placed inline :icon{name=star} and get an accessible name with \`label\` :icon{name=info label="Information"}.

:::callout{type=info heading="Info"}
Callouts render as a persistent message bar. Types follow siemens/element.
:::

:::callout{type=success}
The **tip** and **success** types map to a success message bar.
:::

:::callout{type=warning heading="Caution"}
The **warning** and **caution** types map to a warning message bar.
:::

:::callout{type=danger heading="Danger"}
The **danger** type maps to an alarm message bar.
:::

:::callout{type=critical}
The **critical** type maps to a critical message bar.
:::

Unknown Directives fall back to their label: :unknown[only the label is shown]{foo=bar}
`;

const customComponentsContent = `Apps map Directive names or Markdown node types to their own components.

A **tag-name mapping** uses an existing web component without an adapter.
\`::kpi\` is mapped to \`ix-kpi\`:

::kpi{label="Line OEE" value=84 unit="%" state=neutral}

::kpi{label="Scrap rate" value=4.2 unit="%" state=warning}

A **factory mapping** builds the element itself. \`:::machine\` renders a
machine summary; its inner Markdown is shown with a nested \`ix-markdown\`, and
its button raises a Markdown action with \`emitAction\`:

:::machine{name="Press 13" state=warning}
Bearing temperature is **12 %** above baseline. See the
[maintenance guidelines](https://ix.siemens.io).
:::

Mappings can also override built-in node types. Here \`blockquote\` renders as
an \`ix-message-bar\`:

> Values are averaged per shift.
`;

const streamedAnswer = `### Line 7 health check

I analysed the last **24 hours** of telemetry for *line 7* and found :pill[2 warnings]{variant=warning icon=warning} that need attention.

:::machine{name="Press 13" state=warning}
Bearing temperature is **12 %** above baseline and still rising.
:::

| Machine | OEE | Status |
| --- | ---: | --- |
| Press 13 | 71 % | Warning |
| Conveyor 4 | 88 % | OK |
| Robot 2 | 93 % | OK |

::kpi{label="Line OEE" value=84 unit="%"}

Use this query to inspect the bearing temperature yourself:

${fence}ts [query.ts]
const readings = await telemetry.query({
  machine: 'press-13',
  signal: 'bearing-temperature',
  range: '24h',
});
${fence}

Next steps:

- [x] Collect telemetry
- [ ] Inspect press 13
- [ ] Update the maintenance plan

:::callout{type=tip heading="Recommendation"}
Schedule the inspection during the next **planned stop** to avoid extra downtime.
:::

:button[Create work order]{variant=primary icon=add action=create-work-order} :button[Show trend]{variant=secondary icon=trend action=show-trend}
`;

const machineStates: Record<
  string,
  { variant: string; icon: string; card: string }
> = {
  ok: { variant: 'success', icon: 'success', card: 'success' },
  warning: { variant: 'warning', icon: 'warning', card: 'warning' },
  alarm: { variant: 'alarm', icon: 'error', card: 'danger' },
};

/**
 * Factory mapping for the `:::machine` Directive. Plain DOM here; the React,
 * Angular and Vue helpers create the same factory from a framework component.
 */
const machineCard: MarkdownComponentFactory = (ctx) => {
  const element = document.createElement('ix-card');
  element.className = 'story-machine';
  element.style.cssText =
    'width: 100%; max-width: 32rem; margin-block: 0.5rem;';

  const content = document.createElement('ix-card-content');
  content.style.cssText = 'flex-direction: column; align-items: stretch;';

  const header = document.createElement('div');
  header.style.cssText = 'display: flex; align-items: center; gap: 0.5rem;';
  const title = document.createElement('ix-typography');
  title.setAttribute('format', 'h5');
  const pill = document.createElement('ix-pill');
  header.append(title, pill);

  const body = document.createElement('ix-markdown') as MarkdownElement;

  const footer = document.createElement('div');
  footer.style.cssText = 'display: flex; align-items: center; gap: 0.5rem;';
  const notify = document.createElement('ix-toggle');
  notify.setAttribute('text-on', 'Notify me');
  notify.setAttribute('text-off', 'Notify me');
  const open = document.createElement('ix-button');
  open.setAttribute('variant', 'secondary');
  footer.append(notify, open);

  content.append(header, body, footer);
  element.append(content);

  let current = ctx;
  open.addEventListener('click', () =>
    current.emitAction('open-machine', { name: current.attributes.name ?? '' })
  );

  const update = (next: MarkdownComponentContext) => {
    current = next;
    const name = next.attributes.name ?? 'Machine';
    const state = machineStates[next.attributes.state] ?? machineStates.ok;
    element.setAttribute('variant', state.card);
    title.textContent = name;
    pill.setAttribute('variant', state.variant);
    pill.setAttribute('icon', state.icon);
    pill.textContent = next.attributes.state ?? 'ok';
    body.markdown = next.markdown;
    open.textContent = `Open ${name}`;
  };
  update(ctx);

  return { element, update };
};

const quoteAsMessageBar: MarkdownComponentFactory = (ctx) => {
  const element = document.createElement('ix-message-bar');
  element.setAttribute('persistent', '');
  element.textContent = ctx.text;
  return {
    element,
    update: (next) => (element.textContent = next.text),
  };
};

const appOptions: MarkdownOptions = {
  components: {
    kpi: 'ix-kpi',
    machine: machineCard,
  },
};

function createActionLog() {
  const log = document.createElement('ix-typography');
  log.setAttribute('format', 'body-sm');
  log.setAttribute('role', 'status');
  log.className = 'story-action-log';
  log.textContent =
    'Click a button in the Markdown to raise a Markdown action.';
  return log;
}

function logActions(markdown: HTMLElement, log: HTMLElement) {
  markdown.addEventListener('actionClick', (event) => {
    const { name, attributes } = (
      event as CustomEvent<{ name: string; attributes: Record<string, string> }>
    ).detail;
    log.textContent = `actionClick: ${name} ${JSON.stringify(attributes)}`;
  });
}

function renderWithActionLog(args: Partial<Element>) {
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';
  const markdown = document.createElement('ix-markdown') as MarkdownElement;
  markdown.markdown = args.markdown ?? '';
  markdown.options = args.options;
  const log = createActionLog();
  logActions(markdown, log);
  container.append(markdown, log);
  return container;
}

export const Directives: Story = {
  render: (args) => renderWithActionLog(args),
  args: {
    markdown: directivesContent,
  },
  play: async ({ canvasElement }) => {
    const markdown = canvasElement.querySelector('ix-markdown')!;
    await waitFor(() =>
      expect(markdown.querySelectorAll('ix-message-bar')).toHaveLength(5)
    );
    expect(markdown.querySelectorAll('ix-pill')).toHaveLength(3);
    expect(markdown).toHaveTextContent('only the label is shown');

    markdown.querySelector('ix-button')!.click();
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.story-action-log')
      ).toHaveTextContent('actionClick: retry')
    );
  },
};

export const CustomComponents: Story = {
  render: (args) => renderWithActionLog(args),
  args: {
    markdown: customComponentsContent,
    options: {
      ...appOptions,
      components: {
        ...appOptions.components,
        blockquote: quoteAsMessageBar,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const markdown = canvasElement.querySelector('ix-markdown')!;
    await waitFor(() =>
      expect(markdown.querySelectorAll('ix-kpi')).toHaveLength(2)
    );
    expect(markdown.querySelector('ix-kpi')).toHaveAttribute(
      'label',
      'Line OEE'
    );
    expect(markdown.querySelector('ix-message-bar')).toHaveTextContent(
      'Values are averaged per shift.'
    );

    const machine = markdown.querySelector('.story-machine')!;
    await waitFor(() =>
      expect(machine.querySelector('ix-markdown')).toHaveTextContent(
        'Bearing temperature is 12 % above baseline'
      )
    );
    machine.querySelector('ix-button')!.click();
    await waitFor(() =>
      expect(
        canvasElement.querySelector('.story-action-log')
      ).toHaveTextContent('actionClick: open-machine {"name":"Press 13"}')
    );
  },
};

type StreamingArgs = Partial<Element> & {
  charactersPerChunk: number;
  chunkInterval: number;
};

/**
 * Simulates an LLM response: the full accumulated text is reassigned on every
 * chunk while `streaming` is set, as an app would do with a real stream.
 */
function streamInto(
  markdown: MarkdownElement,
  source: string,
  { charactersPerChunk, chunkInterval }: StreamingArgs
) {
  let length = 0;
  markdown.streaming = true;
  markdown.markdown = '';

  const next = () => {
    if (!markdown.isConnected && length > 0) {
      return;
    }
    length = Math.min(source.length, length + Math.max(1, charactersPerChunk));
    markdown.markdown = source.slice(0, length);
    if (length < source.length) {
      setTimeout(next, chunkInterval);
    } else {
      markdown.streaming = false;
    }
  };
  setTimeout(next, chunkInterval);
}

export const Streaming: StoryObj<StreamingArgs> = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.cssText =
      'display: flex; flex-direction: column; gap: 1rem;';

    const replay = document.createElement('ix-button');
    replay.setAttribute('variant', 'secondary');
    replay.setAttribute('icon', iconRefresh);
    replay.textContent = 'Replay stream';
    replay.style.alignSelf = 'flex-start';

    const message = document.createElement('ix-chat-ai-message');
    const markdown = document.createElement('ix-markdown') as MarkdownElement;
    markdown.options = appOptions;
    message.append(markdown);

    const log = createActionLog();
    logActions(markdown, log);

    replay.addEventListener('click', () =>
      streamInto(markdown, args.markdown ?? '', args)
    );

    container.append(replay, message, log);
    streamInto(markdown, args.markdown ?? '', args);
    return container;
  },
  argTypes: {
    charactersPerChunk: {
      control: { type: 'range', min: 1, max: 40, step: 1 },
      description: 'Characters added per simulated chunk',
    },
    chunkInterval: {
      control: { type: 'range', min: 5, max: 200, step: 5 },
      description: 'Milliseconds between chunks',
    },
  },
  args: {
    markdown: streamedAnswer,
    charactersPerChunk: 6,
    chunkInterval: 30,
  },
  play: async ({ canvasElement }) => {
    const markdown = canvasElement.querySelector('ix-markdown')!;

    await waitFor(() => expect(markdown).toHaveAttribute('aria-busy', 'true'));
    // Once the next block has started, the heading is a Settled block.
    await waitFor(() =>
      expect(markdown.querySelector('h3 + p')).not.toBeNull()
    );
    const heading = markdown.querySelector('h3');

    await waitFor(() => expect(markdown).not.toHaveAttribute('aria-busy'), {
      timeout: 20000,
    });

    // Settled blocks are never re-created while the answer streams in.
    expect(markdown.querySelector('h3')).toBe(heading);
    expect(markdown.querySelector('ix-code-block')).not.toBeNull();
    expect(markdown.querySelector('table')).not.toBeNull();
    expect(markdown.querySelectorAll('ix-checkbox')).toHaveLength(3);
    expect(markdown.querySelector('ix-kpi')).not.toBeNull();
    expect(markdown.querySelector('.story-machine')).not.toBeNull();
    expect(markdown).toHaveTextContent('Create work order');
  },
};
