/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button variant="subtle-primary"> Button </ix-button>
    <ix-button disabled variant="subtle-primary"> Button </ix-button>
  `,
  styleUrls: ['./button-grey.css'],
})
export default class Buttons {}
