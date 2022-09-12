// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-group-context-menu',
  template: `
    <ix-group header="Header text" sub-header="Subheader text">
      <div slot="dropdown">
        <ix-group-dropdown-item label="Item 1"></ix-group-dropdown-item>
        <ix-group-dropdown-item label="Item 2"></ix-group-dropdown-item>
      </div>
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export class GroupContextMenu {}
