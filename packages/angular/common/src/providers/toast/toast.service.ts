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

  private createViewFromTemplate(
    template: TemplateRef<any> | string | undefined,
    context: any
  ) {
    if (template === undefined) {
      return {
        node: '',
        embeddedView: undefined,
      };
    }
    if (!(template instanceof TemplateRef)) {
      return {
        node: template as string,
        embeddedView: undefined,
      };
    }

    const embeddedView = template.createEmbeddedView({ $implicit: context });
    const node = embeddedView.rootNodes[0];
    embeddedView.detectChanges();

    return { node, embeddedView };
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

    const messageResult = this.createViewFromTemplate(config.message, context);
    const actionResult = this.createViewFromTemplate(config.action, context);

    const instance = await toast({
      ...config,
      message: messageResult.node,
      action: actionResult.node,
    });

    context.close = () => {
      instance.close();
    };

    instance.onClose.once(() => {
      messageResult.embeddedView?.destroy();
      actionResult.embeddedView?.destroy();
    });

    return instance;
  }
}
