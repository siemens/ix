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
  template: `
    <ix-button
      (click)="toggle()"
      [loading]="loading"
      class="m-1"
      outline
      variant="primary"
    >
      Button
    </ix-button>

    <ix-button
      (click)="toggle2()"
      [loading]="loading2"
      icon="star"
      class="m-1"
      outline
      variant="primary"
    >
      Button
    </ix-button>

    <ix-icon-button
      (click)="toggle3()"
      [loading]="loading3"
      icon="star"
      class="m-1"
      outline
      variant="primary"
    >
    </ix-icon-button>

    <ix-button loading class="m-1" outline variant="primary">
      Button
    </ix-button>

    <ix-icon-button
      loading
      icon="star"
      class="m-1"
      outline
      variant="primary"
    ></ix-icon-button>
  `,
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
