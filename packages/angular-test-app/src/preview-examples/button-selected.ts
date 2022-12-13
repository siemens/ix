/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-button-selected',
  template: `
    <ix-button class="m-1" variant="Secondary" ghost>Not selected</ix-button>
    <ix-button class="m-1" variant="Secondary" ghost selected
      >Selected</ix-button
    >
  `,
})
export class ButtonSelected {}
