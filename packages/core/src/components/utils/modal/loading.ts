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

export function showModalLoading(message: string) {
  const modal = document.createElement('ix-modal');
  modal.closeOnEscape = false;

  const loading = document.createElement('ix-modal-loading');
  loading.innerText = message;
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
