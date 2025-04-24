/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  IxToggle,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxToggle, IxBooleanValueAccessorDirective, FormsModule],
  template: ` <ix-toggle [(ngModel)]="checked"></ix-toggle>`,
})
export default class Toggle {
  checked = false;
}
