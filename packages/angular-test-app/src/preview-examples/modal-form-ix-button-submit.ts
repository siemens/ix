import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-form-ix-button-submit',
  templateUrl: './modal-form-ix-button-submit.html',
})
export default class ModalFormIxButtonSubmit {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    await this.modalService.open({
      content: this.customModalRef,
      data: 'Some data',
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      return;
    }
    form.control.markAllAsTouched();
  }
}
