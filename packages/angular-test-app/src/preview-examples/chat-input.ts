/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconImage,
  iconMicrophone,
  iconPdfDocument,
  iconPlus,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './chat-input.html',
})
export default class ChatInput {
  constructor() {
    addIcons({
      iconImage,
      iconMicrophone,
      iconPdfDocument,
      iconPlus,
    });
  }
}
