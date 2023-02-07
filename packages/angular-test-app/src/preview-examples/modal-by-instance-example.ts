/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxActiveModal } from '@siemens/ix-angular';

@Component({
  templateUrl: './modal-by-instance-example.html',
})
export default class ModalByInstanceExample {
  constructor(readonly activeModal: IxActiveModal) {}

  close() {
    this.activeModal.close('My close response');
  }
}
