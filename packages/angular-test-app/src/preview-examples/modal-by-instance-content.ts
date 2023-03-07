/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxActiveModal } from '@siemens/ix-angular';

@Component({
  template: `<div class="modal-header">
      Message headline
      <ix-icon-button
        data-button-close
        ghost
        icon="close"
        class="dismiss-modal"
        (click)="activeModal.dismiss('dismiss')"
      ></ix-icon-button>
    </div>
    <div class="modal-body">
      Message text lorem ipsum: {{ activeModal.data }}
    </div>
    <div class="modal-footer">
      <ix-button
        outline
        class="dismiss-modal"
        (click)="activeModal.dismiss('dismiss')"
      >
        Cancel
      </ix-button>
      <ix-button class="close-modal" (click)="activeModal.close('okay')">
        OK
      </ix-button>
    </div>`,
})
export default class ModalByInstanceContent {
  constructor(readonly activeModal: IxActiveModal) {}

  close() {
    this.activeModal.close('My close response');
  }
}
