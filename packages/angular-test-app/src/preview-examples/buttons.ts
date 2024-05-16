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
    <ix-button style="margin: 0.25rem;" variant="primary">Button</ix-button>
    <ix-button style="margin: 0.25rem;" variant="primary" disabled>
      Button
    </ix-button>
  `,
})
export default class Buttons {}
