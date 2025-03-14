/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Inject } from '@angular/core';
import {
  IxModalHeader,
  IxModalContent,
  IxModalFooter,
  IxButton,
  IxActiveModal,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example-content',
  imports: [IxModalHeader, IxModalContent, IxModalFooter, IxButton],
  template: `
    <ix-modal-header> Message headline </ix-modal-header>
    <ix-modal-content>
      Message text lorem ipsum: {{ activeModal.data }}
    </ix-modal-content>
    <ix-modal-footer>
      <ix-button
        outline
        class="dismiss-modal"
        (click)="activeModal.dismiss('dismiss')"
      >
        Cancel
      </ix-button>
      <ix-button
        autofocus
        class="close-modal"
        (click)="activeModal.close('okay')"
      >
        OK
      </ix-button>
    </ix-modal-footer>
  `,
})
export default class ModalByInstanceContent {
  constructor(@Inject(IxActiveModal) readonly activeModal: IxActiveModal) {}

  close() {
    this.activeModal.close('My close response');
  }
}
