/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxComponent } from '../utils/internal';
export type CloseBehavior = 'inside' | 'outside' | 'both' | boolean;

export interface DropdownInterface extends IxComponent {
  closeBehavior: CloseBehavior;
  discoverAllSubmenus: boolean;

  getAssignedSubmenuIds(): string[];
  getId(): string;

  discoverSubmenu(): void;

  isPresent(): boolean;

  willPresent?(): boolean;
  willDismiss?(): boolean;

  present(): void;
  dismiss(): void;
}

export function hasDropdownItemWrapperImplemented(
  item: unknown
): item is DropdownItemWrapper {
  return (
    !!item &&
    (item as DropdownItemWrapper).getDropdownItemElement !== undefined &&
    typeof (item as DropdownItemWrapper).getDropdownItemElement === 'function'
  );
}

export interface DropdownItemWrapper {
  getDropdownItemElement(): Promise<HTMLIxDropdownItemElement | undefined>;
}

type SubmenuIds = Record<string, string[]>;

class DropdownController {
  private dropdowns: Map<string, DropdownInterface> = new Map<
    string,
    DropdownInterface
  >();
  private submenuIds: SubmenuIds = {};

  private isWindowListenerActive = false;

  connected(dropdown: DropdownInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.dropdowns.set(dropdown.getId(), dropdown);

    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }

  disconnected(dropdown: DropdownInterface) {
    this.dropdowns.delete(dropdown.getId());
  }

  discoverSubmenus() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }

  present(dropdown: DropdownInterface) {
    if (!dropdown.isPresent() && dropdown.willPresent?.()) {
      this.submenuIds[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
      dropdown.present();
    }
  }

  dismissChildren(uid: string) {
    const childIds = this.submenuIds[uid] || [];
    for (const id of childIds) {
      const dropdownId = this.dropdowns.get(id);

      if (dropdownId) {
        this.dismiss(dropdownId);
      }
    }
  }

  dismiss(dropdown: DropdownInterface) {
    if (dropdown.isPresent() && dropdown.willDismiss?.()) {
      this.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      delete this.submenuIds[dropdown.getId()];
    }
  }

  dismissAll(ignoreBehaviorForIds: string[] = []) {
    this.dropdowns.forEach((dropdown) => {
      if (
        !ignoreBehaviorForIds.includes(dropdown.getId()) &&
        (dropdown.closeBehavior === 'inside' ||
          dropdown.closeBehavior === false)
      ) {
        return;
      }

      this.dismiss(dropdown);
    });
  }

  dismissOthers(uid: string) {
    let path = this.buildComposedPath(uid, new Set<string>());

    this.dropdowns.forEach((dropdown) => {
      if (
        dropdown.closeBehavior !== 'inside' &&
        dropdown.closeBehavior !== false &&
        !path.has(dropdown.getId())
      ) {
        this.dismiss(dropdown);
      }
    });
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    for (let eventTarget of eventTargets) {
      if (eventTarget instanceof HTMLElement) {
        if (eventTarget.hasAttribute('data-ix-dropdown-trigger')) {
          return true;
        }
      }
    }

    return false;
  }

  private pathIncludesDropdown(eventTargets: EventTarget[]) {
    return !!eventTargets.find(
      (element: EventTarget) =>
        (element as HTMLElement).tagName === 'IX-DROPDOWN'
    );
  }

  private buildComposedPath(id: string, path: Set<string>): Set<string> {
    if (this.submenuIds[id]) {
      path.add(id);
    }

    for (const ruleKey of Object.keys(this.submenuIds)) {
      if (this.submenuIds[ruleKey].includes(id)) {
        this.buildComposedPath(ruleKey, path).forEach((key) => path.add(key));
      }
    }

    return path;
  }

  private addOverlayListeners() {
    this.isWindowListenerActive = true;

    window.addEventListener('click', (event: Event) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasDropdown = this.pathIncludesDropdown(event.composedPath());

      if (!hasTrigger && !hasDropdown) {
        this.dismissAll();
      }
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissAll([...this.dropdowns.keys()]);
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
