/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, inject } from '@angular/core';
import { IxButton, ModalService } from '@siemens/ix-angular/standalone';

import ModalByInstanceExample from './modal-by-instance-content';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: '<ix-button (click)="openModal()">Show modal</ix-button>',
})
export default class ModalByInstance {
  private readonly modalService = inject(ModalService);

  async openModal() {
    await this.modalService.open({
      content: ModalByInstanceExample,
      data: 'Some data',
    });
  }
}
