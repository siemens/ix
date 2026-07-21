/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getOverlayKey,
  NestedOverlayRegistry,
  OverlayCoordinator,
  overlayCoordinator,
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
  getTriggerElement(): HTMLElement | undefined;
  getAdjacentFocusElement(
    current: HTMLElement,
    backwards: boolean,
    excludedHost?: HTMLElement
  ): HTMLElement | undefined;

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
  private readonly registry = new NestedOverlayRegistry<PopoverInterface>(
    {
      blocksOutsideDismiss: (popover) => !popover.closeOnClickOutside,
    },
    (popover) => this.dismiss(popover)
  );

  constructor(
    private readonly overlayCoordinator: OverlayCoordinator = new OverlayCoordinator()
  ) {}

  connected(popover: PopoverInterface) {
    this.registry.connect(popover);
    this.overlayCoordinator.connect({
      key: this.getOverlayKey(popover),
      kind: 'popover',
      hostElement: popover.hostElement,
      getTriggerElement: () => popover.getTriggerElement(),
      isPresent: () => popover.isPresent(),
      dismissOnOutside: () => popover.closeOnClickOutside,
      dismiss: (reason) =>
        this.dismiss(
          popover,
          reason === 'outside' ? 'release' : 'restore-trigger'
        ),
      getAdjacentFocusElement: (current, backwards, excludedHost) =>
        popover.getAdjacentFocusElement(current, backwards, excludedHost),
    });
  }

  disconnected(popover: PopoverInterface) {
    this.registry.disconnect(popover);
    this.overlayCoordinator.disconnect(this.getOverlayKey(popover));
  }

  removeFromNestedPopoverIds(id: string) {
    this.registry.removeFromHierarchy(id);
  }

  /** Keeps registry parent→child links aligned with host {@link PopoverInterface.getNestedPopoverIds}. */
  syncNestedPopoverIds(popover: PopoverInterface) {
    this.registry.setChildIds(popover.getId(), popover.getNestedPopoverIds());
  }

  present(popover: PopoverInterface) {
    void this.presentAndWait(popover);
  }

  async presentAndWait(popover: PopoverInterface): Promise<void> {
    if (!popover.isPresent() && popover.willPresent?.()) {
      this.dismissOthers(popover.getId());
      this.syncNestedPopoverIds(popover);
      await popover.present();
    }
  }

  dismissChildren(uid: string) {
    this.dismissChildrenWithFocus(uid);
  }

  dismiss(
    popover: PopoverInterface,
    closeFocus: PopoverCloseFocus = 'restore-trigger'
  ) {
    const isPresent = popover.isPresent();
    const willDismiss = popover.willDismiss?.() ?? true;

    if (!isPresent || !willDismiss) {
      return;
    }

    this.overlayCoordinator.dismissCrossTypeChildren(
      this.getOverlayKey(popover),
      'popover'
    );
    this.dismissChildrenWithFocus(popover.getId(), closeFocus);
    popover.dismiss(closeFocus);
    this.registry.deleteChildIdsEntry(popover.getId());
  }

  private dismissChildrenWithFocus(
    uid: string,
    closeFocus: PopoverCloseFocus = 'restore-trigger'
  ) {
    for (const childId of this.registry.getChildIds(uid)) {
      const child = this.registry.get(childId);
      if (child) {
        this.dismiss(child, closeFocus);
      }
    }
  }

  dismissAll(ignoreCloseOnClickOutside = false) {
    this.registry.dismissAll(
      ignoreCloseOnClickOutside
        ? { ignorePolicyForIds: this.registry.keys() }
        : undefined
    );
  }

  dismissOthers(uid: string) {
    this.registry.dismissOthers(uid);
  }

  pathIncludesTrigger(eventTargets: EventTarget[]) {
    return findTriggerInPath(eventTargets, 'data-ix-popover-trigger');
  }

  /** Whether this host is the active (topmost) popover for keyboard focus. */
  isTopmostPresentedHost(host: HTMLElement): boolean {
    return this.overlayCoordinator.isTopmostHost(host);
  }

  didPresent(popover: PopoverInterface) {
    this.overlayCoordinator.presented(this.getOverlayKey(popover));
  }

  didDismiss(popover: PopoverInterface) {
    this.overlayCoordinator.dismissed(this.getOverlayKey(popover));
  }

  private getOverlayKey(popover: PopoverInterface) {
    return getOverlayKey('popover', popover.getId());
  }
}

export { PopoverController };
export const popoverController = new PopoverController(overlayCoordinator);
