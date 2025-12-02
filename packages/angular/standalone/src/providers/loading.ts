/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Injectable } from '@angular/core';
import {
  LoadingService as BaseLoadingService,
  ModalLoadingContext,
} from '@siemens/ix-angular/common';
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';

@Injectable({
  providedIn: 'root',
})
export class LoadingService extends BaseLoadingService {
  constructor() {
    super();

    defineCustomElement();
  }

  public override showModalLoading(message: string): ModalLoadingContext {
    return super.showModalLoading(message);
  }
}
