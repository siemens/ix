import { Component, Self, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  IxButton,
  IxDropdown,
  IxDropdownTriggerDirective,
  IxModal,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  IxDropdownHeader,
  ModalService,
  ToastService,
  IxDropdownItem,
  IxDivider,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IxDropdownTriggerDirective,
    RouterOutlet,
    IxButton,
    IxModal,
    IxModalHeader,
    IxModalContent,
    IxModalFooter,
    IxDropdown,
    IxDropdownItem,
    IxDropdownHeader,
    IxDivider,
  ],
  providers: [ModalService, ToastService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  constructor(
    private readonly modalService: ModalService,
    private readonly toastService: ToastService
  ) {}

  async openModal() {
    const instance = await this.modalService.open({
      content: this.customModalRef,
      data: 'Some data',
    });

    instance.onClose.on((a: any) => {
      console.log(a);
    });

    instance.htmlElement.addEventListener(
      'keydown',
      (keyboardEvent: KeyboardEvent) => {
        console.log(keyboardEvent.key);
      }
    );
    this.toastService.show({
      message: 'test',
      icon: 'info',
    });
  }
}
