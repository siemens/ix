/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import documentIllustration from './document.svg';
import hourglassIllustration from './hourglass.svg';
import lockIllustration from './lock.svg';
import magnifierIllustration from './magnifier.svg';
import plugIllustration from './plug.svg';
import teapotIllustration from './teapot.svg';

const errorPages = {
  '400': {
    title: '400 Bad Request',
    instructions:
      'Failed to process the request. Check your request and try again.',
    illustration: {
      alt: 'Bad Request',
      src: documentIllustration,
    },
    actions: ['Go back', 'Open homepage'],
  },
  '401': {
    title: '401 Unauthorized',
    instructions:
      'Authorization is required to access this page. Check your credentials and try again.',
    illustration: {
      alt: 'Unauthorized',
      src: lockIllustration,
    },
    actions: ['Go back', 'Log in'],
  },
  '404': {
    title: '404 Not Found',
    instructions:
      'We are not able to find that page. It may have been deleted or moved.',
    illustration: {
      alt: 'Not Found',
      src: magnifierIllustration,
    },
    actions: ['Search app', 'Open homepage'],
  },
  '418': {
    title: "418 I'm a Teapot",
    instructions:
      "The server refuses to brew coffee because, well... it's a teapot.",
    illustration: {
      alt: "I'm a Teapot",
      src: teapotIllustration,
    },
    actions: [],
  },
  '500': {
    title: '500 Internal Server Error',
    instructions:
      'This page is not available right now. Try refreshing the page or try again later.',
    illustration: {
      alt: 'Internal Server Error',
      src: plugIllustration,
    },
    actions: ['Go back', 'Open homepage'],
  },
  '504': {
    title: '504 Gateway Timeout',
    instructions:
      'The server is taking too long to respond. Try again or change your timeout settings.',
    illustration: {
      alt: 'Gateway Timeout',
      src: hourglassIllustration,
    },
    actions: ['Go back', 'Open homepage'],
  },
} as const;

type ErrorCode = keyof typeof errorPages;
type HttpErrorPagesArgs = {
  errorCode: ErrorCode;
};

const meta = {
  title: 'Example/HTTP Error Pages',
  tags: [],
  argTypes: {
    errorCode: {
      control: { type: 'select' },
      options: Object.keys(errorPages),
    },
  },
  render: ({ errorCode }) => {
    const errorPage = errorPages[errorCode];

    return html`
      <ix-info-page
        title-text=${errorPage.title}
        instructions=${errorPage.instructions}
      >
        <img
          slot="image"
          src=${errorPage.illustration.src}
          alt=${errorPage.illustration.alt}
          width="260"
          height="196"
        />
        ${errorPage.actions.map(
          (action, index) => html`
            <ix-button
              slot="actions"
              variant=${index === 0 ? 'secondary' : 'primary'}
            >
              ${action}
            </ix-button>
          `
        )}
      </ix-info-page>
    `;
  },
} satisfies Meta<HttpErrorPagesArgs>;

export default meta;
type Story = StoryObj<HttpErrorPagesArgs>;

export const Default: Story = {
  args: {
    errorCode: '404',
  },
};
