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
    <div>
      <ix-text-field
        placeholder='Some placeholder'
        value='Some example text'
        disabled
      ></ix-text-field>
    </div>
  `,
})
export default class TextFieldDisabled {}
