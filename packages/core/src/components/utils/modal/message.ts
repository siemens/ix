/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getCoreDelegate } from '../delegate';
import { TypedEvent } from '../typed-event';

function setA11yAttributes(element: HTMLElement, config: MessageContent) {
  const ariaDescribedby = config.ariaDescribedby;
  const ariaLabelledby = config.ariaLabelledby;

  delete config['ariaDescribedby'];
  delete config['ariaLabelledby'];

  if (ariaDescribedby) {
    element.setAttribute('aria-describedby', ariaDescribedby);
  }

  if (ariaLabelledby) {
    element.setAttribute('aria-labelledby', ariaLabelledby);
  }
}

function createConfirmButtons(
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
): MessageAction[] {
  let actions: MessageAction[] = [];
  if (textCancel !== undefined) {
    actions = [
      ...actions,
      {
        id: 'cancel',
        text: textCancel,
        type: 'cancel',
        payload: payloadCancel,
      },
    ];
  }
  return [
    ...actions,
    {
      id: 'okay',
      text: textOkay,
      type: 'okay',
      payload: payloadOkay,
    },
  ];
}

export type MessageAction = {
  id: string;
  type: 'button-primary' | 'button-secondary' | 'okay' | 'cancel';
  text: string;
  payload?: any;
};

export type MessageContent = {
  icon: string;
  iconColor?: string;
  messageTitle: string;
  message: string;
  actions: MessageAction[];
  ariaLabelledby?: string;
  ariaDescribedby?: string;
};

export async function showMessage<T>(config: MessageContent) {
  const onMessageAction = new TypedEvent<{
    actionId: string;
    payload: T;
  }>();
  const dialog = document.createElement('ix-modal');
  const header = document.createElement('ix-modal-header');
  const content = document.createElement('ix-modal-content');
  const footer = document.createElement('ix-modal-footer');

  setA11yAttributes(dialog, config);

  Object.assign(header, config);
  Object.assign(content, config);
  Object.assign(footer, config);

  header.innerText = config.messageTitle;
  content.innerText = config.message;

  config.actions.forEach(({ id, text, type, payload }) => {
    const button = document.createElement('ix-button');
    button.innerText = text;
    footer.appendChild(button);

    if (type === 'okay') {
      button.variant = 'primary';
      button.addEventListener('click', () =>
        dialog.closeModal({
          actionId: id,
          payload,
        })
      );
      return;
    }
    if (type === 'cancel') {
      button.variant = 'primary';
      button.outline = true;
      button.addEventListener('click', () =>
        dialog.dismissModal({
          actionId: id,
          payload,
        })
      );
      return;
    }
  });

  dialog.appendChild(header);
  dialog.appendChild(content);
  dialog.appendChild(footer);

  const delegate = getCoreDelegate();
  const dialogRef = await delegate.attachView<HTMLIxModalElement>(dialog);

  dialogRef.addEventListener(
    'dialogClose',
    (
      event: CustomEvent<{
        actionId: string;
        payload: T;
      }>
    ) => {
      onMessageAction.emit(event.detail);
      dialogRef.remove();
    }
  );

  dialogRef.addEventListener(
    'dialogDismiss',
    (
      event: CustomEvent<{
        actionId: string;
        payload: T;
      }>
    ) => {
      onMessageAction.emit(event.detail);
      dialogRef.remove();
    }
  );

  dialogRef.showModal();
  return onMessageAction;
}

showMessage.info = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: 'info',
    actions: createConfirmButtons(
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    ),
  });
};

showMessage.warning = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: 'warning',
    iconColor: 'color-warning',
    actions: createConfirmButtons(
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    ),
  });
};

showMessage.error = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: 'error',
    iconColor: 'color-alarm',
    actions: createConfirmButtons(
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    ),
  });
};

showMessage.success = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: 'success',
    iconColor: 'color-success',
    actions: createConfirmButtons(
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    ),
  });
};

showMessage.question = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: 'question',
    actions: createConfirmButtons(
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    ),
  });
};
