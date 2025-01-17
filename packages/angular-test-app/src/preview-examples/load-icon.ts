/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Input } from '@angular/core';
import { loadIcons } from '@siemens/ix-icons';
import { defineCustomElements as defineCustomIconElements } from '@siemens/ix-icons/loader';

@Component({
  selector: 'app-example',
  templateUrl: './load-icon.html',
  styleUrls: ['./load-icon.css'],
})
export default class LoadIcon {
  @Input() showIcon = false;

  constructor() {
    (async () => {
      defineCustomIconElements();
    })();

    const icons = ['info', 'star', 'star-filled'];
    loadIcons(icons);

    setTimeout(() => {
      this.showIcon = true;
    }, 1000);
  }
}
