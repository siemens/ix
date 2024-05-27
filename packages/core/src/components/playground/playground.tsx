/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';

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
        <form onSubmit={(e) => e.preventDefault()}>
          <ix-layout-grid>
            <ix-row>
              <ix-col size="1">
                <ix-field-label htmlFor="select">Label</ix-field-label>
              </ix-col>
              <ix-col>
                <ix-select
                  required
                  style={{ width: '100%' }}
                  id="select"
                  onValueChange={(e) => {
                    e.target.classList.remove('ix-warning');
                    e.target.classList.remove('ix-info');
                    e.target.classList.remove('ix-valid');
                    e.target.classList.remove('ix-invalid');
                    e.target.classList.add(e.detail as string);
                  }}
                >
                  <ix-select-item
                    value={'ix-warning'}
                    label="warning"
                  ></ix-select-item>
                  <ix-select-item
                    value={'ix-info'}
                    label="info"
                  ></ix-select-item>
                  <ix-select-item
                    value={'ix-valid'}
                    label="valid"
                  ></ix-select-item>
                  <ix-select-item
                    value={'ix-invalid'}
                    label="invalid"
                  ></ix-select-item>
                </ix-select>
              </ix-col>
              <ix-col>
                <ix-helper-text
                  htmlFor="select"
                  helperText="Helper text with super link content 123 123 123 123"
                  errorText="Error text"
                  validText="Valid text"
                  warningText="Warning text"
                  infoText="Info text"
                ></ix-helper-text>
              </ix-col>
            </ix-row>
          </ix-layout-grid>
        </form>
      </Host>
    );
  }
}
