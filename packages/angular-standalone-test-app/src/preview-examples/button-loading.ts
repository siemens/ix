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
  template: './button-loading.html',
  styleUrls: ['./button-loading.css'],
})
export default class ButtonLoading {
  loading = false;
  loading2 = false;
  loading3 = false;

  toggle() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  toggle2() {
    this.loading2 = true;
    setTimeout(() => {
      this.loading2 = false;
    }, 2500);
  }

  toggle3() {
    this.loading3 = true;
    setTimeout(() => {
      this.loading3 = false;
    }, 2500);
  }
}
