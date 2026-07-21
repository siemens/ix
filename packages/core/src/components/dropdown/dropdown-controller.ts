/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxComponentInterface } from '../utils/internal';
import {
  pathIncludesTrigger as findTriggerInPath,
  getParentId,
  NestedOverlayStack,
} from '../utils/nested-overlay';

export type CloseBehavior = 'inside' | 'outside' | 'both' | boolean;

export interface DropdownInterface extends IxComponentInterface {
  closeBehavior: CloseBehavior;
  discoverAllSubmenus: boolean;

  getAssignedSubmenuIds(): string[];
  getId(): string;
  matchesTrigger(eventTargets: EventTarget[]): boolean;

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
    item !== null &&
    (item as DropdownItemWrapper).getDropdownItemElement !== undefined &&
    typeof (item as DropdownItemWrapper).getDropdownItemElement === 'function'
  );
}

export interface DropdownItemWrapper {
  getDropdownItemElement(): Promise<HTMLIxDropdownItemElement>;
}

class DropdownController {
  private readonly stack = new NestedOverlayStack<DropdownInterface>(
    {
      blocksOutsideDismiss: (dropdown) =>
        dropdown.closeBehavior === 'inside' || dropdown.closeBehavior === false,
    },
    (dropdown) => this.dismiss(dropdown)
  );

  private isWindowListenerActive = false;

  connected(dropdown: DropdownInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.stack.connect(dropdown);

    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }

  disconnected(dropdown: DropdownInterface) {
    this.stack.disconnect(dropdown);
  }

  removeFromSubmenuIds(id: string) {
    this.stack.removeFromHierarchy(id);
  }

  getDropdownById(id: string) {
    return this.stack.get(id);
  }

  discoverSubmenus() {
    this.stack.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }

  present(dropdown: DropdownInterface) {
    if (!dropdown.isPresent() && dropdown.willPresent?.()) {
      this.stack.setChildIds(
        dropdown.getId(),
        dropdown.getAssignedSubmenuIds()
      );
      dropdown.present();
    }
  }

  dismissChildren(uid: string) {
    this.stack.dismissChildren(uid);
  }

  dismiss(dropdown: DropdownInterface) {
    if (dropdown.isPresent() && dropdown.willDismiss?.()) {
      this.stack.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      this.stack.deleteChildIdsEntry(dropdown.getId());
    }
  }

  dismissAll(
    ignoreBehaviorForIds: string[] = [],
    ignoreRelatedDropdowns = false
  ) {
    this.stack.dismissAll({
      ignorePolicyForIds: ignoreBehaviorForIds,
      ignoreRelatedInHierarchy: ignoreRelatedDropdowns,
    });
  }

  dismissOthers(uid: string) {
    this.stack.dismissOthers(uid);
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    return findTriggerInPath(eventTargets, 'data-ix-dropdown-trigger');
  }

  getParentDropdownId(dropdownId: string) {
    return getParentId(dropdownId, this.stack.getChildIdsByParent());
  }

  private pathIncludesDropdown(eventTargets: EventTarget[]) {
    return !!eventTargets.find(
      (element: EventTarget) =>
        (element as HTMLElement).tagName === 'IX-DROPDOWN'
    );
  }

  private getDropdownByTriggerPath(eventTargets: EventTarget[]) {
    for (const dropdown of this.stack.values()) {
      if (dropdown.matchesTrigger(eventTargets)) {
        return dropdown;
      }
    }

    return undefined;
  }

  private addOverlayListeners() {
    this.isWindowListenerActive = true;

    window.addEventListener('click', (event: MouseEvent) => {
      const eventTargets = event.composedPath();
      const hasTrigger = this.pathIncludesTrigger(eventTargets);
      const hasDropdown = this.pathIncludesDropdown(eventTargets);

      if (!hasTrigger && !event.defaultPrevented) {
        const dropdown = this.getDropdownByTriggerPath(eventTargets);
        if (dropdown) {
          if (dropdown.isPresent()) {
            this.dismiss(dropdown);
          } else {
            this.present(dropdown);
          }
          this.dismissOthers(dropdown.getId());
          return;
        }
      }

      if (!hasTrigger && !hasDropdown) {
        this.dismissAll();
      }
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissAll(this.stack.keys());
      }
    });
  }
}

export const dropdownController = new DropdownController();
