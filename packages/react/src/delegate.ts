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
import ReactDOMClient from 'react-dom/client';
let viewInstance = 0;

function createViewInstance() {
  return `ix-react-view-${viewInstance++}`;
}

const mountedRootNodes: Record<string, ReactDOMClient.Root> = {};

async function fallbackRootDom(id: string, view: ReactNode): Promise<Element> {
  return new Promise<Element>((resolve) => {
    const rootElement = document.createElement('DIV');
    rootElement.id = id;
    rootElement.style.display = 'contents';
    document.body.appendChild(rootElement);

    const root = ReactDOMClient.createRoot(rootElement);
    root.render(view);

    mountedRootNodes[id] = root;

    setTimeout(() => {
      const viewElement = rootElement.children[0];
      resolve(viewElement);
    });
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

  async attachView<R = HTMLElement>(view: ReactNode): Promise<R> {
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
