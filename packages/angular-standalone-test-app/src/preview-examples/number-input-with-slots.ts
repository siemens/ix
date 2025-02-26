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
  IxNumberInput,
  IxIcon,
  IxTypography,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxNumberInput, IxIcon, IxTypography, IxTextValueAccessorDirective],
  templateUrl: './number-input-with-slots.html',
})
export default class NumberInputWithSlots {}
