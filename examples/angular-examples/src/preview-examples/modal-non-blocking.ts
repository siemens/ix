/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxActiveModal, ModalService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-modal-non-blocking-content',
  template: `
    <ix-modal-header (closeClick)="activeModal.dismiss('dismiss payload')">
      Message headline
    </ix-modal-header>
    <ix-modal-content>Message text lorem ipsum</ix-modal-content>
    <ix-modal-footer>
      <ix-button
        variant="subtle-primary"
        (click)="activeModal.dismiss('dismiss payload')"
      >
        Cancel
      </ix-button>
      <ix-button autofocus (click)="activeModal.close('close payload!')">
        OK
      </ix-button>
    </ix-modal-footer>
  `,
})
export class ModalNonBlockingContent {
  constructor(readonly activeModal: IxActiveModal) {}
}

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div>
      <div style="padding: 1rem">
        <ix-typography format="body" text-color="std">
          Content behind the dialog
        </ix-typography>
        <ix-button id="behind">Behind control</ix-button>
      </div>
      <ix-button (click)="openModal()">Show non-blocking modal</ix-button>
    </div>
  `,
})
export default class ModalNonBlocking {
  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    await this.modalService.open({
      content: ModalNonBlockingContent,
      isNonBlocking: true,
    });
  }
}
