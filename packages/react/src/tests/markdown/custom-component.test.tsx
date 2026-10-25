/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { MarkdownComponentContext } from '@siemens/ix';
import { useEffect, useState } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { IxMarkdown } from '../../components';
import { createMarkdownComponent } from '../../markdown';

let mounts = 0;
let unmounts = 0;

function Quote({ ctx }: { ctx: MarkdownComponentContext }) {
  const [id] = useState(() => ++mounts);
  useEffect(() => () => void unmounts++, []);
  return (
    <aside aria-label="quote" data-mount={id}>
      {ctx.text}
      <button onClick={() => ctx.emitAction('quote-click', { id: 'a' })}>
        Act
      </button>
    </aside>
  );
}

const options = {
  components: { blockquote: createMarkdownComponent(Quote) },
};

test('mounts, updates in place and unmounts a React Custom component', async () => {
  mounts = 0;
  unmounts = 0;
  const screen = render(
    <IxMarkdown markdown="> Hello" streaming options={options} />
  );

  const quote = screen.getByRole('complementary', { name: 'quote' });
  await expect.element(quote).toHaveTextContent('Hello');
  await expect.element(quote).toHaveAttribute('data-mount', '1');

  await screen.rerender(
    <IxMarkdown markdown="> Hello world" streaming options={options} />
  );
  await expect.element(quote).toHaveTextContent('Hello world');
  await expect.element(quote).toHaveAttribute('data-mount', '1');
  expect(mounts).toBe(1);

  await screen.rerender(
    <IxMarkdown markdown="Plain" streaming options={options} />
  );
  await expect.element(quote).not.toBeInTheDocument();
  await expect.poll(() => unmounts).toBe(1);
});

test('exposes emitAction as onActionClick', async () => {
  const actions: string[] = [];
  const screen = render(
    <IxMarkdown
      markdown="> Hello"
      options={options}
      onActionClick={(e) => actions.push(e.detail.name)}
    />
  );
  await screen.getByRole('button', { name: 'Act' }).click();
  expect(actions).toEqual(['quote-click']);
});
