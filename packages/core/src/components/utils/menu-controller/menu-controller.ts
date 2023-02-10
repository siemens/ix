/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypedEvent } from '../typed-event';

const createMenuController = () => {
  let menuElm: HTMLIxMenuElement = null;

  const expandChange = new TypedEvent<{ show: boolean }>();

  const register = (menu: HTMLIxMenuElement) => {
    if (menuElm) {
      console.warn('Menu already defined');
      return;
    }

    menuElm = menu;
    menuElm.addEventListener('expandChange', (evt: CustomEvent<boolean>) => {
      expandChange.emit({
        show: evt.detail,
      });
    });
  };

  const open = async () => {
    if (menuElm) {
      menuElm.toggleMenu(true);
      return true;
    }

    return false;
  };

  const close = async () => {
    if (menuElm) {
      menuElm.toggleMenu(false);
      return true;
    }

    return false;
  };

  const toggle = async () => {
    if (menuElm) {
      menuElm.toggleMenu();
      return true;
    }

    return false;
  };

  const getElement = () => {
    return menuElm;
  };

  return {
    open,
    close,
    toggle,
    register,
    getElement,
    expandChange,
  };
};

export const menuController = createMenuController();
