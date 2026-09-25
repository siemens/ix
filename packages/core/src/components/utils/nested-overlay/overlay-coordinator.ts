/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type OverlayKind = 'dropdown' | 'popover';
export type OverlayDismissReason = 'escape' | 'outside' | 'parent-close';

export interface CoordinatedOverlay {
  key: string;
  kind: OverlayKind;
  hostElement: HTMLElement;
  getTriggerElement(): HTMLElement | undefined;
  isPresent(): boolean;
  dismissOnOutside(): boolean;
  dismiss(reason: OverlayDismissReason): void;
  getAdjacentFocusElement?(
    current: HTMLElement,
    backwards: boolean,
    excludedHosts?: HTMLElement[]
  ): HTMLElement | undefined;
}

export const getOverlayKey = (kind: OverlayKind, id: string) => `${kind}:${id}`;

const getComposedDistance = (host: Node, target: Node): number | undefined => {
  let current: Node | null = target;
  let distance = 0;

  while (current) {
    if (current === host) {
      return distance;
    }

    if (current instanceof Element && current.assignedSlot) {
      current = current.assignedSlot;
      distance++;
      continue;
    }

    if (current.parentNode) {
      current = current.parentNode;
      distance++;
      continue;
    }

    const root = current.getRootNode();
    current = root instanceof ShadowRoot ? root.host : null;
    distance++;
  }

  return undefined;
};

const composedContains = (host: Node, target: Node): boolean =>
  getComposedDistance(host, target) !== undefined;

export class OverlayCoordinator {
  private readonly entries = new Map<string, CoordinatedOverlay>();
  private readonly presentationOrder: string[] = [];
  private isListening = false;
  private readonly onWindowClick = (event: MouseEvent) => {
    this.dismissOutside(event.composedPath());
  };
  private readonly onWindowKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') {
      return;
    }

    this.getTopmost()?.dismiss('escape');
  };

  connect(entry: CoordinatedOverlay) {
    this.entries.set(entry.key, entry);
    this.addListeners();
  }

  disconnect(key: string) {
    this.dismissed(key);
    this.entries.delete(key);
    if (this.entries.size === 0) {
      this.removeListeners();
    }
  }

  dispose() {
    this.entries.clear();
    this.presentationOrder.length = 0;
    this.removeListeners();
  }

  presented(key: string) {
    this.dismissed(key);
    this.presentationOrder.push(key);
  }

  dismissed(key: string) {
    const index = this.presentationOrder.indexOf(key);
    if (index !== -1) {
      this.presentationOrder.splice(index, 1);
    }
  }

  isTopmostHost(host: HTMLElement) {
    return this.getTopmost()?.hostElement === host;
  }

  isTopmostInHierarchy(key: string, kind: OverlayKind) {
    const topmost = this.getTopmost();

    return (
      topmost?.kind === kind &&
      (topmost.key === key || this.isDescendantOf(topmost.key, key))
    );
  }

  shouldDeferFocusTrap(host: HTMLElement, activeElement: Element | null) {
    const topmost = this.getTopmost();

    return (
      topmost !== undefined &&
      topmost.hostElement !== host &&
      activeElement !== null &&
      composedContains(topmost.hostElement, activeElement)
    );
  }

  getFocusTrapExcludedHosts(
    host: HTMLElement,
    activeElement: Element | null
  ): HTMLElement[] {
    const topmost = this.getTopmost();
    if (
      topmost === undefined ||
      topmost.hostElement === host ||
      activeElement === null ||
      composedContains(topmost.hostElement, activeElement)
    ) {
      return [];
    }

    const excludedHosts: HTMLElement[] = [];
    let current: CoordinatedOverlay | undefined = topmost;

    while (current && current.hostElement !== host) {
      excludedHosts.push(current.hostElement);
      const parentKey = this.getParentKey(current.key);
      current = parentKey ? this.entries.get(parentKey) : undefined;
    }

    return current?.hostElement === host ? excludedHosts : [];
  }

  getParentFocusExitTarget(
    childKey: string,
    current: HTMLElement,
    backwards: boolean
  ) {
    const parentKey = this.getParentKey(childKey);
    const child = this.entries.get(childKey);
    const parent = parentKey ? this.entries.get(parentKey) : undefined;
    if (!parent || !child) {
      return undefined;
    }

    const excludedHosts = this.getFocusTrapExcludedHosts(
      parent.hostElement,
      current
    );

    return parent.getAdjacentFocusElement?.(
      current,
      backwards,
      excludedHosts.length > 0 ? excludedHosts : [child.hostElement]
    );
  }

  getAncestorKeys(childKey: string) {
    const ancestors = new Set<string>();
    let parentKey = this.getParentKey(childKey);

    while (parentKey && !ancestors.has(parentKey)) {
      ancestors.add(parentKey);
      parentKey = this.getParentKey(parentKey);
    }

    return ancestors;
  }

  hasAncestorOfKind(childKey: string, kind: OverlayKind) {
    for (const ancestorKey of this.getAncestorKeys(childKey)) {
      if (this.entries.get(ancestorKey)?.kind === kind) {
        return true;
      }
    }

    return false;
  }

  pathIncludesChildTrigger(parentKey: string, path: EventTarget[]) {
    for (const entry of this.entries.values()) {
      if (
        entry.key === parentKey ||
        this.getParentKey(entry.key) !== parentKey
      ) {
        continue;
      }

      const trigger = entry.getTriggerElement();
      if (trigger && this.pathIncludesNode(path, trigger)) {
        return true;
      }
    }

    return false;
  }

  pathIncludesDescendant(parentKey: string, path: EventTarget[]) {
    for (const entry of this.entries.values()) {
      if (
        entry.key !== parentKey &&
        entry.isPresent() &&
        this.isDescendantOf(entry.key, parentKey) &&
        this.pathIncludesEntry(path, entry)
      ) {
        return true;
      }
    }

    return false;
  }

  dismissCrossTypeChildren(
    parentKey: string,
    parentKind: OverlayKind,
    reason: OverlayDismissReason = 'parent-close'
  ) {
    const children = this.getPresentedEntries().filter(
      (entry) =>
        entry.kind !== parentKind && this.getParentKey(entry.key) === parentKey
    );

    children.reverse();
    children.forEach((entry) => entry.dismiss(reason));
  }

  private getParentKey(childKey: string): string | undefined {
    const child = this.entries.get(childKey);
    const trigger = child?.getTriggerElement();
    if (!child || !trigger) {
      return undefined;
    }

    let parentKey: string | undefined;
    let parentDistance = Number.POSITIVE_INFINITY;

    for (const candidate of this.getPresentedEntries()) {
      if (candidate.key === childKey || !candidate.isPresent()) {
        continue;
      }

      const distance = getComposedDistance(candidate.hostElement, trigger);
      if (distance !== undefined && distance <= parentDistance) {
        parentKey = candidate.key;
        parentDistance = distance;
      }
    }

    return parentKey;
  }

  private isDescendantOf(childKey: string, parentKey: string) {
    let current = this.getParentKey(childKey);

    while (current) {
      if (current === parentKey) {
        return true;
      }
      current = this.getParentKey(current);
    }

    return false;
  }

  private pathIncludesNode(path: EventTarget[], node: Node) {
    return path.some(
      (target) => target instanceof Node && composedContains(node, target)
    );
  }

  private pathIncludesEntry(path: EventTarget[], entry: CoordinatedOverlay) {
    const trigger = entry.getTriggerElement();
    return (
      this.pathIncludesNode(path, entry.hostElement) ||
      (trigger !== undefined && this.pathIncludesNode(path, trigger))
    );
  }

  private pathIncludesHierarchy(rootKey: string, path: EventTarget[]) {
    const root = this.entries.get(rootKey);
    if (root && this.pathIncludesEntry(path, root)) {
      return true;
    }

    return this.pathIncludesDescendant(rootKey, path);
  }

  private getPresentedEntries() {
    const entries: CoordinatedOverlay[] = [];
    const seen = new Set<string>();

    for (const key of this.presentationOrder) {
      const entry = this.entries.get(key);
      if (entry) {
        entries.push(entry);
        seen.add(key);
      }
    }

    for (const entry of this.entries.values()) {
      if (!seen.has(entry.key) && entry.isPresent()) {
        entries.push(entry);
      }
    }

    return entries;
  }

  private getTopmost() {
    const entries = this.getPresentedEntries();
    for (let index = entries.length - 1; index >= 0; index--) {
      if (entries[index].isPresent()) {
        return entries[index];
      }
    }

    return undefined;
  }

  private dismissOutside(path: EventTarget[]) {
    const entries = this.getPresentedEntries().reverse();

    for (const entry of entries) {
      if (
        entry.isPresent() &&
        entry.dismissOnOutside() &&
        !this.pathIncludesHierarchy(entry.key, path)
      ) {
        entry.dismiss('outside');
      }
    }
  }

  private addListeners() {
    if (this.isListening) {
      return;
    }
    this.isListening = true;

    window.addEventListener('click', this.onWindowClick);
    window.addEventListener('keydown', this.onWindowKeydown);
  }

  private removeListeners() {
    if (!this.isListening) {
      return;
    }
    this.isListening = false;

    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('keydown', this.onWindowKeydown);
  }
}

export const overlayCoordinator = new OverlayCoordinator();
