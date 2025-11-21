import {
  MessageConfig,
  TypedEvent,
  showMessage as _showMessage,
} from '@siemens/ix';
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';

// call defineCustomElement once at module level
defineCustomElement();

export function showMessage<T>(config: MessageConfig<T>): Promise<
  TypedEvent<{
    actionId: string;
    payload: T;
  }>
> {
  return _showMessage(config);
}

const createMessageVariant = (
  variant: 'info' | 'warning' | 'error' | 'success' | 'question'
) => {
  return (
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: unknown,
    payloadCancel?: unknown
  ) => {
    return _showMessage[variant](
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  };
};

showMessage.info = createMessageVariant('info');
showMessage.warning = createMessageVariant('warning');
showMessage.error = createMessageVariant('error');
showMessage.success = createMessageVariant('success');
showMessage.question = createMessageVariant('question');
