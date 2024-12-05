/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';
import ModalByInstanceExample from './modal-by-instance-content';

@Component({
  selector: 'app-example',
  template: '<ix-button (click)="openModal()">Show modal</ix-button>',
})
export default class ModalByInstance {
  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    await this.modalService.open({
      content: ModalByInstanceExample,
      data: 'Some data',
    });
  }
}
