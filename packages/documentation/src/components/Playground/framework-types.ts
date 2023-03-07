/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export enum TargetFramework {
  ANGULAR = 'angular',
  REACT = 'react',
  JAVASCRIPT = 'javascript',
  VUE = 'vue',
  // Workaround for flat tab selection
  PREVIEW = 'preview',
}

export function isTargetFramework(arg: any): arg is TargetFramework {
  return (
    arg === TargetFramework.PREVIEW ||
    arg === TargetFramework.ANGULAR ||
    arg === TargetFramework.JAVASCRIPT ||
    arg === TargetFramework.REACT ||
    arg === TargetFramework.VUE
  );
}
