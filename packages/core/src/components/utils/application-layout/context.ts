/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext } from '../context';
import { type LiteralStringUnion } from '../type-helper';

export const closestIxMenu = (element: Element) => {
  const menuElement = element.closest('ix-menu');
  return menuElement;
};

export type AppSwitchConfigurationTarget = LiteralStringUnion<
  '_self' | '_blank' | '_parent' | '_top'
>;

export type AppSwitchConfiguration = {
  currentAppId: string;
  apps: {
    id: string;
    name: string;
    description: string;
    url: string;
    target: AppSwitchConfigurationTarget;
    iconSrc: string;
  }[];
  i18nAppSwitch?: string;
  i18nLoadingApps?: string;
};

export const ApplicationLayoutContext = createContext<{
  hideHeader: boolean;
  host: 'basic-navigation' | 'map-navigation' | null;
  appSwitchConfig?: AppSwitchConfiguration;
  sidebar?: boolean;
}>('application-layout-context', {
  hideHeader: false,
  host: null,
  sidebar: false,
});
