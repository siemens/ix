/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { addIconToCache } from '@siemens/ix-icons';
import { iconStar } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './add-icon-to-cache.html',
  styleUrls: ['./add-icon-to-cache.css'],
})
export default class AddIconToCache implements OnInit {

  ngOnInit() {
    addIconToCache('test', iconStar);
    addIconToCache('testIcon', iconStar);
  }
}
