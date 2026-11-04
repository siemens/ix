/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxDateDropdown } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateDropdown],
  templateUrl: './date-dropdown-require-confirmation.html',
})
export default class DateDropdownRequireConfirmation {}
