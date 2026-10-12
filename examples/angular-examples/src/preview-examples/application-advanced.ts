/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './application-advanced.html',
  standalone: false,
})
export default class ApplicationAdvancedExample {
  activeContent: string = 'home';

  updateContent(contentKey: string) {
    this.activeContent = contentKey;
  }
}
