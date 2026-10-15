/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

const errorPages = {
  '400': {
    title: '400 Bad Request',
    instructions:
      'Failed to process the request. Check your request and try again.',
    illustration: {
      alt: 'Bad Request',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/document.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Open homepage'],
  },
  '401': {
    title: '401 Unauthorized',
    instructions:
      'Authorization is required to access this page. Check your credentials and try again.',
    illustration: {
      alt: 'Unauthorized',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/lock.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Log in'],
  },
  '404': {
    title: '404 Not Found',
    instructions:
      'We are not able to find that page. It may have been deleted or moved.',
    illustration: {
      alt: 'Not Found',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/magnifier.svg',
        import.meta.url
      ).href,
    },
    actions: ['Search app', 'Open homepage'],
  },
  '418': {
    title: "418 I'm a Teapot",
    instructions:
      "The server refuses to brew coffee because, well... it's a teapot.",
    illustration: {
      alt: "I'm a Teapot",
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/teapot.svg',
        import.meta.url
      ).href,
    },
    actions: [],
  },
  '500': {
    title: '500 Internal Server Error',
    instructions:
      'This page is not available right now. Try refreshing the page or try again later.',
    illustration: {
      alt: 'Internal Server Error',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/plug.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Open homepage'],
  },
  '504': {
    title: '504 Gateway Timeout',
    instructions:
      'The server is taking too long to respond. Try again or change your timeout settings.',
    illustration: {
      alt: 'Gateway Timeout',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/hourglass.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Open homepage'],
  },
} as const;

type ErrorCode = keyof typeof errorPages;

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="example">
      <ix-select
        label="HTTP error code"
        [value]="errorCode"
        (valueChange)="selectErrorPage($event.detail)"
      >
        @for (entry of errorPageEntries; track entry[0]) {
          <ix-select-item
            [label]="entry[1].title"
            [value]="entry[0]"
          ></ix-select-item>
        }
      </ix-select>

      <ix-info-page
        class="error-page"
        [titleText]="errorPage.title"
        [instructions]="errorPage.instructions"
      >
        <img
          slot="image"
          [src]="errorPage.illustration.src"
          [alt]="errorPage.illustration.alt"
          width="260"
          height="196"
        />
        @for (action of errorPage.actions; track action) {
          <ix-button
            slot="actions"
            [variant]="$index === 0 ? 'secondary' : 'primary'"
          >
            {{ action }}
          </ix-button>
        }
      </ix-info-page>
    </div>
  `,
  styles: `
    .example {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    .error-page {
      flex: 1;
      min-height: 0;
    }
  `,
})
export default class HttpErrorPages {
  readonly errorPageEntries = Object.entries(errorPages);
  errorCode: ErrorCode = '404';
  errorPage = errorPages[this.errorCode];

  selectErrorPage(value: string | string[]) {
    this.errorCode = value as ErrorCode;
    this.errorPage = errorPages[this.errorCode];
  }
}
