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

export type ToastConfig = {
  message: string | HTMLElement;
};

export function setToastPosition(position: 'bottom-right' | 'top-right') {
  getToastContainer().position = position;
}

export async function showToast(
  config: Omit<IxToastConfig, 'message'> & ToastConfig
) {
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
