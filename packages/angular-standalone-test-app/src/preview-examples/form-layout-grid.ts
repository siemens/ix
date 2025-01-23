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
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxFieldLabel,
  IxSelect,
  IxInput,
  IxButton,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxLayoutGrid,
    IxRow,
    IxCol,
    IxFieldLabel,
    IxSelect,
    IxInput,
    IxButton,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
  ],
  templateUrl: './form-layout-grid.html',
  styleUrls: ['./form-layout-grid.css'],
})
export default class FormLayoutGrid {}
