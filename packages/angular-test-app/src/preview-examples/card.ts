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
  styleUrls: [`../../../styles/card.css`],
  templateUrl: './card.html',
})
export default class Card {
  onClick(event: Event) {
    console.log(event);
  }
}
