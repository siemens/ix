/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
      <Host style={{ marginLeft: '10rem', marginTop: '20rem' }}>
        <ix-slider
          style={{ width: '20rem', transform: 'scale(1)' }}
          value={1}
          step={1}
          trace
          traceReference={0}
          // marker={{
          //   0: '0',
          //   25: '25',
          //   50: '50',
          //   75: '75',
          //   100: '100',
          // }}
        ></ix-slider>
        {/*
        <ix-slider
          style={{ width: '20rem', transform: 'scale(1)' }}
          value={100}
          step={25}
          trace
          traceReference={100}
          marker={{
            0: '0',
            25: '25',
            50: '50',
            75: '75',
            100: '100',
          }}
        ></ix-slider> */}
        {/*
        <ix-slider
          style={{ width: '20rem', transform: 'scale(1)' }}
          value={100}
          step={25}
          trace
          traceReference={25}
          marker={{
            0: '0',
            25: '25',
            50: '50',
            75: '75',
            100: '100',
          }}
        ></ix-slider>

        <ix-slider
          style={{ width: '20rem', transform: 'scale(1)' }}
          value={100}
          step={25}
          trace
          traceReference={50}
          // marker={{
          //   0: '0',
          //   25: '25',
          //   50: '50',
          //   75: '75',
          //   100: '100',
          // }}
        ></ix-slider>

        <ix-slider
          style={{ width: '20rem', transform: 'scale(1)' }}
          value={100}
          trace
          traceReference={75}
          // marker={{
          //   0: '0',
          //   25: '25',
          //   50: '50',
          //   75: '75',
          //   100: '100',
          // }}
        ></ix-slider> */}
      </Host>
    );
  }
}
