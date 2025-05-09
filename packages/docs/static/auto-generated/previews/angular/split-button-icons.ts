/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-split-button icon="document" splitIcon="chevron-down-small">
      <ix-dropdown-item icon="cut"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb"></ix-dropdown-item>
    </ix-split-button>
  `,
})
export default class SplitButtonIcons {}
