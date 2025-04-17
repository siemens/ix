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
  IxRadioGroup,
  IxRadio,
  IxRadioValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxRadioGroup, IxRadio, IxRadioValueAccessorDirective],
  templateUrl: './radio-group.html',
})
export default class RadioGroup {}
