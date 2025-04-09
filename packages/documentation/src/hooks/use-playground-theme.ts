/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';
import { PlaygroundContext } from '../theme/DocsRoot';

export const usePlaygroundTheme = () => {
  const context = useContext(PlaygroundContext);

  return {
    playgroundTheme: context.theme,
    setPlaygroundTheme: (theme: string) => context.onThemeChange?.(theme),
  };
};

export const usePlaygroundThemeVariant = () => {
  const context = useContext(PlaygroundContext);

  return {
    playgroundThemeVariant: context.variant,
    setPlaygroundThemeVariant: (variant: string) =>
      context.onVariantChange?.(variant),
  };
};
