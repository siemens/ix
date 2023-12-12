/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  // TODO January ist leer NEED Testcase

  @State() rangeId = 'test';
  @State() opts = [
    {
      id: 'test',
      label: 'Some value',
      from: '2023/03/29',
      to: '2023/03/30',
    },
  ];

  componentDidLoad() {
    // setTimeout(() => {
    //   this.rangeId = 'test-2';
    //   this.opts = [
    //     ...this.opts,
    //     {
    //       id: 'test-2',
    //       label: 'other',
    //       from: '2023/12/24',
    //       to: '2023/12/26',
    //     },
    //   ];
    // }, 2000);
  }

  render() {
    return (
      <Host>
        <ix-date-dropdown
          from="2024/12/01"
          // dateRangeId={this.rangeId}
          // dateRangeOptions={this.opts}
          onDateRangeChange={console.log}
        ></ix-date-dropdown>
        <ix-datetime-picker-rework></ix-datetime-picker-rework>
        <ix-date-picker></ix-date-picker>
        <ix-time-picker></ix-time-picker>
      </Host>
    );
  }
}
