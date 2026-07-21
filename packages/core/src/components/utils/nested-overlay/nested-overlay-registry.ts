/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  buildComposedPath,
  buildPathIncluding,
  ChildIdsByParent,
  getParentId as findParentId,
  removeIdFromHierarchy,
} from './hierarchy';
import { DismissAllOptions, OverlayDismissPolicy } from './types';

export interface OverlayInstanceBase {
  getId(): string;
}

export class NestedOverlayRegistry<T extends OverlayInstanceBase> {
  private readonly instances = new Map<string, T>();
  private readonly childIdsByParent: ChildIdsByParent = {};

  constructor(
    private readonly policy: OverlayDismissPolicy<T>,
    private readonly dismissInstance: (instance: T) => void
  ) {}

  connect(instance: T): void {
    this.instances.set(instance.getId(), instance);
  }

  disconnect(instance: T): void {
    const id = instance.getId();
    this.removeFromHierarchy(id);
    this.instances.delete(id);
  }

  get(id: string): T | undefined {
    return this.instances.get(id);
  }

  keys(): string[] {
    return [...this.instances.keys()];
  }

  forEach(callback: (instance: T) => void): void {
    this.instances.forEach(callback);
  }

  values(): IterableIterator<T> {
    return this.instances.values();
  }

  setChildIds(parentId: string, childIds: string[]): void {
    this.childIdsByParent[parentId] = childIds;
  }

  deleteChildIdsEntry(parentId: string): void {
    delete this.childIdsByParent[parentId];
  }

  getChildIds(parentId: string): string[] {
    return this.childIdsByParent[parentId] || [];
  }

  getParentId(childId: string): string | undefined {
    return findParentId(childId, this.childIdsByParent);
  }

  removeFromHierarchy(id: string): void {
    removeIdFromHierarchy(id, this.childIdsByParent, this.instances.keys());
  }

  buildComposedPath(
    id: string,
    path: Set<string> = new Set<string>()
  ): Set<string> {
    return buildComposedPath(id, this.childIdsByParent, path);
  }

  buildPathIncluding(id: string): Set<string> {
    return buildPathIncluding(id, this.childIdsByParent);
  }

  dismissChildren(parentId: string): void {
    for (const childId of this.getChildIds(parentId)) {
      const child = this.instances.get(childId);
      if (child) {
        this.dismissInstance(child);
      }
    }
  }

  dismissAll(options: DismissAllOptions = {}): void {
    const { ignorePolicyForIds = [], ignoreRelatedInHierarchy = false } =
      options;

    this.forEach((instance) => {
      const id = instance.getId();
      const shouldIgnorePolicy = ignorePolicyForIds.includes(id);
      const path = buildComposedPath(
        id,
        this.childIdsByParent,
        new Set<string>()
      );

      if (ignorePolicyForIds.length > 0 && ignoreRelatedInHierarchy) {
        let skipRelated = false;

        for (const ignoreId of ignorePolicyForIds) {
          if (path.has(ignoreId)) {
            skipRelated = true;
            break;
          }
        }

        if (!skipRelated) {
          return;
        }
      }

      if (!shouldIgnorePolicy && this.policy.blocksOutsideDismiss(instance)) {
        return;
      }

      this.dismissInstance(instance);
    });
  }

  dismissOthers(activeId: string): void {
    const path = this.buildPathIncluding(activeId);

    this.forEach((instance) => {
      if (
        !this.policy.blocksOutsideDismiss(instance) &&
        !path.has(instance.getId())
      ) {
        this.dismissInstance(instance);
      }
    });
  }
}
