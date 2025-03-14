/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-example',
  template: `
    <textarea placeholder="Enter text here" disabled>
      Some example text
    </textarea
    >
  `,
})
export default class TextareaLegacyDisabled {}
