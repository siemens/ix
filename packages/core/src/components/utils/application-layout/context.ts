/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext } from '../context';
import { Breakpoint } from '../breakpoints';
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

export type ApplicationLayoutContextValue = {
  hideHeader: boolean;
  appSwitchConfig?: AppSwitchConfiguration;
  sidebar?: boolean;
  /**
   * When set, nested layout consumers should follow this breakpoint
   * instead of the viewport.
   */
  forceBreakpoint?: Breakpoint;
};

export const ApplicationLayoutContext =
  createContext<ApplicationLayoutContextValue>('application-layout-context', {
    hideHeader: false,
    sidebar: false,
  });
