/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxCodeBlock } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCodeBlock],
  templateUrl: './code-block.html',
})
export default class CodeBlock {
  code = [
    'const limit = 6.5;',
    'export const isCritical = (value: number) => value > limit;',
  ].join('\n');
}
