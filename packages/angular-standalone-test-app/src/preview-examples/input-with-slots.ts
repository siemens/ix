/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxInput,
  IxIcon,
  IxTypography,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxInput, IxIcon, IxTypography, IxTextValueAccessorDirective],
  templateUrl: './input-with-slots.html',
})
export default class InputWithSlots {}
