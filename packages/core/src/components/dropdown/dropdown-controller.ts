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
  getOverlayKey,
  OverlayCoordinator,
  overlayCoordinator,
  pathIncludesTrigger as findTriggerInPath,
  NestedOverlayRegistry,
} from '../utils/nested-overlay';

export type CloseBehavior = 'inside' | 'outside' | 'both' | boolean;

export interface DropdownInterface extends IxComponentInterface {
  closeBehavior: CloseBehavior;
  discoverAllSubmenus: boolean;

  getAssignedSubmenuIds(): string[];
  getId(): string;
  getTriggerElement(): HTMLElement | undefined;

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
  private readonly registry = new NestedOverlayRegistry<DropdownInterface>(
    {
      blocksOutsideDismiss: (dropdown) =>
        dropdown.closeBehavior === 'inside' || dropdown.closeBehavior === false,
    },
    (dropdown) => this.dismiss(dropdown)
  );

  constructor(
    private readonly overlayCoordinator: OverlayCoordinator = new OverlayCoordinator()
  ) {}

  connected(dropdown: DropdownInterface) {
    this.registry.connect(dropdown);
    this.overlayCoordinator.connect({
      key: this.getOverlayKey(dropdown),
      kind: 'dropdown',
      hostElement: dropdown.hostElement,
      getTriggerElement: () => dropdown.getTriggerElement(),
      isPresent: () => dropdown.isPresent(),
      dismissOnOutside: () =>
        dropdown.closeBehavior === true ||
        dropdown.closeBehavior === 'outside' ||
        dropdown.closeBehavior === 'both',
      dismiss: (reason) =>
        this.dismiss(
          reason === 'escape' ? this.getRootDropdown(dropdown) : dropdown
        ),
    });

    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }

  disconnected(dropdown: DropdownInterface) {
    this.registry.disconnect(dropdown);
    this.overlayCoordinator.disconnect(this.getOverlayKey(dropdown));
  }

  removeFromSubmenuIds(id: string) {
    this.registry.removeFromHierarchy(id);
  }

  getDropdownById(id: string) {
    return this.registry.get(id);
  }

  discoverSubmenus() {
    this.registry.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }

  present(dropdown: DropdownInterface) {
    if (!dropdown.isPresent() && dropdown.willPresent?.()) {
      this.registry.setChildIds(
        dropdown.getId(),
        dropdown.getAssignedSubmenuIds()
      );
      dropdown.present();
    }
  }

  dismissChildren(uid: string) {
    this.registry.dismissChildren(uid);
  }

  dismiss(dropdown: DropdownInterface) {
    if (dropdown.isPresent() && dropdown.willDismiss?.()) {
      this.overlayCoordinator.dismissCrossTypeChildren(
        this.getOverlayKey(dropdown),
        'dropdown'
      );
      this.registry.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      this.registry.deleteChildIdsEntry(dropdown.getId());
    }
  }

  dismissAll(
    ignoreBehaviorForIds: string[] = [],
    ignoreRelatedDropdowns = false
  ) {
    this.registry.dismissAll({
      ignorePolicyForIds: ignoreBehaviorForIds,
      ignoreRelatedInHierarchy: ignoreRelatedDropdowns,
    });
  }

  dismissOthers(uid: string) {
    this.registry.dismissOthers(uid);
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    return findTriggerInPath(eventTargets, 'data-ix-dropdown-trigger');
  }

  getParentDropdownId(dropdownId: string) {
    return this.registry.getParentId(dropdownId);
  }

  pathIncludesChildOverlay(
    dropdown: DropdownInterface,
    eventTargets: EventTarget[]
  ) {
    const key = this.getOverlayKey(dropdown);
    return (
      this.overlayCoordinator.pathIncludesChildTrigger(key, eventTargets) ||
      this.overlayCoordinator.pathIncludesDescendant(key, eventTargets)
    );
  }

  getParentFocusExitTarget(
    dropdown: DropdownInterface,
    current: HTMLElement,
    backwards: boolean
  ) {
    return this.overlayCoordinator.getParentFocusExitTarget(
      this.getOverlayKey(dropdown),
      current,
      backwards
    );
  }

  didPresent(dropdown: DropdownInterface) {
    this.overlayCoordinator.presented(this.getOverlayKey(dropdown));
  }

  didDismiss(dropdown: DropdownInterface) {
    this.overlayCoordinator.dismissed(this.getOverlayKey(dropdown));
  }

  private getOverlayKey(dropdown: DropdownInterface) {
    return getOverlayKey('dropdown', dropdown.getId());
  }

  private getRootDropdown(dropdown: DropdownInterface) {
    let root = dropdown;
    let parentId = this.getParentDropdownId(root.getId());

    while (parentId) {
      const parent = this.registry.get(parentId);
      if (!parent) {
        break;
      }
      root = parent;
      parentId = this.getParentDropdownId(root.getId());
    }

    return root;
  }
}

export const dropdownController = new DropdownController(overlayCoordinator);
