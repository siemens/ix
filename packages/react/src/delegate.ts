/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FrameworkDelegate, registerFrameworkDelegate } from '@siemens/ix';
import ReactDOMClient from 'react-dom/client';
let viewInstance = 0;

function createViewInstance() {
  return `ix-react-view-${viewInstance++}`;
}

const mountedRootNodes: Record<string, ReactDOMClient.Root> = {};

async function fallbackRootDom(id: string, view: React.ReactNode) {
  return new Promise((resolve) => {
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

async function fallbackRemoveViewFromRootDom(view: any) {
  const parent = view.parentElement;
  const id = parent.id;
  if (id in mountedRootNodes) {
    mountedRootNodes[id].unmount();
    delete mountedRootNodes[id];
    parent.remove();
  }
}

export class ReactFrameworkDelegate implements FrameworkDelegate {
  attachViewToPortal?: (id: string, view: any) => Promise<Element>;
  removeViewFromPortal?: (id: string) => void;

  async attachView(view: any): Promise<any> {
    const id = createViewInstance();

    if (!this.attachViewToPortal) {
      return fallbackRootDom(id, view);
    }
    const refElement = await this.attachViewToPortal(id, view);
    return refElement;
  }

  async removeView(view: any): Promise<void> {
    if (!this.removeViewFromPortal) {
      return fallbackRemoveViewFromRootDom(view);
    }

    const parent = view.parentElement;
    const id = parent.getAttribute('data-portal-id');

    this.removeViewFromPortal(id);
  }
}

export const reactFrameworkDelegate = new ReactFrameworkDelegate();
registerFrameworkDelegate(reactFrameworkDelegate);
