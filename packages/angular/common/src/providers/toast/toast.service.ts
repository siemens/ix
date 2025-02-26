/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import {
  getToastContainer,
  toast,
  ToastConfig as IxToastConfig,
} from '@siemens/ix';
import { ToastConfig } from './toast.config';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public setPosition(position: 'bottom-right' | 'top-right') {
    getToastContainer().position = position;
  }

  public getPosition() {
    return getToastContainer().position;
  }

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
