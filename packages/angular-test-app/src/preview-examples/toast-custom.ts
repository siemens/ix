/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  selector: 'app-toast',
  template: `
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </div>
    <ix-button (click)="showToastMessage()">Show Toast</ix-button>
    <ng-template #customToast let-toast>
      <div>
        <div>Custom toast message</div>
        <ix-button (click)="toast.close('Action')">Action</ix-button>
      </div>
    </ng-template>
  `,
})
export class ToastCustom {
  @ViewChild('customToast', { read: TemplateRef })
  customToastRef!: TemplateRef<any>;

  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      message: this.customToastRef,
    });
  }
}
