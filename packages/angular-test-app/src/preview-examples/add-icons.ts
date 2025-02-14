/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './add-icons.html',
  styleUrls: ['./add-icons.css'],
})
export default class AddIcons {
  readonly icons = { iconStar, iconStarFilled };

  constructor() {
    addIcons({ iconStar, iconStarFilled });
  }
}
