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
    <ix-button icon="star">Button</ix-button>
    <ix-button icon="star" icon-right="bulb">Button</ix-button>
    <ix-button icon-right="bulb">Button</ix-button>
    <ix-button variant="secondary" icon="star">Button</ix-button>
    <ix-button outline icon="star">Button</ix-button>
    <ix-button ghost icon="star">Button</ix-button>
  `,
  styleUrls: ['./button-text-icon.css'],
})
export default class Buttons {}
