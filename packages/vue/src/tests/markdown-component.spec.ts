/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable vue/one-component-per-file */
import { cleanup, render } from '@testing-library/vue';
import { defineComponent, h, inject, nextTick } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { IxMarkdown, createMarkdownComponent } from '../index';

afterEach(cleanup);

const GREETING = Symbol('greeting');

function setup(markdown: string, onUnmount = vi.fn()) {
  const Heading = defineComponent({
    props: { text: { type: String, default: '' } },
    setup(props) {
      const greeting = inject<string>(GREETING, 'none');
      return () =>
        h('span', { 'data-testid': 'custom' }, [`${props.text}|${greeting}`]);
    },
    unmounted: onUnmount,
  });

  let factory: ReturnType<typeof createMarkdownComponent>;
  const Host = defineComponent({
    props: { markdown: { type: String, required: true } },
    setup(props) {
      factory = createMarkdownComponent(Heading);
      return () =>
        h(IxMarkdown, {
          markdown: props.markdown,
          options: { components: { heading: factory } },
        });
    },
  });

  const result = render(Host, {
    props: { markdown },
    global: {
      plugins: [(app) => app.provide(GREETING, 'hello')],
    },
  });
  return result;
}

const customText = () =>
  document.querySelector('ix-markdown [data-testid="custom"]')?.textContent;

describe('createMarkdownComponent', () => {
  it('mounts the Vue component with the app context', async () => {
    setup('# Title');
    await vi.waitFor(() => expect(customText()).toBe('Title|hello'));
  });

  it('updates props in place', async () => {
    const { rerender } = setup('# One');
    await vi.waitFor(() => expect(customText()).toBe('One|hello'));
    const el = document.querySelector('[data-testid="custom"]');
    await rerender({ markdown: '# Two' });
    await nextTick();
    await vi.waitFor(() => expect(customText()).toBe('Two|hello'));
    expect(document.querySelector('[data-testid="custom"]')).toBe(el);
  });

  it('unmounts the Vue component on destroy', async () => {
    const onUnmount = vi.fn();
    const { rerender } = setup('# One', onUnmount);
    await vi.waitFor(() => expect(customText()).toBe('One|hello'));
    await rerender({ markdown: 'plain' });
    await vi.waitFor(() => expect(onUnmount).toHaveBeenCalled());
  });
});
