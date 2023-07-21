/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
import { showMessage, showModal, showModalLoading } from '../utils/modal';

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
            const DIALOG = document.createElement('ix-modal');
            DIALOG.innerHTML = `
              <ix-modal-header icon="rocket">Dialog title Dialog titleDialog titleDialog titleDialog titleDialog titleDialog title</ix-modal-header>
              <ix-modal-content>
                My Content My Content My Content My Content My Content
                My Content My Content My Content My Content My Content
              </ix-modal-content>
              <ix-modal-footer>
                <ix-button>Save</ix-button>
                <ix-button>Cancel</ix-button>
              </ix-modal-footer>
            `;

            showModal({
              content: DIALOG,
            });
          }}
        >
          Open modal (dialog - ix-modal)
        </ix-button>

        <ix-button
          onClick={async () => {
            (
              await showMessage.question(
                'Example title',
                'message',
                'Save',
                'Cancel',
                'payload:save',
                'payload:cancel'
              )
            ).once(console.log);
          }}
        >
          Open Message
        </ix-button>

        <ix-button
          onClick={async () => {
            let count = 0;
            const progress = showModalLoading('Loading 0/2');
            const interval = setInterval(() => {
              count++;
              progress.update(`Loading ${count}/2`);

              if (count === 2) {
                progress.finish('Done');
                clearInterval(interval);
              }
            }, 1000);
          }}
        >
          Open Loading
        </ix-button>
      </Host>
    );
  }
}
