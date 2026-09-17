/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import { Command } from 'commander';
import {
  CONFIG_FILE_NAME,
  defaultRegistry,
  loadConfigOrInit,
  withProjectLock,
} from '../config';
import { detectFramework } from '../detect';
import {
  applyInstallPlan,
  assertConflictsAllowed,
  preparePatternInstall,
  reportInstallPlan,
} from '../installer';
import {
  fetchValidatedRegistryIndex,
  fetchValidatedPatternDefinition,
  resolveRegistryVersion,
} from '../registry';
import { assertValidPatternName } from '../validation';

type AddOptions = {
  registry: string;
  tag: string;
  framework: string;
  dryRun: boolean;
  force: boolean;
  tokens: string;
};

async function runAddUnlocked(
  patternNameInput: string,
  opts: AddOptions,
  cwd = process.cwd()
): Promise<void> {
  const patternName = assertValidPatternName(patternNameInput);

  const { config, initialized } = await loadConfigOrInit(cwd, opts.dryRun);
  if (initialized) {
    console.log(`✅ Initialized ${CONFIG_FILE_NAME}`);
  }

  const index = await fetchValidatedRegistryIndex(opts.registry);
  const selectedVersion = resolveRegistryVersion(index, opts.tag);
  const selected = index.versions[selectedVersion];
  const entry = selected.patterns.find(
    (pattern) => pattern.name === patternName
  );
  if (!entry) {
    throw new Error(
      `Pattern '${patternName}' not found in registry '${index.name}' for version '${selectedVersion}'.`
    );
  }

  const patternDef = await fetchValidatedPatternDefinition(
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

  const previousFiles = config.patterns.find(
    (pattern) => pattern.name === patternName
  )?.files;
  const plan = await preparePatternInstall({
    cwd,
    baseUrl: opts.registry,
    patternEntryPath: entry.path,
    patternDef,
    expectedPatternName: patternName,
    framework,
    tokens: tokens as Record<string, string>,
    targetFolder: config.targetFolder,
    previousFiles,
    force: opts.force,
  });
  reportInstallPlan(plan, opts.dryRun);

  if (opts.dryRun) {
    assertConflictsAllowed(plan);
    console.log(`Dry run complete for '${patternName}' (${framework}).`);
    return;
  }

  await applyInstallPlan(plan, config, selectedVersion);
  console.log(`✅ Installed '${patternName}' (${framework})`);
}

export async function runAdd(
  patternNameInput: string,
  opts: AddOptions,
  cwd = process.cwd()
): Promise<void> {
  return withProjectLock(cwd, () =>
    runAddUnlocked(patternNameInput, opts, cwd)
  );
}

export const addCommand = new Command('add')
  .description('Install or update a pattern from an IX registry')
  .argument('<patternName>', 'Pattern name (e.g. hero)')
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
  .action(async (patternName: string, opts: AddOptions) => {
    try {
      await runAdd(patternName, opts);
    } catch (error) {
      console.error(`❌ ${(error as Error).message}`);
      process.exitCode = 1;
    }
  });
