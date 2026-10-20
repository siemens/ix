/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { IxButton, ModalService } from '@siemens/ix-angular/standalone';

import { IxModalSize } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  styleUrls: ['./modal-sizes.css'],
  templateUrl: './modal-sizes.html',
})
export default class ModalSizes {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  private readonly modalService = inject(ModalService);

  async open(size: IxModalSize) {
    await this.modalService.open({
      content: this.customModalRef,
      data: size,
      size: size,
    });
  }
}
