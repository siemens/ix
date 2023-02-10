/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TypedEvent } from './typed-event';

export type Mode = 'desktop' | 'mobile';
const mobileMediaQuery = `only screen and (max-width: 767px)`;

type IxContext = {
  mode: {
    modeChanged: TypedEvent<Mode>;
    current: Mode | null;
  };
};

declare global {
  interface Window {
    ixContext: IxContext;
  }
}

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

const modeChanged = new TypedEvent<Mode>();

export const getCurrentMode = (): Mode => {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  return window?.ixContext.mode?.current ?? 'desktop';
};

export const onModeChange = (): TypedEvent<Mode> => {
  if (typeof window === 'undefined') {
    return;
  }

  return window.ixContext.mode.modeChanged;
};

export const setupIxContext = () => {
  // skip initialization if window is not defined e.g. SSR
  if (typeof window === 'undefined') {
    return;
  }

  if (window.ixContext) {
    console.warn('Cannot setup ix context multiple times');
    return;
  }

  window.ixContext = {
    mode: {
      modeChanged,
      current: null,
    },
  };

  createModeListener((mode) => {
    modeChanged.emit(mode);
    window.ixContext.mode.current = mode;
  });
};

export const getIxContext = () => {
  if (typeof window === 'undefined') {
    return;
  }

  return window.ixContext;
};
