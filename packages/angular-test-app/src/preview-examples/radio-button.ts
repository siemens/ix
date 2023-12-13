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
  styleUrls: ['./styles-auto-gen/radio-button.css'],
  template: `
    <div class="radio-button">
      <input checked id="checkbox_1_1" name="group_1" type="radio" />
      <label for="checkbox_1_1"> Checked </label>

      <input id="checkbox_1_2" name="group_1" type="radio" />
      <label for="checkbox_1_2"> Normal </label>

      <input disabled id="checkbox_1_3" name="group_1" type="radio" />
      <label for="checkbox_1_3"> Disabled </label>
    </div>
  `,
})
export default class Radiobutton {}
