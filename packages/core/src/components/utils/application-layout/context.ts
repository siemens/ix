/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function isBasicNavigationLayout(
  element: HTMLElement
): element is HTMLIxBasicNavigationElement {
  return element && element.tagName === 'IX-BASIC-NAVIGATION';
}

export const hostContext = (
  selector: string,
  element: HTMLElement
): HTMLIxBasicNavigationElement | HTMLIxMapNavigationElement => {
  return element.closest(selector);
};

export const isHostedBy = (selector: string, element: HTMLElement) => {
  return hostContext(selector, element) !== null;
};

export const getHostApplicationLayout = (element: HTMLElement) => {
  const [basicNavigation, mapNavigation] = [
    'ix-basic-navigation',
    'ix-map-navigation',
  ].map((selector) => hostContext(selector, element));

  if (basicNavigation) {
    return basicNavigation;
  }

  if (mapNavigation) {
    return mapNavigation;
  }
};

export const menuContext = (element: Element) => {
  const menuElement = element.closest('ix-menu');
  return menuElement;
};
