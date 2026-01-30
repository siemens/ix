import { z } from 'zod';
import fs from 'node:fs/promises';
import path from 'node:path';

// Schema for ix-blocks.json
export const IxBlocksConfigSchema = z.object({
  $schema: z.string().optional(),
  targetFolder: z.string().default('src/blocks'),
  blocks: z
    .array(
      z.object({
        name: z.string(),
        version: z.string(),
      }),
    )
    .default([]),
});

export type IxBlocksConfig = z.infer<typeof IxBlocksConfigSchema>;

export const CONFIG_FILE_NAME = 'ix-blocks.json';

/**
 * Load and validate ix-blocks.json from the given directory
 */
export async function loadConfig(cwd: string): Promise<IxBlocksConfig> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);

  try {
    const raw = await fs.readFile(configPath, 'utf8');
    const json = JSON.parse(raw);
    return IxBlocksConfigSchema.parse(json);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(
        `Config file not found. Run 'ix init' to create ${CONFIG_FILE_NAME}`,
      );
    }
    if (error instanceof z.ZodError) {
      throw new Error(
        `Invalid ${CONFIG_FILE_NAME}: ${error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')}`,
      );
    }
    throw error;
  }
}

export async function configExists(cwd: string): Promise<boolean> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);
  try {
    await fs.access(configPath);
    return true;
  } catch {
    return false;
  }
}

export async function saveConfig(
  cwd: string,
  config: IxBlocksConfig,
): Promise<void> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);
  await fs.writeFile(
    configPath,
    JSON.stringify(config, null, 2) + '\n',
    'utf8',
  );
}

export async function initConfig(
  cwd: string,
  targetFolder: string = 'src/blocks',
): Promise<IxBlocksConfig> {
  const config: IxBlocksConfig = {
    $schema: './node_modules/@siemens/ix-cli/dist/ix-blocks.schema.json',
    targetFolder,
    blocks: [],
  };

  await saveConfig(cwd, config);
  return config;
}

export async function addBlockToConfig(
  cwd: string,
  blockName: string,
  version: string = '0.0.0',
): Promise<void> {
  const config = await loadConfig(cwd);

  const existingIndex = config.blocks.findIndex((b) => b.name === blockName);
  if (existingIndex >= 0) {
    config.blocks[existingIndex].version = version;
  } else {
    config.blocks.push({ name: blockName, version });
  }

  await saveConfig(cwd, config);
}
