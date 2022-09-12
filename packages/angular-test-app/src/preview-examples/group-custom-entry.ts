// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-group-custom-entry',
  template: `
    <ix-group header="Header text" sub-header="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item><ix-button>Test</ix-button></ix-group-item>
    </ix-group>
  `,
})
export class GroupCustomEntry {}
