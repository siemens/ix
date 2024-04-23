/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IxModalSize, ModalService } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  templateUrl: './modal-sizes.html',
  styles: [
    `
      .modal-sizes-example {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .modal-sizes-example > * {
        width: auto;
        margin: 0.25rem;
      }
    `,
  ],
})
export default class ModalSizes {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async open(size: IxModalSize) {
    await this.modalService.open({
      content: this.customModalRef,
      data: size,
      size: size,
    });
  }
}
