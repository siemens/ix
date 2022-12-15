/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IxActiveModal, ModalService } from '@siemens/ix-angular';

@Component({
  template: ` <div class="modal-header">
      Message headline
      <ix-icon-button
        data-button-close
        ghost
        icon="close"
        class="dismiss-modal"
        (click)="modal.dismiss('dismiss')"
      ></ix-icon-button>
    </div>
    <div class="modal-body">Message text lorem ipsum: {{ modal.data }}</div>
    <div class="modal-footer">
      <ix-button
        outline
        class="dismiss-modal"
        (click)="modal.dismiss('dismiss')"
      >
        Cancel
      </ix-button>
      <ix-button class="close-modal" (click)="modal.close('okay')">
        OK
      </ix-button>
    </div>`,
})
export class ModalExampleComponent {
  constructor(readonly modal: IxActiveModal) {}
}

@Component({
  selector: 'app-example',
  template: ` <ix-button (click)="openModal()">Show modal</ix-button> `,
})
export default class ModalByComponent {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    await this.modalService.open({
      content: ModalExampleComponent,
      title: '',
      data: 'Some data',
    });
  }
}
