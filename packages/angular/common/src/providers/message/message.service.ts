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

  question(
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
