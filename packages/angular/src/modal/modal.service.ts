/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import {
  closeModal,
  dismissModal,
  modal,
  ModalConfig as IxModalConfig,
} from '@siemens/ix';
import { ModalConfig } from './modal.config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  async open(config: Omit<IxModalConfig, 'content'> & ModalConfig) {
    const context: {
      close: ((result: any) => void) | null;
      dismiss: ((result?: any) => void) | null;
    } = {
      close: null,
      dismiss: null,
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

    const modalInstance = await modal({
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
