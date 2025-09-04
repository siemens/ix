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
import { defineCustomElement as defineIxIcon } from '@siemens/ix-icons/components/ix-icon.js';

export type ToastConfig = {
  message?: string | HTMLElement;
  action?: HTMLElement;
};

export function setToastPosition(position: 'bottom-right' | 'top-right') {
  getToastContainer().position = position;
}

export async function showToast(
  config: Omit<IxToastConfig, 'message' | 'action'> & ToastConfig
) {
  // Define components upfront to prevent undefined components
  defineIxIcon();
  defineIxToastContainer();
  defineIxToast();

  if (typeof config.message === 'string' && !config.action) {
    const toastInstance = await toast(config as IxToastConfig);
    return toastInstance;
  }

  let clonedMessage: string | HTMLElement | undefined = undefined;
  let clonedAction: HTMLElement | undefined = undefined;

  if (config.message && typeof config.message !== 'string') {
    clonedMessage = config.message.cloneNode(true) as HTMLElement;
  } else if (typeof config.message === 'string') {
    clonedMessage = config.message;
  }

  if (config.action) {
    clonedAction = config.action.cloneNode(true) as HTMLElement;
  }

  const toastInstance = await toast({
    ...config,
    message: clonedMessage,
    action: clonedAction,
  });

  return toastInstance;
}
