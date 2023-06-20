/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Mode = 'large' | 'medium' | 'small';
const smallMediaQuery = `only screen and (max-width: 480px)`;
const mediumMediaQuery = `only screen and (min-width: 480px) and (max-width: 1024px)`;
const largeMediaQuery = `only screen and (min-width: 1024px)`;

export type MediaQueryListener = {
  matchMedia: MediaQueryList;
  dispose: () => void;
};

export const createMediaQueryListener = (
  query: string,
  callback: (event: MediaQueryListEvent) => void
): MediaQueryListener => {
  const listener = window.matchMedia(query);
  const fn = (event: MediaQueryListEvent) => {
    callback(event);
  };
  listener.addEventListener('change', fn);

  return {
    matchMedia: listener,
    dispose: () => {
      listener.removeEventListener('change', fn);
    },
  };
};

export const createModeListener = (
  modeChangeCallback: (mode: Mode) => void
) => {
  const smallListener = createMediaQueryListener(
    smallMediaQuery,
    ({ matches }) => {
      if (!matches) {
        return;
      }
      console.log('match small');
      modeChangeCallback('small');
    }
  );

  const mediumListener = createMediaQueryListener(
    mediumMediaQuery,
    ({ matches }) => {
      if (!matches) {
        return;
      }
      console.log('match medium');

      modeChangeCallback('medium');
    }
  );

  const largeListener = createMediaQueryListener(
    largeMediaQuery,
    ({ matches }) => {
      if (!matches) {
        return;
      }
      console.log('match large');

      modeChangeCallback('large');
    }
  );

  const matchSmall = smallListener.matchMedia.matches;
  const matchMedium = mediumListener.matchMedia.matches;

  if (matchSmall) {
    modeChangeCallback('small');
  } else if (matchMedium) {
    modeChangeCallback('medium');
  } else {
    modeChangeCallback('large');
  }

  return {
    dispose: () => {
      smallListener.dispose();
      mediumListener.dispose();
      largeListener.dispose();
    },
    matchMedia: [
      smallListener.matchMedia,
      mediumListener.matchMedia,
      largeListener.matchMedia,
    ],
  };
};
