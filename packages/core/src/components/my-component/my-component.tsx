/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() loading = false;

  private onClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  render() {
    return (
      <Host style={{ margin: '1rem' }}>
        <div
          style={{
            marginBottom: '1rem',
          }}
        >
          <ix-button onClick={() => this.onClick()}>Enable Loading</ix-button>
        </div>
        <h3>Spinner default</h3>
        <ix-spinner size="small"></ix-spinner>
        <ix-spinner size="medium"></ix-spinner>
        <ix-spinner size="large"></ix-spinner>

        <h3>Spinner primary</h3>
        <ix-spinner size="small" variant="primary"></ix-spinner>
        <ix-spinner size="medium" variant="primary"></ix-spinner>
        <ix-spinner size="large" variant="primary"></ix-spinner>

        <h3>Button w/ text</h3>
        <ix-button loading={this.loading}>Test</ix-button>
        <ix-button loading={this.loading} disabled>
          Test
        </ix-button>
        <ix-button loading={this.loading} outline>
          Test
        </ix-button>
        <ix-button loading={this.loading} ghost>
          Test
        </ix-button>

        <h3>Button w/ icon</h3>
        <ix-button icon="rocket" loading={this.loading}>
          Test
        </ix-button>
        <ix-button icon="rocket" loading={this.loading} disabled>
          Test
        </ix-button>
        <ix-button icon="rocket" loading={this.loading} outline>
          Test
        </ix-button>
        <ix-button icon="rocket" loading={this.loading} ghost>
          Test
        </ix-button>

        <h3>Icon Button</h3>
        <ix-icon-button icon="rocket" loading={this.loading}>
          Test
        </ix-icon-button>
        <ix-icon-button icon="rocket" loading={this.loading} disabled>
          Test
        </ix-icon-button>
        <ix-icon-button icon="rocket" loading={this.loading} outline>
          Test
        </ix-icon-button>
        <ix-icon-button icon="rocket" loading={this.loading} ghost>
          Test
        </ix-icon-button>
      </Host>
    );
  }
}
