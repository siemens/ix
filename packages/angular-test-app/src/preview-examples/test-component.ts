/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { ClickEvent, TestComponentCustomEvent } from '@siemens/ix';

@Component({
  selector: 'app-example',
  template: `
    <test-component (buttonClicked)="onButtonClicked($event)"
      >Test</test-component
    >
  `,
})
export default class TestComponent {
  onButtonClicked(event: Event) {
    const customEvent =
      event as unknown as TestComponentCustomEvent<ClickEvent>;
    console.log('Button clicked count:', customEvent.detail.clicks);
  }
}
