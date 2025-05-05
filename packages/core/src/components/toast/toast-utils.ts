/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ShowToastResult } from './toast-container';
export type ToastType = 'info' | 'success' | 'error' | 'warning';
export type ToastPosition = 'bottom-right' | 'top-right';

export interface ToastConfig {
  title?: string;
  message?: string | HTMLElement;
  action?: HTMLElement;
  type?: ToastType;
  autoClose?: boolean;
  autoCloseDelay?: number;
  icon?: string;
  iconColor?: string;
}

export function getToastContainer() {
  const containerList = Array.from(
    document.querySelectorAll('ix-toast-container')
  );
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn(
      'Multiple toast containers were found. Only the first one will be used.'
    );
    return container;
  }
  if (!container) {
    const toastContainer = document.createElement('ix-toast-container');
    document.body.appendChild(toastContainer);

    return toastContainer;
  }
  return container;
}

export function setToastPosition(position: ToastPosition) {
  const container = getToastContainer();
  container.position = position;
}

function toast(config: ToastConfig): Promise<ShowToastResult> {
  const container = getToastContainer();
  return container.showToast(config);
}

toast.info = (config: ToastConfig) => {
  return toast({
    ...config,
    type: 'info',
  });
};

toast.error = (config: ToastConfig) => {
  return toast({
    ...config,
    type: 'error',
  });
};

toast.success = (config: ToastConfig) => {
  return toast({
    ...config,
    type: 'success',
  });
};

toast.warning = (config: ToastConfig) => {
  return toast({
    ...config,
    type: 'warning',
  });
};

export { toast };
