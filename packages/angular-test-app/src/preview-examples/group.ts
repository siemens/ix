// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `
    <ix-group header="Header text" sub-header="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export class Group {}
