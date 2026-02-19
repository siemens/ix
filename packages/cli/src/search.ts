/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import MiniSearch from 'minisearch';
import {
  fetchRegistryIndex,
  fetchExamplesRegistryIndex,
  resolveBlocksSearchIndexPath,
  resolveExamplesSearchIndexPath,
  resolveRegistryVersion,
} from './registry';

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
  version?: string;
  limit?: number;
}

export interface ExampleSearchOptions {
  baseUrl: string;
  query: string;
  framework: 'html' | 'react' | 'angular' | 'angular-standalone' | 'vue';
  version?: string;
  limit?: number;
}

export interface ExampleSearchResult {
  id: string;
  name: string;
  path: string;
  score: number;
}

function normalizeResultPathForVersion(
  pathValue: string,
  version: string,
  knownVersions: string[]
): string {
  const normalizedValue = pathValue.replace(/^\.\//, '').replace(/^\/+/, '');

  if (normalizedValue.startsWith(`${version}/`)) {
    return normalizedValue;
  }

  const [head, ...rest] = normalizedValue.split('/');
  if (knownVersions.includes(head) && rest.length > 0) {
    return `${version}/${rest.join('/')}`;
  }

  return `${version}/${normalizedValue}`;
}

/**
 * Search for blocks in the registry using the prebuilt MiniSearch index
 */
export async function searchBlocks(
  options: SearchOptions
): Promise<BlockSearchResult[]> {
  const { baseUrl, query, framework, version, limit = 10 } = options;

  const registry = await fetchRegistryIndex(baseUrl);
  const selectedVersion = resolveRegistryVersion(registry, version);
  const knownVersions = Object.keys(registry.versions);
  const frameworkIndexPath = resolveBlocksSearchIndexPath(
    registry,
    framework,
    version
  );

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
    path: normalizeResultPathForVersion(
      r.path || '',
      selectedVersion,
      knownVersions
    ),
    score: r.score,
  }));
}

/**
 * Search for examples in the registry using the prebuilt MiniSearch index
 */
export async function searchExamples(
  options: ExampleSearchOptions
): Promise<ExampleSearchResult[]> {
  const { baseUrl, query, framework, version, limit = 10 } = options;

  const registry = await fetchExamplesRegistryIndex(baseUrl);
  const selectedVersion = resolveRegistryVersion(registry, version);
  const knownVersions = Object.keys(registry.versions);
  const frameworkIndexPath = resolveExamplesSearchIndexPath(
    registry,
    framework,
    version
  );

  const indexUrl = `${baseUrl}/${frameworkIndexPath}`;
  const indexRes = await fetch(indexUrl);

  if (!indexRes.ok) {
    throw new Error(
      `Failed to fetch examples search index: ${indexRes.status}`
    );
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
    path: normalizeResultPathForVersion(
      r.path || '',
      selectedVersion,
      knownVersions
    ),
    score: r.score,
  }));
}
