/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Focus management strategy when an interactive popover closes.
 *
 * - `restore-trigger`: Move focus back to the trigger element (default, WCAG-compliant).
 * - `release`: Blur the active element without restoring focus (hover mode pointer dismiss).
 */
export type PopoverCloseFocus = 'restore-trigger' | 'release';

export interface PopoverInterface {
  hostElement: HTMLElement;
  closeOnClickOutside: boolean;

  getNestedPopoverIds(): string[];
  getId(): string;

  isPresent(): boolean;

  willPresent?(): boolean;
  willDismiss?(): boolean;

  present(): void;
  /**
   * @param closeFocus How to handle focus when the popover has focusable content.
   */
  dismiss(closeFocus?: PopoverCloseFocus): void;
}

/** Parent popover id → nested child popover instance ids */
type NestedPopoverIds = Record<string, string[]>;

class PopoverController {
  private readonly popovers: Map<string, PopoverInterface> = new Map();
  private nestedPopoverIds: NestedPopoverIds = {};
  private isWindowListenerActive = false;

  connected(popover: PopoverInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.popovers.set(popover.getId(), popover);
  }

  disconnected(popover: PopoverInterface) {
    const id = popover.getId();
    this.removeFromNestedPopoverIds(id);
    this.popovers.delete(id);
  }

  removeFromNestedPopoverIds(id: string) {
    this.popovers.forEach((popover) => {
      const childIds = this.nestedPopoverIds[popover.getId()];
      if (childIds) {
        const index = childIds.indexOf(id);
        if (index > -1) {
          childIds.splice(index, 1);
        }
      }
    });
    delete this.nestedPopoverIds[id];
  }

  present(popover: PopoverInterface) {
    if (!popover.isPresent() && popover.willPresent?.()) {
      this.popovers.forEach((openPopover) => {
        if (openPopover.isPresent()) {
          this.nestedPopoverIds[openPopover.getId()] =
            openPopover.getNestedPopoverIds();
        }
      });
      this.dismissOthers(popover.getId());
      this.nestedPopoverIds[popover.getId()] = popover.getNestedPopoverIds();
      popover.present();
    }
  }

  dismissChildren(uid: string) {
    const childIds = this.nestedPopoverIds[uid] || [];
    for (const id of childIds) {
      const nested = this.popovers.get(id);
      if (nested) {
        this.dismiss(nested);
      }
    }
  }

  dismiss(
    popover: PopoverInterface,
    closeFocus: PopoverCloseFocus = 'restore-trigger'
  ) {
    if (popover.isPresent() && popover.willDismiss?.()) {
      this.dismissChildren(popover.getId());
      popover.dismiss(closeFocus);
      delete this.nestedPopoverIds[popover.getId()];
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

  private getPopoverDialog(host: HTMLElement): HTMLDialogElement | null {
    return host.shadowRoot?.querySelector<HTMLDialogElement>('dialog') ?? null;
  }

  private pathIncludesPopover(eventTargets: EventTarget[]) {
    for (const eventTarget of eventTargets) {
      if (!(eventTarget instanceof HTMLElement)) {
        continue;
      }

      if (eventTarget.tagName === 'IX-POPOVER') {
        return true;
      }

      for (const popover of this.popovers.values()) {
        if (eventTarget === popover.hostElement) {
          return true;
        }

        const panel = this.getPopoverDialog(popover.hostElement);
        if (panel && eventTarget === panel) {
          return true;
        }
      }
    }

    return false;
  }

  private buildComposedPath(id: string, path: Set<string>): Set<string> {
    if (this.nestedPopoverIds[id]) {
      path.add(id);
    }
    for (const parentId of Object.keys(this.nestedPopoverIds)) {
      if (this.nestedPopoverIds[parentId].includes(id)) {
        this.buildComposedPath(parentId, path).forEach((key) => path.add(key));
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

export { PopoverController };
export const popoverController = new PopoverController();
