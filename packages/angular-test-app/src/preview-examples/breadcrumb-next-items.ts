/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
