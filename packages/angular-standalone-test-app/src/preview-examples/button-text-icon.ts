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
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button icon="star"> Button </ix-button>
    <ix-button variant="secondary" icon="star"> Button </ix-button>
    <ix-button outline icon="star"> Button </ix-button>
    <ix-button ghost icon="star"> Button </ix-button>
  `,
  styleUrls: ['./button-text-icon.css'],
})
export default class Buttons {}
