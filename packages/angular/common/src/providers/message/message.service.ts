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
  MessageConfig,
  showMessage,
  ShowMessageVariant,
  TypedEvent,
} from '@siemens/ix';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public showMessage<T>(config: MessageConfig<T>): Promise<
    TypedEvent<{
      actionId: string;
      payload: T;
    }>
  > {
    return showMessage(config);
  }

  /**
   * Displays a danger message modal with an alarm icon
   */
  public danger(...args: Parameters<ShowMessageVariant>) {
    return showMessage.danger(...args);
  }

  /**
   * Displays a warning message modal with a warning icon
   */
  public warning(...args: Parameters<ShowMessageVariant>) {
    return showMessage.warning(...args);
  }

  /**
   * Displays a caution message modal with a warning-rhomb icon
   */
  public caution(...args: Parameters<ShowMessageVariant>) {
    return showMessage.caution(...args);
  }

  /**
   * Displays an information message modal with an info icon
   */
  public information(...args: Parameters<ShowMessageVariant>) {
    return showMessage.information(...args);
  }

  /**
   * Displays a critical message modal with a warning-octagon icon
   */
  public critical(...args: Parameters<ShowMessageVariant>) {
    return showMessage.critical(...args);
  }

  /**
   * Displays an error message modal with an error icon
   */
  public error(...args: Parameters<ShowMessageVariant>) {
    return showMessage.error(...args);
  }

  /**
   * Displays a success message modal with a success icon
   */
  public success(...args: Parameters<ShowMessageVariant>) {
    return showMessage.success(...args);
  }

  /**
   * Displays a question message modal with a question icon
   */
  public question(...args: Parameters<ShowMessageVariant>) {
    return showMessage.question(...args);
  }
}
