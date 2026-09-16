/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Config } from '@stencil/core/compiler';
import type {
  BuildCtx,
  CompilerCtx,
  ComponentCompilerMeta,
} from '@stencil/core/internal';
import path from 'node:path';

export type ComponentModelConfig = {
  elements: string[];
  event: string;
  targetAttr: string;
};

function dashToPascalCase(tagName: string) {
  return tagName
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

function formatArray(values: string[]) {
  if (!values.length) {
    return '[]';
  }

  return `[
  ${values.map((value) => `'${value}'`).join(',\n  ')},
]`;
}

const LICENSE_HEADER = `<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->`;

function generateSvelteComponent(
  component: ComponentCompilerMeta,
  componentModels: ComponentModelConfig[]
) {
  const tagName = component.tagName;
  const pascalName = dashToPascalCase(tagName);
  const elementType = `HTML${pascalName}Element`;
  const props = (component.properties ?? []).map((prop: any) => prop.name);
  const events = (component.events ?? []).map((event: any) => event.name);
  const model = componentModels.find((config) =>
    config.elements.includes(tagName)
  );

  /**
   * Components with a model configuration expose the value as a `$bindable`
   * prop so consumers can write `<IxInput bind:value />`.
   */
  const modelProp = model ? `\n    ${model.targetAttr} = $bindable(),` : '';
  const modelArgument = model
    ? `, {
    prop: '${model.targetAttr}',
    event: '${model.event}',
    get: () => ${model.targetAttr},
    set: (next) => (${model.targetAttr} = next as never),
  }`
    : '';

  return `${LICENSE_HEADER}
<script module lang="ts">
  import { defineCustomElement as define${pascalName} } from '@siemens/ix/components/${tagName}.js';

  define${pascalName}();

  const PROPS = ${formatArray(props)} as const;

  const EVENTS = ${formatArray(events)} as const;
</script>

<script lang="ts">
  import type { JSX } from '@siemens/ix';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from '../runtime/index.svelte.js';

  let {${modelProp}
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.${pascalName}, ${elementType}> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS${modelArgument});
</script>

<${tagName} bind:this={element} {...stencil.attributes}>{@render children?.()}</${tagName}>
`;
}

function generateBarrel(components: ComponentCompilerMeta[]) {
  return `/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable */
/* auto-generated svelte proxies */
${components
  .map((component) => {
    const pascalName = dashToPascalCase(component.tagName);
    return `export { default as ${pascalName} } from './${pascalName}.svelte';`;
  })
  .join('\n')}
`;
}

export function svelteComponentOutputTarget(options: {
  excludeComponents: string[];
  componentModels: ComponentModelConfig[];
}) {
  return {
    type: 'custom' as const,
    name: 'svelte-component-library',
    async generator(
      config: Config,
      compilerCtx: CompilerCtx,
      buildCtx: BuildCtx
    ) {
      const components = buildCtx.components
        .filter(
          (component) =>
            !component.internal &&
            !options.excludeComponents.includes(component.tagName)
        )
        .sort((a, b) => a.tagName.localeCompare(b.tagName));
      const outDir = path.join(config.rootDir!, '../svelte/src/lib/components');

      await Promise.all(
        components.map((component) =>
          compilerCtx.fs.writeFile(
            path.join(
              outDir,
              `${dashToPascalCase(component.tagName)}.svelte`
            ),
            generateSvelteComponent(component, options.componentModels)
          )
        )
      );

      await compilerCtx.fs.writeFile(
        path.join(outDir, 'index.ts'),
        generateBarrel(components)
      );
    },
  };
}
