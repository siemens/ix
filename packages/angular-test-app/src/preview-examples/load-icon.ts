/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Input, OnInit } from '@angular/core';
import { loadIcons } from '@siemens/ix-icons';

@Component({
  selector: 'app-example',
  templateUrl: './load-icon.html',
  styleUrls: ['./load-icon.css'],
})
export default class LoadIcon implements OnInit {
  private readonly icons = ['info', 'star', 'star-filled'];

  @Input() showIcon = false;

  ngOnInit() {
    loadIcons(this.icons);

    setTimeout(() => {
      this.showIcon = true;
    }, 1000);
  }
}
