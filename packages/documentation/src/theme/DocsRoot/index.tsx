import type { WrapperProps } from '@docusaurus/types';
import { useLocalStorage } from '@site/src/hooks/use-localStorage';
import DocsRoot from '@theme-original/DocsRoot';
import type DocsRootType from '@theme/DocsRoot';
import { createContext, useCallback, useEffect, useState } from 'react';

type Props = WrapperProps<typeof DocsRootType>;

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
    setPlaygroundThemeVariant(variant);
  }, []);

  const cbOnThemeChange = useCallback((theme: string) => {
    setContext((prev) => ({
      ...prev,
      theme: theme,
    }));
    setPlaygroundTheme(theme);
  }, []);

  const [context, setContext] = useState({
    variant: 'dark',
    theme: 'brand',
    onVariantChange: cbOnVariantChange,
    onThemeChange: cbOnThemeChange,
  });

  const [playgroundTheme, setPlaygroundTheme] = useLocalStorage<
    'brand' | 'classic' | (string & Record<never, never>)
  >('docusaurus.playground.theme', 'brand');

  const [playgroundThemeVariant, setPlaygroundThemeVariant] = useLocalStorage<
    'light' | 'dark' | (string & Record<never, never>)
  >('docusaurus.playground.theme.variant', 'dark');

  useEffect(() => {
    setContext((prev) => ({
      ...prev,
      variant: playgroundThemeVariant,
      theme: playgroundTheme,
    }));
  }, [playgroundThemeVariant, playgroundTheme]);

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

export default function DocsRootWrapper(props: Readonly<Props>): JSX.Element {
  return <DocsRoot {...props} />;
}
