/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
import { modal, showModal } from '../modal/modal-utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  componentDidLoad() {}

  render() {
    return (
      <Host>
        <ix-button
          onClick={() => {
            modal({
              title: 'test12',
              content: 'test',
            });
          }}
        >
          Open modal (old)
        </ix-button>

        <ix-button
          onClick={() => {
            showModal({
              content: '123',
            });
          }}
        >
          Open modal (dialog - string)
        </ix-button>

        <ix-button
          onClick={() => {
            const DIV = document.createElement('DIV');
            DIV.innerHTML = '<a href="http://google.de">Test</a>';
            showModal({
              content: DIV,
            });
          }}
        >
          Open modal (dialog - div)
        </ix-button>

        <ix-button
          onClick={() => {
            const DIALOG = document.createElement('ix-dialog');
            DIALOG.innerHTML = 'Test';
            showModal({
              content: DIALOG,
            });
          }}
        >
          Open modal (dialog - ix-dialog)
        </ix-button>
      </Host>
    );
  }
}
