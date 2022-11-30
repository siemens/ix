/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare const top: 'top';
export declare const bottom: 'bottom';
export declare const right: 'right';
export declare const left: 'left';

export declare type BasePlacement =
  | typeof top
  | typeof bottom
  | typeof right
  | typeof left;

export declare type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';

export declare type PlacementWithAlignment =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

export declare type Placement =
  | AutoPlacement
  | BasePlacement
  | PlacementWithAlignment;
