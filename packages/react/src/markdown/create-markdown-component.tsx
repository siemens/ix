/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {
  MarkdownComponentContext,
  MarkdownComponentFactory,
} from '@siemens/ix';
import type { ComponentType } from 'react';
import { createElement } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

/**
 * Turns a React component into a Markdown Custom component mapping, to be
 * used in the `components` of `IxMarkdown` `options`.
 *
 * The component receives the `MarkdownComponentContext` as the `ctx` prop. It
 * is mounted with its own React root, re-rendered with a new `ctx` while its
 * block is open and unmounted when the block disappears.
 *
 * React context is not inherited in v1: the component renders in a separate
 * root, so providers around `IxMarkdown` are not available to it.
 *
 * Create the mapping once (outside of render or memoized) and keep it stable:
 * a new factory remounts the component.
 */
export function createMarkdownComponent(
  Component: ComponentType<{ ctx: MarkdownComponentContext }>
): MarkdownComponentFactory {
  return (ctx) => {
    const element = document.createElement('div');
    const root = createRoot(element);
    const render = (next: MarkdownComponentContext) =>
      flushSync(() => root.render(createElement(Component, { ctx: next })));
    render(ctx);
    return {
      element,
      update: render,
      destroy: () => queueMicrotask(() => root.unmount()),
    };
  };
}
