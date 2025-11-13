import { Injectable } from '@angular/core';
import { MessageConfig, TypedEvent } from '@siemens/ix';
import { MessageService as BaseMessageService } from '@siemens/ix-angular/common';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends BaseMessageService {
  /**
   * Show a message based on MessageConfig
   */
  public override showMessage<T>(config: MessageConfig<T>): Promise<
    TypedEvent<{
      actionId: string;
      payload: T;
    }>
  > {
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
