/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface PopoverInterface {
  hostElement: HTMLElement;
  closeOnClickOutside: boolean;

  getAssignedSubmenuIds(): string[];
  getId(): string;

  isPresent(): boolean;

  willPresent?(): boolean;
  willDismiss?(): boolean;

  present(): void;
  dismiss(): void;
}

type SubmenuIds = Record<string, string[]>;

class PopoverController {
  private readonly popovers: Map<string, PopoverInterface> = new Map();
  private submenuIds: SubmenuIds = {};
  private isWindowListenerActive = false;

  connected(popover: PopoverInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.popovers.set(popover.getId(), popover);
  }

  disconnected(popover: PopoverInterface) {
    const id = popover.getId();
    this.removeFromSubmenuIds(id);
    this.popovers.delete(id);
  }

  removeFromSubmenuIds(id: string) {
    this.popovers.forEach((popover) => {
      const submenuIds = this.submenuIds[popover.getId()];
      if (submenuIds) {
        const index = submenuIds.indexOf(id);
        if (index > -1) {
          submenuIds.splice(index, 1);
        }
      }
    });
    delete this.submenuIds[id];
  }

  present(popover: PopoverInterface) {
    if (!popover.isPresent() && popover.willPresent?.()) {
      this.dismissOthers(popover.getId());
      this.submenuIds[popover.getId()] = popover.getAssignedSubmenuIds();
      popover.present();
    }
  }

  dismissChildren(uid: string) {
    const childIds = this.submenuIds[uid] || [];
    for (const id of childIds) {
      const popover = this.popovers.get(id);
      if (popover) {
        this.dismiss(popover);
      }
    }
  }

  dismiss(popover: PopoverInterface) {
    if (popover.isPresent() && popover.willDismiss?.()) {
      this.dismissChildren(popover.getId());
      popover.dismiss();
      delete this.submenuIds[popover.getId()];
    }
  }

  dismissAll(ignoreCloseOnClickOutside = false) {
    this.popovers.forEach((popover) => {
      if (!ignoreCloseOnClickOutside && !popover.closeOnClickOutside) {
        return;
      }
      this.dismiss(popover);
    });
  }

  dismissOthers(uid: string) {
    const path = this.buildComposedPath(uid, new Set<string>());
    path.add(uid);

    this.popovers.forEach((popover) => {
      if (popover.closeOnClickOutside && !path.has(popover.getId())) {
        this.dismiss(popover);
      }
    });
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    for (const eventTarget of eventTargets) {
      if (eventTarget instanceof HTMLElement) {
        if (eventTarget.hasAttribute('data-ix-popover-trigger')) {
          return eventTarget;
        }
      }
    }
    return;
  }

  private pathIncludesPopover(eventTargets: EventTarget[]) {
    return !!eventTargets.find(
      (element: EventTarget) =>
        (element as HTMLElement).tagName === 'IX-POPOVER'
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

    window.addEventListener('click', (event: MouseEvent) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasPopover = this.pathIncludesPopover(event.composedPath());

      if (!hasTrigger && !hasPopover) {
        this.dismissAll();
      }
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissAll(true);
      }
    });
  }
}

export const popoverController = new PopoverController();
