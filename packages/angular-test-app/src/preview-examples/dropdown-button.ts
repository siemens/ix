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
    <div class="example">
      <ix-dropdown-button label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="Dropdown" outline icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="Dropdown" ghost icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="Dropdown" disabled icon="checkboxes">
      </ix-dropdown-button>
    </div>
  `,
  styles: [
    `
      .example {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        max-width: 20rem;
      }

      .example > ix-dropdown-button {
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export default class Dropdown {}
