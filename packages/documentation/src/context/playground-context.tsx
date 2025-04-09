/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createStorageSlot } from '@docusaurus/theme-common/internal';
import { createContext, useCallback, useEffect, useState } from 'react';

const variantStorage = createStorageSlot('docusaurus.playground.theme.variant');
const themeStorage = createStorageSlot('docusaurus.playground.theme');

export const PlaygroundContext = createContext<{
  variant: string;
  theme: string;
  onVariantChange?: (variant: string) => void;
  onThemeChange?: (theme: string) => void;
}>({
  variant: 'dark',
  theme: 'brand',
});

function useContextValue() {
  const cbOnVariantChange = useCallback((variant: string) => {
    setContext((prev) => ({
      ...prev,
      variant: variant,
    }));
    variantStorage.set(variant);
  }, []);

  const cbOnThemeChange = useCallback((theme: string) => {
    setContext((prev) => ({
      ...prev,
      theme: theme,
    }));
    themeStorage.set(theme);
  }, []);

  const [context, setContext] = useState({
    variant: 'dark',
    theme: 'brand',
    onVariantChange: cbOnVariantChange,
    onThemeChange: cbOnThemeChange,
  });

  useEffect(() => {
    setContext((prev) => ({
      ...prev,
      variant: variantStorage.get() || 'dark',
      theme: themeStorage.get() || 'brand',
    }));

    variantStorage.listen(() => {
      setContext((prev) => ({
        ...prev,
        variant: variantStorage.get() || 'dark',
      }));
    });
    themeStorage.listen(() => {
      setContext((prev) => ({
        ...prev,
        theme: themeStorage.get() || 'brand',
      }));
    });
  }, []);

  return context;
}

export const PlaygroundProvider = ({ children }) => {
  const contextValue = useContextValue();
  return (
    <PlaygroundContext.Provider value={contextValue}>
      {children}
    </PlaygroundContext.Provider>
  );
};
