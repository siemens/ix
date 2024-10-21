/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  @State() model = {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2', 'sample-child-3'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: true,
      children: ['sample-child-4'],
    },
    'sample-child-3': {
      id: 'sample-child-3',
      data: {
        name: 'Sample Child 3',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-4': {
      id: 'sample-child-4',
      data: {
        name: 'Sample Child 4',
      },
      hasChildren: false,
      children: [],
    },
  };
  render() {
    return (
      <Host>
        <ix-tree model={this.model} root="root"></ix-tree>
      </Host>
    );
  }
}
