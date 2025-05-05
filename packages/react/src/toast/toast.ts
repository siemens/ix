'use client';
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineCustomElement as defineToastContainer } from '@siemens/ix/components/ix-toast-container.js';
import { defineCustomElement as defineToast } from '@siemens/ix/components/ix-toast.js';

import { toast, ToastConfig as IxToastConfig } from '@siemens/ix';
import ReactDOMClient from 'react-dom/client';

export type ToastConfig = {
  message?: string | React.ReactNode;
  action?: React.ReactNode;
};

export async function showToast(
  config: Omit<IxToastConfig, 'message' | 'action'> & ToastConfig
) {
  // Define custom element, otherwise dynamic creation of toast container will fail
  defineToast();
  defineToastContainer();

  if (typeof config.message === 'string' && !config.action) {
    const toastInstance = await toast(config as IxToastConfig);
    return toastInstance;
  }

  const node = config.message as React.ReactNode;
  const toastContainer = document.createElement('DIV');
  const root = ReactDOMClient.createRoot(toastContainer);
  root.render(node);

  const nodeAction = config.action as React.ReactNode;
  const toastContainerAction = document.createElement('DIV');
  const rootAction = ReactDOMClient.createRoot(toastContainerAction);  
  rootAction.render(nodeAction);

  const toastInstance = await toast({
    ...config,
    message: toastContainer,
    action: toastContainerAction,
  });

  toastInstance.onClose.once(() => {
    root.unmount();
    rootAction.unmount();
  });

  return toastInstance;
}
