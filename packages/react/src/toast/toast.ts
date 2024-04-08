/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import { defineIxIcon } from '../ix-icon';

export type ToastConfig = {
  message: string | React.ReactNode;
};

export async function showToast(
  config: Omit<IxToastConfig, 'message'> & ToastConfig
) {
  // Define custom element, otherwise dynamic creation of toast container will fail
  defineToast();
  defineToastContainer();

  // Predefine `ix-icon` to be sure its loaded before its used inside the util functions
  defineIxIcon();

  if (typeof config.message === 'string') {
    const toastInstance = await toast(config as IxToastConfig);
    return toastInstance;
  }

  const node = config.message as React.ReactNode;
  const toastContainer = document.createElement('DIV');
  const root = ReactDOMClient.createRoot(toastContainer);
  root.render(node);

  const toastInstance = await toast({
    ...config,
    message: toastContainer,
  });

  toastInstance.onClose.once(() => {
    root.unmount();
  });

  return toastInstance;
}
