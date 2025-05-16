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

import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button (click)="showToastMessage()" style="margin-right: 0.5rem">
      Trigger toast with custom message
    </ix-button>
    
    <ix-button (click)="showToastMessageAction()">
      Trigger toast with action button
    </ix-button>

    <ng-template #customToastMessage let-toast>
      <div>This message is from template</div>
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
      message: this.customToastRef,
      type: 'success',
    });
  }

  async showToastMessageAction() {
    this.toastService.show({
      title: 'Toast headline',
      message: this.customToastRef,
      action: this.customToastActionRef,
    });
  }
}
