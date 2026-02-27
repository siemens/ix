/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs';
import path from 'path';
import MiniSearch from 'minisearch';

const DEFAULT_REGISTRY_BASE_URL = 'https://siemens.github.io/ix';

type ComponentRegistryEntry = {
  components: {
    componentDoc: string;
    componentIndex: string;
    componentSearchIndex: string;
  };
};

type ComponentsRegistryIndex = {
  'dist-tags': Record<string, string>;
  versions: Record<string, ComponentRegistryEntry>;
};

type ComponentJsonType =
  | 'componentDoc'
  | 'componentIndex'
  | 'componentSearchIndex';

export interface ComponentSearchResult {
  tag: string;
  description: string;
  score: number;
}

export interface ComponentDetails {
  tag: string;
  documentation?: string[];
  documentationContent?: string[];
  props?: Array<{
    name: string;
    type: string;
    docs: string;
    default?: string;
  }>;
  events?: Array<{
    name: string;
    docs: string;
  }>;
  methods?: Array<{
    name: string;
    signature: string;
    docs: string;
  }>;
  slots?: Array<{
    name: string;
    docs: string;
  }>;
  dependencies?: string[];
  dependents?: string[];
}

function getPackageRoot(): string {
  let currentDir = process.cwd();
  const root = path.parse(currentDir).root;

  while (currentDir !== root) {
    const candidatePath = path.join(
      currentDir,
      'node_modules',
      '@siemens',
      'ix'
    );
    if (fs.existsSync(candidatePath)) {
      return candidatePath;
    }
    // Try parent directory
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break;
    currentDir = parentDir;
  }

  throw new Error(
    `@siemens/ix package not found. Make sure it is installed in your project.\nSearched from: ${process.cwd()}`
  );
}

function tryGetPackageRoot(): string | null {
  try {
    return getPackageRoot();
  } catch {
    return null;
  }
}

function normalizePath(value: string): string {
  return value.replace(/^\.\//, '').replace(/^\/+/, '');
}

function withVersionPrefix(
  value: string,
  version: string,
  knownVersions: string[]
): string {
  const normalizedValue = normalizePath(value);

  if (normalizedValue.startsWith(`${version}/`)) {
    return normalizedValue;
  }

  const [head, ...rest] = normalizedValue.split('/');
  if (knownVersions.includes(head) && rest.length > 0) {
    return `${version}/${rest.join('/')}`;
  }

  return `${version}/${normalizedValue}`;
}

function resolveRegistryVersion(registry: ComponentsRegistryIndex): string {
  const latest = registry['dist-tags']?.latest;

  if (!latest) {
    throw new Error('Components registry latest version is missing');
  }

  if (registry.versions[latest]) {
    return latest;
  }

  if (latest.startsWith('v') && registry.versions[latest.slice(1)]) {
    return latest.slice(1);
  }

  const vPrefixedLatest = `v${latest}`;
  if (registry.versions[vPrefixedLatest]) {
    return vPrefixedLatest;
  }

  throw new Error(
    `Components registry latest version '${latest}' is not available in versions`
  );
}

function findLocalComponentsRegistryPath(): string | null {
  let currentDir = process.cwd();
  const root = path.parse(currentDir).root;

  while (currentDir !== root) {
    const candidatePaths = [
      path.join(currentDir, 'tooling', 'registry', 'components-registry.json'),
      path.join(currentDir, 'components-registry.json'),
    ];

    for (const candidatePath of candidatePaths) {
      if (fs.existsSync(candidatePath)) {
        return candidatePath;
      }
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break;
    currentDir = parentDir;
  }

  return null;
}

function readLocalRegistryArtifact(jsonType: ComponentJsonType): string | null {
  const registryPath = findLocalComponentsRegistryPath();
  if (!registryPath) {
    return null;
  }

  const registryDir = path.dirname(registryPath);
  const registry = JSON.parse(
    fs.readFileSync(registryPath, 'utf-8')
  ) as ComponentsRegistryIndex;

  const selectedVersion = resolveRegistryVersion(registry);
  const selectedEntry = registry.versions[selectedVersion];
  const artifactPath = selectedEntry?.components?.[jsonType];

  if (!artifactPath) {
    return null;
  }

  const scopedPath = withVersionPrefix(
    artifactPath,
    selectedVersion,
    Object.keys(registry.versions)
  );

  const candidatePaths = [
    path.join(registryDir, scopedPath),
    path.join(registryDir, normalizePath(artifactPath)),
  ];

  for (const candidatePath of candidatePaths) {
    if (fs.existsSync(candidatePath)) {
      return fs.readFileSync(candidatePath, 'utf-8');
    }
  }

  return null;
}

async function readRemoteRegistryArtifact(
  jsonType: ComponentJsonType
): Promise<string> {
  const registryResponse = await fetch(
    `${DEFAULT_REGISTRY_BASE_URL}/components-registry.json`
  );

  if (!registryResponse.ok) {
    throw new Error(
      `Failed to fetch components registry: ${registryResponse.status}`
    );
  }

  const registry = (await registryResponse.json()) as ComponentsRegistryIndex;
  const selectedVersion = resolveRegistryVersion(registry);
  const selectedEntry = registry.versions[selectedVersion];
  const artifactPath = selectedEntry?.components?.[jsonType];

  if (!artifactPath) {
    throw new Error(
      `Components registry does not define artifact: ${jsonType}`
    );
  }

  const scopedPath = withVersionPrefix(
    artifactPath,
    selectedVersion,
    Object.keys(registry.versions)
  );

  const candidatePaths = [scopedPath, normalizePath(artifactPath)];

  for (const candidatePath of candidatePaths) {
    const artifactResponse = await fetch(
      `${DEFAULT_REGISTRY_BASE_URL}/${candidatePath}`
    );
    if (artifactResponse.ok) {
      return await artifactResponse.text();
    }
  }

  throw new Error(
    `Failed to fetch component artifact '${jsonType}' from registry`
  );
}

async function loadComponentJsonArtifact(
  jsonType: ComponentJsonType
): Promise<string> {
  const packageRoot = tryGetPackageRoot();
  if (packageRoot) {
    const packagePathByType: Record<ComponentJsonType, string> = {
      componentDoc: 'component-doc.json',
      componentIndex: 'component-index.json',
      componentSearchIndex: 'component-search-index.json',
    };

    const packageArtifactPath = path.join(
      packageRoot,
      packagePathByType[jsonType]
    );
    if (fs.existsSync(packageArtifactPath)) {
      return fs.readFileSync(packageArtifactPath, 'utf-8');
    }
  }

  const localRegistryContent = readLocalRegistryArtifact(jsonType);
  if (localRegistryContent) {
    return localRegistryContent;
  }

  return await readRemoteRegistryArtifact(jsonType);
}

/**
 * Search for components using the lightweight MiniSearch index
 * @returns Top matching components with scores
 */
export async function searchComponents(
  query: string,
  options: { limit?: number } = {}
): Promise<ComponentSearchResult[]> {
  const { limit = 10 } = options;

  try {
    const indexContent = await loadComponentJsonArtifact(
      'componentSearchIndex'
    );

    const miniSearch = MiniSearch.loadJSON(indexContent, {
      fields: ['tag', 'description', 'dependencies'],
      storeFields: ['tag', 'description'],
    });

    const results = miniSearch.search(query, {
      boost: { tag: 3, description: 1 },
      fuzzy: 0.2,
      prefix: true,
    });

    return results.slice(0, limit).map((r) => ({
      tag: r.tag,
      description: r.description,
      score: r.score,
    }));
  } catch (error) {
    console.error('Error searching components:', error);
    throw new Error(
      `Failed to search components: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Fetch the markdown content from a documentation URL.
 * Returns the text on success, or null if the fetch fails.
 */
export async function fetchDocumentationContent(
  url: string
): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (res.ok) return await res.text();
  } catch {
    // ignore fetch errors
  }
  return null;
}

/**
 * Get detailed API documentation for a specific component
 * Loads only the requested component from the full component-doc.json
 */
export async function getComponentDetails(
  componentTag: string
): Promise<ComponentDetails | null> {
  try {
    const componentDoc = JSON.parse(
      await loadComponentJsonArtifact('componentDoc')
    );

    const component = componentDoc.components.find(
      (c: { tag: string }) => c.tag === componentTag
    );

    if (!component) {
      return null;
    }

    const docUrls: string[] =
      component.docsTags
        ?.filter((t: { name: string }) => t.name === 'documentation')
        .map((t: { text: string }) => t.text.trim()) ?? [];

    const documentationContent = (
      await Promise.all(docUrls.map(fetchDocumentationContent))
    ).filter((r): r is string => r !== null);

    return {
      tag: component.tag,
      documentation: docUrls,
      documentationContent,
      props: component.props?.map((p: any) => ({
        name: p.name,
        type: p.type,
        docs: p.docs,
        default: p.default,
      })),
      events: component.events?.map((e: any) => ({
        name: e.event,
        docs: e.docs,
      })),
      methods: component.methods?.map((m: any) => ({
        name: m.name,
        signature: m.signature,
        docs: m.docs,
      })),
      slots: component.slots?.map((s: any) => ({
        name: s.name,
        docs: s.docs,
      })),
      dependencies: component.dependencies,
      dependents: component.dependents,
    };
  } catch (error) {
    console.error('Error loading component details:', error);
    throw new Error(
      `Failed to load component details: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * List all available components with categories
 */
export async function listAllComponents(): Promise<
  Array<{
    tag: string;
    description: string;
  }>
> {
  try {
    const index = JSON.parse(await loadComponentJsonArtifact('componentIndex'));

    return index.components.map((c: any) => ({
      tag: c.tag,
      description: c.description,
    }));
  } catch (error) {
    console.error('Error listing components:', error);
    throw new Error(
      `Failed to list components: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Get the markdown documentation path for a component
 */
export function getComponentMarkdownPath(componentTag: string): string {
  const componentName = componentTag.replace(/^ix-/, '');
  const pkgRoot = tryGetPackageRoot();

  if (!pkgRoot) {
    return `Local markdown unavailable for ${componentTag} (install @siemens/ix for API markdown files)`;
  }

  return path.join(
    pkgRoot,
    'api-docs',
    'components',
    componentName,
    'readme.md'
  );
}

export interface FigmaComponentMapping {
  componentTag: string;
  figmaMainComponentIds: string[];
  documentation: string[];
}

/**
 * Find IX components by Figma main component ID or get Figma main component IDs for a specific IX component
 */
export async function getFigmaComponentMapping(query: string): Promise<{
  queryType: 'figma-id' | 'component-tag';
  results: FigmaComponentMapping[];
}> {
  try {
    const index = JSON.parse(await loadComponentJsonArtifact('componentIndex'));

    // Check if query looks like a Figma main component ID (e.g., "42365:39459" or "42365-39459")
    const isFigmaId = /^\d+[:-]\d+$/.test(query);

    if (isFigmaId) {
      // Normalize the Figma ID format (both : and - are valid separators)
      const normalizedQuery = query.replace('-', ':');

      // Search for components that have this Figma main component ID
      const matchingComponents = index.components
        .filter(
          (c: any) =>
            c.figmaMainComponentIds &&
            c.figmaMainComponentIds.some(
              (id: string) => id === normalizedQuery || id === query
            )
        )
        .map((c: any) => ({
          componentTag: c.tag,
          figmaMainComponentIds: c.figmaMainComponentIds,
          documentation: c.documentation || [],
        }));

      return {
        queryType: 'figma-id',
        results: matchingComponents,
      };
    } else {
      // Search by component tag
      const component = index.components.find(
        (c: any) => c.tag === query || c.tag === `ix-${query}`
      );

      if (!component) {
        return {
          queryType: 'component-tag',
          results: [],
        };
      }

      return {
        queryType: 'component-tag',
        results: [
          {
            componentTag: component.tag,
            figmaMainComponentIds: component.figmaMainComponentIds || [],
            documentation: component.documentation || [],
          },
        ],
      };
    }
  } catch (error) {
    console.error('Error searching Figma main component mapping:', error);
    throw new Error(
      `Failed to search Figma main component mapping: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * List all components that have Figma main component IDs
 */
export async function listComponentsWithFigmaIds(): Promise<
  FigmaComponentMapping[]
> {
  try {
    const index = JSON.parse(await loadComponentJsonArtifact('componentIndex'));

    return index.components
      .filter(
        (c: any) =>
          c.figmaMainComponentIds && c.figmaMainComponentIds.length > 0
      )
      .map((c: any) => ({
        componentTag: c.tag,
        figmaMainComponentIds: c.figmaMainComponentIds,
        documentation: c.documentation || [],
      }));
  } catch (error) {
    console.error(
      'Error listing components with Figma main component IDs:',
      error
    );
    throw new Error(
      `Failed to list components with Figma main component IDs: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
