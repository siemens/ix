/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Mode = 'large' | 'medium' | 'small';

let supportedModes: Mode[] = ['small', 'medium', 'large'];

const smallMediaQuery = `only screen and (max-width: 40em)`;
const mediumMediaQuery = `only screen and (min-width: 40.063em) and (max-width: 64em)`;
const largeMediaQuery = `only screen and (min-width: 64.063em)`;

export type MediaQueryListener = {
  matchMedia: MediaQueryList;
  dispose: () => void;
};

export const setSupportedModes = (modes: Mode[]) => (supportedModes = modes);

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

export const getFallbackMode = (modes: Mode[], detectedMode: Mode): Mode => {
  if (modes.length === 1) {
    return modes[0];
  }

  if (detectedMode === 'large' && !modes.includes(detectedMode)) {
    return getFallbackMode(modes, 'medium');
  }
  if (detectedMode === 'medium' && !modes.includes(detectedMode)) {
    return getFallbackMode(modes, 'large');
  }
  if (detectedMode === 'small' && !modes.includes(detectedMode)) {
    return getFallbackMode(modes, 'medium');
  }
  return detectedMode;
};

export type ModeChangeCallback = (mode: Mode) => void;

export const createModeListener = (
  modeChangeCallback: (mode: Mode) => void
) => {
  const smallListener = createMediaQueryListener(
    smallMediaQuery,
    ({ matches }) => {
      if (!matches) {
        return;
      }
      modeChangeCallback(getFallbackMode(supportedModes, 'small'));
    }
  );

  const mediumListener = createMediaQueryListener(
    mediumMediaQuery,
    ({ matches }) => {
      if (!matches) {
        return;
      }
      modeChangeCallback(getFallbackMode(supportedModes, 'medium'));
    }
  );

  const largeListener = createMediaQueryListener(
    largeMediaQuery,
    ({ matches }) => {
      if (!matches) {
        return;
      }
      modeChangeCallback(getFallbackMode(supportedModes, 'large'));
    }
  );

  const matchSmall = smallListener.matchMedia.matches;
  const matchMedium = mediumListener.matchMedia.matches;

  if (matchSmall) {
    modeChangeCallback(getFallbackMode(supportedModes, 'small'));
  } else if (matchMedium) {
    modeChangeCallback(getFallbackMode(supportedModes, 'medium'));
  } else {
    modeChangeCallback(getFallbackMode(supportedModes, 'large'));
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
