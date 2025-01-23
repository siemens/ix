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
  IxCard,
  IxCardContent,
  IxIcon,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxCard, IxCardContent, IxIcon, IxTypography],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export default class Card {
  onClick(event: Event) {
    console.log(event);
  }
}
