import stencilJson from '@siemens/ix/component-doc.json';

export function resolveStencilComponent(name: string) {
  return stencilJson.components.find((c) => c.tag === name);
}
