/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';

@Component({
  selector: 'app-modal',
  template: `
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </div>
    <ix-button (click)="test()">Show Modal</ix-button>

    <ng-template #customModal let-modal>
      <div>
        <div class="modal-header">
          Message headline
          <ix-icon-button
            ghost
            icon="close"
            class="dismiss-modal"
            (click)="modal.dismiss('dismiss')"
          ></ix-icon-button>
        </div>
        <div class="modal-body">Message text lorem ipsum</div>
        <div class="modal-footer">
          <ix-button
            outline
            class="dismiss-modal"
            (click)="modal.dismiss('dismiss')"
          >
            Cancel
          </ix-button>
          <ix-button class="close-modal" (click)="modal.close('okay')"
            >OK</ix-button
          >
        </div>
      </div>
    </ng-template>
  `,
})
export class Modal {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async test() {
    const instance = await this.modalService.open({
      content: this.customModalRef,
      title: '',
    });

    instance.onClose.on((a) => {
      console.log(a);
    });
  }
}
