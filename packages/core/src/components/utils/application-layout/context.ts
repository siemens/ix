/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext } from '../context';

export const closestIxMenu = (element: Element) => {
  const menuElement = element.closest('ix-menu');
  return menuElement;
};

type Target = '_self' | '_blank' | '_parent' | '_top' | (string & {});

// TODO Define better name of configuration interface
export type AppSwitchConfiguration = {
  textAppSwitch: string;
  currentAppId: string;
  apps: {
    id: string;
    name: string;
    description: string;
    url: string;
    target: Target;
    iconSrc: string;
  }[];
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
