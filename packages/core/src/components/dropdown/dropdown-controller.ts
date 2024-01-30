/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxComponent } from '../utils/internal';
export type CloseBehaviour = 'inside' | 'outside' | 'both' | boolean;

export interface DropdownInterface extends IxComponent {
  closeBehavior: CloseBehaviour;

  getAssignedSubmenuIds(): string[];
  getId(): string;

  isPresent(): boolean;

  willPresent?(): boolean;
  willDismiss?(): boolean;

  present(): void;
  dismiss(): void;
}

export function hasDropdownItemWrapperImplemented(
  item: unknown
): item is DropdownItemWrapper {
  return (item as DropdownItemWrapper).getDropdownItemElement !== undefined;
}

export interface DropdownItemWrapper {
  getDropdownItemElement(): Promise<HTMLIxDropdownItemElement>;
}

type DropdownRule = Record<string, string[]>;

class DropdownController {
  private dropdowns = new Set<DropdownInterface>();
  private dropdownRules: DropdownRule = {};

  private isWindowListenerActive = false;

  connected(dropdown: DropdownInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.dropdowns.add(dropdown);
  }

  disconnected(dropdown: DropdownInterface) {
    this.dropdowns.delete(dropdown);
  }

  present(dropdown: DropdownInterface) {
    this.dropdownRules[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
    if (!dropdown.isPresent() && dropdown.willPresent()) {
      dropdown.present();
      this.dismissPath(dropdown.getId());
    }
  }

  dismiss(dropdown: DropdownInterface) {
    if (dropdown.isPresent() && dropdown.willDismiss()) {
      dropdown.dismiss();
    }
  }

  dismissAll() {
    for (const dropdown of this.dropdowns) {
      if (
        dropdown.closeBehavior === 'inside' ||
        dropdown.closeBehavior === false
      ) {
        continue;
      }

      this.dismiss(dropdown);
    }
  }

  dismissPath(uid: string) {
    let path = this.buildComposedPath(uid, []);

    for (const dropdown of this.dropdowns) {
      if (
        dropdown.closeBehavior !== 'inside' &&
        dropdown.closeBehavior !== false &&
        !path.includes(dropdown.getId())
      ) {
        this.dismiss(dropdown);
      }
    }
  }

  private buildComposedPath(id: string, path: string[]): string[] {
    if (this.dropdownRules[id]) {
      path.push(id);
    }

    for (const ruleKey of Object.keys(this.dropdownRules)) {
      if (this.dropdownRules[ruleKey].includes(id)) {
        return this.buildComposedPath(ruleKey, path);
      }
    }

    return path;
  }

  private addOverlayListeners() {
    this.isWindowListenerActive = true;

    window.addEventListener('click', () => {
      this.dismissAll();
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissAll();
      }
    });
  }
}

export const addDisposableEventListener = (
  element: Element | Window | Document,
  eventType: string,
  callback: EventListenerOrEventListenerObject
) => {
  element.addEventListener(eventType, callback);

  return () => {
    element.removeEventListener(eventType, callback);
  };
};

export const addDisposableEventListenerAsArray = (
  listener: {
    element: Element | Window | Document;
    eventType: string;
    callback: EventListenerOrEventListenerObject;
  }[]
) => {
  const disposables = listener.map(({ callback, element, eventType }) =>
    addDisposableEventListener(element, eventType, callback)
  );

  return () => disposables.forEach((dispose) => dispose());
};

export const dropdownController = new DropdownController();
