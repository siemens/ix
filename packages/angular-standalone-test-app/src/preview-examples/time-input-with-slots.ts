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
  IxTimeInput,
  IxIcon,
  IxTypography,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxTimeInput, IxIcon, IxTypography, IxTimeValueAccessorDirective],
  templateUrl: './time-input-with-slots.html',
})
export default class TimeInputWithSlots {}
