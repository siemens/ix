import { z } from 'zod';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  BLOCK_NAME_PATTERN,
  formatZodIssues,
  isSafeRelativePath,
} from './validation';

export const defaultRegistry = 'https://siemens.github.io/ix' as const;

// Schema for ix-blocks-lock.json
export const IxBlocksConfigSchema = z.object({
  $schema: z.string().optional(),
  targetFolder: z
    .string()
    .refine(
      isSafeRelativePath,
      'must be a safe path relative to the project root'
    )
    .default('src/blocks'),
  blocks: z
    .array(
      z.object({
        name: z
          .string()
          .regex(BLOCK_NAME_PATTERN, 'must be a valid block name'),
        version: z.string().min(1),
        files: z
          .array(
            z.object({
              path: z
                .string()
                .refine(
                  isSafeRelativePath,
                  'must be a safe path relative to the project root'
                ),
              hash: z
                .string()
                .regex(/^[a-f0-9]{64}$/, 'must be a SHA-256 hash'),
            })
          )
          .optional(),
      })
    )
    .default([]),
});

export type IxBlocksConfig = z.infer<typeof IxBlocksConfigSchema>;

export const CONFIG_FILE_NAME = 'ix-blocks-lock.json';
const LOCK_DIRECTORY_NAME = '.ix-cli.lock';
const LOCK_OWNER_FILE_NAME = 'owner.json';

type ProjectLockOwner = {
  pid: number;
  token: string;
  createdAt: string;
};

async function readProjectLockOwner(
  lockPath: string
): Promise<ProjectLockOwner | null> {
  try {
    const value = JSON.parse(
      await fs.readFile(path.join(lockPath, LOCK_OWNER_FILE_NAME), 'utf8')
    ) as Partial<ProjectLockOwner>;
    if (
      !Number.isInteger(value.pid) ||
      (value.pid ?? 0) <= 0 ||
      typeof value.token !== 'string' ||
      !value.token ||
      typeof value.createdAt !== 'string'
    ) {
      return null;
    }
    return value as ProjectLockOwner;
  } catch (error) {
    if (
      (error as NodeJS.ErrnoException).code === 'ENOENT' ||
      error instanceof SyntaxError
    ) {
      return null;
    }
    throw error;
  }
}

function isProcessRunning(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return (error as NodeJS.ErrnoException).code !== 'ESRCH';
  }
}

async function reclaimStaleProjectLock(lockPath: string): Promise<boolean> {
  const owner = await readProjectLockOwner(lockPath);
  if (owner && isProcessRunning(owner.pid)) {
    return false;
  }

  let observedStat: Awaited<ReturnType<typeof fs.stat>>;
  try {
    observedStat = await fs.stat(lockPath);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return true;
    }
    throw error;
  }
  const ownerIdentity = owner
    ? `${owner.pid}:${owner.token}:${owner.createdAt}`
    : `${observedStat.dev}:${observedStat.ino}:${observedStat.birthtimeMs}`;
  const staleId = crypto
    .createHash('sha256')
    .update(ownerIdentity)
    .digest('hex')
    .slice(0, 16);
  const stalePath = `${lockPath}.reclaimed-${staleId}`;
  try {
    await fs.rename(lockPath, stalePath);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') {
      return true;
    }
    if (code === 'EEXIST' || code === 'ENOTEMPTY') {
      return false;
    }
    throw error;
  }

  const movedOwner = await readProjectLockOwner(stalePath);
  const movedStat = await fs.stat(stalePath);
  if (
    movedOwner?.token !== owner?.token ||
    movedStat.dev !== observedStat.dev ||
    movedStat.ino !== observedStat.ino
  ) {
    try {
      await fs.rename(stalePath, lockPath);
    } catch (restoreError) {
      throw new AggregateError(
        [restoreError],
        `The project lock changed while stale-lock recovery was in progress. Lock data was preserved at ${stalePath}.`
      );
    }
    return false;
  }

  // Keep the deterministic tombstone so a delayed reclaimer that observed the
  // same stale owner can never rename a newer live lock.
  return true;
}

export async function withProjectLock<T>(
  cwd: string,
  action: () => Promise<T>
): Promise<T> {
  const lockPath = path.join(cwd, LOCK_DIRECTORY_NAME);
  const owner: ProjectLockOwner = {
    pid: process.pid,
    token: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  while (true) {
    const candidatePath = await fs.mkdtemp(
      path.join(cwd, `${LOCK_DIRECTORY_NAME}.candidate-`)
    );
    try {
      await fs.writeFile(
        path.join(candidatePath, LOCK_OWNER_FILE_NAME),
        JSON.stringify(owner),
        'utf8'
      );
      await fs.rename(candidatePath, lockPath);
      break;
    } catch (error) {
      await fs.rm(candidatePath, { recursive: true, force: true });
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== 'EEXIST' && code !== 'ENOTEMPTY') {
        throw error;
      }
      if (await reclaimStaleProjectLock(lockPath)) {
        continue;
      }
      throw new Error(
        `Another ix command is already running in this project (${lockPath}).`
      );
    }
  }

  try {
    return await action();
  } finally {
    const currentOwner = await readProjectLockOwner(lockPath);
    if (currentOwner?.token === owner.token) {
      await fs.rm(lockPath, { recursive: true, force: true });
    }
  }
}

function validateConfig(value: unknown): IxBlocksConfig {
  const result = IxBlocksConfigSchema.safeParse(value);
  if (!result.success) {
    throw new Error(
      `Invalid ${CONFIG_FILE_NAME}:\n${formatZodIssues(
        result.error
      )}\nFix the listed fields before running the CLI again.`
    );
  }
  return result.data;
}

/**
 * Load and validate ix-blocks-lock.json from the given directory
 */
export async function loadConfig(cwd: string): Promise<IxBlocksConfig> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);

  try {
    const raw = await fs.readFile(configPath, 'utf8');
    const json = JSON.parse(raw);
    return validateConfig(json);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(
        `Config file not found. Run 'ix init' to create ${CONFIG_FILE_NAME}`
      );
    }
    if (error instanceof SyntaxError) {
      throw new Error(
        `Invalid JSON in ${CONFIG_FILE_NAME}: ${error.message}\nFix the JSON syntax before running 'ix add'.`
      );
    }
    throw error;
  }
}

export async function configExists(cwd: string): Promise<boolean> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);
  try {
    await fs.lstat(configPath);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

export function createDefaultConfig(
  targetFolder: string = 'src/blocks'
): IxBlocksConfig {
  return {
    $schema: './node_modules/@siemens/ix-cli/dist/ix-blocks.schema.json',
    targetFolder,
    blocks: [],
  };
}

export async function saveConfig(
  cwd: string,
  config: IxBlocksConfig
): Promise<void> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);
  const validatedConfig = validateConfig(config);
  const tempPath = path.join(
    cwd,
    `.${CONFIG_FILE_NAME}.${crypto.randomUUID()}.tmp`
  );

  try {
    await fs.writeFile(
      tempPath,
      JSON.stringify(validatedConfig, null, 2) + '\n',
      'utf8'
    );
    await fs.rename(tempPath, configPath);
  } finally {
    await fs.rm(tempPath, { force: true }).catch(() => undefined);
  }
}

export async function initConfig(
  cwd: string,
  targetFolder: string = 'src/blocks'
): Promise<IxBlocksConfig> {
  const config = createDefaultConfig(targetFolder);

  await saveConfig(cwd, config);
  return config;
}

export async function loadConfigOrInit(
  cwd: string,
  dryRun = false
): Promise<{ config: IxBlocksConfig; initialized: boolean }> {
  if (await configExists(cwd)) {
    return { config: await loadConfig(cwd), initialized: false };
  }

  if (dryRun) {
    return { config: createDefaultConfig(), initialized: false };
  }

  return { config: await initConfig(cwd), initialized: true };
}

export async function addBlockToConfig(
  config: IxBlocksConfig,
  blockName: string,
  version: string = '0.0.0',
  files?: { path: string; hash: string }[]
): Promise<IxBlocksConfig> {
  const updatedConfig = structuredClone(config);
  const existingIndex = updatedConfig.blocks.findIndex(
    (b) => b.name === blockName
  );
  if (existingIndex >= 0) {
    updatedConfig.blocks[existingIndex].version = version;
    if (files) {
      updatedConfig.blocks[existingIndex].files = files;
    }
  } else {
    updatedConfig.blocks.push({ name: blockName, version, files });
  }
  return validateConfig(updatedConfig);
}
