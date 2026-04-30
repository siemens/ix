/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IxChip } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, IxChip],
  templateUrl: './chip-examples.component.html',
  styleUrls: ['./chip.css'],
})
export default class ChipExamples {
  readonly variants = [
    'primary',
    'alarm',
    'critical',
    'warning',
    'info',
    'neutral',
    'success',
    'custom',
  ] as const;

  label(v: string): string {
    if (v === 'custom') {
      return 'Custom';
    }
    return v.charAt(0).toUpperCase() + v.slice(1);
  }
}
