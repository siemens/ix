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

  private isWindowListenerActive = false;

  connected(popover: PopoverInterface) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.stack.connect(popover);
  }

  disconnected(popover: PopoverInterface) {
    this.stack.disconnect(popover);
  }

  removeFromNestedPopoverIds(id: string) {
    this.stack.removeFromHierarchy(id);
  }

  present(popover: PopoverInterface) {
    void this.presentAndWait(popover);
  }

  async presentAndWait(popover: PopoverInterface): Promise<void> {
    if (!popover.isPresent() && popover.willPresent?.()) {
      this.stack.forEach((openPopover) => {
        if (openPopover.isPresent()) {
          this.stack.setChildIds(
            openPopover.getId(),
            openPopover.getNestedPopoverIds()
          );
        }
      });
      this.dismissOthers(popover.getId());
      this.stack.setChildIds(popover.getId(), popover.getNestedPopoverIds());
      await popover.present();
    }
  }

  dismissChildren(uid: string) {
    this.stack.dismissChildren(uid);
  }

  dismiss(
    popover: PopoverInterface,
    closeFocus: PopoverCloseFocus = 'restore-trigger'
  ) {
    if (popover.isPresent() && popover.willDismiss?.()) {
      this.stack.dismissChildren(popover.getId());
      popover.dismiss(closeFocus);
      this.stack.deleteChildIdsEntry(popover.getId());
    }
  }

  dismissAll(ignoreCloseOnClickOutside = false) {
    this.stack.dismissAll(
      ignoreCloseOnClickOutside
        ? { ignorePolicyForIds: this.stack.keys() }
        : undefined
    );
  }

  dismissOthers(uid: string) {
    this.stack.dismissOthers(uid);
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    return findTriggerInPath(eventTargets, 'data-ix-popover-trigger');
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

  private addOverlayListeners() {
    this.isWindowListenerActive = true;

    globalThis.addEventListener('click', (event: MouseEvent) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasPopover = this.pathIncludesPopover(event.composedPath());

      if (!hasTrigger && !hasPopover) {
        this.dismissAll();
      }
    });

    globalThis.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.dismissAll(true);
      }
    });
  }
}

export { PopoverController };
export const popoverController = new PopoverController();
