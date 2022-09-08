/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-selected',
  template: `
    <ix-button class="m-1" variant="Secondary" invisible
      >Not selected</ix-button
    >
    <ix-button class="m-1" variant="Secondary" invisible selected
      >Selected</ix-button
    >
  `,
})
export class ButtonSelected {}
