/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  template: `
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </div>
    <ix-button (click)="showToastMessage()">Show Toast</ix-button>
  `,
})
export default class Toast {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      message: 'Hello World!',
    });
  }
}
