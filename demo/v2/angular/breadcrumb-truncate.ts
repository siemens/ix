/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
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
export default class BreadcrumbTruncate {}
