/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IxIcon, IxInput } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconCheck, iconClose } from '@siemens/ix-icons/icons';

interface PasswordRule {
  id: string;
  label: string;
  isValid: boolean;
}

@Component({
  selector: 'app-password-criteria',
  standalone: true,
  imports: [CommonModule, IxInput, IxIcon],
  templateUrl: './password-criteria.html',
  styleUrl: './password-criteria.css',
})
export class PasswordCriteria {
  readonly icons = { iconCheck, iconClose };

  password = 'Password1';
  rules: PasswordRule[] = [];

  constructor() {
    addIcons({ iconCheck, iconClose });
    this.updateRules();
  }

  onPasswordChange(event: CustomEvent<string>): void {
    this.password = event.detail;
    this.updateRules();
  }

  private updateRules(): void {
    const hasMinLength = this.password.length >= 8;
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(this.password);
    const hasUppercaseCharacter = /[A-Z]/.test(this.password);
    const hasNumber = /\d/.test(this.password);

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
