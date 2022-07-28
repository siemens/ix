/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import stencilJson from '@siemens/ix/component-doc.json';

export function resolveStencilComponent(name: string) {
  return stencilJson.components.find((c) => c.tag === name);
}
