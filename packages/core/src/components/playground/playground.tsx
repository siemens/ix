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
          <ix-select
            helperText="Helper text with super link content 123 123 123 123"
            errorText="Error text"
            validText="Valid text"
            warningText="Warning text"
            infoText="Info text"
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>

          <ix-select
            helperText="Helper text"
            errorText="Error text"
            validText="Valid text"
            warningText="Warning text"
            infoText="Info text 123 123 123 123 123 12"
            class={'ix-info'}
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>

          <ix-select
            helperText="Helper text"
            errorText="Error text"
            validText="Valid text"
            warningText="Warning text"
            infoText="Info text"
            class={'ix-warning'}
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>

          <ix-select
            helperText="Helper text"
            errorText="Error text"
            validText="Valid text"
            warningText="Warning text"
            infoText="Info text"
            class={'ix-invalid'}
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>

          <ix-select
            helperText="Helper text"
            errorText="Error text"
            validText="Valid text"
            warningText="Warning text"
            infoText="Info text"
            class={'ix-valid'}
          >
            <ix-select-item value={'xx'} label="123"></ix-select-item>
          </ix-select>
        </form>
      </Host>
    );
  }
}
