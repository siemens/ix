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
        <div class={'list'} style={{ paddingBottom: '2rem' }}>
          <ix-card>
            <ix-card-header>
              <ix-icon name="rocket" size="32"></ix-icon>
              <ix-typography variant={'h2'}>10</ix-typography>

              <ix-icon-button
                icon="warning"
                color="color-warning"
                ghost
                slot="actions"
              ></ix-icon-button>

              <ix-icon-button
                icon="document"
                color="color-primary"
                ghost
                slot="actions"
              ></ix-icon-button>
            </ix-card-header>
            <ix-card-content>
              <ix-typography variant="default-title">
                New devices have been discovered and are ready for onboarding
              </ix-typography>

              <ix-typography variant="default" color="soft-text">
                Secondary text
              </ix-typography>
            </ix-card-content>
            <ix-card-accordion></ix-card-accordion>
          </ix-card>

          <ix-card>
            <ix-card-header>
              <ix-icon name="rocket" size="32"></ix-icon>
              <ix-typography variant={'h2'}>10</ix-typography>
            </ix-card-header>
            <ix-card-content>
              <ix-typography variant="default-title">
                New devices have been discovered and are ready for onboarding
              </ix-typography>

              <ix-typography variant="default" color="soft-text">
                Secondary text
              </ix-typography>
            </ix-card-content>
            <ix-card-accordion></ix-card-accordion>
          </ix-card>

          <ix-card>
            <ix-card-header>
              <ix-icon name="rocket" size="32"></ix-icon>
              <ix-typography variant={'h2'}>10</ix-typography>
            </ix-card-header>
            <ix-card-content>
              <ix-typography variant="default-title">
                New devices have been discovered and are ready for onboarding
              </ix-typography>

              <ix-typography variant="default" color="soft-text">
                Secondary text
              </ix-typography>
            </ix-card-content>
            <ix-card-accordion>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </ix-card-accordion>
          </ix-card>
        </div>
      </Host>
    );
  }
}
