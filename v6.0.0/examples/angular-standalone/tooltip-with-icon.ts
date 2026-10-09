/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton, IxIcon, IxTooltip } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton, IxTooltip, IxIcon],
  templateUrl: './tooltip-with-icon.html',
  styleUrls: ['./tooltip.css'],
})
export default class Tooltip {}
