// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-breacrumb-next-items',
  template: `
    <ix-breadcrumb [nextItems]="nextItems">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export class BreadcrumbNextItems {
  nextItems = ['Next Item 1'];
}
