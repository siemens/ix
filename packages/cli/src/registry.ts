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

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return (await res.json()) as T;
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
  framework: 'react' | 'angular' | 'vue'
): Promise<Array<{ name: string; path: string }>> {
  const registry = await fetchRegistryIndex(baseUrl);
  const latestVersion = registry['dist-tags'].latest;
  const versionBlocks = registry.versions[latestVersion]?.blocks || [];

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
