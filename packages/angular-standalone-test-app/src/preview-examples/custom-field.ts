/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  IxCustomField,
  IxInput,
  IxIconButton,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxCustomField, IxInput, IxIconButton, IxTextValueAccessorDirective],
  templateUrl: './custom-field.html',
})
export default class CustomField {
  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLElement>;

  openFileBrowser() {
    this.fileUpload.nativeElement.click();
    this.fileUpload.nativeElement.oninput = (event: any) => {
      console.log(event.target.files);
    };
  }
}
