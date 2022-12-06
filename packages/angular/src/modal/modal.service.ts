/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { closeModal, dismissModal, modal } from '@siemens/ix';
import { ModalConfig } from './modal.config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  async open<TData = any, TReason = any>(config: ModalConfig<TData>) {
    const context: {
      close: ((result: any) => void) | null;
      dismiss: ((result?: any) => void) | null;
      data?: TData;
    } = {
      close: null,
      dismiss: null,
      data: config.data,
    };
    const embeddedView = config.content.createEmbeddedView({
      $implicit: context,
    });

    const node = embeddedView.rootNodes[0];

    context.close = (result: any) => {
      closeModal(node, result);
    };

    context.dismiss = (result?: any) => {
      dismissModal(node, result);
    };

    embeddedView.detectChanges();

    const modalInstance = await modal<TReason>({
      ...config,
      title: '',
      content: node,
    });

    modalInstance.onClose.once(() => {
      embeddedView.destroy();
    });

    modalInstance.onDismiss.once(() => {
      embeddedView.destroy();
    });

    return modalInstance;
  }
}
