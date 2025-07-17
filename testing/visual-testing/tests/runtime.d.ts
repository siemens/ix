/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { addIcons, showMessage } from '@siemens/ix-icons';

declare global {
  interface Window {
    addIcons: typeof addIcons;
    showMessage: typeof showMessage;
  }
}

export {};
