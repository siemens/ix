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
  styles: [
    `
      @import 'example-styles/dist/application.css';
    `,
  ],
  templateUrl: './application.html',
})
export default class ApplicationExample {}
