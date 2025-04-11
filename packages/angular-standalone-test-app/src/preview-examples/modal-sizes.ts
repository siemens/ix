/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

import { IxModalSize, ModalService } from '@siemens/ix-angular';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  styleUrls: ['./modal-sizes.css'],
  templateUrl: './modal-sizes.html',
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
