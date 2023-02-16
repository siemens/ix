/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Mode = 'desktop' | 'mobile';
const mobileMediaQuery = `only screen and (max-width: 767px)`;

export type MediaQueryListener = {
  matchMedia: MediaQueryList;
  dispose: () => void;
};

export const createMediaQueryListener = (
  query: string,
  callback: (event: MediaQueryListEvent) => void
): MediaQueryListener => {
  const fn = (event: MediaQueryListEvent) => {
    callback(event);
  };
  const listener = window.matchMedia(query);
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
  const listener = createMediaQueryListener(mobileMediaQuery, ({ matches }) => {
    if (matches) {
      modeChangeCallback('mobile');
      return;
    }

    modeChangeCallback('desktop');
  });

  modeChangeCallback(listener.matchMedia.matches ? 'mobile' : 'desktop');
  return {
    dispose: listener.dispose,
    matchMedia: listener.matchMedia,
  };
};
