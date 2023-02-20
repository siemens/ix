/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import stencilJson from '@siemens/ix/component-doc.json';

export function resolveStencilComponent(name: string) {
  return stencilJson.components.find((c) => c.tag === name);
}
