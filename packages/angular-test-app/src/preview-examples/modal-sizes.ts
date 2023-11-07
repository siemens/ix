/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  templateUrl: './modal-sizes.html',
  styleUrls: ['../styles/modal-sizes.css'],
})
export default class ModalSizes {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async open(size: any) {
    await this.modalService.open({
      content: this.customModalRef,
      data: size,
      size: size,
    });
  }
}
