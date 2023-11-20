/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppSwitchConfiguration } from '../application-layout/context';
import { showModal } from '../modal';

export async function showAppSwitch(config: AppSwitchConfiguration) {
  const modal = document.createElement('ix-application-switch-modal');
  modal.config = config;
  showModal({
    content: modal,
    size: '840',
    closeOnBackdropClick: true,
  });
}
