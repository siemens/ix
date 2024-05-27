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
        <form onSubmit={(e) => e.preventDefault()} data-ix-disable-valid>
          <ix-label htmlFor="xxx">Test</ix-label>
          <ix-select
            id="xxx"
            required={false}
            helperText="Test"
            errorText="error"
            validText="okay"
            warningText="warning"
            infoText="info"
            showTextAsTooltip={false}
            allowClear={true}
            class={'ix-valid'}
            data-ix-disable-valid
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>

          <ix-select
            label="test"
            required={false}
            helperText="Test"
            errorText="error"
            validText="okay"
            warningText="warning"
            infoText="info"
            showTextAsTooltip={false}
            allowClear={true}
            class={'ix-valid'}
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>
        </form>
      </Host>
    );
  }
}
