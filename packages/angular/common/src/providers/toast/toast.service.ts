/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable, TemplateRef } from '@angular/core';
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
    if (
      typeof config.message === 'string' &&
      !(config.action instanceof TemplateRef)
    ) {
      return toast(config as IxToastConfig);
    }

    const context: {
      close: (() => void) | null;
    } = {
      close: null,
    };

    let node: HTMLElement | string | undefined = config.message as string;
    let embeddedView: any;
    let embeddedViewAction: any;
    let nodeAction: HTMLElement | undefined;

    if (config.message instanceof TemplateRef) {
      embeddedView = config.message.createEmbeddedView({ $implicit: context });
      node = embeddedView.rootNodes[0];
      embeddedView.detectChanges();
    }

    if (config.action instanceof TemplateRef) {
      embeddedViewAction = config.action.createEmbeddedView({
        $implicit: context,
      });
      nodeAction = embeddedViewAction.rootNodes[0];
      embeddedViewAction.detectChanges();
    }

    const instance = await toast({
      ...config,
      message: node,
      action: nodeAction,
    });

    context.close = () => {
      instance.close();
    };

    instance.onClose.once(() => {
      embeddedView?.destroy();
      embeddedViewAction?.destroy();
    });

    return instance;
  }
}
