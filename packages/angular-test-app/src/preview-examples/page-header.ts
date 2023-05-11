/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
    <ix-page-header
      hasBackButton="true"
      headerTitle="content title"
      headerSubtitle="subtitle content"
    >
      <ix-button ghost="true">Button1</ix-button>
      <ix-button ghost="true">Button2</ix-button>
      <ix-button ghost="true">Button3</ix-button>
    </ix-page-header>
    <ix-page-header
      variant="Secondary"
      headerTitle="content title"
      headerSubtitle="subtitle content"
    >
      <ix-icon-button icon="pen" ghost="true" variant="Primary">
        Button1
      </ix-icon-button>
      <ix-icon-button icon="trashcan" ghost="true" variant="Primary">
        Button2
      </ix-icon-button>
      <ix-icon-button icon="context-menu" ghost="true" variant="Primary">
        Button3
      </ix-icon-button>
    </ix-page-header>
  `,
})
export default class PageHeader {}
