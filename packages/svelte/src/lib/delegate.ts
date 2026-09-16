/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { FrameworkDelegate } from '@siemens/ix';
import { registerFrameworkDelegate } from '@siemens/ix/components';
import { mount, unmount, type Component } from 'svelte';
import { DATA_PORTAL_ID_ATTRIBUTE } from './modal/constants.js';

/**
 * A view handed to the delegate. Svelte has no VNode equivalent, so a view is
 * described by the component to render plus its props.
 */
export type SvelteView<TProps extends Record<string, unknown> = any> = {
  component: Component<TProps, any, any>;
  props?: TProps;
};

let viewInstance = 0;

function createViewInstance() {
  return `ix-svelte-view-${viewInstance++}`;
}

function isSvelteView(view: unknown): view is SvelteView {
  return (
    typeof view === 'object' &&
    view !== null &&
    typeof (view as SvelteView).component === 'function'
  );
}

/**
 * Framework delegate for Svelte.
 *
 * Unlike the Vue and React delegates this needs no portal component to render
 * through -- Svelte's `mount()` renders a component into any DOM node
 * synchronously. `IxApplicationContext` only supplies the container element so
 * that overlays stay inside the application's DOM (and therefore inside its
 * CSS scope); without it we fall back to `document.body`.
 */
export class SvelteFrameworkDelegate implements FrameworkDelegate {
  private mountedViews = new Map<string, ReturnType<typeof mount>>();
  private portalElement?: HTMLElement;

  private resolvePortalInitPromise: (() => void) | undefined;
  private portalInitPromise: Promise<void>;
  private hasPortal = false;

  constructor() {
    this.portalInitPromise = new Promise<void>(
      (resolve) => (this.resolvePortalInitPromise = resolve)
    );
  }

  /**
   * Called by `IxApplicationContext` while it initializes -- before the portal
   * container is in the DOM -- so that views attached in between wait for the
   * portal instead of falling back to `document.body`.
   */
  willUsePortal() {
    this.hasPortal = true;
  }

  /** Called by `IxApplicationContext` once the portal container exists. */
  portalReady(element: HTMLElement) {
    this.portalElement = element;
    this.hasPortal = true;
    this.resolvePortalInitPromise?.();
  }

  portalDestroyed() {
    this.portalElement = undefined;
  }

  async attachView<R = HTMLElement>(view: unknown): Promise<R> {
    if (this.hasPortal) {
      await this.portalInitPromise;
    }

    const target = this.portalElement ?? document.body;

    if (view instanceof HTMLElement) {
      target.appendChild(view);
      return view as R;
    }

    if (!isSvelteView(view)) {
      throw new Error(
        'Unsupported view. Provide either an HTMLElement or `{ component, props }`.'
      );
    }

    const id = createViewInstance();
    const container = document.createElement('div');
    container.setAttribute(DATA_PORTAL_ID_ATTRIBUTE, id);
    container.style.display = 'contents';
    target.appendChild(container);

    this.mountedViews.set(
      id,
      mount(view.component, {
        target: container,
        props: view.props ?? {},
      })
    );

    const rootElement = container.children[0];

    if (!rootElement) {
      throw new Error(
        'The mounted view did not render a root element. The component passed to `showModal` must render an `IxModal` at its root.'
      );
    }

    return rootElement as R;
  }

  async removeView(view: Element): Promise<void> {
    const container = view?.parentElement;
    const id = container?.getAttribute(DATA_PORTAL_ID_ATTRIBUTE);

    if (!container || !id) {
      view?.remove();
      return;
    }

    const instance = this.mountedViews.get(id);

    if (instance) {
      await unmount(instance, { outro: false });
      this.mountedViews.delete(id);
    }

    container.remove();
  }
}

export const svelteFrameworkDelegate = new SvelteFrameworkDelegate();
registerFrameworkDelegate(svelteFrameworkDelegate);
