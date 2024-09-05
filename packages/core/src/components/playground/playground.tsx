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
        <h1>H1 Lorem ipsum</h1>
        <h2>H1 Lorem ipsum</h2>
        <h3>H1 Lorem ipsum</h3>
        <h4>H1 Lorem ipsum</h4>
        <h5>H1 Lorem ipsum</h5>
        <h6>H1 Lorem ipsum</h6>
        <h7>H1 Lorem ipsum</h7>
      </Host>
    );
  }
}
