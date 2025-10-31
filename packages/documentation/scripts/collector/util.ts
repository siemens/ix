/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function getExampleNameFromRelativePath(relativeExamplePath: string) {
  const lastSegment = relativeExamplePath.split('/').pop();
  if (!lastSegment) {
    throw Error(`Invalid example path: ${relativeExamplePath}`);
  }
  return lastSegment.replace('.html', '');
}
