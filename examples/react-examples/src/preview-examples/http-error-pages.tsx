/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxInfoPage,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import { useState } from 'react';

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

export default () => {
  const [errorCode, setErrorCode] = useState<ErrorCode>('404');
  const errorPage = errorPages[errorCode];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <IxSelect
        label="HTTP error code"
        value={errorCode}
        onValueChange={({ detail }) => setErrorCode(detail as ErrorCode)}
      >
        {Object.entries(errorPages).map(([code, page]) => (
          <IxSelectItem key={code} label={page.title} value={code} />
        ))}
      </IxSelect>

      <IxInfoPage
        style={{ flex: '1', minHeight: 0 }}
        titleText={errorPage.title}
        instructions={errorPage.instructions}
      >
        <img
          slot="image"
          src={errorPage.illustration.src}
          alt={errorPage.illustration.alt}
          width="260"
          height="196"
        />
        {errorPage.actions.map((action, index) => (
          <IxButton
            key={action}
            slot="actions"
            variant={index === 0 ? 'secondary' : 'primary'}
          >
            {action}
          </IxButton>
        ))}
      </IxInfoPage>
    </div>
  );
};
