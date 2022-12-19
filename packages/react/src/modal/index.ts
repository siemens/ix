/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { modal, ModalConfig as IxModalConfig } from '@siemens/ix';
import ReactDOMClient from 'react-dom/client';
export * from './modal';

export type ModalConfig = {
  content: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function showModal<TReason = any>(
  config: Omit<IxModalConfig, 'content'> & ModalConfig
) {
  if (typeof config.content === 'string') {
    return modal<TReason>(config as IxModalConfig);
  }

  const container = document.createElement('DIV');
  const root = ReactDOMClient.createRoot(container);
  root.render(config.content);

  const modalInstance = await modal<TReason>({
    ...config,
    content: container,
  });

  modalInstance.onClose.once(() => {
    root.unmount();
  });

  modalInstance.onDismiss.once(() => {
    root.unmount();
  });

  return modalInstance;
}
