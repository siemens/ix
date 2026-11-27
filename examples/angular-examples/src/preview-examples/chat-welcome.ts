/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './chat-welcome.html',
})
export default class ChatWelcome {
  suggestions = [
    'Summarize the open alarms',
    'Which assets need maintenance first?',
    'Draft a status update for the plant manager',
  ];

  messages: string[] = [];
}
