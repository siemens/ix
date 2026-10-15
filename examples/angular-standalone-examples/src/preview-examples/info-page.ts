/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton, IxInfoPage } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton, IxInfoPage],
  template: `<ix-info-page
    titleText="Report could not be generated"
    copyText="An error occurred while generating the report."
    instructions="Contact your administrator for more information."
  >
    <ix-button slot="actions">Return to overview</ix-button>
  </ix-info-page>`,
})
export default class InfoPage {}
