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
  IxButton,
  IxDropdown,
  IxDropdownQuickActions,
  IxIconButton,
  IxDivider,
  IxDropdownItem,
  IxDropdownTriggerDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxButton,
    IxDropdown,
    IxDropdownQuickActions,
    IxIconButton,
    IxDivider,
    IxDropdownItem,
    IxDropdownTriggerDirective,
  ],
  templateUrl: './dropdown-quick-actions.html',
})
export default class DropdownQuickActions {}
