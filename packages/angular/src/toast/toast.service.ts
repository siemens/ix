// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';
import { toast, ToastConfig as IxToastConfig } from '@siemens/ix';
import { ToastConfig } from './toast.config';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public async show(config: ToastConfig) {
    if (typeof config.message === 'string') {
      return toast(config as IxToastConfig);
    }

    const context: {
      close: (() => void) | null;
    } = {
      close: null,
    };

    const embeddedView = config.message.createEmbeddedView({
      $implicit: context,
    });

    const node: HTMLElement = embeddedView.rootNodes[0];
    const instance = await toast({
      ...config,
      message: node,
    });

    context.close = () => {
      instance.close();
    };

    embeddedView.detectChanges();

    instance.onClose.once(() => {
      embeddedView.destroy();
    });

    return instance;
  }
}
