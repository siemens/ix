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
import {
  fetchRegistryArtifact,
  fetchValidatedRegistryIndex,
  resolveRegistryVersion,
  type RegistryIndex,
} from './registry';
import { searchDocumentation } from './documentation-search';

const DEFAULT_REGISTRY_BASE_URL = 'https://siemens.github.io/ix';

type ComponentJsonType =
  | 'componentDoc'
  | 'componentRelatedExamples'
  | 'componentRelatedBlocks';

type ComponentDocTag = {
  name: string;
  text?: string;
};

type ComponentProp = {
  name: string;
  type?: string;
  docs?: string;
  default?: string;
};

type ComponentEvent = {
  event?: string;
  docs?: string;
};

type ComponentMethod = {
  name: string;
  signature?: string;
  docs?: string;
};

type ComponentSlot = {
  name: string;
  docs?: string;
};

type ComponentRecord = {
  tag: string;
  docs?: string;
  overview?: string;
  docsTags?: ComponentDocTag[];
  props?: ComponentProp[];
  events?: ComponentEvent[];
  methods?: ComponentMethod[];
  slots?: ComponentSlot[];
  dependencies?: string[];
  dependents?: string[];
};

type ComponentDocJson = {
  components: ComponentRecord[];
};

type ComponentArtifactOptions = {
  baseUrl?: string;
  version?: string;
};

export interface ComponentSearchResult {
  tag: string;
  description: string;
  score: number;
}

export interface ComponentDetails {
  tag: string;
  documentation?: string[];
  documentationContent?: string[];
  relatedExamples?: string[];
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

function packageVersion(packageRoot: string): string | null {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8')
    ) as { version?: unknown };
    return typeof packageJson.version === 'string' ? packageJson.version : null;
  } catch {
    return null;
  }
}

function versionsMatch(left: string, right: string): boolean {
  return left.replace(/^v/, '') === right.replace(/^v/, '');
}

function findLocalComponentsRegistryPath(): string | null {
  let currentDir = process.cwd();
  const root = path.parse(currentDir).root;

  while (currentDir !== root) {
    const candidatePaths = [
      path.join(currentDir, 'tooling', 'registry', 'registry.json'),
      path.join(currentDir, 'registry.json'),
    ];
    for (const candidatePath of candidatePaths) {
      if (fs.existsSync(candidatePath)) return candidatePath;
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break;
    currentDir = parentDir;
  }

  return null;
}

function readLocalRegistryArtifact(
  jsonType: ComponentJsonType,
  versionRef?: string
): string | null {
  const registryPath = findLocalComponentsRegistryPath();
  if (!registryPath) return null;

  const registryDir = path.dirname(registryPath);
  const registry = JSON.parse(
    fs.readFileSync(registryPath, 'utf8')
  ) as RegistryIndex;
  const selectedVersion = resolveRegistryVersion(registry, versionRef);
  const artifactPath =
    registry.versions[selectedVersion]?.components?.[jsonType];
  if (!artifactPath) return null;

  const normalizedArtifactPath = normalizePath(artifactPath);
  const scopedPath = normalizedArtifactPath.startsWith(`${selectedVersion}/`)
    ? normalizedArtifactPath
    : `${selectedVersion}/${normalizedArtifactPath}`;
  for (const candidatePath of [
    path.join(registryDir, scopedPath),
    path.join(registryDir, normalizedArtifactPath),
  ]) {
    if (fs.existsSync(candidatePath)) {
      return fs.readFileSync(candidatePath, 'utf8');
    }
  }

  return null;
}

function packageArtifactPath(
  packageRoot: string,
  jsonType: ComponentJsonType
): string {
  const packagePathByType: Record<ComponentJsonType, string> = {
    componentDoc: 'component-doc.json',
    componentRelatedExamples: 'component-related-examples.json',
    componentRelatedBlocks: 'component-related-blocks.json',
  };
  return path.join(packageRoot, packagePathByType[jsonType]);
}

async function loadComponentJsonArtifact(
  jsonType: ComponentJsonType,
  options: ComponentArtifactOptions = {}
): Promise<string> {
  const packageRoot = tryGetPackageRoot();

  if (!options.baseUrl) {
    if (options.version) {
      return loadComponentJsonArtifact(jsonType, {
        baseUrl: DEFAULT_REGISTRY_BASE_URL,
        version: options.version,
      });
    }

    if (packageRoot) {
      const localPackagePath = packageArtifactPath(packageRoot, jsonType);
      if (fs.existsSync(localPackagePath)) {
        return fs.readFileSync(localPackagePath, 'utf8');
      }
    }

    const localRegistryContent = readLocalRegistryArtifact(
      jsonType,
      options.version
    );
    if (localRegistryContent) return localRegistryContent;

    const registry = await fetchValidatedRegistryIndex(
      DEFAULT_REGISTRY_BASE_URL
    );
    const selectedVersion = resolveRegistryVersion(registry, options.version);
    const artifactPath =
      registry.versions[selectedVersion]?.components?.[jsonType];
    if (!artifactPath) {
      throw new Error(
        `Registry version '${selectedVersion}' does not define component artifact '${jsonType}'`
      );
    }
    return JSON.stringify(
      await fetchRegistryArtifact<unknown>(
        DEFAULT_REGISTRY_BASE_URL,
        artifactPath
      )
    );
  }

  const registry = await fetchValidatedRegistryIndex(options.baseUrl);
  const selectedVersion = resolveRegistryVersion(registry, options.version);
  if (
    packageRoot &&
    packageVersion(packageRoot) &&
    versionsMatch(selectedVersion, packageVersion(packageRoot)!)
  ) {
    const localPackagePath = packageArtifactPath(packageRoot, jsonType);
    if (fs.existsSync(localPackagePath)) {
      return fs.readFileSync(localPackagePath, 'utf8');
    }
  }

  const artifactPath =
    registry.versions[selectedVersion]?.components?.[jsonType];
  if (!artifactPath) {
    throw new Error(
      `Registry version '${selectedVersion}' does not define component artifact '${jsonType}'`
    );
  }
  return JSON.stringify(
    await fetchRegistryArtifact<unknown>(options.baseUrl, artifactPath)
  );
}

function parseComponentDoc(content: string): ComponentDocJson {
  return JSON.parse(content) as ComponentDocJson;
}

function componentTagValues(
  component: ComponentRecord,
  tagName: string
): string[] {
  return (component.docsTags ?? [])
    .filter((tag) => tag.name === tagName)
    .flatMap((tag) => (tag.text ?? '').split(','))
    .map((value) => value.trim())
    .filter(Boolean);
}

function normalizeFigmaId(value: string): string {
  return /^\d+[-:]\d+$/.test(value) ? value.replace('-', ':') : value;
}

function componentFigmaIds(component: ComponentRecord): string[] {
  return [
    ...new Set(
      componentTagValues(component, 'figma-main-component-id').map(
        normalizeFigmaId
      )
    ),
  ].sort();
}

function componentDocumentation(component: ComponentRecord): string[] {
  return [...new Set(componentTagValues(component, 'documentation'))].sort();
}

/**
 * Search components through the versioned central documentation index.
 */
export async function searchComponents(
  query: string,
  options: { limit?: number; baseUrl?: string; version?: string } = {}
): Promise<ComponentSearchResult[]> {
  try {
    const results = await searchDocumentation({
      baseUrl: options.baseUrl ?? DEFAULT_REGISTRY_BASE_URL,
      query,
      kind: 'component',
      version: options.version,
      limit: options.limit ?? 10,
    });
    return results.map((result) => ({
      tag: result.tag ?? result.name,
      description: result.description ?? '',
      score: result.score,
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
 */
export async function fetchDocumentationContent(
  url: string
): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (res.ok) return await res.text();
  } catch {
    // Documentation links are supporting content; API metadata remains usable.
  }
  return null;
}

export async function getComponentDetails(
  componentTag: string,
  options: ComponentArtifactOptions = {}
): Promise<ComponentDetails | null> {
  try {
    const artifactOptions = {
      baseUrl: options.baseUrl,
      version: options.version,
    };
    const componentDoc = parseComponentDoc(
      await loadComponentJsonArtifact('componentDoc', artifactOptions)
    );
    const relatedExamples = JSON.parse(
      await loadComponentJsonArtifact(
        'componentRelatedExamples',
        artifactOptions
      )
    ) as Record<string, string[]>;
    const component = componentDoc.components.find(
      (candidate) => candidate.tag === componentTag
    );
    if (!component) return null;

    const documentation = componentDocumentation(component);
    const documentationContent = (
      await Promise.all(documentation.map(fetchDocumentationContent))
    ).filter((content): content is string => content !== null);

    return {
      tag: component.tag,
      documentation,
      documentationContent,
      relatedExamples: relatedExamples[component.tag] ?? [],
      props: component.props?.map((prop) => ({
        name: prop.name,
        type: prop.type ?? '',
        docs: prop.docs ?? '',
        default: prop.default,
      })),
      events: component.events?.map((event) => ({
        name: event.event ?? '',
        docs: event.docs ?? '',
      })),
      methods: component.methods?.map((method) => ({
        name: method.name,
        signature: method.signature ?? '',
        docs: method.docs ?? '',
      })),
      slots: component.slots?.map((slot) => ({
        name: slot.name,
        docs: slot.docs ?? '',
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

export async function listAllComponents(
  options: ComponentArtifactOptions = {}
): Promise<Array<{ tag: string; description: string }>> {
  try {
    const componentDoc = parseComponentDoc(
      await loadComponentJsonArtifact('componentDoc', options)
    );
    return componentDoc.components.map((component) => ({
      tag: component.tag,
      description: componentDocumentationDescription(component),
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

function componentDocumentationDescription(component: ComponentRecord): string {
  return component.docs ?? component.overview ?? '';
}

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

export async function getFigmaComponentMapping(
  query: string,
  options: ComponentArtifactOptions = {}
): Promise<{
  queryType: 'figma-id' | 'component-tag';
  results: FigmaComponentMapping[];
}> {
  try {
    const componentDoc = parseComponentDoc(
      await loadComponentJsonArtifact('componentDoc', options)
    );
    const isFigmaId = /^\d+[:-]\d+$/.test(query);
    if (isFigmaId) {
      const normalizedQuery = normalizeFigmaId(query);
      return {
        queryType: 'figma-id',
        results: componentDoc.components
          .filter((component) =>
            componentFigmaIds(component).includes(normalizedQuery)
          )
          .map((component) => ({
            componentTag: component.tag,
            figmaMainComponentIds: componentFigmaIds(component),
            documentation: componentDocumentation(component),
          })),
      };
    }

    const component = componentDoc.components.find(
      (candidate) => candidate.tag === query || candidate.tag === `ix-${query}`
    );
    return {
      queryType: 'component-tag',
      results: component
        ? [
            {
              componentTag: component.tag,
              figmaMainComponentIds: componentFigmaIds(component),
              documentation: componentDocumentation(component),
            },
          ]
        : [],
    };
  } catch (error) {
    console.error('Error searching Figma main component mapping:', error);
    throw new Error(
      `Failed to search Figma main component mapping: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

export async function listComponentsWithFigmaIds(
  options: ComponentArtifactOptions = {}
): Promise<FigmaComponentMapping[]> {
  try {
    const componentDoc = parseComponentDoc(
      await loadComponentJsonArtifact('componentDoc', options)
    );
    return componentDoc.components
      .map((component) => ({
        componentTag: component.tag,
        figmaMainComponentIds: componentFigmaIds(component),
        documentation: componentDocumentation(component),
      }))
      .filter((component) => component.figmaMainComponentIds.length > 0);
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
