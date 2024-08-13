/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';
import { showModal } from './../utils/modal';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  componentDidLoad() {
    setTimeout(() => {
      const div = document.createElement('ix-modal');
      div.innerHTML = `
            <ix-modal-header>Create new Event</ix-modal-header>
            <ix-modal-content>
              <label>Event name</label>
              <input
                style="height: 120vh"
                type="text"
              />
            </ix-modal-content>
            <ix-modal-footer>
              <ix-button>Save</ix-button>
              <ix-button>Cancel</ix-button>
            </ix-modal-footer>
      `;
      showModal({
        content: div,
        size: 'full-screen',
      });
    }, 100);
  }

  render() {
    return (
      <Host>
        <ix-application>
          <ix-application-header></ix-application-header>
          <ix-menu></ix-menu>
          <div
            style={{
              display: 'block',
              position: 'relative',
              height: '100%',
            }}
          >
            <ix-button
              onClick={() => {
                const div = document.createElement('ix-modal');
                div.innerHTML = `
                      <ix-modal-header>Create new Event</ix-modal-header>
                      <ix-modal-content>
                        <label>Event name</label>
                        <input
                          style="height: 120vh"
                          type="text"
                        />
                      </ix-modal-content>
                      <ix-modal-footer>
                        <ix-button>Save</ix-button>
                        <ix-button>Cancel</ix-button>
                      </ix-modal-footer>
                `;
                showModal({
                  content: div,
                  size: 'full-screen',
                });
              }}
            >
              Test
            </ix-button>
          </div>
          <ix-button slot="bottom">Footer</ix-button>
        </ix-application>
      </Host>
    );
  }
}
