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
    <ix-avatar
      image="https://www.gravatar.com/avatar/00000000000000000000000000000000"
    ></ix-avatar>
  `,
})
export default class AvatarImage {}
