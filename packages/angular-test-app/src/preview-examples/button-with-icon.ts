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
    <div class="m-1">
      <ix-icon-button
        class="m-1"
        icon="info"
        variant="primary"
      ></ix-icon-button>
      <ix-icon-button
        class="m-1"
        icon="info"
        variant="secondary"
      ></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" outline></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" ghost></ix-icon-button>
    </div>

    <div class="m-1">
      <ix-icon-button
        class="m-1"
        icon="info"
        oval
        variant="primary"
      ></ix-icon-button>
      <ix-icon-button
        class="m-1"
        icon="info"
        oval
        variant="secondary"
      ></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" oval outline></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" oval ghost></ix-icon-button>
    </div>

    <div class="m-1">
      <ix-icon-button class="m-1" icon="info" size="12"></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" size="16"></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" size="24"></ix-icon-button>
      <ix-icon-button class="m-1" icon="info" size="32"></ix-icon-button>
    </div>
  `,
})
export default class ButtonWithIcon {}
