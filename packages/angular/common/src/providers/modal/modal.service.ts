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
  ElementRef,
  Injectable,
  Injector,
  TemplateRef,
  Type,
  ViewRef,
} from '@angular/core';
import { closeModal, dismissModal, showModal } from '@siemens/ix';
import { InternalIxActiveModal, IxActiveModal } from './modal-ref';
import { ModalConfig } from './modal.config';

export type ModalContext<T> = {
  close: ((result: any) => void) | null;
  dismiss: ((result?: any) => void) | null;
  data?: T;
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private readonly appRef: ApplicationRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly injector: Injector
  ) {}

  public async open<TData = any, TReason = any>(config: ModalConfig<TData>) {
    const context: ModalContext<TData> = {
      close: null,
      dismiss: null,
      data: config.data,
    };

    if (config.content instanceof Type) {
      return this.createContentByComponentType<TData, TReason>(
        config.content,
        config,
        context
      );
    }

    const modalInstance = await this.createContentByTemplateRef<TData, TReason>(
      config.content,
      config,
      context
    );

    return modalInstance;
  }

  private async createContentByComponentType<TData = any, TReason = any>(
    componentType: Type<unknown>,
    config: ModalConfig<TData>,
    context: ModalContext<TData>
  ) {
    const activeModal = new InternalIxActiveModal<TData>(context.data);

    const modalFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);

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

    const element = instance.injector.get(ElementRef);
    element.nativeElement.style.display = 'contents';

    const modalInstance = await this.createModalInstance<TData, TReason>(
      context,
      element.nativeElement,
      instance.hostView,
      config
    );

    activeModal.setModalElement(modalInstance.htmlElement);

    return modalInstance;
  }

  private async createContentByTemplateRef<TData = any, TReason = any>(
    templateRef: TemplateRef<unknown>,
    config: ModalConfig<TData>,
    context: ModalContext<TData>
  ) {
    const embeddedView = templateRef.createEmbeddedView({
      $implicit: context,
    });

    this.appRef.attachView(embeddedView);

    return await this.createModalInstance<TData, TReason>(
      context,
      embeddedView.rootNodes[0],
      embeddedView,
      config
    );
  }

  private async createModalInstance<TData = any, TReason = any>(
    context: ModalContext<TData>,
    htmlElement: HTMLElement,
    viewRef: ViewRef,
    config: ModalConfig<TData>
  ) {
    context.close = (result: any) => {
      closeModal(htmlElement, result);
    };

    context.dismiss = (result?: any) => {
      dismissModal(htmlElement, result);
    };

    viewRef.detectChanges();

    const modalInstance = await showModal<TReason>({
      ...config,
      content: htmlElement,
    });

    modalInstance.onClose.once(() => {
      viewRef.destroy();
    });

    modalInstance.onDismiss.once(() => {
      viewRef.destroy();
    });
    return modalInstance;
  }
}
