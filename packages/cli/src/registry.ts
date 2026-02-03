export type RegistryIndex = {
  name: string;
  searchIndex?: string;
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
