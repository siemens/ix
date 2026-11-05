/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="action"
      >Action link</ix-link-button
    >
  `,
})
export default class LinkButtonAction {}
