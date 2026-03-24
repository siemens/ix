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
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';
import { ModalLoadingContext, ModalLoadingOptions } from '@siemens/ix';

@Injectable({
  providedIn: 'root',
})
export class LoadingService extends BaseLoadingService {
  constructor() {
    super();

    defineCustomElement();
  }

  /** @deprecated Use ModalLoadingOptions object form instead */
  public override showModalLoading(message: string): ModalLoadingContext;

  public override showModalLoading(options: ModalLoadingOptions): ModalLoadingContext;

  public override showModalLoading(
    messageOrOptions: string | ModalLoadingOptions
  ): ModalLoadingContext {
    if (typeof messageOrOptions === 'string') {
      return super.showModalLoading(messageOrOptions);
    }
    return super.showModalLoading(messageOrOptions);
  }
}
