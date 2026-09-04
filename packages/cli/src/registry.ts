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
        componentRelatedExamples?: string;
        componentRelatedBlocks?: string;
        componentIndex?: string;
        componentSearchIndex?: string;
      };
      documentationSearchIndex?: string;
      searchIndex?: Record<
        string,
        Record<string, string | undefined> | undefined
      >;
      llms?: {
        entrypoint: string;
        components: string;
        examples?: string;
        blocks: string;
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
  files: Array<{ path: string }>;
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
  files: Array<{ path: string }>;
};

const registryBlocksSchema = z.array(
  z.object({
    name: z.string().regex(BLOCK_NAME_PATTERN, 'must be a valid block name'),
    path: z.string().refine(isSafeRelativePath, 'must be a safe relative path'),
  })
);

const registryExamplesSchema = z.array(
  z.object({
    name: z.string().min(1),
    path: z.string().refine(isSafeRelativePath, 'must be a safe relative path'),
  })
);

const registryLlmsSchema = z
  .object({
    entrypoint: z
      .string()
      .refine(isSafeRelativePath, 'must be a safe relative path'),
    components: z
      .string()
      .refine(isSafeRelativePath, 'must be a safe relative path'),
    examples: z
      .string()
      .refine(isSafeRelativePath, 'must be a safe relative path')
      .optional(),
    blocks: z
      .string()
      .refine(isSafeRelativePath, 'must be a safe relative path')
      .optional(),
  })
  .strict()
  .optional();

const currentRegistryVersionSchema = z
  .object({
    blocks: registryBlocksSchema,
    examples: registryExamplesSchema,
    components: z
      .object({
        componentDoc: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path'),
        componentRelatedExamples: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path')
          .optional(),
        componentRelatedBlocks: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path')
          .optional(),
      })
      .strict(),
    documentationSearchIndex: z
      .string()
      .refine(isSafeRelativePath, 'must be a safe relative path'),
    llms: registryLlmsSchema,
  })
  .strict();

const legacyRegistryVersionSchema = z
  .object({
    blocks: registryBlocksSchema,
    examples: registryExamplesSchema,
    components: z
      .object({
        componentDoc: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path'),
        componentIndex: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path'),
        componentSearchIndex: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path'),
        componentRelatedExamples: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path'),
        componentRelatedBlocks: z
          .string()
          .refine(isSafeRelativePath, 'must be a safe relative path')
          .optional(),
      })
      .strict(),
    searchIndex: z
      .object({
        blocks: z.record(
          z.string(),
          z.string().refine(isSafeRelativePath, 'must be a safe relative path')
        ),
        examples: z.record(
          z.string(),
          z.string().refine(isSafeRelativePath, 'must be a safe relative path')
        ),
      })
      .strict(),
    llms: registryLlmsSchema,
  })
  .strict();

const RegistryIndexSchema = z
  .object({
    name: z.string().min(1),
    'dist-tags': z.record(z.string(), z.string()),
    versions: z.record(
      z.string(),
      z.union([currentRegistryVersionSchema, legacyRegistryVersionSchema])
    ),
  })
  .passthrough();

const BlockDefinitionSchema = z
  .object({
    name: z.string().regex(BLOCK_NAME_PATTERN, 'must be a valid block name'),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    preview: z.string().optional(),
    variants: z
      .object({
        react: z
          .object({
            files: z.array(
              z
                .object({
                  path: z
                    .string()
                    .refine(isSafeRelativePath, 'must be a safe relative path'),
                })
                .strict()
            ),
            dependencies: z
              .array(z.object({ name: z.string().min(1), version: z.string() }))
              .optional(),
          })
          .strict()
          .optional(),
        angular: z
          .object({
            files: z.array(
              z
                .object({
                  path: z
                    .string()
                    .refine(isSafeRelativePath, 'must be a safe relative path'),
                })
                .strict()
            ),
            dependencies: z
              .array(z.object({ name: z.string().min(1), version: z.string() }))
              .optional(),
          })
          .strict()
          .optional(),
        vue: z
          .object({
            files: z.array(
              z
                .object({
                  path: z
                    .string()
                    .refine(isSafeRelativePath, 'must be a safe relative path'),
                })
                .strict()
            ),
            dependencies: z
              .array(z.object({ name: z.string().min(1), version: z.string() }))
              .optional(),
          })
          .strict()
          .optional(),
      })
      .strict(),
  })
  .passthrough()
  .superRefine((value, context) => {
    const paths = new Set<string>();
    for (const [framework, variant] of Object.entries(value.variants)) {
      for (const file of variant?.files ?? []) {
        if (!file.path.startsWith(`${framework}/`)) {
          context.addIssue({
            code: 'custom',
            path: ['variants', framework, 'files'],
            message: `file path '${file.path}' must be prefixed with framework '${framework}'`,
          });
        }
        if (paths.has(file.path)) {
          context.addIssue({
            code: 'custom',
            path: ['variants'],
            message: `duplicate public file path '${file.path}'`,
          });
        }
        paths.add(file.path);
      }
    }
  });

const ExampleFileSchema = z
  .object({
    path: z.string().refine(isSafeRelativePath, 'must be a safe relative path'),
  })
  .strict();

const ExampleVariantSchema = z
  .object({
    preview: z.string().optional(),
    files: z.array(ExampleFileSchema),
  })
  .strict();

const ExampleDefinitionSchema = z
  .object({
    $schema: z.string().optional(),
    name: z.string().min(1),
    variants: z
      .object({
        html: ExampleVariantSchema.optional(),
        react: ExampleVariantSchema.optional(),
        angular: ExampleVariantSchema.optional(),
        'angular-standalone': ExampleVariantSchema.optional(),
        vue: ExampleVariantSchema.optional(),
      })
      .strict(),
  })
  .strict()
  .superRefine((value, context) => {
    const paths = new Set<string>();
    for (const [framework, variant] of Object.entries(value.variants)) {
      for (const file of variant?.files ?? []) {
        if (!file.path.startsWith(`${framework}/`)) {
          context.addIssue({
            code: 'custom',
            path: ['variants', framework, 'files'],
            message: `file path '${file.path}' must be prefixed with framework '${framework}'`,
          });
        }
        if (paths.has(file.path)) {
          context.addIssue({
            code: 'custom',
            path: ['variants'],
            message: `duplicate public file path '${file.path}'`,
          });
        }
        paths.add(file.path);
      }
    }
  });

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

export function resolveManifestFileUrl(
  baseUrl: string,
  manifestPath: string,
  filePath: string
): string {
  const manifestUrl = new URL(
    resolveRegistryResourceUrl(baseUrl, manifestPath)
  );
  assertSafeRelativePath('manifest file path', filePath);
  const manifestDirectory = new URL('./', manifestUrl);
  const fileUrl = new URL(filePath, manifestDirectory);
  assertUrlInside(manifestDirectory, fileUrl, 'Manifest file path');
  return fileUrl.href;
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

async function fetchManifestFile(
  baseUrl: string,
  manifestPath: string,
  filePath: string
): Promise<string> {
  const url = resolveManifestFileUrl(baseUrl, manifestPath, filePath);
  const root = registryRootUrl(baseUrl);
  const response = await fetch(url, { redirect: 'error' });
  assertRegistryFetchResponse(response, url, root.href);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
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

export async function fetchRegistryIndex(
  baseUrl: string
): Promise<RegistryIndex> {
  return await fetchJson<RegistryIndex>(baseUrl, 'registry.json');
}

export async function fetchRegistryArtifact<T>(
  baseUrl: string,
  resourcePath: string
): Promise<T> {
  return await fetchJson<T>(baseUrl, resourcePath);
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
  const value = await fetchJson<unknown>(baseUrl, blockPath);
  return parseRegistryData(
    BlockDefinitionSchema,
    value,
    `block definition '${blockPath}'`
  ) as BlockDefinition;
}

export async function fetchValidatedBlockDefinition(
  baseUrl: string,
  blockPath: string
): Promise<BlockDefinition> {
  return fetchBlockDefinition(baseUrl, blockPath);
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
  const value = await fetchJson<unknown>(baseUrl, examplePath);
  return parseRegistryData(
    ExampleDefinitionSchema,
    value,
    `example definition '${examplePath}'`
  ) as ExampleDefinition;
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

  if (!variant) {
    throw new Error(
      `Example "${exampleDef.name}" does not have a ${framework} variant`
    );
  }

  const files: ExampleCodeFile[] = [];
  for (const file of variant.files) {
    try {
      const content = await fetchManifestFile(baseUrl, examplePath, file.path);
      files.push({
        path: file.path,
        content,
      });
    } catch (err) {
      console.error(`Failed to fetch file ${file.path}:`, err);
      // Include error info in the file
      files.push({
        path: file.path,
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
