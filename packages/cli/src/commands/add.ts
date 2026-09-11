/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import { Command } from 'commander';
import {
  configExists,
  CONFIG_FILE_NAME,
  loadConfig,
  defaultRegistry,
  withProjectLock,
} from '../config';
import { detectFramework } from '../detect';
import {
  applyInstallPlan,
  assertConflictsAllowed,
  prepareBlockInstall,
  reportInstallPlan,
} from '../installer';
import {
  fetchValidatedRegistryIndex,
  fetchValidatedBlockDefinition,
  resolveRegistryVersion,
} from '../registry';
import { assertValidBlockName } from '../validation';

type AddOptions = {
  registry: string;
  tag: string;
  framework: string;
  dryRun: boolean;
  force: boolean;
  tokens: string;
};

async function runAddUnlocked(
  blockNameInput: string,
  opts: AddOptions,
  cwd = process.cwd()
): Promise<void> {
  const blockName = assertValidBlockName(blockNameInput);

  if (!(await configExists(cwd))) {
    throw new Error(
      `${CONFIG_FILE_NAME} not found. Run 'ix init' first to create it.`
    );
  }

  const config = await loadConfig(cwd);
  const index = await fetchValidatedRegistryIndex(opts.registry);
  const selectedVersion = resolveRegistryVersion(index, opts.tag);
  const selected = index.versions[selectedVersion];
  const entry = selected.blocks.find((block) => block.name === blockName);
  if (!entry) {
    throw new Error(
      `Block '${blockName}' not found in registry '${index.name}' for version '${selectedVersion}'.`
    );
  }

  const blockDef = await fetchValidatedBlockDefinition(
    opts.registry,
    entry.path
  );
  const framework =
    opts.framework === 'auto' ? await detectFramework(cwd) : opts.framework;
  if (framework !== 'react' && framework !== 'angular') {
    throw new Error(
      `Unknown framework '${framework}'. Use react, angular, or auto.`
    );
  }

  let tokens: unknown;
  try {
    tokens = JSON.parse(opts.tokens);
  } catch (error) {
    throw new Error(`--tokens must be valid JSON: ${(error as Error).message}`);
  }
  if (
    !tokens ||
    Array.isArray(tokens) ||
    typeof tokens !== 'object' ||
    Object.values(tokens).some((value) => typeof value !== 'string')
  ) {
    throw new Error('--tokens must be a JSON object with string values.');
  }

  const previousFiles = config.blocks.find(
    (block) => block.name === blockName
  )?.files;
  const plan = await prepareBlockInstall({
    cwd,
    baseUrl: opts.registry,
    blockEntryPath: entry.path,
    blockDef,
    expectedBlockName: blockName,
    framework,
    tokens: tokens as Record<string, string>,
    targetFolder: config.targetFolder,
    previousFiles,
    force: opts.force,
  });
  reportInstallPlan(plan, opts.dryRun);

  if (opts.dryRun) {
    assertConflictsAllowed(plan);
    console.log(`Dry run complete for '${blockName}' (${framework}).`);
    return;
  }

  await applyInstallPlan(plan, config, selectedVersion);
  console.log(`✅ Installed '${blockName}' (${framework})`);
}

export async function runAdd(
  blockNameInput: string,
  opts: AddOptions,
  cwd = process.cwd()
): Promise<void> {
  return withProjectLock(cwd, () => runAddUnlocked(blockNameInput, opts, cwd));
}

export const addCommand = new Command('add')
  .description('Install or update a block from an IX registry')
  .argument('<blockName>', 'Block name (e.g. hero)')
  .option('-r, --registry <url>', 'Registry base URL', defaultRegistry)
  .option(
    '-t, --tag <tag>',
    'Registry tag/version (e.g. latest, main, v4.3.0)',
    'latest'
  )
  .option('-f, --framework <fw>', 'react|angular|auto', 'auto')
  .option('--dry-run', 'Print what would be done, without writing files', false)
  .option('--force', 'Overwrite modified or untracked conflicting files', false)
  .option(
    '--tokens <json>',
    'JSON map for token replacement (e.g. {"__IX_PREFIX__":"Ix"})',
    '{}'
  )
  .action(async (blockName: string, opts: AddOptions) => {
    try {
      await runAdd(blockName, opts);
    } catch (error) {
      console.error(`❌ ${(error as Error).message}`);
      process.exitCode = 1;
    }
  });
