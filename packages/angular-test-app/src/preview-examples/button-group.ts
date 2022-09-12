// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  template: `
    <div class="btn-group">
      <ix-button variant="Primary" outline> Left </ix-button>
      <ix-button variant="Primary">Middle</ix-button>
      <ix-button variant="Primary" outline> Right </ix-button>
    </div>
  `,
})
export class ButtonGroup {}
