/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getToastContainer,
  toast,
  ToastConfig as IxToastConfig,
} from '@siemens/ix';
import { defineCustomElement as defineIxToast } from '@siemens/ix/components/ix-toast.js';
import { defineCustomElement as defineIxToastContainer } from '@siemens/ix/components/ix-toast-container.js';
import { defineCustomElement as defineIxIcon } from '@siemens/ix-icons/components/ix-icon';

export type ToastConfig = {
  message: string | HTMLElement;
};

export function setToastPosition(position: 'bottom-right' | 'top-right') {
  getToastContainer().position = position;
}

export async function showToast(
  config: Omit<IxToastConfig, 'message'> & ToastConfig
) {
  // Define components upfront to prevent undefined components
  defineIxIcon();
  defineIxToastContainer();
  defineIxToast();

  if (typeof config.message === 'string') {
    const toastInstance = await toast(config as IxToastConfig);
    return toastInstance;
  }

  const toastInstance = await toast({
    ...config,
    message: config.message.cloneNode(true) as HTMLElement,
  });

  return toastInstance;
}
