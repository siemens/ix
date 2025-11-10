/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, inject } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

import { ModalService } from '@siemens/ix-angular/standalone';
import ModalByInstanceExample from './modal-by-instance-content';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  providers: [ModalService],
  templateUrl: './modal-close.html',
})
export default class ModalClose {
  private modalService = inject(ModalService);

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
