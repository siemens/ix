/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { JsonDocs } from '@stencil/core/internal';
import fs from 'fs';
import MiniSearch from 'minisearch';

export interface ComponentIndexItem {
  tag: string;
  description: string;
  hasProps: boolean;
  hasEvents: boolean;
  hasMethods: boolean;
  hasSlots: boolean;
  dependencies: string[];
  dependents: string[];
  figmaMainComponentIds: string[];
}

export interface ComponentIndex {
  version: string;
  timestamp: string;
  components: ComponentIndexItem[];
}

/**
 * Generates a lightweight component index for fast searching
 */
export const generateComponentIndex = (docs: JsonDocs): ComponentIndex => {
  const components: ComponentIndexItem[] = docs.components.map((component) => {
    // Extract first meaningful line from docs as description
    const description =
      component.docs?.split('\n').find((line) => line.trim().length > 0) || '';

    return {
      tag: component.tag,
      description: description.trim().substring(0, 200), // Limit to 200 chars
      hasProps: component.props.length > 0,
      hasEvents: component.events.length > 0,
      hasMethods: component.methods.length > 0,
      hasSlots: component.slots.length > 0,
      dependencies: component.dependencies || [],
      dependents: component.dependents || [],
      figmaMainComponentIds:
        component.docsTags
          ?.filter((tag) => tag.name === 'figma-main-component-id')
          .flatMap((tag) => tag.text!.split(',').map((id) => id.trim())) || [],
    };
  });

  return {
    version: docs.compiler.version,
    timestamp: new Date().toISOString(),
    components,
  };
};

/**
 * Generates a MiniSearch index for component search
 */
export const generateComponentSearchIndex = (index: ComponentIndex): string => {
  const miniSearch = new MiniSearch({
    fields: ['tag', 'description', 'dependencies'],
    storeFields: ['tag', 'description'],
    searchOptions: {
      boost: { tag: 3, description: 1 },
      fuzzy: 0.2,
      prefix: true,
    },
  });

  miniSearch.addAll(
    index.components.map((comp, idx) => ({
      id: idx.toString(),
      ...comp,
      dependencies: comp.dependencies.join(' '),
    }))
  );

  return JSON.stringify(miniSearch);
};

/**
 * Custom docs generator for component index files
 */
export const componentIndexDocGenerator = (docs: JsonDocs): void => {
  // Generate lightweight component index
  const index = generateComponentIndex(docs);
  fs.writeFileSync('component-index.json', JSON.stringify(index, null, 2));

  // Generate MiniSearch index
  const searchIndex = generateComponentSearchIndex(index);
  fs.writeFileSync('component-search-index.json', searchIndex);

  console.log(
    `✓ Generated component-index.json (${index.components.length} components)`
  );
  console.log('✓ Generated component-search-index.json (MiniSearch)');
};
