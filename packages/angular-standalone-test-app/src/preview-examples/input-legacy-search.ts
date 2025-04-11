/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  IxInputGroup,
  IxIcon,
  IxIconButton,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxInputGroup, IxIcon, IxIconButton, FormsModule],
  template: `
    <form class="needs-validation">
      <ix-input-group>
        <span slot="input-start">
          <ix-icon name="search" size="16"></ix-icon>
        </span>
        <input
          ng-init="verifyStart()"
          [(ngModel)]="customSearch"
          name="input"
          (keyup)="onKey($event)"
          id="input-string"
          type="string"
        />
        <span slot="input-end">
          <ix-icon-button
            (click)="clearInput()"
            id="clear-button"
            icon="clear"
            ghost="{true}"
            size="16"
            [style.display]="display"
          ></ix-icon-button>
        </span>
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacySearch {
  customSearch = '';
  display = 'none';

  public ngOnInit(): void {
    if (this.customSearch !== '') {
      this.display = 'block';
    }
  }

  clearInput() {
    this.customSearch = '';
    this.display = 'none';
  }

  onKey(event: any) {
    this.display = event.target.value === '' ? 'none' : 'block';
  }
}
