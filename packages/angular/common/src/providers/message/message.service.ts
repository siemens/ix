/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { MessageConfig, showMessage, TypedEvent } from '@siemens/ix';

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
  public danger(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.danger(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays a warning message modal with a warning icon
   */
  public warning(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.warning(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays a caution message modal with a warning-rhomb icon
   */
  public caution(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.caution(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays an information message modal with an info icon
   */
  public information(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.information(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays a critical message modal with a warning-octagon icon
   */
  public critical(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.critical(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays an error message modal with an error icon
   */
  public error(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.error(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays a success message modal with a success icon
   */
  public success(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.success(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Displays a question message modal with a question icon
   */
  public question(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.question(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }
}
