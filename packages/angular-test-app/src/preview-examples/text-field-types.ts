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
        type='text'
        label='Username'
        value='MaxMuster1'
      ></ix-text-field>
    </div>

    <div>
      <ix-text-field
        type='email'
        label='Email'
        value='example@example.com'
      ></ix-text-field>
    </div>

    <div>
      <ix-text-field
        type='password'
        label='Password'
        placeholder='Enter your password'
        value='1234'
      ></ix-text-field>
    </div>
  `,
})
export default class TextField {}
