/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export {
  buildComposedPath,
  buildPathIncluding,
  getParentId,
  removeIdFromHierarchy,
} from './hierarchy';
export type { ChildIdsByParent } from './hierarchy';
export { NestedOverlayRegistry } from './nested-overlay-registry';
export type { OverlayInstanceBase } from './nested-overlay-registry';
export {
  getOverlayKey,
  OverlayCoordinator,
  overlayCoordinator,
} from './overlay-coordinator';
export type {
  CoordinatedOverlay,
  OverlayDismissReason,
  OverlayKind,
} from './overlay-coordinator';
export { pathIncludesTrigger } from './path-utils';
export type { DismissAllOptions, OverlayDismissPolicy } from './types';
