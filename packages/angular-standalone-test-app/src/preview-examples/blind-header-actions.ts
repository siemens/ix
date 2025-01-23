/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxBlind,
  IxIconButton,
  IxDropdown,
  IxDropdownItem,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxBlind, IxIconButton, IxDropdown, IxDropdownItem],
  template: `
    <ix-blind label="Example" icon="info">
      <ix-icon-button
        id="context-menu"
        slot="header-actions"
        ghost
        icon="context-menu"
        icon-color="color-primary"
      ></ix-icon-button>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </ix-blind>
    <ix-dropdown trigger="context-menu">
      <ix-dropdown-item icon="rename">Rename...</ix-dropdown-item>
      <ix-dropdown-item icon="trashcan">Delete...</ix-dropdown-item>
    </ix-dropdown>
  `,
  styleUrls: ['./blind-header-actions.css'],
})
export default class Blind {}
