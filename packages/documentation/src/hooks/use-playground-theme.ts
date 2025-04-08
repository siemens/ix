/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLocalStorage } from './use-localStorage';

export const usePlaygroundTheme = () => {
  const [playgroundTheme, setPlaygroundTheme] = useLocalStorage<
    'brand' | 'classic' | (string & Record<never, never>)
  >('docusaurus.playground.theme', 'brand');
  return { playgroundTheme, setPlaygroundTheme };
};

export const usePlaygroundThemeVariant = () => {
  const [playgroundThemeVariant, setPlaygroundThemeVariant] = useLocalStorage<
    'light' | 'dark' | (string & Record<never, never>)
  >('docusaurus.playground.theme.variant', 'dark');
  return { playgroundThemeVariant, setPlaygroundThemeVariant };
};
