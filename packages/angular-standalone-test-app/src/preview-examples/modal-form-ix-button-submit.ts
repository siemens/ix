/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  IxButton,
  IxModal,
  IxModalHeader,
  IxModalContent,
  IxModalFooter,
  IxInput,
  ModalService
} from '@siemens/ix-angular/standalone';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-modal-form-ix-button-submit',
  templateUrl: './modal-form-ix-button-submit.html',
  imports: [
    FormsModule,
    IxButton,
    IxModal,
    IxModalHeader,
    IxModalContent,
    IxModalFooter,
    IxInput,
  ],
})
export default class ModalFormIxButtonSubmit {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    await this.modalService.open({
      content: this.customModalRef,
      data: 'Some data',
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      return;
    }
    form.control.markAllAsTouched();
  }
}
