import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  IxButton,
  IxInput,
  IxModal,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  ModalService,
} from '@siemens/ix-angular/standalone';

interface PasswordRule {
  id: string;
  label: string;
  isValid: boolean;
}

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, IxButton, IxInput, IxModal, IxModalHeader, IxModalContent, IxModalFooter],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css',
})
export class ChangePassword implements AfterViewInit {
  @ViewChild('changePasswordModal', { read: TemplateRef })
  changePasswordModalRef!: TemplateRef<any>;

  currentPassword = 'P@ssword1';
  newPassword = 'password';
  confirmPassword = '';

  rules: PasswordRule[] = [];

  constructor(private readonly modalService: ModalService) {
    this.updateRules();
  }

  ngAfterViewInit(): void {
    this.openModal();
  }

  get passwordDoesNotMatch(): boolean {
    return this.confirmPassword.length > 0 && this.confirmPassword !== this.newPassword;
  }

  get allPasswordRequirementsFulfilled(): boolean {
    return this.rules.every((rule) => rule.isValid);
  }

  get confirmPasswordMatches(): boolean {
    return this.confirmPassword.length > 0 && this.confirmPassword === this.newPassword;
  }

  get canSave(): boolean {
    return this.allPasswordRequirementsFulfilled && this.confirmPasswordMatches;
  }

  async openModal(): Promise<void> {
    await this.modalService.open({
      size: '480',
      content: this.changePasswordModalRef,
    });
  }

  onCurrentPasswordChange(event: CustomEvent<string>): void {
    this.currentPassword = event.detail;
  }

  onNewPasswordChange(event: CustomEvent<string>): void {
    this.newPassword = event.detail;
    this.updateRules();
  }

  onConfirmPasswordChange(event: CustomEvent<string>): void {
    this.confirmPassword = event.detail;
  }

  private updateRules(): void {
    const hasMinLength = this.newPassword.length >= 8;
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(this.newPassword);
    const hasUppercaseCharacter = /[A-Z]/.test(this.newPassword);
    const hasNumber = /\d/.test(this.newPassword);

    this.rules = [
      {
        id: 'min-length',
        label: 'Minimum length 8 characters',
        isValid: hasMinLength,
      },
      {
        id: 'special-character',
        label: 'Minimum 1 special character',
        isValid: hasSpecialCharacter,
      },
      {
        id: 'uppercase',
        label: 'Minimum 1 upper case character',
        isValid: hasUppercaseCharacter,
      },
      {
        id: 'number',
        label: 'Minimum 1 number',
        isValid: hasNumber,
      },
    ];
  }
}
