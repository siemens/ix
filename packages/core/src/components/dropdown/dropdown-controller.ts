/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { HTMLStencilElement } from '@stencil/core/internal';

export interface IxComponent {
  hostElement: HTMLStencilElement;
}

export interface DropdownInterface extends IxComponent {
  getAssignedSubmenuIds(): string[];
  getId(): string;

  isPresent(): boolean;

  willPresent?(): boolean;
  willDismiss?(): boolean;

  present(): void;
  dismiss(): void;
}

type DropdownRule = Record<string, string[]>;

class DropdownController {
  dropdowns = new Set<DropdownInterface>();
  dropdownRules: DropdownRule = {};

  constructor() {
    window.addEventListener('click', () => {
      this.dismissAll();
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissAll();
      }
    });
  }

  connected(dropdown: DropdownInterface) {
    this.dropdowns.add(dropdown);
  }
  disconnected(dropdown: DropdownInterface) {
    this.dropdowns.delete(dropdown);
  }

  present(dropdown: DropdownInterface) {
    this.dropdownRules[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
    setTimeout(() =>
      setTimeout(() => {
        if (dropdown.willPresent()) {
          dropdown.present();
          this.dismissByRule(dropdown.getId());
        }
      })
    );
  }

  dismiss(dropdown: DropdownInterface) {
    if (dropdown.willDismiss()) {
      dropdown.dismiss();
    }
  }

  dismissById(id: string) {
    for (const dropdown of this.dropdowns) {
      if (dropdown.getId() === id) {
        this.dismiss(dropdown);
        return;
      }
    }
  }

  dismissByRule(lastPresentId: string) {
    const path = this.buildComposedPath(lastPresentId, []);
    for (const dropdown of this.dropdowns) {
      if (dropdown.isPresent() && !path.includes(dropdown.getId())) {
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

  dismissAll() {
    for (const dropdown of this.dropdowns) {
      if (dropdown.isPresent()) {
        this.dismiss(dropdown);
      }
    }
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
