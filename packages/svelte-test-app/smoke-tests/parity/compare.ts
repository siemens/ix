/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ParityNode } from './collect.js';

export type Difference = {
  path: string;
  kind: 'structure' | 'attribute' | 'text' | 'style' | 'property';
  detail: string;
  html: string;
  svelte: string;
};

const toCamelCase = (attributeName: string) =>
  attributeName.replace(/-([a-z])/g, (_, letter: string) =>
    letter.toUpperCase()
  );

/**
 * Whether an attribute that is present on one side and absent on the other is
 * explained by the framework having set the corresponding *property* instead.
 *
 * This is the single largest source of legitimate difference between the two
 * apps, and it is not Svelte-specific. html-test-app authors components as
 * markup, so `value="1"` is an attribute that Stencil parses into a prop. The
 * generated Svelte proxies assign `element.value = '1'` directly, exactly as
 * `@lit/react` does for React and as Vue's output target does for Vue, and
 * Stencil only writes a prop back out as an attribute when it is declared
 * `reflect: true`. The component reaches the same state either way.
 *
 * It is worth knowing about -- an attribute selector like
 * `ix-card[variant='outline']` matches in plain HTML and not in Svelte -- but
 * it is a property of framework bindings in general, not a defect in this one.
 * So the property is compared and the attribute difference is dropped; if the
 * property disagrees too, both are reported.
 */
function isExplainedByProperty(
  attributeName: string,
  htmlNode: ParityNode,
  svelteNode: ParityNode
) {
  const htmlProps = htmlNode.props;
  const svelteProps = svelteNode.props;

  if (!htmlProps || !svelteProps) {
    return false;
  }

  const propertyName = toCamelCase(attributeName);

  return (
    propertyName in htmlProps &&
    propertyName in svelteProps &&
    htmlProps[propertyName] === svelteProps[propertyName]
  );
}

/**
 * The tree is compared as a flat, ordered list of paths rather than
 * recursively. A structural difference then shows up as a path present on one
 * side only, which reads far better in a failure message than "child 3 of node
 * 7 differs".
 */
export function diffTrees(
  htmlNodes: ParityNode[],
  svelteNodes: ParityNode[]
): Difference[] {
  const differences: Difference[] = [];

  const htmlByPath = new Map(htmlNodes.map((node) => [node.path, node]));
  const svelteByPath = new Map(svelteNodes.map((node) => [node.path, node]));

  for (const node of htmlNodes) {
    if (!svelteByPath.has(node.path)) {
      differences.push({
        path: node.path,
        kind: 'structure',
        detail: 'element missing from svelte-test-app',
        html: node.tag,
        svelte: '<absent>',
      });
    }
  }

  for (const node of svelteNodes) {
    if (!htmlByPath.has(node.path)) {
      differences.push({
        path: node.path,
        kind: 'structure',
        detail: 'element missing from html-test-app',
        html: '<absent>',
        svelte: node.tag,
      });
    }
  }

  /**
   * Once the structure diverges the paths no longer line up and every
   * subsequent node reports a spurious difference, so attributes and styles are
   * only compared for a tree that already matches.
   */
  if (differences.length > 0) {
    return differences;
  }

  for (const htmlNode of htmlNodes) {
    const svelteNode = svelteByPath.get(htmlNode.path)!;

    const attributeNames = new Set([
      ...Object.keys(htmlNode.attrs),
      ...Object.keys(svelteNode.attrs),
    ]);

    for (const name of Array.from(attributeNames).sort()) {
      const htmlValue = htmlNode.attrs[name];
      const svelteValue = svelteNode.attrs[name];

      if (htmlValue === svelteValue) {
        continue;
      }

      const oneSideAbsent = htmlValue === undefined || svelteValue === undefined;

      if (oneSideAbsent && isExplainedByProperty(name, htmlNode, svelteNode)) {
        continue;
      }

      differences.push({
        path: htmlNode.path,
        kind: 'attribute',
        detail: name,
        html: htmlValue ?? '<absent>',
        svelte: svelteValue ?? '<absent>',
      });
    }

    const propertyNames = new Set([
      ...Object.keys(htmlNode.props ?? {}),
      ...Object.keys(svelteNode.props ?? {}),
    ]);

    for (const name of Array.from(propertyNames).sort()) {
      const htmlValue = htmlNode.props?.[name];
      const svelteValue = svelteNode.props?.[name];

      /**
       * Only properties both sides expose are compared. The two output targets
       * publish different surfaces: the lazy loader proxies `@Prop()`s onto the
       * prototype and nothing else, while `dist-custom-elements` emits the
       * whole class, so `@State()`, `@Element()` and internal element refs are
       * reachable there too. Comparing the union would report every piece of
       * a component's private state as a divergence.
       *
       * The intersection is exactly the declared public props, which is the
       * surface a binding is responsible for.
       */
      if (htmlValue === undefined || svelteValue === undefined) {
        continue;
      }

      if (htmlValue !== svelteValue) {
        differences.push({
          path: htmlNode.path,
          kind: 'property',
          detail: name,
          html: htmlValue ?? '<absent>',
          svelte: svelteValue ?? '<absent>',
        });
      }
    }

    if ((htmlNode.text ?? '') !== (svelteNode.text ?? '')) {
      differences.push({
        path: htmlNode.path,
        kind: 'text',
        detail: 'text content',
        html: htmlNode.text ?? '',
        svelte: svelteNode.text ?? '',
      });
    }

    for (const property of Object.keys(htmlNode.styles)) {
      const htmlValue = htmlNode.styles[property];
      const svelteValue = svelteNode.styles[property];

      if (htmlValue !== svelteValue) {
        differences.push({
          path: htmlNode.path,
          kind: 'style',
          detail: property,
          html: htmlValue,
          svelte: svelteValue,
        });
      }
    }
  }

  return differences;
}

/** Counts rather than order: boot sequences interleave differently. */
export function tallyEvents(events: string[]): Record<string, number> {
  const tally: Record<string, number> = {};

  for (const event of events) {
    tally[event] = (tally[event] ?? 0) + 1;
  }

  return tally;
}

export function diffEvents(
  htmlEvents: string[],
  svelteEvents: string[]
): Difference[] {
  const htmlTally = tallyEvents(htmlEvents);
  const svelteTally = tallyEvents(svelteEvents);

  const keys = new Set([
    ...Object.keys(htmlTally),
    ...Object.keys(svelteTally),
  ]);

  return Array.from(keys)
    .sort()
    .filter((key) => htmlTally[key] !== svelteTally[key])
    .map((key) => ({
      path: key,
      kind: 'structure' as const,
      detail: 'event count',
      html: String(htmlTally[key] ?? 0),
      svelte: String(svelteTally[key] ?? 0),
    }));
}

export function formatDifferences(differences: Difference[]): string {
  return differences
    .map(
      (difference) =>
        `  [${difference.kind}] ${difference.path}\n` +
        `      ${difference.detail}\n` +
        `        html-test-app:   ${difference.html}\n` +
        `        svelte-test-app: ${difference.svelte}`
    )
    .join('\n');
}
