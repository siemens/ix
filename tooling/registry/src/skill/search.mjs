#!/usr/bin/env node
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import MiniSearch from 'minisearch';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const DEFAULT_REGISTRY_URL = 'https://siemens.github.io/ix';

function usageError(message) {
  throw new Error(
    `${message}\nUsage: search.mjs --query <text> [--kind component|example|block] [--framework html|react|angular|angular-standalone|vue] [--version <version-or-tag>] [--registry-url <url>] [--limit <n>] [--local-index <file>] [--figma-id <id>]`
  );
}

function parseArgs(argv) {
  const options = {
    registryUrl: DEFAULT_REGISTRY_URL,
    limit: 10,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (!argument.startsWith('--'))
      usageError(`Unexpected argument '${argument}'`);
    const name = argument.slice(2);
    if (name === 'help') {
      console.log(
        'Search versioned Siemens iX registry documentation. Use --local-index for offline searches.'
      );
      process.exit(0);
    }
    const value = argv[index + 1];
    if (!value || value.startsWith('--'))
      usageError(`Missing value for --${name}`);
    index += 1;
    switch (name) {
      case 'query':
        options.query = value;
        break;
      case 'kind':
        options.kind = value;
        break;
      case 'framework':
        options.framework = value;
        break;
      case 'version':
      case 'tag':
        options.version = value;
        break;
      case 'registry-url':
        options.registryUrl = value;
        break;
      case 'limit':
        options.limit = Number(value);
        if (!Number.isInteger(options.limit) || options.limit < 0) {
          usageError('--limit must be a non-negative integer');
        }
        break;
      case 'local-index':
      case 'index':
        options.localIndex = value;
        break;
      case 'figma-id':
        options.query = value;
        options.figmaId = true;
        break;
      default:
        usageError(`Unknown option '--${name}'`);
    }
  }
  if (!options.query) usageError('--query is required');
  if (
    options.kind &&
    !['component', 'example', 'block'].includes(options.kind)
  ) {
    usageError(`Invalid kind '${options.kind}'`);
  }
  if (
    options.framework &&
    !['html', 'react', 'angular', 'angular-standalone', 'vue'].includes(
      options.framework
    )
  ) {
    usageError(`Invalid framework '${options.framework}'`);
  }
  return options;
}

function normalizeFigmaId(value) {
  return /^\d+[-:]\d+$/.test(value) ? value.replace('-', ':') : value;
}

function artifactPathPrefix(value) {
  const normalized = value.replace(/^\.\/+/, '').replace(/^\/+/, '');
  const separatorIndex = normalized.lastIndexOf('/');
  return separatorIndex === -1 ? '' : normalized.slice(0, separatorIndex);
}

function normalizePath(value, pathPrefix, knownVersions) {
  const normalized = value.replace(/^\.\/+/, '').replace(/^\/+/, '');
  if (!pathPrefix || normalized.startsWith(`${pathPrefix}/`)) return normalized;
  const [head, ...rest] = normalized.split('/');
  if (knownVersions.includes(head) && rest.length > 0) {
    return `${pathPrefix}/${rest.join('/')}`;
  }
  return `${pathPrefix}/${normalized}`;
}

function exactMatchPriority(result, query) {
  const rawQuery = query.trim().toLowerCase();
  const normalizedQuery = normalizeFigmaId(rawQuery);
  const names = [result.name, result.tag]
    .filter((value) => typeof value === 'string')
    .map((value) => value.toLowerCase());
  if (names.includes(rawQuery)) return 3;
  if (
    names.some(
      (value) => value.replace(/^ix-/, '') === rawQuery.replace(/^ix-/, '')
    )
  ) {
    return 2;
  }
  if (
    result.figmaMainComponentIds?.some(
      (id) => normalizeFigmaId(id.toLowerCase()) === normalizedQuery
    )
  ) {
    return 1;
  }
  return 0;
}

function parseEnvelope(value, source) {
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
  if (
    !value ||
    typeof value !== 'object' ||
    value.schemaVersion !== 1 ||
    !Array.isArray(value.fields) ||
    value.fields.length === 0 ||
    !value.fields.every((field) => typeof field === 'string' && field) ||
    !Array.isArray(value.storeFields) ||
    value.storeFields.length === 0 ||
    !value.storeFields.every((field) => typeof field === 'string' && field) ||
    !value.searchOptions ||
    typeof value.searchOptions !== 'object' ||
    Array.isArray(value.searchOptions) ||
    !value.searchOptions.boost ||
    typeof value.searchOptions.boost !== 'object' ||
    Array.isArray(value.searchOptions.boost) ||
    typeof value.searchOptions.fuzzy !== 'number' ||
    !Number.isFinite(value.searchOptions.fuzzy) ||
    typeof value.searchOptions.prefix !== 'boolean' ||
    !value.payload ||
    typeof value.payload !== 'object' ||
    Array.isArray(value.payload) ||
    !payloadFields.every((field) =>
      Object.prototype.hasOwnProperty.call(value.payload, field)
    )
  ) {
    throw new Error(
      `Invalid documentation search index '${source}': expected schemaVersion 1 and a self-describing MiniSearch payload`
    );
  }
  for (const [field, boost] of Object.entries(value.searchOptions.boost)) {
    if (typeof boost !== 'number' || !Number.isFinite(boost) || boost <= 0) {
      throw new Error(
        `Invalid documentation search index '${source}': boost for '${field}' must be a positive number`
      );
    }
  }
  return value;
}

async function readJsonFile(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function loadIndex(options) {
  if (options.localIndex) {
    const envelope = parseEnvelope(
      await readJsonFile(path.resolve(options.localIndex)),
      options.localIndex
    );
    return { envelope, pathPrefix: '', knownVersions: [] };
  }

  const registryResponse = await fetch(
    `${options.registryUrl.replace(/\/+$/, '')}/registry.json`
  );
  if (!registryResponse.ok) {
    throw new Error(`Failed to fetch registry: ${registryResponse.status}`);
  }
  const registry = await registryResponse.json();
  const latest = registry['dist-tags']?.latest;
  const requestedVersion = options.version;
  const candidate =
    (requestedVersion && registry['dist-tags']?.[requestedVersion]) ??
    requestedVersion ??
    latest;
  const versions = registry.versions ?? {};
  const version =
    candidate && Object.hasOwn(versions, candidate)
      ? candidate
      : candidate?.startsWith('v') &&
        Object.hasOwn(versions, candidate.slice(1))
      ? candidate.slice(1)
      : candidate && Object.hasOwn(versions, `v${candidate}`)
      ? `v${candidate}`
      : null;
  if (!version) usageError(`Unknown registry version or tag '${candidate}'`);
  const indexPath = registry.versions[version]?.documentationSearchIndex;
  if (typeof indexPath !== 'string') {
    throw new Error(
      `Registry version '${version}' does not define documentationSearchIndex`
    );
  }
  const indexResponse = await fetch(
    `${options.registryUrl.replace(/\/+$/, '')}/${indexPath}`
  );
  if (!indexResponse.ok) {
    throw new Error(
      `Failed to fetch documentation search index: ${indexResponse.status}`
    );
  }
  return {
    envelope: parseEnvelope(await indexResponse.json(), indexPath),
    pathPrefix: artifactPathPrefix(indexPath),
    knownVersions: Object.keys(versions),
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  return loadIndex(options).then(({ envelope, pathPrefix, knownVersions }) => {
    const miniSearch = MiniSearch.loadJSON(JSON.stringify(envelope.payload), {
      fields: envelope.fields,
      storeFields: envelope.storeFields,
    });
    const query = options.figmaId
      ? normalizeFigmaId(options.query)
      : options.query;
    const results = miniSearch
      .search(query, {
        ...envelope.searchOptions,
        filter: (result) =>
          (!options.kind || result.kind === options.kind) &&
          (!options.framework || result.framework === options.framework),
      })
      .sort(
        (left, right) =>
          exactMatchPriority(right, query) - exactMatchPriority(left, query) ||
          right.score - left.score
      )
      .slice(0, options.limit)
      .map((result) => {
        const item = {
          id: result.id,
          kind: result.kind,
          name: result.name,
          path: normalizePath(
            result.detailPath ?? result.path,
            pathPrefix,
            knownVersions
          ),
          score: result.score,
        };
        for (const field of [
          'tag',
          'description',
          'framework',
          'relatedComponents',
          'relatedExamples',
          'relatedBlocks',
          'documentation',
          'figmaMainComponentIds',
        ]) {
          if (result[field] !== undefined) item[field] = result[field];
        }
        return item;
      });
    process.stdout.write(`${JSON.stringify(results)}\n`);
  });
}

main().catch((error) => {
  process.stderr.write(
    `${JSON.stringify({
      error: error instanceof Error ? error.message : String(error),
    })}\n`
  );
  process.exitCode = 1;
});
