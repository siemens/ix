/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type DelegateConfig = {
  parentElement?: Element;
};

export interface FrameworkDelegate {
  attachView<R = HTMLElement>(view: any, config?: DelegateConfig): Promise<R>;
}

class DefaultFrameworkDelegate implements FrameworkDelegate {
  async attachView(view: any, config?: DelegateConfig) {
    const attachToElement = config?.parentElement ?? document.body;
    attachToElement.appendChild(view);
    return view;
  }
}

const coreDelegate = new DefaultFrameworkDelegate();
let currentDelegate: FrameworkDelegate = coreDelegate;

export function registerFrameworkDelegate(delegate: FrameworkDelegate) {
  currentDelegate = delegate;
}

export const resolveDelegate = () => {
  return currentDelegate;
};

export const getCoreDelegate = () => coreDelegate;
