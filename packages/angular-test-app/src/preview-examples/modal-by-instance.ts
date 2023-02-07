/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';
import ModalByInstanceExample from './modal-by-instance-example';

@Component({
  selector: 'app-example',
  templateUrl: './modal-by-instance.html',
})
export default class ModalByInstance {
  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    const instance = await this.modalService.open({
      content: ModalByInstanceExample,
      title: '',
      data: 'Some data',
    });
  }
}
