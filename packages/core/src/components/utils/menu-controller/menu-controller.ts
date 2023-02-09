/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const createMenuController = () => {
  let menuElm: HTMLIxMenuElement = null;

  const register = (menu: HTMLIxMenuElement) => {
    if (menuElm) {
      console.warn('Menu already defined');
      return;
    }

    menuElm = menu;
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

  const getElement = () => {
    return menuElm;
  };

  return {
    open,
    close,
    register,
    getElement,
  };
};

export const menuController = createMenuController();
