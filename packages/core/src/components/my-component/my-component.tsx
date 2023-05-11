/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        Primary:
        <ix-page-header
          has-back-button="true"
          headerTitle="content title"
          headerSubtitle="subtitle content asdf"
        >
          <ix-button ghost={true}>Button1</ix-button>
          <ix-button ghost={true}>Button2</ix-button>
          <ix-button ghost={true}>Button3</ix-button>
        </ix-page-header>
        <ix-page-header
          headerTitle="content title"
          headerSubtitle="subtitle content asdf"
        >
          <ix-icon-button icon="pen" ghost={true} variant="Primary">
            Button1
          </ix-icon-button>
          <ix-icon-button icon="trashcan" ghost={true} variant="Primary">
            Button2
          </ix-icon-button>
          <ix-icon-button icon="context-menu" ghost={true} variant="Primary">
            Button3
          </ix-icon-button>
        </ix-page-header>
        <ix-page-header
          headerTitle="content title with a really loooooooooong name name name name name name name name name name name name"
          headerSubtitle="subtitle content  with a really loooooooooong name name name name name name name name name name name name"
        ></ix-page-header>
        <ix-page-header headerTitle="content title"></ix-page-header>
        Secondary:
        <ix-page-header
          variant="Secondary"
          has-back-button="true"
          headerTitle="content title"
          headerSubtitle="subtitle content asdf"
        >
          <ix-button ghost={true}>Button1</ix-button>
          <ix-button ghost={true}>Button2</ix-button>
          <ix-button ghost={true}>Button3</ix-button>
        </ix-page-header>
        <ix-page-header
          variant="Secondary"
          headerTitle="content title"
          headerSubtitle="subtitle content asdf"
        >
          <ix-icon-button icon="pen" ghost={true} variant="Primary">
            Button1
          </ix-icon-button>
          <ix-icon-button icon="trashcan" ghost={true} variant="Primary">
            Button2
          </ix-icon-button>
          <ix-icon-button icon="context-menu" ghost={true} variant="Primary">
            Button3
          </ix-icon-button>
        </ix-page-header>
        <ix-page-header
          variant="Secondary"
          headerTitle="content title with a really loooooooooong name name name name name name name name name name name name"
          headerSubtitle="subtitle content  with a really loooooooooong name name name name name name name name name name name name"
        ></ix-page-header>
        <ix-page-header
          variant="Secondary"
          headerTitle="content title"
        ></ix-page-header>
      </Host>
    );
  }
}
