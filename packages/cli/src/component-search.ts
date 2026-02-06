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

export interface ComponentSearchResult {
  tag: string;
  description: string;
  score: number;
}

export interface ComponentDetails {
  tag: string;
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
    const pkgRoot = getPackageRoot();
    const indexPath = path.join(pkgRoot, 'component-search-index.json');

    if (!fs.existsSync(indexPath)) {
      throw new Error(`Component search index not found at: ${indexPath}`);
    }

    const indexContent = fs.readFileSync(indexPath, 'utf-8');

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
 * Get detailed API documentation for a specific component
 * Loads only the requested component from the full component-doc.json
 */
export async function getComponentDetails(
  componentTag: string
): Promise<ComponentDetails | null> {
  try {
    const pkgRoot = getPackageRoot();
    const docPath = path.join(pkgRoot, 'component-doc.json');
    const componentDoc = JSON.parse(fs.readFileSync(docPath, 'utf-8'));

    const component = componentDoc.components.find(
      (c: { tag: string }) => c.tag === componentTag
    );

    if (!component) {
      return null;
    }

    return {
      tag: component.tag,
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
    const pkgRoot = getPackageRoot();
    const indexPath = path.join(pkgRoot, 'component-index.json');
    const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

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
  const pkgRoot = getPackageRoot();
  return path.join(
    pkgRoot,
    'api-docs',
    'components',
    componentName,
    'readme.md'
  );
}
