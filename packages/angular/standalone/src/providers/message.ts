/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { MessageConfig, ShowMessageVariant, TypedEvent } from '@siemens/ix';
import { MessageService as BaseMessageService } from '@siemens/ix-angular/common';

import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineCustomElementModalFooter } from '@siemens/ix/components/ix-modal-footer.js';

@Injectable({ providedIn: 'root' })
export class MessageService extends BaseMessageService {
  constructor() {
    super();

    defineCustomElement();
    // needs to be called as well here or wont be rendered correctly for angular production builds
    defineCustomElementModalFooter();
  }

  public override showMessage<T>(config: MessageConfig<T>): Promise<
    TypedEvent<{
      actionId: string;
      payload: T;
    }>
  > {
    return super.showMessage(config);
  }

  public override danger(...args: Parameters<ShowMessageVariant>) {
    return super.danger(...args);
  }

  public override warning(...args: Parameters<ShowMessageVariant>) {
    return super.warning(...args);
  }

  public override caution(...args: Parameters<ShowMessageVariant>) {
    return super.caution(...args);
  }

  public override information(...args: Parameters<ShowMessageVariant>) {
    return super.information(...args);
  }

  public override critical(...args: Parameters<ShowMessageVariant>) {
    return super.critical(...args);
  }

  public override error(...args: Parameters<ShowMessageVariant>) {
    return super.error(...args);
  }

  public override success(...args: Parameters<ShowMessageVariant>) {
    return super.success(...args);
  }

  public override question(...args: Parameters<ShowMessageVariant>) {
    return super.question(...args);
  }
}
