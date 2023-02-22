/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { closeModal, dismissModal, modal } from '@siemens/ix';
import { InternalIxActiveModal, IxActiveModal } from './modal-ref';
import { ModalConfig } from './modal.config';

type ModalContext<T> = {
  close: ((result: any) => void) | null;
  dismiss: ((result?: any) => void) | null;
  data?: T;
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  async open<TData = any, TReason = any>(config: ModalConfig<TData>) {
    const context: ModalContext<TData> = {
      close: null,
      dismiss: null,
      data: config.data,
    };

    if (config.content instanceof Type) {
      return this.createContentByComponentType<TData, TReason>(config, context);
    }

    const modalInstance = await this.createContentByTemplateRef<TData, TReason>(
      config,
      context
    );

    return modalInstance;
  }

  private async createContentByComponentType<TData = any, TReason = any>(
    config: ModalConfig<TData>,
    context: ModalContext<TData>
  ) {
    const activeModal = new InternalIxActiveModal<TData>(context.data);

    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(
      config.content
    );

    const modalInjector = Injector.create({
      providers: [
        {
          provide: IxActiveModal,
          useValue: activeModal,
        },
      ],
      parent: this.injector,
    });

    const instance = modalFactory.create(modalInjector);
    this.appRef.attachView(instance.hostView);

    const embeddedView = instance.hostView as EmbeddedViewRef<any>;
    const modalInstance = await this.createModalInstance<TData, TReason>(
      context,
      embeddedView,
      config
    );

    activeModal.setModalElement(modalInstance.htmlElement);

    return modalInstance;
  }

  private async createContentByTemplateRef<TData = any, TReason = any>(
    config: ModalConfig<TData>,
    context: {
      close: ((result: any) => void) | null;
      dismiss: ((result?: any) => void) | null;
      data?: TData | undefined;
    }
  ) {
    const embeddedView = config.content.createEmbeddedView({
      $implicit: context,
    });
    return await this.createModalInstance<TData, TReason>(
      context,
      embeddedView,
      config
    );
  }

  private async createModalInstance<TData = any, TReason = any>(
    context: {
      close: ((result: any) => void) | null;
      dismiss: ((result?: any) => void) | null;
      data?: TData | undefined;
    },
    embeddedView: EmbeddedViewRef<any>,
    config: ModalConfig<TData>
  ) {
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
