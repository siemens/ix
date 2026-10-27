/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconAlarm,
  iconError,
  iconInfo,
  iconQuestion,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';
import {
  createDependencyFunction,
  type CustomElementDependency,
} from '../dependency-function';
import { getCoreDelegate } from '../delegate';
import { TypedEvent } from '../typed-event';
import { ModalConfig } from './modal';
import {
  applyModalA11yAttributes,
  decodeModalConfig,
  decodeModalHeaderConfig,
} from './modal-config';

export type MessageConfig<T> = Omit<ModalConfig<T, unknown>, 'content'> &
  MessageContent;

function createConfirmButtons(
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) {
  let actions: MessageAction[] = [];

  if (textCancel !== undefined) {
    actions = [
      ...actions,
      {
        id: 'cancel',
        text: textCancel,
        type: 'cancel',
        payload: payloadCancel,
      } as MessageAction,
    ];
  }
  return [
    ...actions,
    {
      id: 'okay',
      text: textOkay,
      type: 'okay',
      payload: payloadOkay,
    } as MessageAction,
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

export type ShowMessageDependencies = readonly [
  CustomElementDependency<'ix-modal'>,
  CustomElementDependency<'ix-modal-header'>,
  CustomElementDependency<'ix-modal-content'>,
  CustomElementDependency<'ix-modal-footer'>,
  CustomElementDependency<'ix-button'>,
];

type ShowMessageResult<T> = Promise<
  TypedEvent<{
    actionId: string;
    payload: T;
  }>
>;

export type ShowMessageVariant = (
  title: string,
  message: string,
  textOkay: string,
  textCancel?: string,
  payloadOkay?: any,
  payloadCancel?: any
) => ShowMessageResult<unknown>;

export type ShowMessage = (<T>(
  config: MessageConfig<T>
) => ShowMessageResult<T>) & {
  danger: ShowMessageVariant;
  warning: ShowMessageVariant;
  caution: ShowMessageVariant;
  information: ShowMessageVariant;
  critical: ShowMessageVariant;
  success: ShowMessageVariant;
  error: ShowMessageVariant;
  question: ShowMessageVariant;
};

function createVariant(
  showMessage: <T>(config: MessageConfig<T>) => ShowMessageResult<T>,
  icon: string,
  iconColor?: string
): ShowMessageVariant {
  return (
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
      icon,
      iconColor,
      actions: createConfirmButtons(
        textOkay,
        textCancel,
        payloadOkay,
        payloadCancel
      ),
    });
  };
}

/**
 * Create a message modal helper with custom element dependencies.
 */
export function createShowMessage(
  dependencies: ShowMessageDependencies
): ShowMessage {
  const showMessage = createDependencyFunction(async function <T>(
    config: MessageConfig<T>
  ): ShowMessageResult<T> {
    const onMessageAction = new TypedEvent<{
      actionId: string;
      payload: T;
    }>();
    const dialog = document.createElement('ix-modal');
    const header = document.createElement('ix-modal-header');
    const content = document.createElement('ix-modal-content');
    const footer = document.createElement('ix-modal-footer');

    applyModalA11yAttributes(dialog, config);

    Object.assign(header, decodeModalHeaderConfig(config));

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
      } else if (type === 'cancel') {
        button.variant = 'secondary';
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

    const dialogRef =
      await getCoreDelegate().attachView<HTMLIxModalElement>(dialog);

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

    applyModalA11yAttributes(dialogRef, config);
    Object.assign(dialogRef, decodeModalConfig(config));

    dialogRef.showModal();
    return onMessageAction;
  }, dependencies);

  return Object.assign(showMessage, {
    /**
     * Displays a danger message modal with an alarm icon
     */
    danger: createVariant(
      showMessage,
      iconAlarm,
      '--si-sys-color-border-danger'
    ),

    /**
     * Displays a warning message modal with a warning icon
     */
    warning: createVariant(
      showMessage,
      iconWarning,
      '--si-sys-color-border-warning'
    ),

    /**
     * Displays a caution message modal with a warning-rhomb icon
     */
    caution: createVariant(
      showMessage,
      iconWarningRhomb,
      '--si-sys-color-border-caution'
    ),

    /**
     * Displays an information message modal with an info icon
     */
    information: createVariant(
      showMessage,
      iconInfo,
      '--si-sys-color-border-information'
    ),

    /**
     * Displays a critical message modal with a warning-octagon icon
     */
    critical: createVariant(
      showMessage,
      iconWarningOctagon,
      '--si-sys-color-border-critical'
    ),

    /**
     * Displays a success message modal with a success icon
     */
    success: createVariant(
      showMessage,
      iconSuccess,
      '--si-sys-color-border-success'
    ),

    /**
     * Displays an error message modal with an error icon
     */
    error: createVariant(
      showMessage,
      iconError,
      '--si-sys-color-border-danger'
    ),

    /**
     * Displays a question message modal with a question icon
     */
    question: createVariant(
      showMessage,
      iconQuestion,
      '--si-sys-color-text-secondary'
    ),
  });
}

/**
 * Displays a message modal with configurable actions and returns an event emitter for action responses
 */
export const showMessage = createShowMessage([
  {
    tag: 'ix-modal',
    define: () => {},
  },
  {
    tag: 'ix-modal-header',
    define: () => {},
  },
  {
    tag: 'ix-modal-content',
    define: () => {},
  },
  {
    tag: 'ix-modal-footer',
    define: () => {},
  },
  { tag: 'ix-button', define: () => {} },
]);
