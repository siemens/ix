/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Injectable } from '@angular/core';
import { LoadingService as BaseLoadingService } from '@siemens/ix-angular/common';
import {
  createShowModalLoading,
  ModalLoadingContext,
  ModalLoadingOptions,
} from '@siemens/ix';
import { defineCustomElement as defineIxModal } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineIxModalLoading } from '@siemens/ix/components/ix-modal-loading.js';

const showModalLoadingWithDependencies = createShowModalLoading([
  { tag: 'ix-modal', define: defineIxModal },
  { tag: 'ix-modal-loading', define: defineIxModalLoading },
]);

@Injectable({
  providedIn: 'root',
})
export class LoadingService extends BaseLoadingService {
  /** @deprecated Use ModalLoadingOptions object form instead */
  public override showModalLoading(
    message: string
  ): Promise<ModalLoadingContext>;

  public override showModalLoading(
    options: ModalLoadingOptions
  ): Promise<ModalLoadingContext>;

  public override showModalLoading(
    messageOrOptions: string | ModalLoadingOptions
  ): Promise<ModalLoadingContext> {
    if (typeof messageOrOptions === 'string') {
      return showModalLoadingWithDependencies(messageOrOptions);
    }
    return showModalLoadingWithDependencies(messageOrOptions);
  }
}
