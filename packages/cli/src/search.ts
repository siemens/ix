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
  description?: string;
  keywords?: string;
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

const FALLBACK_SEARCH_FIELDS = [
  'name',
  'description',
  'keywords',
  'sourceCode',
  'dependencies',
  'files',
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function resolveSerializedSearchFields(indexData: unknown): string[] {
  if (!isRecord(indexData) || !isRecord(indexData.fieldIds)) {
    return FALLBACK_SEARCH_FIELDS;
  }

  const fields = Object.entries(indexData.fieldIds)
    .flatMap(([field, fieldId]) =>
      typeof fieldId === 'number' ? [{ field, fieldId }] : []
    )
    .sort((a, b) => a.fieldId - b.fieldId)
    .map(({ field }) => field);

  return fields.length > 0 ? fields : FALLBACK_SEARCH_FIELDS;
}

function searchBoostForFields(fields: string[]): Record<string, number> {
  const boost: Record<string, number> = {};
  const boostEntries: Array<[string, number]> = [
    ['name', 3],
    ['description', 2],
    ['keywords', 2],
    ['files', 1.5],
  ];

  for (const [field, value] of boostEntries) {
    if (fields.includes(field)) {
      boost[field] = value;
    }
  }

  return boost;
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
  const fields = resolveSerializedSearchFields(indexData);

  const miniSearch = MiniSearch.loadJSON(JSON.stringify(indexData), {
    fields,
    storeFields: ['id', 'name', 'description', 'keywords', 'path'],
  });

  let results = miniSearch.search(query, {
    boost: searchBoostForFields(fields),
    fuzzy: 0.2,
    prefix: true,
  });

  results = results.slice(0, limit);

  return results.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    keywords: r.keywords,
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
  const fields = resolveSerializedSearchFields(indexData);

  const miniSearch = MiniSearch.loadJSON(JSON.stringify(indexData), {
    fields,
    storeFields: ['id', 'name', 'path'],
  });

  let results = miniSearch.search(query, {
    boost: searchBoostForFields(fields),
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
