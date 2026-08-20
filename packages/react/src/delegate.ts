/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { FrameworkDelegate } from '@siemens/ix';
import { registerFrameworkDelegate } from '@siemens/ix/components';
import type { ReactNode } from 'react';
import { createElement, Fragment, useLayoutEffect } from 'react';
import ReactDOMClient from 'react-dom/client';
let viewInstance = 0;

export const ATTACH_VIEW_TIMEOUT_MS = 5000;

function createViewInstance() {
  return `ix-react-view-${viewInstance++}`;
}

const mountedRootNodes: Record<string, ReactDOMClient.Root> = {};
const mountedDomViews = new WeakSet<Element>();

function CommitSignal({ onCommit }: { onCommit: () => void }) {
  useLayoutEffect(onCommit, [onCommit]);
  return null;
}

async function fallbackRootDom(
  id: string,
  view: ReactNode
): Promise<Element> {
  return new Promise<Element>((resolve, reject) => {
    const rootElement = document.createElement('DIV');
    rootElement.id = id;
    rootElement.style.display = 'contents';
    document.body.appendChild(rootElement);

    const root = ReactDOMClient.createRoot(rootElement);
    mountedRootNodes[id] = root;

    let settled = false;

    const cleanup = () => {
      clearTimeout(timeoutId);
      root.unmount();
      delete mountedRootNodes[id];
      rootElement.remove();
    };

    const settleResolve = (value: Element) => {
      if (settled) {
        return;
      }
      settled = true;
      resolve(value);
    };

    const settleReject = (error: unknown) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error);
    };

    const timeoutId = setTimeout(() => {
      settleReject(
        new Error(
          `React view did not commit within ${ATTACH_VIEW_TIMEOUT_MS}ms`
        )
      );
    }, ATTACH_VIEW_TIMEOUT_MS);

    const onCommit = () => {
      const viewElement = rootElement.children[0];
      if (!(viewElement instanceof Element)) {
        queueMicrotask(() => {
          settleReject(new Error('React view did not render a host element'));
        });
        return;
      }

      clearTimeout(timeoutId);
      settleResolve(viewElement);
    };

    try {
      root.render(
        createElement(
          Fragment,
          null,
          view,
          createElement(CommitSignal, { onCommit })
        )
      );
    } catch (error) {
      settleReject(error);
    }
  });
}

async function fallbackRemoveViewFromRootDom(view: Element) {
  const parent = view.parentElement;
  if (!parent) {
    throw new Error('Cannot remove a view without a parent element');
  }

  const id = parent.id;
  if (id in mountedRootNodes) {
    mountedRootNodes[id].unmount();
    delete mountedRootNodes[id];
    parent.remove();
  }
}

export class ReactFrameworkDelegate implements FrameworkDelegate {
  attachViewToPortal?: (id: string, view: ReactNode) => Promise<Element>;
  removeViewFromPortal?: (id: string) => void;

  resolvePortalInitPromise: (() => void) | undefined;
  portalInitPromise: Promise<void>;
  isUsingReactPortal = false;

  constructor() {
    this.portalInitPromise = new Promise<void>(
      (resolve) => (this.resolvePortalInitPromise = resolve)
    );
  }

  async attachView<R = HTMLElement>(
    view: ReactNode | HTMLElement
  ): Promise<R> {
    if (view instanceof HTMLElement) {
      if (!view.isConnected) {
        document.body.appendChild(view);
        mountedDomViews.add(view);
      }
      return view as R;
    }

    const id = createViewInstance();

    if (!this.isUsingReactPortal) {
      return (await fallbackRootDom(id, view)) as R;
    }

    await this.isPortalReady();
    if (this.attachViewToPortal) {
      return (await this.attachViewToPortal(id, view)) as R;
    }

    throw new Error('React portal could not be initialized');
  }

  async removeView(view: unknown): Promise<void> {
    if (!(view instanceof Element)) {
      throw new TypeError('A React framework view must be a DOM element');
    }

    if (mountedDomViews.has(view)) {
      mountedDomViews.delete(view);
      view.remove();
      return;
    }

    if (!this.removeViewFromPortal) {
      return fallbackRemoveViewFromRootDom(view);
    }

    const parent = view.parentElement;
    if (!parent) {
      throw new Error('Cannot remove a view without a parent element');
    }

    const id = parent.getAttribute('data-portal-id');
    if (!id) {
      throw new Error(
        'Cannot remove a portal view without a portal identifier'
      );
    }

    this.removeViewFromPortal(id);
  }

  portalReady() {
    this.resolvePortalInitPromise?.();
  }

  private async isPortalReady() {
    return this.portalInitPromise;
  }
}

export const reactFrameworkDelegate = new ReactFrameworkDelegate();
registerFrameworkDelegate(reactFrameworkDelegate);
