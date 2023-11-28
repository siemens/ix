/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
import { DateTime } from 'luxon';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  private today = DateTime.now();
  private format = 'yyyy/LL/dd';

  render() {
    return (
      <Host>
        <ix-date-dropdown
          initialSelectedDateRangeName="last-7"
          customRangeAllowed={true}
          dateRangeOptions={[
            {
              id: 'last-7',
              label: 'Last 7 days',
              from: this.today
                .minus({
                  day: 7,
                })
                .toFormat(this.format),
              to: this.today.toFormat(this.format),
            },
          ]}
          onDateRangeChange={console.log}
          onDateRangeSelect={(e) => console.log('select', e)}
        ></ix-date-dropdown>
      </Host>
    );
  }
}
