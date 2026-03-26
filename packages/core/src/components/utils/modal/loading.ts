/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Animation from '../animation';
import { getCoreDelegate } from '../delegate';

export type ModalLoadingContext = {
  update: (text: string) => string;
  finish: (text?: string, timeout?: number) => void;
};

export type ModalLoadingOptions = {
  /**
   * The text to show in the loading modal
   */
  message: string;

  /**
   * Whether the loading modal should be centered on the screen
   * @default false
   */
  centered?: boolean;
};

/**
 * Displays a loading modal with a message
 * @deprecated Use ModalLoadingOptions object form instead. Will be removed in v5.0.0.
 */
export function showModalLoading(message: string): ModalLoadingContext;

/**
 * Displays a loading modal with a message
 */
export function showModalLoading(
  message: ModalLoadingOptions
): ModalLoadingContext;

export function showModalLoading(
  messageOrOptions: string | ModalLoadingOptions
): ModalLoadingContext {
  const modal = document.createElement('ix-modal');
  modal.disableEscapeClose = true;

  const loading = document.createElement('ix-modal-loading');

  if (typeof messageOrOptions === 'string') {
    loading.innerText = messageOrOptions;
  } else {
    loading.innerText = messageOrOptions.message;
    if (messageOrOptions.centered) {
      modal.centered = true;
    }
  }

  modal.appendChild(loading);

  getCoreDelegate().attachView(modal);
  modal.showModal();

  return {
    update: (text: string) => (loading.innerHTML = text),
    finish: (text?: string, timeout: number = 250) => {
      if (text !== undefined) {
        loading.innerText = text;
      } else {
        timeout = 0;
      }
      setTimeout(() => {
        modal.closeModal(null);
        setTimeout(
          async () => await getCoreDelegate().removeView(modal),
          Animation.mediumTime
        );
      }, timeout);
    },
  };
}
