/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Config } from '@stencil/core/compiler';
import path from 'node:path';

function dashToPascalCase(tagName: string) {
  return tagName
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

function formatArray(values: string[]) {
  if (!values.length) {
    return '';
  }

  return `, [
  ${values.map((value) => `'${value}'`).join(',\n  ')}
]`;
}

function generateVueComponent(
  component: any,
  vueComponentModels: {
    elements: string[];
    event: string;
    targetAttr: string;
  }[]
) {
  const tagName = component.tagName;
  const pascalName = dashToPascalCase(tagName);
  const props = (component.properties ?? []).map((prop: any) => prop.name);
  const events = (component.events ?? []).map((event: any) => event.name);
  const model = vueComponentModels.find((config) =>
    config.elements.includes(tagName)
  );
  const componentType = `JSX.${pascalName}`;
  const modelType = model ? `, ${componentType}["${model.targetAttr}"]` : '';
  const modelArgs = model
    ? `,\n'${model.targetAttr}', '${model.event}', undefined`
    : '';

  return `/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxy */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@siemens/ix';
import { defineCustomElement as define${pascalName} } from '@siemens/ix/components/${tagName}.js';

export const ${pascalName}: StencilVueComponent<${componentType}${modelType}> = /*@__PURE__*/ defineContainer<${componentType}${modelType}>('${tagName}', define${pascalName}${formatArray(
    [...props, ...events]
  )}${formatArray(events)}${modelArgs});
`;
}

export function vueComponentOutputTarget(options: {
  excludeComponents: string[];
  componentModels: {
    elements: string[];
    event: string;
    targetAttr: string;
  }[];
}) {
  return {
    type: 'custom' as const,
    name: 'vue-component-library',
    async generator(config: Config, compilerCtx: any, buildCtx: any) {
      const components = buildCtx.components
        .filter(
          (component: any) =>
            !component.internal &&
            !options.excludeComponents.includes(component.tagName)
        )
        .sort((a: any, b: any) => a.tagName.localeCompare(b.tagName));
      const outDir = path.join(config.rootDir!, '../vue/src/components');

      await Promise.all(
        components.map((component: any) =>
          compilerCtx.fs.writeFile(
            path.join(outDir, `${component.tagName}.ts`),
            generateVueComponent(component, options.componentModels)
          )
        )
      );

      await compilerCtx.fs.writeFile(
        path.join(outDir, 'components.ts'),
        `/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
${components
  .map(
    (component: any) =>
      `export { ${dashToPascalCase(component.tagName)} } from './${
        component.tagName
      }.js';`
  )
  .join('\n')}
`
      );
    },
  };
}
