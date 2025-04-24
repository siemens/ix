/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  template: `
    <ix-button (click)="openModal()">Show modal</ix-button>

    <ng-template #customModal let-modal>
      <ix-modal>
        <ix-modal-header> Message headline </ix-modal-header>
        <ix-modal-content
          >Message text lorem ipsum: {{ modal.data }}</ix-modal-content
        >
        <ix-modal-footer>
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
        </ix-modal-footer>
      </ix-modal>
    </ng-template>
  `,
})
export default class Modal {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    const instance = await this.modalService.open({
      content: this.customModalRef,
      data: 'Some data',
    });

    instance.onClose.on((a) => {
      console.log(a);
    });

    instance.htmlElement.addEventListener(
      'keydown',
      (keyboardEvent: KeyboardEvent) => {
        console.log(keyboardEvent.key);
      }
    );
  }
}
