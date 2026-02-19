export type RegistryIndex = {
  name: string;
  searchIndex?: {
    html?: string;
    react?: string;
    angular?: string;
    'angular-standalone'?: string;
    vue?: string;
  };
  'dist-tags': Record<string, string>;
  versions: Record<
    string,
    {
      blocks: Array<{ name: string; path: string }>;
      searchIndex?: {
        html?: string;
        react?: string;
        angular?: string;
        'angular-standalone'?: string;
        vue?: string;
      };
    }
  >;
};

export type ExamplesRegistryIndex = {
  name: string;
  searchIndex?: {
    html?: string;
    react?: string;
    angular?: string;
    'angular-standalone'?: string;
    vue?: string;
  };
  'dist-tags': Record<string, string>;
  versions: Record<
    string,
    {
      examples: Array<{ name: string; path: string }>;
      searchIndex?: {
        html?: string;
        react?: string;
        angular?: string;
        'angular-standalone'?: string;
        vue?: string;
      };
    }
  >;
};

export type BlockDefinition = {
  name: string;
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
  dependencies: Array<{ name: string; version: string }>;
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
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

  if (registry.versions[candidate]) {
    return candidate;
  }

  if (candidate.startsWith('v') && registry.versions[candidate.slice(1)]) {
    return candidate.slice(1);
  }

  const vPrefixedCandidate = `v${candidate}`;
  if (registry.versions[vPrefixedCandidate]) {
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

function toVersionScopedPath(pathValue: string, versionPrefix: string | null): string {
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
  const sourceIndex =
    registry.versions[version]?.searchIndex ?? registry.searchIndex;

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
  const sourceIndex =
    registry.versions[version]?.searchIndex ?? registry.searchIndex;

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
  return await fetchJson<RegistryIndex>(`${baseUrl}/registry.json`);
}

export async function fetchBlockDefinition(
  baseUrl: string,
  blockPath: string
): Promise<BlockDefinition> {
  // blockPath like "blocks/hero/block.json"
  return await fetchJson<BlockDefinition>(`${baseUrl}/${blockPath}`);
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
  return await fetchJson<ExamplesRegistryIndex>(
    `${baseUrl}/examples-registry.json`
  );
}

export async function fetchExampleDefinition(
  baseUrl: string,
  examplePath: string
): Promise<ExampleDefinition> {
  // examplePath like "examples/button.json"
  return await fetchJson<ExampleDefinition>(`${baseUrl}/${examplePath}`);
}

export interface ExampleCodeFile {
  path: string;
  content: string;
}

export interface ExampleCode {
  name: string;
  framework: string;
  files: ExampleCodeFile[];
  dependencies: Array<{ name: string; version: string }>;
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

  // Fetch source code for each file
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
        content: `// Error loading file: ${err instanceof Error ? err.message : String(err)}`,
      });
    }
  }

  return {
    name: exampleDef.name,
    framework,
    files,
    dependencies: variant.dependencies,
  };
}
