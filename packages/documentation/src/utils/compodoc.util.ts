// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import stencilJson from '@siemens/ix/component-doc.json';

export function resolveStencilComponent(name: string) {
  return stencilJson.components.find((c) => c.tag === name);
}
