/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
type CanonicalPathKind = 'example' | 'pattern';

export function assertNoCanonicalPathConflicts(
  publicPaths: string[],
  kind: CanonicalPathKind
): void {
  const sortedPaths = [...publicPaths].sort();
  const seenPaths = new Set<string>();

  for (const publicPath of sortedPaths) {
    for (
      let separatorIndex = publicPath.indexOf('/');
      separatorIndex !== -1;
      separatorIndex = publicPath.indexOf('/', separatorIndex + 1)
    ) {
      const ancestorPath = publicPath.slice(0, separatorIndex);
      if (seenPaths.has(ancestorPath)) {
        throw new Error(
          `Conflicting public ${kind} paths '${ancestorPath}' and '${publicPath}'.`
        );
      }
    }

    if (seenPaths.has(publicPath)) {
      throw new Error(
        `Conflicting public ${kind} paths '${publicPath}' and '${publicPath}'.`
      );
    }
    seenPaths.add(publicPath);
  }
}
