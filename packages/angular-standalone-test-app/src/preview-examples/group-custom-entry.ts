/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxGroup, IxGroupItem, IxButton } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxGroup, IxGroupItem, IxButton],
  template: `
    <ix-group header="Header text" sub-header="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item><ix-button>Test</ix-button></ix-group-item>
    </ix-group>
  `,
})
export default class GroupCustomEntry {}
