/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

function collectPaths(routes: Route[], prefix = ''): string[] {
  return routes.flatMap((route) => {
    const path = [prefix, route.path].filter(Boolean).join('/');

    if (route.children?.length) {
      return collectPaths(route.children, path);
    }

    return path ? [path] : [];
  });
}

@Component({
  standalone: false,
  selector: 'app-preview-index',
  template: `
    <div class="index">
      <ix-typography format="h2">Angular preview examples</ix-typography>
      <ul>
        @for (path of paths; track path) {
        <li>
          <a [routerLink]="'/' + path">{{ path.replace('preview/', '') }}</a>
        </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .index {
        padding: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0 0;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
    `,
  ],
})
export class PreviewIndexComponent {
  readonly paths = collectPaths(inject(Router).config).sort();
}
