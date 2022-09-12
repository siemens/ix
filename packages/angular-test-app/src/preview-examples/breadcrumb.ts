// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-breacrumb',
  template: `
    <ix-breadcrumb visibleItemCount="3">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export class Breadcrumb {}
