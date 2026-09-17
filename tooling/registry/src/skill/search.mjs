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
const REGISTRY_TIMEOUT_MS = 5000;
const COMPONENT_KINDS = ['component', 'example', 'block'];
const FRAMEWORKS = ['html', 'react', 'angular', 'angular-standalone', 'vue'];
const SEARCH_FIELDS = [
  'kind',
  'name',
  'tag',
  'aliases',
  'description',
  'keywords',
  'relatedComponents',
  'figmaMainComponentIds',
  'apiMembers',
  'files',
  'sourceText',
];
const STORE_FIELDS = [
  'id',
  'kind',
  'name',
  'tag',
  'aliases',
  'description',
  'keywords',
  'framework',
  'path',
  'detailPath',
  'relatedComponents',
  'relatedExamples',
  'reactExamples',
  'relatedBlocks',
  'documentation',
  'figmaMainComponentIds',
];

class SearchError extends Error {
  constructor(message, status, details = {}) {
    super(message);
    this.name = 'SearchError';
    this.status = status;
    Object.assign(this, details);
  }
}

function usageError(message) {
  throw new SearchError(
    `${message}\nUsage: search.mjs [--query <text>] [--figma-id <id> ...] [--component-name <name> ...] [--kind component|example|block] [--framework html|react|angular|angular-standalone|vue] [--version <version-or-tag>] [--project-dir <path>] [--registry-url <url>] [--limit <n>] [--local-index <file>]`,
    'error'
  );
}

function parseArgs(argv) {
  const options = {
    registryUrl: DEFAULT_REGISTRY_URL,
    limit: 10,
    queries: [],
    figmaIds: [],
    componentNames: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (!argument.startsWith('--')) {
      usageError(`Unexpected argument '${argument}'`);
    }

    const name = argument.slice(2);
    if (name === 'help') {
      console.log(
        'Search versioned Siemens iX registry documentation. Use --local-index for offline searches. Without --version, the installed version in --project-dir is preferred.'
      );
      process.exit(0);
    }

    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      usageError(`Missing value for --${name}`);
    }
    index += 1;

    switch (name) {
      case 'query':
        options.queries.push(value);
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
      case 'project-dir':
        options.projectDir = value;
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
        options.figmaIds.push(value);
        break;
      case 'component-name':
        options.componentNames.push(value);
        break;
      default:
        usageError(`Unknown option '--${name}'`);
    }
  }

  if (
    options.queries.length === 0 &&
    options.figmaIds.length === 0 &&
    options.componentNames.length === 0
  ) {
    usageError(
      'at least one of --query, --figma-id, or --component-name is required'
    );
  }
  if (options.kind && !COMPONENT_KINDS.includes(options.kind)) {
    usageError(`Invalid kind '${options.kind}'`);
  }
  if (options.framework && !FRAMEWORKS.includes(options.framework)) {
    usageError(`Invalid framework '${options.framework}'`);
  }

  return options;
}

function normalizeFigmaId(value) {
  const normalized = String(value).trim();
  return /^\d+[-:]\d+$/.test(normalized)
    ? normalized.replace('-', ':')
    : normalized;
}

function normalizeName(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/^ix[-_]/, '')
    .replace(/^ix/, '')
    .replace(/[^a-z0-9]/g, '');
}

function tagToReactName(tag) {
  return `Ix${tag
    .replace(/^ix-/, '')
    .split('-')
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join('')}`;
}

function artifactPathPrefix(value) {
  const normalized = value.replace(/^\.\/+/, '').replace(/^\/+/, '');
  const separatorIndex = normalized.lastIndexOf('/');
  return separatorIndex === -1 ? '' : normalized.slice(0, separatorIndex);
}

function normalizePath(value, pathPrefix, knownVersions) {
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

function exactMatchPriority(result, query) {
  const rawQuery = String(query).trim().toLowerCase();
  const normalizedQuery = normalizeFigmaId(rawQuery);
  const names = [
    result.name,
    result.tag,
    ...(Array.isArray(result.aliases) ? result.aliases : []),
  ]
    .filter((value) => typeof value === 'string')
    .map((value) => value.toLowerCase());

  if (names.includes(rawQuery)) return 4;
  if (
    names.some(
      (value) => value.replace(/^ix-/, '') === rawQuery.replace(/^ix-/, '')
    )
  ) {
    return 3;
  }
  if (
    result.figmaMainComponentIds?.some(
      (id) => normalizeFigmaId(id.toLowerCase()) === normalizedQuery
    )
  ) {
    return 2;
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
    throw new SearchError(
      `Invalid documentation search index '${source}': expected schemaVersion 1 and a self-describing MiniSearch payload`,
      'error'
    );
  }

  for (const [field, boost] of Object.entries(value.searchOptions.boost)) {
    if (typeof boost !== 'number' || !Number.isFinite(boost) || boost <= 0) {
      throw new SearchError(
        `Invalid documentation search index '${source}': boost for '${field}' must be a positive number`,
        'error'
      );
    }
  }
  return value;
}

async function readJsonFile(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function packageRootFrom(projectDir, packageName) {
  const roots = [];
  let directory = path.resolve(projectDir);
  while (true) {
    roots.push(path.join(directory, 'node_modules', packageName));
    const parent = path.dirname(directory);
    if (parent === directory) break;
    directory = parent;
  }

  for (const root of roots) {
    const packageJsonPath = path.join(root, 'package.json');
    if (!(await pathExists(packageJsonPath))) continue;
    try {
      const metadata = await readJsonFile(packageJsonPath);
      if (!metadata.name || metadata.name === packageName) {
        return { root, metadata };
      }
    } catch {
      // Ignore an invalid candidate and continue with the next node_modules.
    }
  }
  return null;
}

async function resolveInstalledPackages(projectDir) {
  const core = await packageRootFrom(projectDir, '@siemens/ix');
  const wrappers = [];
  for (const packageName of [
    '@siemens/ix-react',
    '@siemens/ix-angular',
    '@siemens/ix-vue',
  ]) {
    const packageInfo = await packageRootFrom(projectDir, packageName);
    if (packageInfo) wrappers.push({ packageName, ...packageInfo });
  }
  return { core, wrappers };
}

function normalizeVersion(value) {
  return String(value ?? '')
    .trim()
    .replace(/^v/i, '');
}

function versionsEqual(left, right) {
  return normalizeVersion(left) === normalizeVersion(right);
}

async function fetchJson(url, description) {
  let response;
  try {
    response = await fetch(url, {
      signal: AbortSignal.timeout(REGISTRY_TIMEOUT_MS),
    });
  } catch (error) {
    throw new SearchError(
      `Failed to fetch ${description}: ${
        error instanceof Error ? error.message : String(error)
      }`,
      'version_unavailable'
    );
  }
  if (!response.ok) {
    throw new SearchError(
      `Failed to fetch ${description}: ${response.status}`,
      'version_unavailable'
    );
  }
  try {
    return await response.json();
  } catch (error) {
    throw new SearchError(
      `Failed to parse ${description}: ${
        error instanceof Error ? error.message : String(error)
      }`,
      'version_unavailable'
    );
  }
}

function resolveRegistryVersion(registry, requestedVersion) {
  const versions = registry?.versions ?? {};
  const candidate =
    (requestedVersion && registry['dist-tags']?.[requestedVersion]) ??
    requestedVersion ??
    registry['dist-tags']?.latest;
  if (!candidate) return null;
  if (Object.hasOwn(versions, candidate)) return candidate;
  if (
    candidate.startsWith('v') &&
    Object.hasOwn(versions, candidate.slice(1))
  ) {
    return candidate.slice(1);
  }
  if (Object.hasOwn(versions, `v${candidate}`)) return `v${candidate}`;
  return null;
}

async function loadRegistryIndex(options, installedVersion) {
  if (!options.version && !installedVersion) {
    throw new SearchError(
      'Could not resolve an installed IX version. Provide --version or install @siemens/ix (or a compatible framework wrapper) in --project-dir.',
      'version_unavailable'
    );
  }
  const registryUrl = options.registryUrl.replace(/\/+$/, '');
  const registry = await fetchJson(`${registryUrl}/registry.json`, 'registry');
  const requestedVersion = options.version ?? installedVersion;
  const version = resolveRegistryVersion(registry, requestedVersion);
  if (!version) {
    throw new SearchError(
      `Unknown registry version or tag '${requestedVersion ?? '<latest>'}'`,
      'version_unavailable',
      { version: requestedVersion ?? null }
    );
  }

  const indexPath = registry.versions[version]?.documentationSearchIndex;
  if (typeof indexPath !== 'string') {
    throw new SearchError(
      `Registry version '${version}' does not define documentationSearchIndex`,
      'version_unavailable',
      { version }
    );
  }

  const envelope = parseEnvelope(
    await fetchJson(
      `${registryUrl}/${indexPath}`,
      'documentation search index'
    ),
    indexPath
  );
  return {
    envelope,
    pathPrefix: artifactPathPrefix(indexPath),
    knownVersions: Object.keys(registry.versions ?? {}),
    source: 'registry',
    version,
    authoritativeFigmaMappings: true,
  };
}

function storedDocuments(envelope) {
  return Object.values(envelope.payload.storedFields ?? {}).filter(
    (document) => document && typeof document === 'object'
  );
}

function stringList(values) {
  return [
    ...new Set(
      values
        .flatMap((value) => (Array.isArray(value) ? value : [value]))
        .filter((value) => typeof value === 'string')
        .map((value) => value.trim())
        .filter(Boolean)
    ),
  ].sort((left, right) => left.localeCompare(right));
}

function docsTagValues(component, tagName) {
  return stringList(
    (component.docsTags ?? [])
      .filter((tag) => tag?.name === tagName)
      .flatMap((tag) => String(tag.text ?? '').split(','))
  );
}

function componentApiText(component) {
  const items = [
    ...(component.props ?? []),
    ...(component.methods ?? []),
    ...(component.events ?? []),
    ...(component.slots ?? []),
  ];
  return stringList(
    items.flatMap((item) =>
      [
        item.name,
        item.event,
        item.docs,
        item.signature,
        item.type,
        item.attr,
        item.default,
      ].filter((value) => typeof value === 'string')
    )
  );
}

function relativeProjectPath(projectDir, filePath) {
  const relative = path
    .relative(projectDir, filePath)
    .replaceAll(path.sep, '/');
  return relative || filePath;
}

async function collectFiles(directory, suffix) {
  if (!(await pathExists(directory))) return [];
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((left, right) =>
    left.name.localeCompare(right.name)
  )) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath, suffix)));
    } else if (entry.isFile() && entry.name.endsWith(suffix)) {
      files.push(entryPath);
    }
  }
  return files;
}

async function collectDeclarationFiles(directory) {
  return collectFiles(directory, '.d.ts');
}

async function readReactSymbols(reactPackage) {
  if (!reactPackage) return new Set();
  const distributionDirectory = path.join(reactPackage.root, 'dist');
  const files = [
    ...(await collectDeclarationFiles(
      path.join(distributionDirectory, 'types')
    )),
    ...(await collectFiles(distributionDirectory, '.js')),
  ];
  const symbols = new Set();
  for (const file of files) {
    const source = await fs.readFile(file, 'utf8');
    for (const match of source.matchAll(
      /\bexport\s+(?:declare\s+)?(?:const|class|function)\s+(Ix[A-Z][A-Za-z0-9]*)\b/g
    )) {
      if (match[1]) symbols.add(match[1]);
    }
    for (const match of source.matchAll(/\bexport\s*{([^}]*)}/g)) {
      for (const specifier of (match[1] ?? '').split(',')) {
        const exportedName = specifier
          .trim()
          .split(/\s+as\s+/)
          .at(-1);
        if (/^Ix[A-Z][A-Za-z0-9]*$/.test(exportedName ?? '')) {
          symbols.add(exportedName);
        }
      }
    }
  }
  return symbols;
}

function interfaceBodies(source) {
  const bodies = new Map();
  const declarationPattern = /interface\s+(Ix[A-Z][A-Za-z0-9]*)\s*{/g;
  for (const match of source.matchAll(declarationPattern)) {
    const name = match[1];
    const openIndex = match.index + match[0].length - 1;
    let depth = 0;
    let closeIndex = openIndex;
    for (; closeIndex < source.length; closeIndex += 1) {
      if (source[closeIndex] === '{') depth += 1;
      if (source[closeIndex] === '}') {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    const body = source.slice(openIndex + 1, closeIndex);
    bodies.set(name, `${bodies.get(name) ?? ''} ${body}`);
  }
  return bodies;
}

function componentTagFromReactName(name) {
  const value = name.replace(/^Ix/, '');
  const kebab = value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
  return `ix-${kebab}`;
}

async function declarationComponents(corePackage, projectDir, reactSymbols) {
  if (!corePackage) return [];

  const declarationDirectory = path.join(corePackage.root, 'components');
  const files = [
    ...(await collectDeclarationFiles(
      path.join(corePackage.root, 'dist', 'types')
    )),
  ];
  files.push(...(await collectDeclarationFiles(declarationDirectory)));
  for (const declarationPath of [
    corePackage.metadata.types,
    corePackage.metadata.typings,
    'components.d.ts',
  ]) {
    if (typeof declarationPath !== 'string') continue;
    const file = path.resolve(corePackage.root, declarationPath);
    if (file.endsWith('.d.ts') && (await pathExists(file))) {
      files.push(file);
    }
  }
  const uniqueFiles = [...new Set(files)].sort();
  const texts = await Promise.all(
    uniqueFiles.map(async (file) => ({
      file,
      source: await fs.readFile(file, 'utf8'),
    }))
  );
  const bodies = new Map();
  const tags = new Set();

  for (const { file, source } of texts) {
    for (const match of source.matchAll(/\b(ix-[a-z0-9-]+)\b/g)) {
      tags.add(match[1]);
    }
    const fileName = path.basename(file);
    if (/^ix-[a-z0-9-]+\.d\.ts$/.test(fileName)) {
      tags.add(fileName.slice(0, -'.d.ts'.length));
    }
  }

  for (const { source } of texts) {
    for (const [name, body] of interfaceBodies(source)) {
      const tag = componentTagFromReactName(name);
      if (!tags.has(tag)) {
        continue;
      }
      bodies.set(tag, `${bodies.get(tag) ?? ''} ${body}`);
    }
  }

  return [...tags]
    .sort((left, right) => left.localeCompare(right))
    .map((tag) => {
      const reactName = tagToReactName(tag);
      const declarationFile = path.join(declarationDirectory, `${tag}.d.ts`);
      const sourceFile = uniqueFiles.find((file) => file === declarationFile);
      const apiText = stringList([
        bodies.get(tag) ?? '',
        ...texts
          .filter(({ source: text }) => text.includes(`"${tag}"`))
          .map(({ source }) => source),
        ...(sourceFile
          ? texts
              .filter(({ file }) => file === sourceFile)
              .map(({ source }) => source)
          : []),
      ]);
      return {
        id: `component:${tag}`,
        kind: 'component',
        name: tag,
        tag,
        aliases: stringList([
          tag,
          ...(reactSymbols.has(reactName) ? [reactName] : []),
        ]),
        description:
          'Declaration-only metadata; component summary unavailable.',
        keywords: stringList([
          tag,
          ...(reactSymbols.has(reactName) ? [reactName] : []),
          apiText,
        ]).join(' '),
        path: relativeProjectPath(
          projectDir,
          sourceFile ??
            path.join(corePackage.root, 'dist', 'types', 'components.d.ts')
        ),
        detailPath: relativeProjectPath(
          projectDir,
          sourceFile ??
            path.join(corePackage.root, 'dist', 'types', 'components.d.ts')
        ),
        relatedComponents: [],
        relatedExamples: [],
        reactExamples: [],
        relatedBlocks: [],
        documentation: [],
        figmaMainComponentIds: [],
        apiMembers: apiText.join(' '),
        files: uniqueFiles
          .filter((file) => file === sourceFile)
          .map((file) => relativeProjectPath(projectDir, file))
          .join(' '),
        sourceText: `${tag} ${
          reactSymbols.has(reactName) ? reactName : ''
        } ${apiText.join(' ')}`,
      };
    });
}

async function componentDocDocuments(corePackage, projectDir, reactSymbols) {
  const componentDocPath = path.join(corePackage.root, 'component-doc.json');
  if (!(await pathExists(componentDocPath))) return null;

  const componentDoc = await readJsonFile(componentDocPath);
  if (!Array.isArray(componentDoc.components)) return null;
  const componentDocRelativePath = relativeProjectPath(
    projectDir,
    componentDocPath
  );

  const documents = await Promise.all(
    componentDoc.components.map(async (component) => {
      const tag = component.tag;
      const apiMembers = componentApiText(component);
      const documentation = docsTagValues(component, 'documentation');
      const figmaMainComponentIds = docsTagValues(
        component,
        'figma-main-component-id'
      ).map(normalizeFigmaId);
      const relatedComponents = stringList([
        ...(component.dependencies ?? []),
        ...(component.dependents ?? []),
      ]);
      const aliases = stringList([
        tag,
        ...(reactSymbols.has(tagToReactName(tag)) ? [tagToReactName(tag)] : []),
      ]);
      const apiDocsPath = path.join(
        corePackage.root,
        'api-docs',
        'components',
        tag.replace(/^ix-/, ''),
        'readme.md'
      );
      const detailPath = (await pathExists(apiDocsPath))
        ? relativeProjectPath(projectDir, apiDocsPath)
        : componentDocRelativePath;

      return {
        id: `component:${tag}`,
        kind: 'component',
        name: tag,
        tag,
        aliases,
        description: String(component.docs ?? component.overview ?? '').trim(),
        keywords: stringList([
          aliases,
          relatedComponents,
          apiMembers,
          documentation,
          figmaMainComponentIds,
        ]).join(' '),
        path: detailPath,
        detailPath,
        relatedComponents,
        relatedExamples: [],
        reactExamples: [],
        relatedBlocks: [],
        documentation,
        figmaMainComponentIds,
        apiMembers: apiMembers.join(' '),
        files: typeof component.filePath === 'string' ? component.filePath : '',
        sourceText: [
          tag,
          ...aliases,
          component.filePath ?? '',
          component.docs ?? component.overview ?? '',
          ...apiMembers,
          ...documentation,
          ...figmaMainComponentIds,
        ].join(' '),
      };
    })
  );
  return documents.sort((left, right) => left.id.localeCompare(right.id));
}

function createMemoryIndex(documents) {
  const miniSearch = new MiniSearch({
    fields: SEARCH_FIELDS,
    storeFields: STORE_FIELDS,
  });
  miniSearch.addAll(documents);
  return {
    envelope: {
      schemaVersion: 1,
      fields: SEARCH_FIELDS,
      storeFields: STORE_FIELDS,
      searchOptions: {
        boost: {
          kind: 1,
          name: 3,
          tag: 3,
          aliases: 3,
          description: 2,
          keywords: 2,
          relatedComponents: 1.5,
          figmaMainComponentIds: 2,
          apiMembers: 1.5,
          files: 1.5,
          sourceText: 1,
        },
        fuzzy: 0.2,
        prefix: true,
      },
      payload: miniSearch.toJSON(),
    },
    pathPrefix: '',
    knownVersions: [],
  };
}

async function loadInstalledFallback(projectDir, packages) {
  if (!packages.core) return null;
  const reactPackage = packages.wrappers.find(
    ({ packageName }) => packageName === '@siemens/ix-react'
  );
  const reactSymbols = await readReactSymbols(reactPackage);
  const metadataDocuments = await componentDocDocuments(
    packages.core,
    projectDir,
    reactSymbols
  );
  if (metadataDocuments) {
    return {
      ...createMemoryIndex(metadataDocuments),
      source: 'installed-component-doc',
      version: packages.core.metadata.version ?? null,
      authoritativeFigmaMappings: true,
    };
  }

  const declarationDocuments = await declarationComponents(
    packages.core,
    projectDir,
    reactSymbols
  );
  if (declarationDocuments.length === 0) return null;
  return {
    ...createMemoryIndex(declarationDocuments),
    source: 'installed-declarations',
    version: packages.core.metadata.version ?? null,
    authoritativeFigmaMappings: false,
  };
}

async function loadIndex(options) {
  const projectDir = path.resolve(options.projectDir ?? process.cwd());
  const packages = await resolveInstalledPackages(projectDir);
  const installedVersion =
    packages.core?.metadata.version ??
    packages.wrappers.find(({ metadata }) => metadata.version)?.metadata
      .version;

  if (options.localIndex) {
    const source = path.resolve(options.localIndex);
    return {
      envelope: parseEnvelope(await readJsonFile(source), options.localIndex),
      pathPrefix: '',
      knownVersions: [],
      source: 'local-index',
      version: options.version ?? null,
      authoritativeFigmaMappings: true,
    };
  }

  try {
    return await loadRegistryIndex(options, installedVersion);
  } catch (error) {
    if (
      !(error instanceof SearchError) ||
      error.status !== 'version_unavailable'
    ) {
      throw error;
    }

    const fallback = await loadInstalledFallback(projectDir, packages);
    const explicitVersionMatchesInstalled =
      !options.version ||
      Boolean(
        installedVersion && versionsEqual(options.version, installedVersion)
      );
    if (fallback && explicitVersionMatchesInstalled) {
      return fallback;
    }
    throw error;
  }
}

function componentNameMatches(document, componentName) {
  const rawQuery = String(componentName).trim();
  const aliases = Array.isArray(document.aliases) ? document.aliases : [];
  if (/^Ix[A-Z]/.test(rawQuery)) {
    return aliases.some(
      (alias) =>
        typeof alias === 'string' &&
        alias.toLowerCase() === rawQuery.toLowerCase()
    );
  }

  const query = normalizeName(rawQuery);
  if (!query || document.kind !== 'component') return false;
  return [
    document.name,
    document.tag,
    ...aliases.filter((alias) => !/^Ix[A-Z]/.test(alias)),
  ]
    .filter((value) => typeof value === 'string')
    .some((value) => normalizeName(value) === query);
}

function filterMatches(document, options, effectiveKind) {
  if (document.kind !== effectiveKind) return false;
  if (options.framework && document.kind !== 'component') {
    return document.framework === options.framework;
  }
  return true;
}

function matchingFigmaDocuments(documents, figmaId, options, effectiveKind) {
  const normalized = normalizeFigmaId(figmaId).toLowerCase();
  return documents.filter(
    (document) =>
      filterMatches(document, options, effectiveKind) &&
      document.kind === 'component' &&
      Array.isArray(document.figmaMainComponentIds) &&
      document.figmaMainComponentIds.some(
        (id) => normalizeFigmaId(id).toLowerCase() === normalized
      )
  );
}

function matchingComponentNameDocuments(
  documents,
  componentName,
  options,
  effectiveKind
) {
  return documents.filter(
    (document) =>
      filterMatches(document, options, effectiveKind) &&
      componentNameMatches(document, componentName)
  );
}

function resultItem(result, pathPrefix, knownVersions) {
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
    'reactExamples',
    'relatedBlocks',
    'documentation',
    'figmaMainComponentIds',
    'aliases',
  ]) {
    if (result[field] !== undefined) item[field] = result[field];
  }
  if (Array.isArray(result.reactExamples)) {
    item.reactExamples = result.reactExamples.map((example) => ({
      ...example,
      path: normalizePath(example.path, pathPrefix, knownVersions),
    }));
  }
  if (item.kind === 'component') {
    item.aliases ??= [item.tag ?? item.name];
    item.reactExamples ??= [];
    item.documentation ??= [];
    item.relatedExamples ??= [];
    item.relatedBlocks ??= [];
    item.relatedComponents ??= [];
    item.figmaMainComponentIds ??= [];
  }
  return item;
}

function diagnostic(type, value, status, message) {
  return { type, value, status, message };
}

async function search(options, loaded) {
  const { envelope } = loaded;
  const miniSearch = MiniSearch.loadJSON(JSON.stringify(envelope.payload), {
    fields: envelope.fields,
    storeFields: envelope.storeFields,
  });
  const documents = storedDocuments(envelope);
  const effectiveKind = options.kind ?? 'component';
  const candidates = new Map();
  let matchedInput = false;

  const addCandidate = (document, score, priority) => {
    if (!filterMatches(document, options, effectiveKind)) return;
    const current = candidates.get(document.id);
    if (!current) {
      candidates.set(document.id, { document, score, priority });
    } else {
      current.score = Math.max(current.score, score);
      current.priority = Math.max(current.priority, priority);
    }
    matchedInput = true;
  };

  for (const query of options.queries) {
    const results = miniSearch.search(query, {
      ...envelope.searchOptions,
      filter: (result) => filterMatches(result, options, effectiveKind),
    });
    for (const result of results) {
      addCandidate(result, result.score, exactMatchPriority(result, query));
    }
  }

  for (const componentName of options.componentNames) {
    const matches = matchingComponentNameDocuments(
      documents,
      componentName,
      options,
      effectiveKind
    );
    if (matches.length === 0) continue;
    matchedInput = true;
    for (const document of matches) addCandidate(document, 1, 5);
  }

  const unmatched = [];
  for (const figmaId of options.figmaIds) {
    if (!loaded.authoritativeFigmaMappings) {
      unmatched.push(
        diagnostic(
          'figma-id',
          normalizeFigmaId(figmaId),
          'figma_mapping_unavailable',
          'Installed declarations do not contain authoritative Figma mappings.'
        )
      );
      continue;
    }
    const matches = matchingFigmaDocuments(
      documents,
      figmaId,
      options,
      effectiveKind
    );
    if (matches.length === 0) {
      unmatched.push(
        diagnostic(
          'figma-id',
          normalizeFigmaId(figmaId),
          'figma_main_id_unregistered',
          'No registered component has this Figma main component ID.'
        )
      );
      continue;
    }
    matchedInput = true;
    for (const document of matches) addCandidate(document, 1, 6);
  }

  for (const componentName of options.componentNames) {
    if (
      matchingComponentNameDocuments(
        documents,
        componentName,
        options,
        effectiveKind
      ).length === 0
    ) {
      unmatched.push(
        diagnostic(
          'component-name',
          componentName,
          'no_match',
          'No registered component has this implementation or design name.'
        )
      );
    }
  }

  const orderedCandidates = [...candidates.values()].sort(
    (left, right) =>
      right.priority - left.priority ||
      right.score - left.score ||
      left.document.id.localeCompare(right.document.id)
  );
  const results = orderedCandidates
    .slice(0, options.limit)
    .map(({ document, score }) =>
      resultItem(
        { ...document, score },
        loaded.pathPrefix,
        loaded.knownVersions
      )
    );

  let status = 'no_match';
  if (results.length > 0 || matchedInput) {
    status = 'ok';
  } else if (
    unmatched.some(
      ({ status: inputStatus }) => inputStatus === 'figma_mapping_unavailable'
    )
  ) {
    status = 'figma_mapping_unavailable';
  } else if (
    unmatched.some(
      ({ status: inputStatus }) => inputStatus === 'figma_main_id_unregistered'
    )
  ) {
    status = 'figma_main_id_unregistered';
  }

  const envelopeResult = {
    status,
    version: loaded.version ?? null,
    source: loaded.source,
    results,
  };
  if (unmatched.length > 0) envelopeResult.unmatched = unmatched;
  return envelopeResult;
}

function failureEnvelope(error) {
  return {
    status:
      error instanceof SearchError && error.status
        ? error.status
        : 'version_unavailable',
    version: error instanceof SearchError ? error.version ?? null : null,
    source: error instanceof SearchError ? error.source ?? null : null,
    results: [],
    error: error instanceof Error ? error.message : String(error),
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const loaded = await loadIndex(options);
  process.stdout.write(`${JSON.stringify(await search(options, loaded))}\n`);
}

main().catch((error) => {
  const result = failureEnvelope(error);
  process.stdout.write(`${JSON.stringify(result)}\n`);
  process.exitCode = result.status === 'error' ? 1 : 0;
});
