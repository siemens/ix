/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalInstance } from '@siemens/ix';
import {
  ModalConfig,
  ModalService as BaseModalService,
} from '@siemens/ix-angular/common';

export type ModalContext<T> = {
  close: ((result: any) => void) | null;
  dismiss: ((result?: any) => void) | null;
  data?: T;
};

@Injectable({
  providedIn: 'root',
})
export class ModalService extends BaseModalService {
  constructor(
    appRef: ApplicationRef,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector
  ) {
    super(appRef, componentFactoryResolver, injector);
  }


  public open<TData = any, TReason = any>(
    config: ModalConfig<TData>
  ): Promise<ModalInstance<TReason>> {
    return super.open(config);
  }


  /**
   * Closes the given modal instance, optionally passing a result/reason.
   */
  public close<TReason = any>(instance: ModalInstance<TReason>, reason?: TReason): void {
    if (instance && instance.htmlElement && typeof instance.htmlElement.closeModal === 'function') {
      instance.htmlElement.closeModal(reason);
    } else {
      throw new Error('Invalid modal instance: cannot close');
    }
  }
}
