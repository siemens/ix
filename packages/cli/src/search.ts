/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  searchDocumentation,
  type DocumentationFramework,
} from './documentation-search';

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
  framework: DocumentationFramework;
  version?: string;
  limit?: number;
}

export interface ExampleSearchResult {
  id: string;
  name: string;
  path: string;
  score: number;
}

/**
 * Search blocks in the versioned central documentation index.
 */
export async function searchBlocks(
  options: SearchOptions
): Promise<BlockSearchResult[]> {
  const results = await searchDocumentation({
    ...options,
    kind: 'block',
  });

  return results.map((result) => ({
    id: result.id,
    name: result.name,
    description: result.description,
    keywords: result.keywords,
    path: result.path,
    score: result.score,
  }));
}

/**
 * Search examples in the versioned central documentation index.
 */
export async function searchExamples(
  options: ExampleSearchOptions
): Promise<ExampleSearchResult[]> {
  const results = await searchDocumentation({
    ...options,
    kind: 'example',
  });

  return results.map((result) => ({
    id: result.id,
    name: result.name,
    path: result.path,
    score: result.score,
  }));
}
