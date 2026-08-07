export type RegistryIndex = {
  name: string;
  'dist-tags': Record<string, string>;
  versions: Record<
    string,
    {
      blocks: Array<{ name: string; path: string }>;
      examples: Array<{ name: string; path: string }>;
      components: {
        componentDoc: string;
        componentIndex: string;
        componentSearchIndex: string;
        componentRelatedExamples?: string;
        componentRelatedBlocks?: string;
      };
      llms?: {
        entrypoint: string;
        components: string;
        examples?: string;
        blocks: string;
      };
      searchIndex?: {
        blocks?: {
          html?: string;
          react?: string;
          angular?: string;
          'angular-standalone'?: string;
          vue?: string;
        };
        examples?: {
          html?: string;
          react?: string;
          angular?: string;
          'angular-standalone'?: string;
          vue?: string;
        };
      };
    }
  >;
};

export type ExamplesRegistryIndex = RegistryIndex;

export type BlockDefinition = {
  name: string;
  description?: string;
  keywords?: string[];
  preview?: string;
  variants: {
    react?: BlockVariant;
    angular?: BlockVariant;
    vue?: BlockVariant;
  };
};

export type BlockVariant = {
  files: Array<{ source: string; target: string }>;
  dependencies?: Array<{ name: string; version: string }>;
};

export type ExampleDefinition = {
  name: string;
  variants: {
    html?: ExampleVariant;
    react?: ExampleVariant;
    angular?: ExampleVariant;
    'angular-standalone'?: ExampleVariant;
    vue?: ExampleVariant;
  };
};

export type ExampleVariant = {
  preview?: string;
  files: Array<{ source: string; target: string; type?: string }>;
};

const RegistryIndexSchema = z
  .object({
    name: z.string().min(1),
    'dist-tags': z.record(z.string(), z.string()),
    versions: z.record(
      z.string(),
      z
        .object({
          blocks: z.array(
            z.object({
              name: z
                .string()
                .regex(BLOCK_NAME_PATTERN, 'must be a valid block name'),
              path: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
            })
          ),
        })
        .passthrough()
    ),
  })
  .passthrough();

const BlockDefinitionSchema = z
  .object({
    name: z.string().regex(BLOCK_NAME_PATTERN, 'must be a valid block name'),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    preview: z.string().optional(),
    variants: z.object({
      react: z
        .object({
          files: z.array(
            z.object({
              source: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
              target: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
            })
          ),
          dependencies: z
            .array(z.object({ name: z.string().min(1), version: z.string() }))
            .optional(),
        })
        .optional(),
      angular: z
        .object({
          files: z.array(
            z.object({
              source: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
              target: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
            })
          ),
          dependencies: z
            .array(z.object({ name: z.string().min(1), version: z.string() }))
            .optional(),
        })
        .optional(),
      vue: z
        .object({
          files: z.array(
            z.object({
              source: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
              target: z
                .string()
                .refine(isSafeRelativePath, 'must be a safe relative path'),
            })
          ),
          dependencies: z
            .array(z.object({ name: z.string().min(1), version: z.string() }))
            .optional(),
        })
        .optional(),
    }),
  })
  .passthrough();

function registryRootUrl(baseUrl: string): URL {
  let root: URL;
  try {
    root = new URL(baseUrl);
  } catch {
    throw new Error(`Invalid registry URL '${baseUrl}'.`);
  }

  if (root.protocol !== 'https:' && root.protocol !== 'http:') {
    throw new Error(
      `Invalid registry URL protocol '${root.protocol}'. Use http or https.`
    );
  }

  root.pathname = `${root.pathname.replace(/\/+$/, '')}/`;
  root.search = '';
  root.hash = '';
  return root;
}

function assertUrlInside(root: URL, candidate: URL, label: string): void {
  const rootPath = decodeURIComponent(root.pathname);
  const candidatePath = decodeURIComponent(candidate.pathname);
  if (
    root.origin !== candidate.origin ||
    (candidatePath !== rootPath &&
      !candidatePath.startsWith(
        rootPath.endsWith('/') ? rootPath : `${rootPath}/`
      ))
  ) {
    throw new Error(`${label} resolves outside the allowed registry path.`);
  }
}

export function assertRegistryFetchResponse(
  response: Response,
  requestedUrl: string,
  allowedRootUrl: string
): void {
  if (response.redirected) {
    throw new Error(`Registry request was redirected: ${requestedUrl}`);
  }

  const finalUrl = new URL(response.url || requestedUrl);
  assertUrlInside(new URL(allowedRootUrl), finalUrl, 'Registry response URL');
}

export function resolveRegistryResourceUrl(
  baseUrl: string,
  resourcePath: string
): string {
  assertSafeRelativePath('registry resource path', resourcePath);
  const root = registryRootUrl(baseUrl);
  const resolved = new URL(resourcePath, root);
  assertUrlInside(root, resolved, 'Registry resource path');
  return resolved.href;
}

export function resolveBlockSourceUrl(
  baseUrl: string,
  blockEntryPath: string,
  sourcePath: string
): string {
  const entryUrl = new URL(resolveRegistryResourceUrl(baseUrl, blockEntryPath));
  assertSafeRelativePath('block source path', sourcePath);
  const payloadRoot = new URL('./', entryUrl);
  const sourceUrl = new URL(sourcePath, payloadRoot);
  assertUrlInside(payloadRoot, sourceUrl, 'Block source path');
  return sourceUrl.href;
}

function parseRegistryData<T>(
  schema: z.ZodType<T>,
  value: unknown,
  label: string
): T {
  const result = schema.safeParse(value);
  if (!result.success) {
    throw new Error(
      `Invalid ${label}:\n${formatZodIssues(
        result.error
      )}\nThe registry response is not safe to use.`
    );
  }
  return result.data;
}

async function fetchJson<T>(baseUrl: string, resourcePath: string): Promise<T> {
  const root = registryRootUrl(baseUrl);
  const url = resolveRegistryResourceUrl(baseUrl, resourcePath);
  const res = await fetch(url, { redirect: 'error' });
  assertRegistryFetchResponse(res, url, root.href);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return (await res.json()) as T;
}

type VersionedRegistry = {
  'dist-tags': Record<string, string>;
  versions: Record<string, unknown>;
};

function resolveVersionKey(
  registry: VersionedRegistry,
  candidate?: string
): string | null {
  if (!candidate) {
    return null;
  }

  if (Object.hasOwn(registry.versions, candidate)) {
    return candidate;
  }

  if (
    candidate.startsWith('v') &&
    Object.hasOwn(registry.versions, candidate.slice(1))
  ) {
    return candidate.slice(1);
  }

  const vPrefixedCandidate = `v${candidate}`;
  if (Object.hasOwn(registry.versions, vPrefixedCandidate)) {
    return vPrefixedCandidate;
  }

  return null;
}

function normalizePath(value: string): string {
  return value.replace(/^\.\//, '').replace(/^\/+/, '');
}

function getVersionPrefixFromEntryPath(entryPath: string): string | null {
  const normalizedPath = normalizePath(entryPath);
  const segments = normalizedPath.split('/');

  if (segments.length < 2) {
    return null;
  }

  if (segments[0] === 'examples' || segments[0] === 'blocks') {
    return null;
  }

  if (segments[1] === 'examples' || segments[1] === 'blocks') {
    return segments[0];
  }

  return null;
}

function toVersionScopedPath(
  pathValue: string,
  versionPrefix: string | null
): string {
  const normalizedPath = normalizePath(pathValue);

  if (!versionPrefix) {
    return normalizedPath;
  }

  if (normalizedPath.startsWith(`${versionPrefix}/`)) {
    return normalizedPath;
  }

  return `${versionPrefix}/${normalizedPath}`;
}

function getEntryBaseDir(entryPath: string): string {
  const normalizedPath = normalizePath(entryPath);
  const parts = normalizedPath.split('/');
  if (parts.length <= 1) {
    return '';
  }

  return parts.slice(0, -1).join('/');
}

function removeVersionPrefix(
  pathValue: string,
  versionPrefix: string | null
): string {
  if (!versionPrefix) {
    return pathValue;
  }

  const prefix = `${versionPrefix}/`;
  if (pathValue.startsWith(prefix)) {
    return pathValue.slice(prefix.length);
  }

  return pathValue;
}

function resolveExampleSourcePath(
  exampleEntryPath: string,
  fileSourcePath: string,
  versionPrefix: string | null
): string {
  const entryBaseDir = getEntryBaseDir(exampleEntryPath);
  const sourcePath = normalizePath(fileSourcePath);

  if (!entryBaseDir) {
    return toVersionScopedPath(sourcePath, versionPrefix);
  }

  if (sourcePath.startsWith(`${entryBaseDir}/`)) {
    return sourcePath;
  }

  const entryBaseDirWithoutVersion = removeVersionPrefix(
    entryBaseDir,
    versionPrefix
  );

  if (
    entryBaseDirWithoutVersion &&
    sourcePath.startsWith(`${entryBaseDirWithoutVersion}/`)
  ) {
    return toVersionScopedPath(sourcePath, versionPrefix);
  }

  return `${entryBaseDir}/${sourcePath}`;
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

export function resolveRegistryVersion(
  registry: VersionedRegistry,
  versionRef?: string
): string {
  const latest = registry['dist-tags']?.latest;

  if (!versionRef || versionRef === 'latest') {
    const resolvedLatest = resolveVersionKey(registry, latest);

    if (!resolvedLatest) {
      throw new Error('Registry latest version is missing or invalid');
    }

    return resolvedLatest;
  }

  const resolvedDirect = resolveVersionKey(registry, versionRef);
  if (resolvedDirect) {
    return resolvedDirect;
  }

  const resolvedFromTag = registry['dist-tags']?.[versionRef];
  const resolvedFromTagVersion = resolveVersionKey(registry, resolvedFromTag);
  if (resolvedFromTagVersion) {
    return resolvedFromTagVersion;
  }

  const availableVersions = Object.keys(registry.versions).sort().join(', ');
  const availableTags = Object.keys(registry['dist-tags'] || {})
    .sort()
    .join(', ');

  throw new Error(
    `Unknown registry version/tag '${versionRef}'. Available versions: [${availableVersions}] | tags: [${availableTags}]`
  );
}

export function resolveBlocksSearchIndexPath(
  registry: RegistryIndex,
  framework: 'react' | 'angular' | 'vue',
  versionRef?: string
): string {
  const version = resolveRegistryVersion(registry, versionRef);
  const sourceIndex = registry.versions[version]?.searchIndex?.blocks;

  const frameworkIndexPath = sourceIndex?.[framework];
  if (!frameworkIndexPath) {
    throw new Error(`No search index available for framework: ${framework}`);
  }

  return withVersionPrefix(
    frameworkIndexPath,
    version,
    Object.keys(registry.versions)
  );
}

export function resolveExamplesSearchIndexPath(
  registry: ExamplesRegistryIndex,
  framework: 'html' | 'react' | 'angular' | 'angular-standalone' | 'vue',
  versionRef?: string
): string {
  const version = resolveRegistryVersion(registry, versionRef);
  const sourceIndex = registry.versions[version]?.searchIndex?.examples;

  const frameworkIndexPath = sourceIndex?.[framework];
  if (!frameworkIndexPath) {
    throw new Error(
      `No search index available for framework: ${framework} in examples registry`
    );
  }

  return withVersionPrefix(
    frameworkIndexPath,
    version,
    Object.keys(registry.versions)
  );
}

export async function fetchRegistryIndex(
  baseUrl: string
): Promise<RegistryIndex> {
  return await fetchJson<RegistryIndex>(baseUrl, 'registry.json');
}

export async function fetchValidatedRegistryIndex(
  baseUrl: string
): Promise<RegistryIndex> {
  const value = await fetchJson<unknown>(baseUrl, 'registry.json');
  return parseRegistryData(
    RegistryIndexSchema,
    value,
    'registry index'
  ) as RegistryIndex;
}

export async function fetchBlockDefinition(
  baseUrl: string,
  blockPath: string
): Promise<BlockDefinition> {
  return await fetchJson<BlockDefinition>(baseUrl, blockPath);
}

export async function fetchValidatedBlockDefinition(
  baseUrl: string,
  blockPath: string
): Promise<BlockDefinition> {
  const value = await fetchJson<unknown>(baseUrl, blockPath);
  return parseRegistryData(
    BlockDefinitionSchema,
    value,
    `block definition '${blockPath}'`
  ) as BlockDefinition;
}

export async function listAllBlocks(
  baseUrl: string,
  framework: 'react' | 'angular' | 'vue',
  versionRef?: string
): Promise<Array<{ name: string; path: string }>> {
  const registry = await fetchRegistryIndex(baseUrl);
  const selectedVersion = resolveRegistryVersion(registry, versionRef);
  const versionBlocks = registry.versions[selectedVersion]?.blocks || [];

  // Filter blocks that support the requested framework
  const filteredBlocks: Array<{ name: string; path: string }> = [];

  for (const block of versionBlocks) {
    try {
      const blockDef = await fetchBlockDefinition(baseUrl, block.path);
      // Check if this block has a variant for the requested framework
      if (blockDef.variants[framework]) {
        filteredBlocks.push(block);
      }
    } catch (err) {
      // Skip blocks that fail to load
      console.error(`Failed to load block ${block.name}:`, err);
    }
  }

  return filteredBlocks;
}

export async function fetchExamplesRegistryIndex(
  baseUrl: string
): Promise<ExamplesRegistryIndex> {
  return await fetchJson<ExamplesRegistryIndex>(baseUrl, 'registry.json');
}

export async function fetchExampleDefinition(
  baseUrl: string,
  examplePath: string
): Promise<ExampleDefinition> {
  return await fetchJson<ExampleDefinition>(baseUrl, examplePath);
}

export interface ExampleCodeFile {
  path: string;
  content: string;
}

export interface ExampleCode {
  name: string;
  framework: string;
  files: ExampleCodeFile[];
}

export async function getExampleCode(
  baseUrl: string,
  examplePath: string,
  framework: 'html' | 'react' | 'angular' | 'angular-standalone' | 'vue'
): Promise<ExampleCode> {
  const exampleDef = await fetchExampleDefinition(baseUrl, examplePath);
  const variant = exampleDef.variants[framework];
  const versionPrefix = getVersionPrefixFromEntryPath(examplePath);

  if (!variant) {
    throw new Error(
      `Example "${exampleDef.name}" does not have a ${framework} variant`
    );
  }

  const files: ExampleCodeFile[] = [];
  for (const file of variant.files) {
    try {
      const sourcePath = resolveExampleSourcePath(
        examplePath,
        file.source,
        versionPrefix
      );
      const sourceUrl = `${baseUrl}/${sourcePath}`;
      const response = await fetch(sourceUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${sourcePath}: ${response.status}`);
      }
      const content = await response.text();
      files.push({
        path: file.target,
        content,
      });
    } catch (err) {
      console.error(`Failed to fetch file ${file.source}:`, err);
      // Include error info in the file
      files.push({
        path: file.target,
        content: `// Error loading file: ${
          err instanceof Error ? err.message : String(err)
        }`,
      });
    }
  }

  return {
    name: exampleDef.name,
    framework,
    files,
  };
}
import { z } from 'zod';
import {
  BLOCK_NAME_PATTERN,
  assertSafeRelativePath,
  formatZodIssues,
  isSafeRelativePath,
} from './validation';
