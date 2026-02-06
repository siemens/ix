/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import MiniSearch from 'minisearch';
import { fetchRegistryIndex } from './registry';

export interface BlockSearchResult {
  id: string;
  name: string;
  path: string;
  score: number;
}

export interface SearchOptions {
  baseUrl: string;
  query: string;
  framework: 'react' | 'angular' | 'vue';
  limit?: number;
}

/**
 * Search for blocks in the registry using the prebuilt MiniSearch index
 */
export async function searchBlocks(
  options: SearchOptions
): Promise<BlockSearchResult[]> {
  const { baseUrl, query, framework, limit = 10 } = options;

  const registry = await fetchRegistryIndex(baseUrl);

  if (!registry.searchIndex) {
    throw new Error('Registry does not include a search index');
  }

  // Get framework-specific search index
  const frameworkIndexPath = registry.searchIndex[framework];
  if (!frameworkIndexPath) {
    throw new Error(`No search index available for framework: ${framework}`);
  }

  const indexUrl = `${baseUrl}/${frameworkIndexPath}`;
  const indexRes = await fetch(indexUrl);

  if (!indexRes.ok) {
    throw new Error(`Failed to fetch search index: ${indexRes.status}`);
  }

  const indexData = await indexRes.json();

  const miniSearch = MiniSearch.loadJSON(JSON.stringify(indexData), {
    fields: ['name', 'sourceCode', 'dependencies', 'files'],
    storeFields: ['id', 'name', 'path'],
  });

  let results = miniSearch.search(query, {
    boost: { name: 3, files: 1.5 },
    fuzzy: 0.2,
    prefix: true,
  });

  results = results.slice(0, limit);

  return results.map((r) => ({
    id: r.id,
    name: r.name,
    path: r.path || '',
    score: r.score,
  }));
}
