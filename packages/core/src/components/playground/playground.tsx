/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';
import { DateTime } from 'luxon';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  @Element() hostElement: HTMLIxPlaygroundInternalElement;

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
            helperText="Helper text"
            label="Project"
            errorText="Bla bla 123"
          ></ix-text-field>

          <ix-date-field
            id="xxx"
            name="project_created"
            value={'2024/05/05'}
            helperText="Helper text"
            label="Project"
            errorText="only year 2023 allowed"
            onValueChanged={({ detail }) => {
              this.hostElement
                .querySelector('#xxx')
                .classList.toggle(
                  'ix-invalid',
                  DateTime.fromFormat(detail, 'yyyy/LL/dd').year === 2023
                );
            }}
          ></ix-date-field>

          <ix-custom-field helperText="Helper text" label="Project">
            <ix-date-field name="start" value={'2024/05/01'}></ix-date-field>
            <ix-date-field name="end" value={'2024/05/05'}></ix-date-field>
          </ix-custom-field>

          <ix-button type="submit">Button</ix-button>
        </form>
      </Host>
    );
  }
}
