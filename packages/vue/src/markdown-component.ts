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
import {
  type AppContext,
  type Component,
  getCurrentInstance,
  h,
  render,
} from 'vue';

/**
 * Turns a Vue component into a Markdown Custom component factory.
 * The component receives the `MarkdownComponentContext` fields as props.
 * Call it inside `setup()` or pass the app context explicitly, so that
 * plugins, provide/inject, router and i18n keep working.
 */
export function createMarkdownComponent(
  component: Component,
  appContext: AppContext | null = getCurrentInstance()?.appContext ?? null
): MarkdownComponentFactory {
  return (ctx) => {
    const element = document.createElement('div');
    const mount = (next: MarkdownComponentContext) => {
      const vnode = h(component, { ...next });
      vnode.appContext = appContext;
      render(vnode, element);
    };
    mount(ctx);
    return {
      element,
      update: mount,
      destroy: () => render(null, element),
    };
  };
}
