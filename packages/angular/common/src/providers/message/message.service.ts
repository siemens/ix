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
   * Displays an info message modal with an info icon
   */
  public info(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return showMessage.info(
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
