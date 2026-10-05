/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** Parent instance id → direct child instance ids */
export type ChildIdsByParent = Record<string, string[]>;

export function buildComposedPath(
  id: string,
  childIdsByParent: ChildIdsByParent,
  path: Set<string> = new Set<string>()
): Set<string> {
  if (childIdsByParent[id]) {
    path.add(id);
  }

  for (const parentId of Object.keys(childIdsByParent)) {
    if (childIdsByParent[parentId].includes(id)) {
      buildComposedPath(parentId, childIdsByParent, path).forEach((key) =>
        path.add(key)
      );
    }
  }

  return path;
}

export function buildPathIncluding(
  id: string,
  childIdsByParent: ChildIdsByParent
): Set<string> {
  const path = buildComposedPath(id, childIdsByParent, new Set<string>());
  path.add(id);
  return path;
}

export function removeIdFromHierarchy(
  id: string,
  childIdsByParent: ChildIdsByParent,
  registeredIds: Iterable<string>
): void {
  for (const registeredId of registeredIds) {
    const childIds = childIdsByParent[registeredId];
    if (childIds) {
      const index = childIds.indexOf(id);
      if (index > -1) {
        childIds.splice(index, 1);
      }
    }
  }

  delete childIdsByParent[id];
}

export function getParentId(
  childId: string,
  childIdsByParent: ChildIdsByParent
): string | undefined {
  for (const parentId of Object.keys(childIdsByParent)) {
    if (childIdsByParent[parentId].includes(childId)) {
      return parentId;
    }
  }

  return undefined;
}
