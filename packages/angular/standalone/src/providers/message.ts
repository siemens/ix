/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { MessageConfig, TypedEvent } from '@siemens/ix';
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
}
