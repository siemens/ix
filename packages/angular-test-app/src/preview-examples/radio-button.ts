// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  template: `
    <input checked id="checkbox_1_1" name="group_1" type="radio" />
    <label for="checkbox_1_1"> Checked </label>

    <input id="checkbox_1_2" name="group_1" type="radio" />
    <label for="checkbox_1_2"> Normal </label>

    <input disabled id="checkbox_1_3" name="group_1" type="radio" />
    <label for="checkbox_1_3"> Disabled </label>
  `,
})
export class Radiobutton {}
