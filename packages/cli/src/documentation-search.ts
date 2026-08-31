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
  fetchRegistryArtifact,
  fetchValidatedRegistryIndex,
  resolveRegistryVersion,
  type RegistryIndex,
} from './registry';

export type DocumentationKind = 'component' | 'example' | 'block';
export type DocumentationFramework =
  | 'html'
  | 'react'
  | 'angular'
  | 'angular-standalone'
  | 'vue';

export type DocumentationSearchMetadata = {
  id: string;
  kind: DocumentationKind;
  name: string;
  tag?: string;
  description?: string;
  keywords?: string;
  framework?: DocumentationFramework;
  path: string;
  detailPath?: string;
  relatedComponents?: string[];
  relatedExamples?: string[];
  relatedBlocks?: string[];
  documentation?: string[];
  figmaMainComponentIds?: string[];
};

export type DocumentationSearchResult = DocumentationSearchMetadata & {
  score: number;
};

type DocumentationSearchEnvelope = {
  schemaVersion: 1;
  fields: string[];
  storeFields: string[];
  searchOptions: {
    boost: Record<string, number>;
    fuzzy: number;
    prefix: boolean;
  };
  payload: Record<string, unknown>;
};

type LoadedDocumentationSearch = {
  registry: RegistryIndex;
  version: string;
  pathPrefix: string;
  miniSearch: MiniSearch<DocumentationSearchMetadata>;
  searchOptions: DocumentationSearchEnvelope['searchOptions'];
};

export type DocumentationSearchRequest = {
  baseUrl: string;
  query: string;
  kind?: DocumentationKind;
  framework?: DocumentationFramework;
  version?: string;
  limit?: number;
};

const registryCache = new Map<string, Promise<RegistryIndex>>();
const indexCache = new Map<string, Promise<LoadedDocumentationSearch>>();

function cacheRequest<T>(
  cache: Map<string, Promise<T>>,
  key: string,
  request: Promise<T>
): Promise<T> {
  cache.set(key, request);
  void request.catch(() => {
    if (cache.get(key) === request) {
      cache.delete(key);
    }
  });
  return request;
}

function registryCacheKey(baseUrl: string): string {
  return new URL(baseUrl).href;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  );
}

function requiredString(
  value: unknown,
  field: string,
  indexUrl: string
): string {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(
      `Invalid documentation search index at ${indexUrl}: stored field '${field}' must be a non-empty string`
    );
  }
  return value;
}

function parseDocumentationSearchEnvelope(
  value: unknown,
  indexUrl: string
): DocumentationSearchEnvelope {
  if (!isRecord(value)) {
    throw new Error(
      `Invalid documentation search index at ${indexUrl}: expected an object`
    );
  }

  if (value.schemaVersion !== 1) {
    throw new Error(
      `Unsupported documentation search index schema version '${String(
        value.schemaVersion
      )}' at ${indexUrl}; supported version is 1`
    );
  }

  if (
    !isStringArray(value.fields) ||
    value.fields.length === 0 ||
    !isStringArray(value.storeFields) ||
    value.storeFields.length === 0 ||
    !isRecord(value.searchOptions) ||
    !isRecord(value.searchOptions.boost) ||
    typeof value.searchOptions.fuzzy !== 'number' ||
    typeof value.searchOptions.prefix !== 'boolean' ||
    !isRecord(value.payload)
  ) {
    throw new Error(
      `Invalid documentation search index at ${indexUrl}: expected fields, storeFields, searchOptions, and serialized payload`
    );
  }

  const payload = value.payload as Record<string, unknown>;
  const searchOptions = value.searchOptions as Record<string, unknown>;
  const boostOptions = searchOptions.boost as Record<string, unknown>;
  const payloadFields = [
    'documentCount',
    'documentIds',
    'fieldIds',
    'fieldLength',
    'averageFieldLength',
    'storedFields',
    'dirtCount',
    'index',
    'serializationVersion',
  ];
  if (payloadFields.some((field) => !Object.hasOwn(payload, field))) {
    throw new Error(
      `Invalid documentation search index at ${indexUrl}: serialized MiniSearch payload is incomplete`
    );
  }

  const boosts = Object.fromEntries(
    Object.entries(boostOptions).map(([field, boost]) => {
      if (typeof boost !== 'number' || !Number.isFinite(boost) || boost <= 0) {
        throw new Error(
          `Invalid documentation search index at ${indexUrl}: boost for '${field}' must be a positive number`
        );
      }
      return [field, boost];
    })
  );

  return {
    schemaVersion: 1,
    fields: value.fields as string[],
    storeFields: value.storeFields as string[],
    searchOptions: {
      boost: boosts,
      fuzzy: value.searchOptions.fuzzy,
      prefix: value.searchOptions.prefix,
    },
    payload,
  };
}

function normalizeResultPath(
  value: string,
  pathPrefix: string,
  knownVersions: string[]
): string {
  const normalized = value.replace(/^\.\/+/, '').replace(/^\/+/, '');
  if (!pathPrefix || normalized.startsWith(`${pathPrefix}/`)) {
    return normalized;
  }

  const [head, ...rest] = normalized.split('/');
  if (knownVersions.includes(head) && rest.length > 0) {
    return `${pathPrefix}/${rest.join('/')}`;
  }

  return `${pathPrefix}/${normalized}`;
}

function artifactPathPrefix(value: string): string {
  const normalized = value.replace(/^\.\/+/, '').replace(/^\/+/, '');
  const separatorIndex = normalized.lastIndexOf('/');
  return separatorIndex === -1 ? '' : normalized.slice(0, separatorIndex);
}

function normalizeExactMatchValue(value: string): string {
  return value.trim().toLowerCase().replace('-', ':');
}

function exactMatchPriority(
  result: Partial<DocumentationSearchMetadata>,
  query: string
): number {
  const normalizedQuery = normalizeExactMatchValue(query);
  const names = [result.name, result.tag]
    .filter((value): value is string => typeof value === 'string')
    .map((value) => value.toLowerCase());
  if (names.includes(query.trim().toLowerCase())) {
    return 3;
  }
  if (
    names.some(
      (value) =>
        value.replace(/^ix-/, '') ===
        query.trim().toLowerCase().replace(/^ix-/, '')
    )
  ) {
    return 2;
  }
  if (
    result.figmaMainComponentIds?.some(
      (id) => normalizeExactMatchValue(id) === normalizedQuery
    )
  ) {
    return 1;
  }
  return 0;
}

function getRegistry(baseUrl: string): Promise<RegistryIndex> {
  const key = registryCacheKey(baseUrl);
  const cached = registryCache.get(key);
  if (cached) {
    return cached;
  }
  const request = fetchValidatedRegistryIndex(baseUrl);
  return cacheRequest(registryCache, key, request);
}

export async function loadDocumentationSearchIndex(
  baseUrl: string,
  versionRef?: string
): Promise<LoadedDocumentationSearch> {
  const registry = await getRegistry(baseUrl);
  const version = resolveRegistryVersion(registry, versionRef);
  const cacheKey = `${registryCacheKey(baseUrl)}::${version}`;
  const cached = indexCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const entry = registry.versions[version];
  const documentationSearchIndex = entry?.documentationSearchIndex;
  if (!documentationSearchIndex) {
    throw new Error(
      `Registry version '${version}' does not define documentationSearchIndex`
    );
  }

  const request = (async (): Promise<LoadedDocumentationSearch> => {
    const indexUrl = `${baseUrl.replace(
      /\/+$/,
      ''
    )}/${documentationSearchIndex}`;
    const envelope = parseDocumentationSearchEnvelope(
      await fetchRegistryArtifact<unknown>(baseUrl, documentationSearchIndex),
      indexUrl
    );

    let miniSearch: MiniSearch<DocumentationSearchMetadata>;
    try {
      miniSearch = MiniSearch.loadJSON<DocumentationSearchMetadata>(
        JSON.stringify(envelope.payload),
        {
          fields: envelope.fields,
          storeFields: envelope.storeFields,
        }
      );
    } catch (error) {
      throw new Error(
        `Failed to load documentation search index for registry version '${version}': ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }

    return {
      registry,
      version,
      pathPrefix: artifactPathPrefix(documentationSearchIndex),
      miniSearch,
      searchOptions: envelope.searchOptions,
    };
  })();
  return cacheRequest(indexCache, cacheKey, request);
}

export function clearDocumentationSearchCache(): void {
  registryCache.clear();
  indexCache.clear();
}

export async function searchDocumentation(
  options: DocumentationSearchRequest
): Promise<DocumentationSearchResult[]> {
  const loaded = await loadDocumentationSearchIndex(
    options.baseUrl,
    options.version
  );
  const results = loaded.miniSearch
    .search(options.query, {
      ...loaded.searchOptions,
      filter: (result) =>
        (!options.kind || result.kind === options.kind) &&
        (!options.framework || result.framework === options.framework),
    })
    .sort(
      (left, right) =>
        exactMatchPriority(right, options.query) -
          exactMatchPriority(left, options.query) || right.score - left.score
    );
  const limit = Math.max(0, options.limit ?? 10);
  const knownVersions = Object.keys(loaded.registry.versions);

  return results.slice(0, limit).map((result) => {
    const id = requiredString(result.id, 'id', 'central index');
    const kind = result.kind;
    if (kind !== 'component' && kind !== 'example' && kind !== 'block') {
      throw new Error(
        `Invalid documentation search result '${id}': unknown kind '${String(
          kind
        )}'`
      );
    }

    const path = requiredString(result.path, 'path', 'central index');
    const metadata: DocumentationSearchResult = {
      id,
      kind,
      name: requiredString(result.name, 'name', 'central index'),
      path: normalizeResultPath(path, loaded.pathPrefix, knownVersions),
      score: result.score,
    };

    if (typeof result.tag === 'string') metadata.tag = result.tag;
    if (typeof result.description === 'string')
      metadata.description = result.description;
    if (typeof result.keywords === 'string')
      metadata.keywords = result.keywords;
    if (
      result.framework === 'html' ||
      result.framework === 'react' ||
      result.framework === 'angular' ||
      result.framework === 'angular-standalone' ||
      result.framework === 'vue'
    ) {
      metadata.framework = result.framework;
    }
    if (typeof result.detailPath === 'string') {
      metadata.detailPath = normalizeResultPath(
        result.detailPath,
        loaded.pathPrefix,
        knownVersions
      );
    }
    for (const field of [
      'relatedComponents',
      'relatedExamples',
      'relatedBlocks',
      'documentation',
      'figmaMainComponentIds',
    ] as const) {
      if (isStringArray(result[field])) {
        metadata[field] = result[field];
      }
    }

    return metadata;
  });
}
