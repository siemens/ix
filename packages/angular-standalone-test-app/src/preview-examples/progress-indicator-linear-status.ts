/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator-linear-status.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
  standalone: true,
})
export default class ProgressIndicatorLinearStatus {}
