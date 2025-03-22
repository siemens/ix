import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';
import { NgForm } from '@angular/forms';  // Import NgForm for form handling

@Component({
    selector: 'app-example',
    templateUrl: 'modal-form-ix-button-submit.html',
})
export default class ModalFormIxButtonSubmit {
    @ViewChild('customModal', { read: TemplateRef })
    customModalRef!: TemplateRef<any>;

    constructor(private readonly modalService: ModalService) { }

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

    // Form submission logic
    onSubmit(form: NgForm): void {
        if (form.valid) {
            console.log(form)
            console.log(form.value);
            console.log('Form submitted successfully');
            
        } else {
            form.control.markAllAsTouched();
        }
    }
}
