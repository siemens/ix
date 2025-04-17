import React, { type ReactNode } from 'react';
import { composeProviders } from '@docusaurus/theme-common';
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';
import { DocsPreferredVersionContextProvider } from '@docusaurus/plugin-content-docs/client';
import type { Props } from '@theme/Layout/Provider';
import { PlaygroundProvider } from '@site/src/context/playground-context';

const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
  PlaygroundProvider,
]);

export default function LayoutProvider({
  children,
}: Readonly<Props>): ReactNode {
  return <Provider>{children}</Provider>;
}
