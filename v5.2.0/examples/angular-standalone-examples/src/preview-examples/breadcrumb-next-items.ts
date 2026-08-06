/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBreadcrumb, IxBreadcrumbItem],
  template: `
    <ix-breadcrumb [nextItems]="nextItems">
      <ix-breadcrumb-item
        label="Item 1"
        breadcrumbKey="item-1"
      ></ix-breadcrumb-item>
      <ix-breadcrumb-item
        label="Item 2"
        breadcrumbKey="item-2"
      ></ix-breadcrumb-item>
      <ix-breadcrumb-item
        label="Item 3"
        breadcrumbKey="item-3"
      ></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class BreadcrumbNextItems {
  nextItems = [{ label: 'Next Item 1', breadcrumbKey: 'next-item-1' }];
}
