/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

function ApplicationItem() {
  return <div>Test App</div>;
}

/** @internal */
@Component({
  tag: 'ix-application-switch-modal',
  styleUrl: 'application-switch-modal.scss',
  shadow: true,
})
export class ApplicationSwitchModal {
  render() {
    return (
      <Host>
        <ix-modal-header icon="apps">Switch to application</ix-modal-header>
        <ix-modal-content class="content">Test</ix-modal-content>
      </Host>
    );
  }
}
