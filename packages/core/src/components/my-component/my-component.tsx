/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  datetimepicker: HTMLIxDatetimePickerElement;
  test = '2023/09/21';
  update = () => {
    this.datetimepicker.from = '2023/09/23';
  };

  render() {
    return (
      <Host>
        <ix-date-picker></ix-date-picker>
        <ix-datetime-picker
          ref={(ref) =>
            (this.datetimepicker = ref as HTMLIxDatetimePickerElement)
          }
          from={this.test}
        ></ix-datetime-picker>
        <button onClick={this.update}>test</button>
      </Host>
    );
  }
}
