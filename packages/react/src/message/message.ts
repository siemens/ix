import {
  MessageConfig,
  TypedEvent,
  showMessage as _showMessage,
} from '@siemens/ix';
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineCustomElementModalFooter } from '@siemens/ix/components/ix-modal-footer.js';

function defineCustomElements() {
  defineCustomElement();
  defineCustomElementModalFooter();
}

export function showMessage<T>(config: MessageConfig<T>): Promise<
  TypedEvent<{
    actionId: string;
    payload: T;
  }>
> {
  defineCustomElements();

  return _showMessage(config);
}

showMessage.info = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  defineCustomElements();

  return _showMessage.info(
    title,
    message,
    textOkay,
    textCancel,
    payloadOkay,
    payloadCancel
  );
};

showMessage.warning = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  defineCustomElements();

  return _showMessage.warning(
    title,
    message,
    textOkay,
    textCancel,
    payloadOkay,
    payloadCancel
  );
};

showMessage.error = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  defineCustomElements();

  return _showMessage.error(
    title,
    message,
    textOkay,
    textCancel,
    payloadOkay,
    payloadCancel
  );
};

showMessage.success = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  defineCustomElements();

  return _showMessage.success(
    title,
    message,
    textOkay,
    textCancel,
    payloadOkay,
    payloadCancel
  );
};

showMessage.question = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  defineCustomElements();

  return _showMessage.question(
    title,
    message,
    textOkay,
    textCancel,
    payloadOkay,
    payloadCancel
  );
};
