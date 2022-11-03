/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        {/* <ix-date-picker
          range={true}
          from={'2022/03/23'}
          eventDelimiter={null}
          onDateChange={({ detail }) => console.log('datechange', detail)}
          onDateSelect={({ detail: d }) => console.log('dateselect', d)}
          textDone="Okay!"
        ></ix-date-picker>
        <ix-time-picker time="05:00:00 AM" format="hh:mm:ss a"></ix-time-picker> */}
        <ix-datetime-picker
          range={true}
          from={'2022/03/23'}
          to={'2022/03/29'}
          time="05:00:00 AM"
          dateFormat="yyyy/LL/dd"
          timeFormat="hh:mm:ss a"
          onTimeChange={(d) => console.log('time', d)}
          onDateChange={(t) => console.log('date', t)}
          onDone={(done) => console.log('done', done)}
        ></ix-datetime-picker>
      </Host>
    );
  }
}
