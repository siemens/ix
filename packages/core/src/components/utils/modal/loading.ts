/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Animation from '../animation';
import {
  createDependencyFunction,
  type CustomElementDependency,
} from '../dependency-function';
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

export type ShowModalLoadingDependencies = readonly [
  CustomElementDependency<'ix-modal'>,
  CustomElementDependency<'ix-modal-loading'>,
];

export type ShowModalLoading = {
  /**
   * Displays a loading modal with a message
   * @deprecated Use ModalLoadingOptions object form instead. Will be removed in v5.0.0.
   */
  (message: string): Promise<ModalLoadingContext>;

  /**
   * Displays a loading modal with a message
   */
  (message: ModalLoadingOptions): Promise<ModalLoadingContext>;

  (
    messageOrOptions: string | ModalLoadingOptions
  ): Promise<ModalLoadingContext>;
};

/**
 * Create a loading modal helper with custom element dependencies.
 */
export function createShowModalLoading(
  dependencies: ShowModalLoadingDependencies
): ShowModalLoading {
  return createDependencyFunction(async function showModalLoading(
    messageOrOptions: string | ModalLoadingOptions
  ): Promise<ModalLoadingContext> {
    const modal = document.createElement('ix-modal');
    modal.beforeDismiss = () => false;

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

    await getCoreDelegate().attachView(modal);
    await modal.showModal();

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
  }, dependencies);
}

export const showModalLoading = createShowModalLoading([
  { tag: 'ix-modal', define: () => {} },
  { tag: 'ix-modal-loading', define: () => {} },
]);
