// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { modal, ModalConfig as IxModalConfig } from '@siemens/ix';
import ReactDOMClient from 'react-dom/client';
export * from './modal';

export type ModalConfig = {
  content: React.ReactNode;
};

export async function showModal(
  config: Omit<IxModalConfig, 'content'> & ModalConfig
) {
  if (typeof config.content === 'string') {
    return modal(config as IxModalConfig);
  }

  const container = document.createElement('DIV');
  const root = ReactDOMClient.createRoot(container);
  root.render(config.content);

  const modalInstance = await modal({
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
