import { Injectable } from '@angular/core';
import { MessageConfig, TypedEvent } from '@siemens/ix';
import { MessageService as BaseMessageService } from '@siemens/ix-angular/common';

import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineCustomElementModalFooter } from '@siemens/ix/components/ix-modal-footer.js';

@Injectable({ providedIn: 'root' })
export class MessageService extends BaseMessageService {
  private defineModalCustomElements() {
    defineCustomElement();
    defineCustomElementModalFooter();
  }

  /**
   * Show a message based on MessageConfig
   */
  public override showMessage<T>(config: MessageConfig<T>): Promise<
    TypedEvent<{
      actionId: string;
      payload: T;
    }>
  > {
    this.defineModalCustomElements();

    return super.showMessage(config);
  }

  /**
   * Show an info message
   */
  public override info(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    this.defineModalCustomElements();

    return super.info(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Show a warning message
   */
  public override warning(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    this.defineModalCustomElements();

    return super.warning(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Show an error message
   */
  public override error(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    this.defineModalCustomElements();

    return super.error(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Show a success message
   */
  public override success(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    this.defineModalCustomElements();

    return super.success(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  /**
   * Show a question message
   */
  public override question(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    this.defineModalCustomElements();

    return super.question(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }
}
