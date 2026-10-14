/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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
  standalone: false,
  selector: 'app-example',
  templateUrl: './modal-close.html',
})
export default class ModalClose {
  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    const modalInstance = await this.modalService.open({
      content: ModalByInstanceExample,
      data: 'Some data',
    });
    setTimeout(() => {
      this.modalService.close(modalInstance, 'closed after 5 seconds');
    }, 5000);
  }
}
