/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  NestedOverlayStack,
  pathIncludesTrigger as findTriggerInPath,
} from '../utils/nested-overlay';

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

  present(): Promise<void>;
  /**
   * @param closeFocus How to handle focus when the popover has focusable content.
   */
  dismiss(closeFocus?: PopoverCloseFocus): void;
}

class PopoverController {
  private readonly stack = new NestedOverlayStack<PopoverInterface>(
    {
      blocksOutsideDismiss: (popover) => !popover.closeOnClickOutside,
    },
    (popover) => this.dismiss(popover)
  );

  /** LIFO order of popovers opened through {@link presentAndWait}. */
  private readonly presentationOrder: string[] = [];

  private isWindowListenerActive = false;

  connected(popover: PopoverInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.stack.connect(popover);
  }

  disconnected(popover: PopoverInterface) {
    this.removeFromPresentationOrder(popover.getId());
    this.stack.disconnect(popover);
  }

  removeFromNestedPopoverIds(id: string) {
    this.stack.removeFromHierarchy(id);
  }

  /** Keeps stack parent→child links aligned with host {@link PopoverInterface.getNestedPopoverIds}. */
  syncNestedPopoverIds(popover: PopoverInterface) {
    this.stack.setChildIds(popover.getId(), popover.getNestedPopoverIds());
  }

  present(popover: PopoverInterface) {
    void this.presentAndWait(popover);
  }

  async presentAndWait(popover: PopoverInterface): Promise<void> {
    if (!popover.isPresent() && popover.willPresent?.()) {
      this.dismissOthers(popover.getId());
      this.syncNestedPopoverIds(popover);
      await popover.present();
      this.recordPresented(popover.getId());
    }
  }

  dismissChildren(uid: string) {
    this.dismissChildrenWithFocus(uid);
  }

  dismiss(
    popover: PopoverInterface,
    closeFocus: PopoverCloseFocus = 'restore-trigger'
  ) {
    if (popover.isPresent() && popover.willDismiss?.()) {
      this.dismissChildrenWithFocus(popover.getId(), closeFocus);
      popover.dismiss(closeFocus);
      this.stack.deleteChildIdsEntry(popover.getId());
      this.removeFromPresentationOrder(popover.getId());
    }
  }

  private dismissChildrenWithFocus(
    uid: string,
    closeFocus: PopoverCloseFocus = 'restore-trigger'
  ) {
    for (const childId of this.stack.getChildIds(uid)) {
      const child = this.stack.get(childId);
      if (child) {
        this.dismiss(child, closeFocus);
      }
    }
  }

  dismissAll(ignoreCloseOnClickOutside = false) {
    this.stack.dismissAll(
      ignoreCloseOnClickOutside
        ? { ignorePolicyForIds: this.stack.keys() }
        : undefined
    );
  }

  dismissTopmost() {
    const topmost = this.getTopmostForEscape();
    if (topmost) {
      this.dismiss(topmost);
    }
  }

  dismissOthers(uid: string) {
    this.stack.dismissOthers(uid);
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    return findTriggerInPath(eventTargets, 'data-ix-popover-trigger');
  }

  private recordPresented(id: string) {
    this.removeFromPresentationOrder(id);
    this.presentationOrder.push(id);
  }

  private removeFromPresentationOrder(id: string) {
    const index = this.presentationOrder.indexOf(id);
    if (index > -1) {
      this.presentationOrder.splice(index, 1);
    }
  }

  /** Whether this host is the active (topmost) popover for keyboard focus. */
  isTopmostPresentedHost(host: HTMLElement): boolean {
    return this.getTopmostForEscape()?.hostElement === host;
  }

  private getTopmostForEscape(): PopoverInterface | undefined {
    for (let index = this.presentationOrder.length - 1; index >= 0; index--) {
      const popover = this.stack.get(this.presentationOrder[index]);
      if (popover?.isPresent()) {
        return popover;
      }
    }

    let fallback: PopoverInterface | undefined;
    this.stack.forEach((popover) => {
      if (popover.isPresent()) {
        fallback = popover;
      }
    });

    return fallback;
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

      for (const popover of this.stack.values()) {
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

  private dismissAllFromOutsideClick() {
    this.stack.forEach((instance) => {
      if (!instance.closeOnClickOutside || !instance.isPresent()) {
        return;
      }

      this.dismiss(instance, 'release');
    });
  }

  private addOverlayListeners() {
    this.isWindowListenerActive = true;

    window.addEventListener('click', (event: MouseEvent) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasPopover = this.pathIncludesPopover(event.composedPath());

      if (!hasTrigger && !hasPopover) {
        this.dismissAllFromOutsideClick();
      }
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissTopmost();
      }
    });
  }
}

export { PopoverController };
export const popoverController = new PopoverController();
