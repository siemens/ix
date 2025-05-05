/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
    <ng-template #customToastMessage let-toast>
      <div>This is message from template</div>
    </ng-template>

    <ng-template #customToastAction let-toast>
      <div>
        <ix-button ghost icon="undo" (click)="toast.close('Action')">Undo</ix-button>
      </div>
    </ng-template>
  `,
})
export default class ToastCustom {
  @ViewChild('customToastMessage', { read: TemplateRef })
  customToastRef!: TemplateRef<any>;

  @ViewChild('customToastAction', { read: TemplateRef })
  customToastActionRef!: TemplateRef<any>;

  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      title: 'Toast headline',
      message: 'Toast message text',
      //message: this.customToastRef,
      action: this.customToastActionRef,
      type: 'success',
      autoClose: true,
    });
  }
}
