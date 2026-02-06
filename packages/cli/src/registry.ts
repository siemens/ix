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

  if (!variant) {
    throw new Error(
      `Example "${exampleDef.name}" does not have a ${framework} variant`
    );
  }

  // Fetch source code for each file
  const files: ExampleCodeFile[] = [];
  for (const file of variant.files) {
    try {
      const sourceUrl = `${baseUrl}/${file.source}`;
      const response = await fetch(sourceUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${file.source}: ${response.status}`);
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
