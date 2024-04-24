/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('form submitted');
            const formData = new FormData(e.target as HTMLFormElement);
            for (const x of formData.keys()) {
              console.log(x, formData.get(x));
            }
          }}
        >
          <ix-text-field
            name="project"
            placeholder="123"
            onValueChanged={console.log}
            onInput={console.log}
          ></ix-text-field>

          <ix-date-field
            name="project_created"
            value={'2024/05/05'}
          ></ix-date-field>

          <ix-custom-field>
            <ix-date-field name="start" value={'2024/05/01'}></ix-date-field>
            <ix-date-field name="end" value={'2024/05/05'}></ix-date-field>
          </ix-custom-field>

          <ix-button type="submit">Button</ix-button>
        </form>
      </Host>
    );
  }
}
